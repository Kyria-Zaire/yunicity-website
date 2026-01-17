import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import NewsletterHeroSection from '@/components/NewsletterHeroSection'
import NewsletterContentSection from '@/components/NewsletterContentSection'
import NewsletterSubscribeSection from '@/components/NewsletterSubscribeSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Newsletter | Yunicity',
  description: 'Inscrivez-vous a la newsletter Yunicity pour suivre le lancement de la plateforme et recevoir les dernieres actualites sur le projet.',
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />

      <NewsletterHeroSection />
      <NewsletterContentSection />
      <NewsletterSubscribeSection />

      <Footer />
    </div>
  )
}
