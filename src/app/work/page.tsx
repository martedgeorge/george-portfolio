'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { featuredProjects } from '@/types/projects'

export default function Work() {
  return (
    <main className="min-h-screen bg-deep-navy pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="inline-block px-4 py-2 border border-bright-orange/30 rounded-full text-sm font-medium text-bright-orange mb-6">
            Portfolio
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-off-white/60 max-w-3xl leading-relaxed">
            A collection of bold, art-directed design work spanning brand identity, packaging, editorial design, and strategic campaigns.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Link href={`/work/${project.id}`}>
                <div className="group relative overflow-hidden rounded-lg border border-off-white/10 hover:border-electric-purple/50 transition-all duration-500 bg-charcoal/30 hover:bg-charcoal/60">
                  <div className="relative h-96 md:h-[450px] bg-gradient-to-br from-charcoal to-deep-navy overflow-hidden">
                    <div
                      className="w-full h-full transition-all duration-700 group-hover:scale-105 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.color?.primary || '#6B3FA0'}25 0%, ${project.color?.secondary || '#FF6A00'}25 100%)`,
                      }}
                    >
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-serif font-bold text-gradient mb-4">{project.title}</div>
                        <p className="text-off-white/60 text-lg">{project.category}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-electric-purple/10 text-electric-purple text-xs font-semibold rounded-full mb-4">
                          {project.year}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold group-hover:text-electric-purple transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-off-white/60 text-lg mb-4">{project.category}</p>
                        <p className="text-off-white/50 leading-relaxed">{project.description}</p>
                      </div>
                      <motion.span
                        className="text-3xl text-electric-purple flex-shrink-0"
                        initial={{ x: 0, opacity: 0.5 }}
                        whileHover={{ x: 12, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-off-white/10">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-off-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Let's discuss your next project
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric-purple text-off-white font-semibold rounded-lg hover:bg-bright-orange transition-all duration-300 group transform hover:scale-105"
          >
            Get in Touch
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
