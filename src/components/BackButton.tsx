'use client'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-24 left-6 z-40 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  )
}
