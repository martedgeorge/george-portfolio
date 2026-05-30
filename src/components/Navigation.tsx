'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full px-6 md:px-12 py-6 md:py-8 transition-all duration-300 ${
        isScrolled ? 'bg-deep-navy/80 backdrop-blur-md border-b border-off-white/10' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold font-serif text-off-white hover:text-electric-purple transition-colors duration-300">
          GM
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <Link href="/work" className="text-sm font-medium text-off-white/80 hover:text-electric-purple transition-colors duration-300 relative group">
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-purple group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/about" className="text-sm font-medium text-off-white/80 hover:text-electric-purple transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-purple group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/contact" className="text-sm font-medium text-off-white/80 hover:text-electric-purple transition-colors duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-purple group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:text-electric-purple transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}
