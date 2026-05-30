"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Overload",
    subtitle: "Caffeinated Chaos",
    category: "Branding / Packaging / Campaign",
    description:
      "A conceptual energy drink brand built around intensity, speed, and controlled chaos.",
    steps: ["Research", "Visual Identity", "Packaging", "Campaign System"],
  },
  {
    title: "Lost & Found",
    subtitle: "Mapping Memory Through Music",
    category: "Festival Branding / Poster Design",
    description:
      "A festival identity built around discovery, nostalgia, city culture, and unexpected moments.",
    steps: ["Concept", "Typography", "Map System", "Poster Series"],
  },
  {
    title: "Night Shift",
    subtitle: "Brewed for the Late Hours",
    category: "Beer Branding / Packaging",
    description:
      "A bold beer identity inspired by late-night energy, gritty textures, and expressive packaging.",
    steps: ["Moodboard", "Packaging", "Texture System", "Final Mockups"],
  },
  {
    title: "Art Club",
    subtitle: "A Playground for Creative Kids",
    category: "Poster Design / Identity",
    description:
      "A playful identity centered on childhood imagination, expressive shapes, and creativity.",
    steps: ["Idea", "Shape Language", "Poster Layout", "Final System"],
  },
  {
    title: "Nike",
    subtitle: "I’m Lovin’ Every Step",
    category: "Campaign Concept / Art Direction",
    description:
      "A playful Nike x McDonald’s concept exploring movement, food nostalgia, and brand crossover.",
    steps: ["Cultural Insight", "Campaign Idea", "Visual Direction", "Mockups"],
  },
  {
    title: "Frat House",
    subtitle: "College Chaos, Branded",
    category: "Bar Branding / Logo / Social",
    description:
      "A bar identity built around college party culture, humor, bold typography, and high-energy visuals.",
    steps: ["Logo", "Brand Voice", "Packaging", "Social Assets"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-[#F8F8F8] overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1020]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-2xl bg-[#FF6A00] rotate-6 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <span className="text-[#0B1020] font-black text-xl -rotate-6">G</span>
              <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#B6FF3B] text-[#0B1020] text-xs font-black flex items-center justify-center">
                M
              </span>
            </div>
            <span className="font-black tracking-tight text-lg">George Marte</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#work" className="hover:text-[#FF6A00]">Work</a>
            <a href="#about" className="hover:text-[#FF6A00]">About</a>
            <a href="#contact" className="hover:text-[#FF6A00]">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FF6A00] uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Graphic Designer / Aspiring Art Director
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              Design that hits before it explains.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-white/70 max-w-xl">
              I create bold brand identities, packaging concepts, campaign visuals,
              posters, and culture-driven design systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-[#FF6A00] text-[#0B1020] font-black px-6 py-4 rounded-full hover:bg-[#B6FF3B] transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="border border-white/20 px-6 py-4 rounded-full hover:border-[#6B3FA0] hover:text-[#B6FF3B] transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#6B3FA0] rounded-full blur-3xl opacity-70" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FF6A00] rounded-full blur-3xl opacity-70" />

            <div className="relative bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl">
              <p className="text-[#B6FF3B] text-sm uppercase tracking-[0.25em] font-bold mb-4">
                Featured Work
              </p>
              <div className="grid grid-cols-2 gap-4">
                {projects.slice(0, 4).map((project, index) => (
                  <a
                    key={project.title}
                    href={`#${project.title.toLowerCase().replaceAll(" ", "-")}`}
                    className={`group rounded-3xl p-5 min-h-[170px] flex flex-col justify-between transition hover:scale-[1.03] ${
                      index === 0
                        ? "bg-[#FF6A00] text-[#0B1020]"
                        : index === 1
                        ? "bg-[#6B3FA0]"
                        : index === 2
                        ? "bg-[#B6FF3B] text-[#0B1020]"
                        : "bg-white/10"
                    }`}
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-70">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
                    </div>
                    <p className="text-sm opacity-80">{project.subtitle}</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#FF6A00] uppercase tracking-[0.3em] text-xs font-bold">
                Selected Work
              </p>
              <h2 className="text-4xl md:text-6xl font-black mt-4">
                Projects with personality.
              </h2>
            </div>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.article
                id={project.title.toLowerCase().replaceAll(" ", "-")}
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="group grid lg:grid-cols-[0.9fr_1.1fr] gap-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              >
                <div
                  className={`min-h-[330px] p-8 flex flex-col justify-between ${
                    index % 3 === 0
                      ? "bg-[#FF6A00] text-[#0B1020]"
                      : index % 3 === 1
                      ? "bg-[#6B3FA0]"
                      : "bg-[#B6FF3B] text-[#0B1020]"
                  }`}
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] font-bold opacity-70">
                      0{index + 1}
                    </p>
                    <h3 className="text-5xl md:text-7xl font-black mt-5 tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-2xl font-bold">{project.subtitle}</p>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-[#FF6A00] uppercase tracking-[0.25em] text-xs font-bold">
                    {project.category}
                  </p>

                  <h4 className="text-3xl md:text-4xl font-black mt-5">
                    Overview
                  </h4>
                  <p className="mt-4 text-white/70 text-lg">{project.description}</p>

                  <div className="mt-8 grid md:grid-cols-4 gap-3">
                    {project.steps.map((step) => (
                      <div
                        key={step}
                        className="border border-white/10 rounded-2xl p-4 bg-[#0B1020]"
                      >
                        <p className="text-sm text-white/50">Step</p>
                        <p className="font-bold mt-1">{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid md:grid-cols-3 gap-4">
                    <div className="h-36 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white/40">
                      Image 01
                    </div>
                    <div className="h-36 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white/40">
                      Image 02
                    </div>
                    <div className="h-36 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white/40">
                      Image 03
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[#FF6A00] uppercase tracking-[0.3em] text-xs font-bold">
              About
            </p>
            <h2 className="text-4xl md:text-6xl font-black mt-4">
              I build visual systems with attitude.
            </h2>
          </div>

          <div>
            <p className="text-xl text-white/75 leading-relaxed">
              I’m George Marte, a graphic designer and aspiring art director
              focused on branding, packaging, poster design, campaign concepts,
              and visual systems. My work blends bold visuals, storytelling, and
              cultural references to create design that feels intentional,
              memorable, and full of personality.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Branding",
                "Art Direction",
                "Packaging",
                "Poster Design",
                "Campaign Concepts",
                "Logo Design",
                "Web Design",
                "Typography",
                "Adobe Creative Suite",
                "Figma",
                "Procreate",
                "Motion",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-[#FF6A00] text-[#0B1020] p-10 md:p-16">
          <p className="uppercase tracking-[0.3em] text-xs font-black">
            Available for design opportunities
          </p>
          <h2 className="text-5xl md:text-7xl font-black mt-5">
            Let’s make something worth looking at.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:your-email@example.com"
              className="bg-[#0B1020] text-white px-6 py-4 rounded-full font-black"
            >
              Email Me
            </a>
            <a
              href="#"
              className="border border-[#0B1020]/30 px-6 py-4 rounded-full font-black"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-white/10 text-white/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 George Marte</p>
          <p>Graphic Design / Art Direction / Branding</p>
        </div>
      </footer>
    </main>
  );
}
