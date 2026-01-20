import { NextResponse } from 'next/server'
import { addNewsletterSubscriber } from '@/lib/db'
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

    // Ajouter à PostgreSQL
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
      }
    } catch (emailErr) {
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
    const dbError = error as { code?: string; message?: string; details?: string }

    if (dbError.message?.includes('connect') ||
        dbError.message?.includes('ECONNREFUSED') ||
        dbError.message?.includes('timeout')) {
      return NextResponse.json(
        { 
          error: 'Service temporairement indisponible. Impossible de se connecter à la base de données.',
          details: process.env.NODE_ENV === 'development' 
            ? 'Assurez-vous que Docker est démarré avec: docker-compose up -d' 
            : undefined
        },
        { status: 503 }
      )
    }

    // Gestion erreur email déjà existant (code PostgreSQL 23505 = violation contrainte unique)
    if (dbError.code === '23505') {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit' },
        { status: 409 }
      )
    }

    // Temporairement afficher les détails pour déboguer
    const errorMessage = error instanceof Error ? error.message : String(error)
    const hasDbUrl = !!process.env.DATABASE_URL || !!process.env.POSTGRES_URL

    return NextResponse.json(
      {
        error: 'Erreur lors de l\'inscription',
        details: errorMessage,
        debug: {
          hasDbUrl,
          nodeEnv: process.env.NODE_ENV
        }
      },
      { status: 500 }
    )
  }
}
