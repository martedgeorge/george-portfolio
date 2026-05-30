'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-navy">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-6 py-6 md:px-12 md:py-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold font-serif text-off-white hover:text-electric-purple transition-colors">
            GM
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/work" className="text-sm font-medium text-off-white hover:text-electric-purple transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-sm font-medium text-off-white hover:text-electric-purple transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-off-white hover:text-electric-purple transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
        <motion.div
          className="max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-display-xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
            Designing brands people
            <span className="block text-gradient"> remember.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-off-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Graphic designer and aspiring art director creating bold, memorable visual experiences that separate brands from the noise.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/work"
              className="px-8 py-4 bg-electric-purple text-off-white font-semibold rounded-lg hover:bg-bright-orange transition-all duration-300 transform hover:scale-105"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-off-white text-off-white font-semibold rounded-lg hover:bg-off-white hover:text-deep-navy transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 px-6 md:px-12 bg-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-16"
          >
            Featured Work
          </motion.h2>
          <p className="text-off-white/60 text-center py-12">
            Featured projects coming soon...
          </p>
        </div>
      </section>
    </main>
  )
}
