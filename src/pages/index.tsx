import { Inter } from 'next/font/google'
import Hero from '@/components/sections/hero'
import CTA from '@/components/sections/cta'
import Stats from '@/components/sections/stats'
import Footer from '@/components/sections/footer'
import Features from '@/components/sections/features'

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen"
      >
        <Hero />
        <Stats />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
