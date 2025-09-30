import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour les tables
export interface NewsletterSubscriber {
  id?: string
  email: string
  name: string
  interests: string[]
  created_at?: string
  status?: 'active' | 'unsubscribed'
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'investor' | 'partnership' | 'press'
  created_at?: string
  status?: 'new' | 'read' | 'replied'
}

// Fonctions utilitaires
export async function addNewsletterSubscriber(data: NewsletterSubscriber) {
  const { data: result, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{
      email: data.email,
      name: data.name,
      interests: data.interests,
      status: 'active'
    }])
    .select()
    .single()

  if (error) throw error
  return result
}

export async function addContactMessage(data: ContactMessage) {
  const { data: result, error } = await supabase
    .from('contact_messages')
    .insert([{
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      type: data.type,
      status: 'new'
    }])
    .select()
    .single()

  if (error) throw error
  return result
}

export async function getNewsletterCount() {
  const { count, error } = await supabase
    .from('newsletter_subscribers')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'active')

  if (error) throw error
  return count || 0
}
