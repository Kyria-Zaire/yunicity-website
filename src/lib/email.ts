import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Envoie un email de bienvenue aux nouveaux inscrits newsletter
 */
export async function sendWelcomeEmail(to: string, name: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'YUNICITY <onboarding@resend.dev>', // Changez après vérification domaine
      to: [to],
      subject: '🌆 Bienvenue dans la révolution Smart City - Yunicity',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          
          <!-- Header avec logo -->
          <div style="text-align: center; margin-bottom: 40px;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); border-radius: 20px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <span style="color: white; font-size: 36px; font-weight: bold;">Y</span>
            </div>
            <h1 style="color: #8B5CF6; font-size: 32px; margin: 0;">Bienvenue ${name} ! 🌆</h1>
            <p style="color: #6b7280; font-size: 16px; margin-top: 10px;">Vous rejoignez la révolution Smart City</p>
          </div>

          <!-- Message Principal Smart City -->
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 16px; padding: 30px; margin-bottom: 30px; color: white;">
            <h2 style="color: white; font-size: 24px; margin: 0 0 15px 0; text-align: center;">
              🏙️ Yunicity = L'outil Smart City de demain
            </h2>
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.7; margin: 0 0 20px 0;">
              <strong>Yunicity n'est pas juste une app.</strong> C'est la <strong>plateforme Smart City</strong> qui transforme la façon dont les habitants vivent, découvrent et s'engagent dans leur ville.
            </p>
            <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6; margin: 0;">
              Vous faites partie des <strong style="color: #8B5CF6;">pionniers</strong> qui façonnent l'avenir des villes intelligentes en France.
            </p>
          </div>

          <!-- Vision Smart City -->
          <div style="background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="color: #1f2937; font-size: 20px; margin: 0 0 20px 0; text-align: center;">
              🚀 Notre Vision Smart City
            </h3>
            <p style="color: #1f2937; font-size: 16px; line-height: 1.7; margin: 0 0 15px 0;">
              <strong>Yunicity connecte tous les acteurs de la ville :</strong>
            </p>
            <ul style="color: #4b5563; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li>🏛️ <strong>Collectivités</strong> : Outil de communication et d'engagement citoyen</li>
              <li>🏪 <strong>Commerces locaux</strong> : Visibilité et fidélisation client</li>
              <li>👥 <strong>Habitants</strong> : Accès à toute l'information locale en un clic</li>
              <li>🎯 <strong>Associations</strong> : Plateforme pour mobiliser et fédérer</li>
            </ul>
          </div>

          <!-- Pack Fondateur Smart City -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; font-size: 22px; margin-bottom: 20px; text-align: center;">
              🎁 Votre Statut de Pionnier Smart City
            </h2>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="background: white; border-left: 4px solid #10b981; padding: 15px; margin-bottom: 12px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <strong style="color: #10b981;">✓</strong> <strong>Accès Beta Smart City</strong> - Testez l'outil 30 jours avant tout le monde
              </li>
              <li style="background: white; border-left: 4px solid #8B5CF6; padding: 15px; margin-bottom: 12px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <strong style="color: #8B5CF6;">✓</strong> <strong>Premium à vie</strong> - Accès illimité à toutes les fonctionnalités Smart City (valeur 149€/an)
              </li>
              <li style="background: white; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 12px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <strong style="color: #f59e0b;">✓</strong> <strong>Badge "Pionnier Smart City"</strong> - Reconnaissance exclusive dans l'app
              </li>
              <li style="background: white; border-left: 4px solid #3b82f6; padding: 15px; margin-bottom: 12px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <strong style="color: #3b82f6;">✓</strong> <strong>Influence sur la roadmap</strong> - Vos idées façonnent l'avenir de la Smart City
              </li>
            </ul>
          </div>

          <!-- Impact Smart City -->
          <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-radius: 16px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #10b981;">
            <h3 style="color: #065f46; font-size: 18px; margin: 0 0 15px 0;">
              💡 Pourquoi Yunicity est l'outil Smart City de demain
            </h3>
            <p style="color: #047857; font-size: 15px; line-height: 1.7; margin: 0;">
              <strong>Smart City = Ville connectée, intelligente et participative.</strong> Yunicity centralise l'information locale, facilite l'engagement citoyen et crée du lien social. C'est l'infrastructure digitale qui manquait aux villes françaises pour devenir vraiment "smart".
            </p>
          </div>

          <!-- Timeline Smart City -->
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 16px; padding: 25px; margin-bottom: 30px; color: white;">
            <h3 style="margin: 0 0 15px 0; font-size: 18px; text-align: center;">📅 Roadmap Smart City</h3>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <span style="background: #8B5CF6; border-radius: 50%; width: 8px; height: 8px; display: inline-block; margin-right: 12px;"></span>
              <span style="opacity: 0.9;"><strong>Février 2026</strong> : Beta Smart City - Reims (Pionniers uniquement)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <span style="background: #10b981; border-radius: 50%; width: 8px; height: 8px; display: inline-block; margin-right: 12px;"></span>
              <span style="opacity: 0.9;"><strong>Mars 2026</strong> : Lancement public MVP - Reims devient la première Smart City Yunicity</span>
            </div>
            <div style="display: flex; align-items: center;">
              <span style="background: #3b82f6; border-radius: 50%; width: 8px; height: 8px; display: inline-block; margin-right: 12px;"></span>
              <span style="opacity: 0.9;"><strong>2026-2027</strong> : Expansion Smart City dans 10+ villes françaises</span>
            </div>
          </div>

          <!-- CTA -->
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://yunicity-website.vercel.app" style="display: inline-block; background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 14px rgba(139, 92, 246, 0.4);">
              🚀 Découvrir Yunicity
            </a>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding-top: 30px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 15px 0;">
              À très bientôt !<br/>
              <strong>L'équipe Yunicity</strong> 💜
            </p>
            <div style="margin-top: 20px;">
              <a href="https://www.instagram.com/yunicity.app?igsh=MWlsNGl6a2g0ajFueQ==" style="color: #8B5CF6; text-decoration: none; margin: 0 10px; font-size: 14px;">Instagram</a>
              <span style="color: #d1d5db;">|</span>
              <a href="https://www.linkedin.com/in/yunicity-app-381bb7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style="color: #8B5CF6; text-decoration: none; margin: 0 10px; font-size: 14px;">LinkedIn</a>
              <span style="color: #d1d5db;">|</span>
              <a href="https://www.facebook.com/share/1Eu3J5rE9P/" style="color: #8B5CF6; text-decoration: none; margin: 0 10px; font-size: 14px;">Facebook</a>
              <span style="color: #d1d5db;">|</span>
              <a href="https://yunicity-website.vercel.app/contact" style="color: #8B5CF6; text-decoration: none; margin: 0 10px; font-size: 14px;">Contact</a>
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
              YUNICITY • Reims, France 🇫🇷<br/>
              <a href="https://yunicity-website.vercel.app/politique-confidentialite" style="color: #9ca3af; text-decoration: underline;">Politique de confidentialité</a>
            </p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('❌ Erreur Resend API:', error)
      
      // Vérifier si c'est une erreur de domaine non vérifié
      if (error.message?.includes('You can only send testing emails to your own email address')) {
        console.error('⚠️ LIMITATION RESEND: En mode test, vous ne pouvez envoyer qu\'à votre email (yu.entreprise@gmail.com)')
        console.error('💡 Solution 1: Tester avec yu.entreprise@gmail.com')
        console.error('💡 Solution 2: Vérifier un domaine dans Resend pour envoyer à tous les emails')
      }
      
      throw error
    }
    
    console.log('✅ Email envoyé avec succès à:', to)
    return { success: true, data }
  } catch (error) {
    console.error('❌ Erreur envoi email bienvenue:', error)
    
    // Vérifier si c'est un problème de clé API
    const errorMessage = error instanceof Error ? error.message : String(error)
    if (errorMessage.includes('API key') || errorMessage.includes('Unauthorized')) {
      console.error('⚠️ PROBLÈME: RESEND_API_KEY manquante ou invalide')
    }
    if (errorMessage.includes('domain') || errorMessage.includes('sender')) {
      console.error('⚠️ PROBLÈME: Domaine email non vérifié dans Resend')
    }
    
    return { success: false, error }
  }
}

/**
 * Envoie une notification à l'équipe quand un message de contact est reçu
 */
export async function sendContactNotification(contactData: {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  type: string
  investmentRange?: string
}) {
  try {
    const typeLabels = {
      general: '💬 Question Générale',
      investor: '💰 Investissement',
      partnership: '🤝 Partenariat',
      press: '📰 Presse & Media'
    }

    const { data, error } = await resend.emails.send({
      from: 'YUNICITY Contact <onboarding@resend.dev>',
      to: ['yu.entreprise@gmail.com'],
      subject: `📩 Nouveau message : ${typeLabels[contactData.type as keyof typeof typeLabels]} - ${contactData.subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 Nouveau Message de Contact</h1>
          </div>

          <!-- Type de message -->
          <div style="background: #f9fafb; border-left: 4px solid #8B5CF6; padding: 20px; margin-bottom: 25px; border-radius: 8px;">
            <div style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Type de demande</div>
            <div style="color: #1f2937; font-size: 18px; font-weight: 600;">${typeLabels[contactData.type as keyof typeof typeLabels]}</div>
          </div>

          <!-- Informations contact -->
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 25px; margin-bottom: 25px;">
            <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
              👤 Informations du contact
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 120px;">Nom :</td>
                <td style="padding: 10px 0; color: #1f2937; font-weight: 600;">${contactData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email :</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${contactData.email}" style="color: #8B5CF6; text-decoration: none;">${contactData.email}</a>
                </td>
              </tr>
              ${contactData.company ? `
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Société :</td>
                <td style="padding: 10px 0; color: #1f2937;">${contactData.company}</td>
              </tr>
              ` : ''}
              ${contactData.phone ? `
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Téléphone :</td>
                <td style="padding: 10px 0; color: #1f2937;">${contactData.phone}</td>
              </tr>
              ` : ''}
              ${contactData.investmentRange ? `
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Ticket :</td>
                <td style="padding: 10px 0; color: #10b981; font-weight: 600;">${contactData.investmentRange}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Sujet -->
          <div style="background: #eff6ff; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
            <div style="color: #1e40af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Sujet</div>
            <div style="color: #1f2937; font-size: 16px; font-weight: 600;">${contactData.subject}</div>
          </div>

          <!-- Message -->
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 25px; margin-bottom: 25px;">
            <div style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">Message</div>
            <div style="color: #1f2937; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${contactData.message}</div>
          </div>

          <!-- Actions recommandées -->
          <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; padding: 20px; margin-bottom: 25px;">
            <div style="color: #92400e; font-size: 14px; font-weight: 600; margin-bottom: 10px;">⚡ Actions recommandées :</div>
            <ul style="margin: 0; padding-left: 20px; color: #78350f;">
              <li style="margin: 5px 0;">Répondre sous 24h maximum</li>
              ${contactData.type === 'investor' ? '<li style="margin: 5px 0;">Préparer le pitch deck</li>' : ''}
              ${contactData.type === 'investor' ? '<li style="margin: 5px 0;">Proposer un call de 30 minutes</li>' : ''}
              <li style="margin: 5px 0;">Mettre à jour le CRM</li>
            </ul>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              Message reçu le ${new Date().toLocaleString('fr-FR', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
              })}
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 10px;">
              YUNICITY • yu.entreprise@gmail.com
            </p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Erreur Resend API (notification):', error)
      throw error
    }
    
    console.log('✅ Email de notification envoyé à l\'équipe')
    return { success: true, data }
  } catch (error) {
    console.error('❌ Erreur envoi notification:', error)
    
    // Vérifier si c'est un problème de clé API
    const errorMessage = error instanceof Error ? error.message : String(error)
    if (errorMessage.includes('API key') || errorMessage.includes('Unauthorized')) {
      console.error('⚠️ PROBLÈME: RESEND_API_KEY manquante ou invalide')
    }
    
    return { success: false, error }
  }
}
