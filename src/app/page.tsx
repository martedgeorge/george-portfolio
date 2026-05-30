'use client'

import { HeroSection } from '@/components/HeroSection'
import { FeaturedWork } from '@/components/FeaturedWork'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navigation />
      <HeroSection />
      <FeaturedWork />
    </main>
  )
}
