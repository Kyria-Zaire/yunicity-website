import { NextResponse } from 'next/server'
import { addContactMessage } from '@/lib/db'
import { sendContactNotification } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, subject, message, type } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
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
    const contactMessage = await addContactMessage({
      name,
      email,
      company,
      phone,
      subject,
      message,
      type: type || 'general'
    })

    // Envoyer notification email à l'équipe
    await sendContactNotification({
      ...contactMessage,
      investmentRange: body.investmentRange // Pour la page investir
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès !',
        id: contactMessage.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Erreur envoi contact:', error)
    
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
