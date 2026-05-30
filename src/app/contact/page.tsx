'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-deep-navy flex items-center justify-center px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8">
          Let's build something
          <span className="block text-gradient"> memorable.</span>
        </h1>

        <p className="text-xl text-off-white/70 mb-16 leading-relaxed">
          I'm always interested in discussing new projects, creative ideas, or opportunities to collaborate.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link
            href="mailto:george@example.com"
            className="px-8 py-4 bg-electric-purple text-off-white font-semibold rounded-lg hover:bg-bright-orange transition-all duration-300 transform hover:scale-105"
          >
            Email Me
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-off-white text-off-white font-semibold rounded-lg hover:bg-off-white hover:text-deep-navy transition-all duration-300"
          >
            LinkedIn
          </Link>
        </div>
      </motion.div>
    </main>
  )
}
