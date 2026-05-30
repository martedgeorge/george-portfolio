'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { featuredProjects } from '@/types/projects'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] },
  },
}

export function FeaturedWork() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-deep-navy via-charcoal/50 to-deep-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-2 border border-bright-orange/30 rounded-full text-sm font-medium text-bright-orange mb-6">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-off-white/60 mt-6 max-w-2xl">
            A selection of bold, award-winning design work across branding, packaging, editorial, and campaigns.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredProjects.slice(0, 3).map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/work/${project.id}`}>
                <div className="group relative overflow-hidden rounded-lg border border-off-white/10 hover:border-electric-purple/50 transition-all duration-500 bg-charcoal/30 backdrop-blur-sm hover:bg-charcoal/60">
                  <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-charcoal to-deep-navy overflow-hidden">
                    <div
                      className="w-full h-full transition-all duration-700 group-hover:scale-105 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.color?.primary || '#6B3FA0'}20 0%, ${project.color?.secondary || '#FF6A00'}20 100%)`,
                      }}
                    >
                      <div className="text-center">
                        <div className="text-6xl font-serif font-bold text-gradient mb-4">{project.title}</div>
                        <p className="text-off-white/60">{project.category}</p>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Project Info */}
                  <div className="p-8 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-electric-purple/10 text-electric-purple text-xs font-semibold rounded-full mb-4">
                          {project.year}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold group-hover:text-electric-purple transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-off-white/60 text-lg mb-4">{project.category}</p>
                        <p className="text-off-white/50 max-w-2xl leading-relaxed">{project.description}</p>
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

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-off-white/10">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-off-white/60 hover:text-electric-purple transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-24 text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-bright-orange text-bright-orange font-semibold rounded-lg hover:bg-bright-orange hover:text-deep-navy transition-all duration-300 group"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
