'use client'
import Navigation from '@/components/Navigation'
import NewsletterHeroSection from '@/components/NewsletterHeroSection'
import NewsletterContentSection from '@/components/NewsletterContentSection'
import NewsletterSubscribeSection from '@/components/NewsletterSubscribeSection'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function NewsletterPage() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />
      <BackButton />

      <NewsletterHeroSection />
      <NewsletterContentSection />
      <NewsletterSubscribeSection />

      <Footer />
    </div>
  )
}
