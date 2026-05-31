"use client";

const projects = [
  {
    title: "OVERLOAD",
    slug: "overload",
    tag: "Caffeinated Chaos",
    type: "Branding / Packaging / Campaign",
    color: "#ff4d00",
    text: "#090A12",
    overview: "A conceptual energy drink brand built around intensity, speed, and controlled chaos.",
    steps: ["Research", "Identity", "Packaging", "Campaign"],
  },
  {
    title: "LOST & FOUND",
    slug: "lost-found",
    tag: "Mapping Memory Through Music",
    type: "Festival Branding / Poster Design",
    color: "#7c3aed",
    text: "#ffffff",
    overview: "A festival identity built around discovery, nostalgia, city culture, and unexpected moments.",
    steps: ["Concept", "Typography", "Posters", "Applications"],
  },
  {
    title: "NIGHT SHIFT",
    slug: "night-shift",
    tag: "Brewed for the Late Hours",
    type: "Beer Branding / Packaging",
    color: "#b6ff3b",
    text: "#090A12",
    overview: "A beer branding system inspired by late-night energy, gritty textures, and expressive packaging.",
    steps: ["Moodboard", "Logo", "Packaging", "Mockups"],
  },
  {
    title: "ART CLUB",
    slug: "art-club",
    tag: "A Playground for Creative Kids",
    type: "Poster Design / Identity",
    color: "#ff2e88",
    text: "#ffffff",
    overview: "A playful visual concept centered on creativity, childhood imagination, and expressive shape-based design.",
    steps: ["Research", "Shapes", "Posters", "System"],
  },
  {
    title: "NIKE",
    slug: "nike",
    tag: "I’m Lovin’ Every Step",
    type: "Campaign Concept / Art Direction",
    color: "#2563eb",
    text: "#ffffff",
    overview: "A conceptual Nike x McDonald’s campaign exploring movement, pop culture, food nostalgia, and playful brand crossover.",
    steps: ["Insight", "Idea", "Direction", "Rollout"],
  },
  {
    title: "FRAT HOUSE",
    slug: "frat-house",
    tag: "College Chaos, Branded",
    type: "Bar Branding / Packaging / Social",
    color: "#ffd000",
    text: "#090A12",
    overview: "A bar identity built around college party culture, humor, bold typography, and energetic visual applications.",
    steps: ["Logo", "Voice", "Packaging", "Social"],
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
];

export default function Home() {
  return (
    <main style={styles.page}>
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #090A12; }
        a { color: inherit; text-decoration: none; }
        * { box-sizing: border-box; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
      `}</style>

      <nav style={styles.nav}>
        <a href="#" style={styles.logoWrap}>
          <div style={styles.logo}>
            <span>GEORGE</span>
            <span>MARTE</span>
          </div>
        </a>
        <div style={styles.navLinks}>
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.sticker}>PHILLY / BRANDING / CULTURE</div>

        <div style={styles.heroGrid}>
          <div>
            <p style={styles.eyebrow}>Graphic Designer / Aspiring Art Director</p>
            <h1 style={styles.heroTitle}>
              GEORGE
              <br />
              MARTE
            </h1>
            <p style={styles.heroText}>
              I create bold brand identities, packaging concepts, campaign visuals,
              posters, and culture-driven design systems with a playful streetwear edge.
            </p>
          </div>

          <div style={styles.heroPanel}>
            <p style={styles.panelLabel}>SELECTED WORK FIRST</p>
            <div style={styles.projectMiniGrid}>
              {projects.slice(0, 4).map((project, index) => (
                <a
                  key={project.slug}
                  href={`#${project.slug}`}
                  style={{
                    ...styles.miniCard,
                    background: project.color,
                    color: project.text,
                  }}
                >
                  <span style={styles.cardNumber}>0{index + 1}</span>
                  <strong>{project.title}</strong>
                  <small>{project.tag}</small>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={styles.marquee}>
        <div style={styles.marqueeInner}>
          BRANDING ✦ PACKAGING ✦ POSTERS ✦ CAMPAIGNS ✦ CULTURE ✦ ART DIRECTION ✦ BRANDING ✦ PACKAGING ✦ POSTERS ✦ CAMPAIGNS ✦ CULTURE ✦ ART DIRECTION ✦
        </div>
      </div>

      <section id="work" style={styles.work}>
        <p style={styles.eyebrowOrange}>Selected Work</p>
        <h2 style={styles.sectionTitle}>Projects with bite.</h2>

        <div style={styles.projectStack}>
          {projects.map((project, index) => (
            <article id={project.slug} key={project.slug} style={styles.project}>
              <div
                style={{
                  ...styles.projectIntro,
                  background: project.color,
                  color: project.text,
                }}
              >
                <span style={styles.bigNumber}>0{index + 1}</span>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectTag}>{project.tag}</p>
              </div>

              <div style={styles.projectInfo}>
                <p style={styles.projectType}>{project.type}</p>
                <h4 style={styles.subhead}>Overview</h4>
                <p style={styles.copy}>{project.overview}</p>

                <h4 style={styles.subhead}>Design Process</h4>
                <div style={styles.steps}>
                  {project.steps.map((step, i) => (
                    <div key={step} style={styles.step}>
                      <span>STEP {i + 1}</span>
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>

                <div style={styles.imageRow}>
                  <div style={styles.imageBox}>{project.title} IMAGE 01</div>
                  <div style={styles.imageBox}>{project.title} IMAGE 02</div>
                  <div style={styles.imageBox}>{project.title} IMAGE 03</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" style={styles.about}>
        <div>
          <p style={styles.eyebrowGreen}>About</p>
          <h2 style={styles.sectionTitle}>Design with personality, pressure, and punch.</h2>
        </div>

        <div>
          <p style={styles.aboutText}>
            I’m George Marte, a graphic designer and aspiring art director focused on
            branding, packaging, poster design, campaign concepts, and visual systems.
            My work blends bold visuals, storytelling, and cultural references to create
            design that feels intentional, memorable, and full of personality.
          </p>

          <div style={styles.skills}>
            {skills.map((skill) => (
              <span key={skill} style={styles.skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contact}>
        <p style={styles.contactLabel}>Open to design opportunities</p>
        <h2 style={styles.contactTitle}>Let’s make something worth looking at.</h2>
        <div style={styles.contactLinks}>
          <a href="mailto:martedgeorge@gmail.com" style={styles.darkButton}>
            martedgeorge@gmail.com
          </a>
          <a
            href="https://www.instagram.com/kiddi3go"
            target="_blank"
            rel="noreferrer"
            style={styles.outlineButton}
          >
            Instagram @kiddi3go
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <span>© 2026 George Marte</span>
        <span>Graphic Design / Art Direction / Branding / Culture</span>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#090A12",
    color: "#ffffff",
    fontFamily: "Arial, Helvetica, sans-serif",
    overflowX: "hidden",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: 78,
    padding: "0 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(9,10,18,0.85)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    background: "#FF4D00",
    color: "#090A12",
    padding: "10px 14px",
    borderRadius: 12,
    fontWeight: 950,
    lineHeight: 0.85,
    letterSpacing: -1,
    boxShadow: "7px 7px 0 #7C3AED",
    transform: "rotate(-3deg)",
    display: "flex",
    flexDirection: "column",
    fontSize: 18,
  },
  navLinks: {
    display: "flex",
    gap: 28,
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 2,
    color: "rgba(255,255,255,0.72)",
  },
  hero: {
    position: "relative",
    padding: "130px 28px 70px",
  },
  sticker: {
    position: "absolute",
    top: 120,
    right: 40,
    background: "#B6FF3B",
    color: "#090A12",
    padding: "12px 18px",
    borderRadius: 999,
    fontWeight: 950,
    fontSize: 13,
    transform: "rotate(6deg)",
    animation: "float 4s ease-in-out infinite",
  },
  heroGrid: {
    maxWidth: 1240,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.85fr 1.15fr",
    gap: 40,
    alignItems: "end",
  },
  eyebrow: {
    color: "#B6FF3B",
    fontWeight: 950,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontSize: 12,
    marginBottom: 20,
  },
  eyebrowOrange: {
    color: "#FF4D00",
    fontWeight: 950,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontSize: 12,
  },
  eyebrowGreen: {
    color: "#B6FF3B",
    fontWeight: 950,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontSize: 12,
  },
  heroTitle: {
    fontSize: "clamp(76px, 13vw, 190px)",
    lineHeight: 0.78,
    margin: 0,
    letterSpacing: -8,
    fontWeight: 950,
  },
  heroText: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 21,
    lineHeight: 1.45,
    maxWidth: 600,
    marginTop: 28,
  },
  heroPanel: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: 32,
    padding: 22,
  },
  panelLabel: {
    color: "#FF4D00",
    fontWeight: 950,
    fontSize: 12,
    letterSpacing: 3,
    marginBottom: 18,
  },
  projectMiniGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
  },
  miniCard: {
    minHeight: 180,
    borderRadius: 24,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 200ms ease",
  },
  cardNumber: {
    fontSize: 12,
    fontWeight: 950,
    opacity: 0.65,
  },
  marquee: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    overflow: "hidden",
    background: "#FF4D00",
    color: "#090A12",
  },
  marqueeInner: {
    whiteSpace: "nowrap",
    fontWeight: 950,
    fontSize: 28,
    padding: "18px 0",
    animation: "marquee 18s linear infinite",
  },
  work: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "90px 28px",
  },
  sectionTitle: {
    fontSize: "clamp(48px, 8vw, 100px)",
    lineHeight: 0.9,
    letterSpacing: -4,
    margin: "14px 0 45px",
    fontWeight: 950,
  },
  projectStack: {
    display: "grid",
    gap: 34,
  },
  project: {
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    overflow: "hidden",
    borderRadius: 34,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
  },
  projectIntro: {
    minHeight: 370,
    padding: 36,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bigNumber: {
    fontSize: 14,
    fontWeight: 950,
    letterSpacing: 4,
    opacity: 0.65,
  },
  projectTitle: {
    fontSize: "clamp(56px, 8vw, 110px)",
    lineHeight: 0.82,
    letterSpacing: -5,
    margin: "25px 0 0",
    fontWeight: 950,
  },
  projectTag: {
    fontSize: 26,
    lineHeight: 1.05,
    fontWeight: 950,
    maxWidth: 420,
  },
  projectInfo: {
    padding: 38,
  },
  projectType: {
    color: "#FF4D00",
    fontSize: 12,
    letterSpacing: 3,
    textTransform: "uppercase",
    fontWeight: 950,
  },
  subhead: {
    fontSize: 26,
    margin: "28px 0 10px",
    fontWeight: 950,
  },
  copy: {
    color: "rgba(255,255,255,0.66)",
    fontSize: 17,
    lineHeight: 1.55,
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
  },
  step: {
    background: "#090A12",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 18,
    padding: 16,
  },
  imageRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14,
    marginTop: 28,
  },
  imageBox: {
    height: 130,
    border: "1px dashed rgba(255,255,255,0.2)",
    borderRadius: 18,
    background: "rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,255,255,0.35)",
    fontSize: 12,
    fontWeight: 900,
    textAlign: "center",
    padding: 10,
  },
  about: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "90px 28px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "grid",
    gridTemplateColumns: "0.85fr 1.15fr",
    gap: 48,
  },
  aboutText: {
    fontSize: 22,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.75)",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 34,
  },
  skill: {
    padding: "10px 14px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    fontSize: 14,
    fontWeight: 800,
  },
  contact: {
    maxWidth: 1240,
    margin: "0 auto 60px",
    padding: 50,
    borderRadius: 34,
    background: "#FF4D00",
    color: "#090A12",
  },
  contactLabel: {
    fontWeight: 950,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontSize: 12,
  },
  contactTitle: {
    fontSize: "clamp(52px, 8vw, 110px)",
    lineHeight: 0.9,
    letterSpacing: -5,
    margin: "20px 0 35px",
    fontWeight: 950,
    maxWidth: 900,
  },
  contactLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
  },
  darkButton: {
    background: "#090A12",
    color: "#fff",
    padding: "16px 22px",
    borderRadius: 999,
    fontWeight: 950,
  },
  outlineButton: {
    border: "1px solid rgba(9,10,18,0.35)",
    padding: "16px 22px",
    borderRadius: 999,
    fontWeight: 950,
  },
  footer: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "28px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.45)",
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    fontSize: 14,
  },
};
