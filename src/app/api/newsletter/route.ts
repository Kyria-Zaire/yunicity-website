import { NextResponse } from 'next/server'
import { addNewsletterSubscriber } from '@/lib/supabase'
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, interests } = body

    // Validation basique
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email et nom sont requis' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Ajouter à Supabase
    const subscriber = await addNewsletterSubscriber({
      email,
      name,
      interests: interests || []
    })

    // Envoyer email de bienvenue
    await sendWelcomeEmail(email, name)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription réussie !',
        subscriber 
      },
      { status: 201 }
    )

  } catch (error: any) {
    console.error('Erreur inscription newsletter:', error)
    
    // Gestion erreur email déjà existant
    if (error.code === '23505') {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription' },
      { status: 500 }
    )
  }
}
