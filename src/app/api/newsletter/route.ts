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

    // Envoyer email de bienvenue (ne bloque pas l'inscription si échec)
    let emailSent = false
    let emailError = null
    try {
      const emailResult = await sendWelcomeEmail(email, name)
      emailSent = emailResult.success
      if (!emailResult.success) {
        emailError = emailResult.error
        console.error('Erreur envoi email:', emailResult.error)
      }
    } catch (emailErr) {
      console.error('Exception lors de l\'envoi email:', emailErr)
      emailError = emailErr
      // On continue quand même, l'inscription est réussie
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription réussie !',
        subscriber,
        emailSent,
        ...(process.env.NODE_ENV === 'development' && emailError ? { emailError: String(emailError) } : {})
      },
      { status: 201 }
    )

  } catch (error: unknown) {
    console.error('Erreur inscription newsletter:', error)

    // Gestion erreur email déjà existant
    const dbError = error as { code?: string; message?: string }
    if (dbError.code === '23505') {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit' },
        { status: 409 }
      )
    }

    // Gestion erreur RLS (si les politiques ne sont pas correctes)
    if (dbError.message?.includes('permission denied') || dbError.message?.includes('RLS')) {
      console.error('Erreur RLS - Vérifiez les politiques dans Supabase')
      return NextResponse.json(
        { error: 'Erreur de configuration. Veuillez réessayer plus tard.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription', details: process.env.NODE_ENV === 'development' ? String(error) : undefined },
      { status: 500 }
    )
  }
}
