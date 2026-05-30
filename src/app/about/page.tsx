'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen bg-deep-navy pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-serif font-bold mb-12"
        >
          About
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-lg leading-relaxed text-off-white/80"
        >
          <p>
            I'm George Marte, a graphic designer and aspiring art director with a passion for creating bold, memorable visual experiences.
          </p>
          <p>
            My work bridges the gap between strategic thinking and creative expression, with a focus on art direction, branding, and visual storytelling.
          </p>
          <p>
            When I'm not designing, you'll find me exploring photography, creating paintings, or experimenting with new design techniques.
          </p>
          <p>
            I'm driven by the challenge of solving complex creative problems and pushing the boundaries of what design can achieve.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
