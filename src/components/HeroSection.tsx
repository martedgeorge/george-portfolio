'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-electric-purple/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-bright-orange/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-5xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overline */}
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-block px-4 py-2 border border-electric-purple/30 rounded-full text-sm font-medium text-electric-purple mb-8">
            Creative Designer & Art Director
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8">
          Designing brands people
          <span className="block text-gradient"> remember.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-off-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Bold, art-directed visual experiences that separate brands from the noise.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/work"
            className="group px-8 py-4 bg-electric-purple text-off-white font-semibold rounded-lg hover:bg-bright-orange transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          <Link
            href="/contact"
            className="group px-8 py-4 border-2 border-off-white text-off-white font-semibold rounded-lg hover:bg-off-white hover:text-deep-navy transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-24 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-sm text-off-white/40 flex flex-col items-center">
            <span className="mb-2">Scroll to explore</span>
            <svg
              className="w-5 h-5 text-electric-purple"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
