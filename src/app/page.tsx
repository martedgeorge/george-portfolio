"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Overload",
    slug: "overload",
    headline: "Caffeinated Chaos",
    category: "Branding / Packaging / Campaign",
    color: "bg-[#FF4D00]",
    text: "text-[#090A12]",
    overview:
      "A conceptual energy drink brand built around high intensity, speed, and controlled chaos.",
    idea:
      "The brand explores the feeling of overstimulation through bold packaging, warning-inspired graphics, and action-sports energy.",
    steps: ["Brand research", "Moodboard", "Logo direction", "Can design", "Box design", "Skate deck extension"],
  },
  {
    title: "Lost & Found",
    slug: "lost-found",
    headline: "Mapping Memory Through Music",
    category: "Festival Branding / Poster Design / Identity",
    color: "bg-[#7C3AED]",
    text: "text-white",
    overview:
      "A festival identity built around discovery, nostalgia, city culture, and the feeling of finding something unexpected.",
    idea:
      "The visual system uses movement, layered graphics, and emotional storytelling to make the festival feel like a cultural experience.",
    steps: ["Concept development", "Typography", "Poster system", "Festival identity", "Applications"],
  },
  {
    title: "Night Shift",
    slug: "night-shift",
    headline: "Brewed for the Late Hours",
    category: "Beer Branding / Packaging / Visual Identity",
    color: "bg-[#B6FF3B]",
    text: "text-[#090A12]",
    overview:
      "A beer branding system inspired by late-night energy, gritty textures, bold type, and after-dark culture.",
    idea:
      "The design direction gives the brand a nightlife attitude while still keeping the packaging clean, bold, and shelf-ready.",
    steps: ["Brand mood", "Logo system", "Packaging", "Texture language", "Mockups"],
  },
  {
    title: "Art Club",
    slug: "art-club",
    headline: "A Playground for Creative Kids",
    category: "Poster Design / Identity / Experimental Graphics",
    color: "bg-[#FF2E88]",
    text: "text-white",
    overview:
      "A playful visual identity centered around creativity, childhood imagination, expressive shapes, and hands-on art making.",
    idea:
      "The project uses bold color, loose compositions, and energetic typography to make art feel fun, inviting, and expressive.",
    steps: ["Visual research", "Shape language", "Poster layouts", "Color system", "Final identity"],
  },
  {
    title: "Nike",
    slug: "nike",
    headline: "I’m Lovin’ Every Step",
    category: "Campaign Concept / Sneaker Collaboration / Art Direction",
    color: "bg-[#2563EB]",
    text: "text-white",
    overview:
      "A conceptual Nike x McDonald’s campaign exploring movement, pop culture, food nostalgia, and playful brand crossover.",
    idea:
      "The campaign combines sneaker culture with fast-food nostalgia to create a bold, unexpected collaboration concept.",
    steps: ["Cultural insight", "Campaign concept", "Art direction", "Mockups", "Social rollout"],
  },
  {
    title: "Frat House",
    slug: "frat-house",
    headline: "College Chaos, Branded",
    category: "Bar Branding / Logo Design / Packaging / Social",
    color: "bg-[#FFD000]",
    text: "text-[#090A12]",
    overview:
      "A bar identity built around college party culture, humor, bold typography, and energetic visual applications.",
    idea:
      "The system turns frat-party chaos into a memorable brand world through logos, packaging, drink concepts, and social graphics.",
    steps: ["Logo design", "Brand voice", "Packaging", "Menu system", "Social content"],
  },
];

const skills = [
  "Branding",
  "Art Direction",
  "Packaging",
  "Poster Design",
  "Campaign Concepts",
  "Typography",
  "Logo Design",
  "Web Design",
  "Social Content",
  "Adobe Creative Suite",
  "Figma",
  "Procreate",
  "Motion",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090A12] text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#090A12]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative">
              <div className="flex h-12 w-16 -rotate-3 items-center justify-center rounded-xl bg-[#FF4D00] text-[#090A12] shadow-[8px_8px_0_#7C3AED] transition group-hover:rotate-0">
                <span className="text-xl font-black tracking-tighter">MAR</span>
              </div>
              <div className="absolute -bottom-3 -right-5 flex h-8 w-12 rotate-6 items-center justify-center rounded-full bg-[#B6FF3B] text-xs font-black text-[#090A12]">
                TE
              </div>
            </div>
            <span className="hidden text-sm font-black uppercase tracking-[0.22em] text-white/80 sm:block">
              George Marte
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/60 md:flex">
            <a href="#work" className="hover:text-[#FF4D00]">Work</a>
            <a href="#about" className="hover:text-[#B6FF3B]">About</a>
            <a href="#contact" className="hover:text-[#FF2E88]">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative px-6 pb-12 pt-32">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-[#7C3AED]/40 blur-3xl" />
        <div className="absolute right-[-10%] top-40 h-72 w-72 rounded-full bg-[#FF4D00]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#B6FF3B]">
                Graphic Designer / Aspiring Art Director
              </p>

              <h1 className="max-w-4xl text-6xl font-black leading-[0.85] tracking-tighter md:text-8xl lg:text-9xl">
                Work first. Noise second.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                I create bold brand identities, packaging concepts, campaign visuals,
                posters, and culture-driven design systems with streetwear energy and
                modern art direction.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-[#FF4D00] px-6 py-4 font-black text-[#090A12] transition hover:bg-[#B6FF3B]"
                >
                  View Work
                </a>
                <a
                  href="mailto:martedgeorge@gmail.com"
                  className="rounded-full border border-white/20 px-6 py-4 font-black text-white transition hover:border-[#FF2E88] hover:text-[#FF2E88]"
                >
                  Email Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4D00]">
                  Projects Up Front
                </p>
                <p className="text-sm text-white/40">Selected work</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {projects.slice(0, 4).map((project, index) => (
                  <a
                    key={project.slug}
                    href={`#${project.slug}`}
                    className={`group flex min-h-[170px] flex-col justify-between rounded-3xl p-5 transition hover:-translate-y-1 hover:rotate-1 ${project.color} ${project.text}`}
                  >
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest opacity-70">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-black tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm font-bold opacity-80">{project.headline}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#FF4D00]">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-black leading-none tracking-tighter md:text-7xl">
              Case studies with bite.
            </h2>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.article
                id={project.slug}
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className={`flex min-h-[360px] flex-col justify-between p-8 md:p-10 ${project.color} ${project.text}`}>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.3em] opacity-70">
                        0{index + 1}
                      </p>
                      <h3 className="mt-6 text-6xl font-black leading-none tracking-tighter md:text-8xl">
                        {project.title}
                      </h3>
                    </div>
                    <p className="max-w-md text-2xl font-black leading-tight">
                      {project.headline}
                    </p>
                  </div>

                  <div className="p-8 md:p-10">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#FF4D00]">
                      {project.category}
                    </p>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-2xl font-black">Overview</h4>
                        <p className="mt-3 leading-relaxed text-white/65">
                          {project.overview}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-black">Big Idea</h4>
                        <p className="mt-3 leading-relaxed text-white/65">
                          {project.idea}
                        </p>
                      </div>
                    </div>

                    <div className="mt-9">
                      <h4 className="text-2xl font-black">Design Process</h4>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {project.steps.map((step, stepIndex) => (
                          <div
                            key={step}
                            className="rounded-2xl border border-white/10 bg-[#090A12] p-4"
                          >
                            <p className="text-xs font-black uppercase tracking-widest text-white/35">
                              Step {stepIndex + 1}
                            </p>
                            <p className="mt-2 font-bold">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-9 grid gap-4 md:grid-cols-3">
                      <div className="flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.05] text-sm font-bold text-white/35">
                        {project.title} Image 01
                      </div>
                      <div className="flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.05] text-sm font-bold text-white/35">
                        {project.title} Image 02
                      </div>
                      <div className="flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.05] text-sm font-bold text-white/35">
                        {project.title} Image 03
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B6FF3B]">
              About
            </p>
            <h2 className="mt-4 text-5xl font-black leading-none tracking-tighter md:text-7xl">
              Design with personality, pressure, and punch.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-relaxed text-white/75">
              I’m George Marte, a graphic designer and aspiring art director focused
              on branding, packaging, poster design, campaign concepts, and visual
              systems. My work blends bold visuals, storytelling, and cultural
              references to create design that feels intentional, memorable, and full
              of personality.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/75"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#FF4D00] p-10 text-[#090A12] md:p-16">
          <p className="text-xs font-black uppercase tracking-[0.35em]">
            Open to design opportunities
          </p>
          <h2 className="mt-5 max-w-5xl text-5xl font-black leading-none tracking-tighter md:text-8xl">
            Let’s make something worth looking at.
          </h2>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:martedgeorge@gmail.com"
              className="rounded-full bg-[#090A12] px-6 py-4 font-black text-white"
            >
              martedgeorge@gmail.com
            </a>
            <a
              href="https://www.instagram.com/kiddi3go"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#090A12]/30 px-6 py-4 font-black transition hover:bg-[#B6FF3B]"
            >
              Instagram @kiddi3go
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-white/45">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm md:flex-row">
          <p>© 2026 George Marte</p>
          <p>Graphic Design / Art Direction / Branding / Culture</p>
        </div>
      </footer>
    </main>
  );
}
