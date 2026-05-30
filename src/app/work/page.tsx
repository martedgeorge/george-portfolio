'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  { id: 'overload', title: 'Overload', category: 'Branding' },
  { id: 'lost-found', title: 'Lost & Found', category: 'Branding' },
  { id: 'night-shift', title: 'Night Shift', category: 'Packaging' },
  { id: 'art-club', title: 'Art Club', category: 'Identity' },
  { id: 'nike', title: 'Nike', category: 'Campaign' },
  { id: 'frat-house', title: 'Frat House', category: 'Branding' },
]

export default function Work() {
  return (
    <main className="min-h-screen bg-deep-navy pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-serif font-bold mb-24"
        >
          Selected Work
        </motion.h1>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/work/${project.id}`}>
                <div className="pb-8 border-b border-off-white/10 group-hover:border-electric-purple transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2 group-hover:text-electric-purple transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-off-white/60 text-lg">{project.category}</p>
                    </div>
                    <span className="text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
