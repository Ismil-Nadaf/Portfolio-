import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "timeline", label: "Career", num: "04" },
  { id: "footer", label: "Contact", num: "05" },
];

const PROJECTS = [
  {
    title: "Cloud-Based Automated Publishing Platform",
    category: "Financial Services",
    year: "2023",
    emoji: "☁️",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "DocuBuilder is a cloud-based automated publishing platform enabling financial services teams to create complex, data-intensive documents with minimal manual intervention.",
    longDescription: "I led the UX transformation of a fragmented, manual reporting process into an automated publishing engine. By shifting the product strategy from \"Black Box Automation\" to \"Transparent Control,\" we reduced the document lifecycle from 7 hours to 90 minutes while maintaining 100% compliance.",
    tags: ["Automation", "Financial Services", "Enterprise UX", "78% Time Savings"],
    accent: "#4facfe",
    role: "Lead UX Designer",
    duration: "12 months",
    team: "Cross-functional (UX, Dev, Compliance)",
    outcome: "78% faster document creation and $2.3M annual savings",
    highlights: [
      "Reduced document lifecycle from 7 hours to 90 minutes (78% faster)",
      "89% error reduction by eliminating copy-paste risk across 500+ reports",
      "$2.3M annual operational cost savings within first year",
      "92% feature adoption rate within the first 30 days post-launch",
    ],
    links: [{ label: "View Case Study", href: "#" }],
  },
  {
    title: "Conversational Marketing Platform",
    category: "AI · SaaS",
    year: "2022",
    emoji: "💬",
    gradient: "linear-gradient(135deg, rgba(7,94,102,0.9) 0%, rgba(24,186,137,0.9) 100%)",
    description: "Weconnect — an intuitive AI-powered customer engagement platform helping businesses improve customer support, lead generation, and communication through chatbots and live chat.",
    longDescription: "Weconnect needed a no-code platform that let non-technical SMBs build AI-powered chatbot flows without any prior experience. I led the end-to-end product design, from user research with SMB owners to building a visual flow builder with intelligent template suggestions and real-time preview. The onboarding funnel was redesigned three times based on activation data until we hit our target.",
    tags: ["AI-Powered", "No-Code Platform", "Conversational UI", "SaaS", "Figma"],
    accent: "#18ba89",
    role: "Product Designer",
    duration: "9 months",
    team: "4-person product team",
    outcome: "78% activation rate and 2,450 businesses onboarded in 3 months",
    highlights: [
      "78% activation rate — highest in company history at launch",
      "2,450 businesses onboarded within 3 months of launch",
      "No-code flow builder enabling non-technical teams to launch bots in under 30 minutes",
    ],
    links: [{ label: "View Case Study", href: "#" }],
  },
  {
    title: "Drone-Based Tower Health Inspection",
    category: "Industrial UX",
    year: "2021",
    emoji: "🚁",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    description: "A comprehensive user-centered design for critical infrastructure inspection, transforming traditional methods through innovative drone technology and intelligent software solutions.",
    longDescription: "Working with Adroient ITES and Hitachi Vantara, I designed the entire UX for an AI-powered drone inspection platform used by field engineers in challenging environments. The interface had to work on tablets in bright sunlight, support gloved operation, and surface AI anomaly detection in plain language trusted by non-specialist engineers.",
    tags: ["Industrial UX", "Drone Technology", "AI Interface", "Field Research", "Figma"],
    accent: "#30cfd0",
    role: "Senior UX/UI Consultant",
    duration: "6 months",
    team: "12-Person Product Team",
    outcome: "75% faster inspections and 85% cost savings vs. helicopter surveys",
    highlights: [
      "75% faster inspection cycles vs. traditional methods",
      "85% cost reduction compared to helicopter-based inspection",
      "Designed for gloved, outdoor tablet use with high-contrast large-touch UI",
      "AI anomaly detection surfaced in plain language trusted by non-specialist engineers",
    ],
    links: [{ label: "View Case Study", href: "#" }],
  },
  {
    title: "Rocket Uniface UX — Low-Code Enterprise Platform",
    category: "Enterprise Platform",
    year: "2022",
    emoji: "🚀",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "A comprehensive low-code platform solution built on Fluent Design System, transforming enterprise application development with modern UX and a flexible widget framework.",
    longDescription: "My mandate was to modernise Rocket Uniface's UX without breaking the mental models of long-standing power users, while making it approachable for a new generation of developers. I led the design system strategy — adopting Microsoft's Fluent Design System as the foundation, then building a custom widget framework on top that allowed organisations to extend the platform with their own branded components.",
    tags: ["Design System", "Fluent Design", "Enterprise UX", "Low-Code", "Figma"],
    accent: "#764ba2",
    role: "Senior UX Designer P4 / Product design Lead",
    duration: "Ongoing (2021–Present)",
    team: "Rocket Software (Global team)",
    outcome: "65% faster development cycles and $15K–$50K annual licensing eliminated per client",
    highlights: [
      "65% faster application development for enterprise teams post-launch",
      "Eliminated $15K–$50K in annual third-party UI licensing costs per customer",
      "Fluent-based design system adopted across 3 major product lines",
      "Widget framework enabling customer-created components without engineering support",
    ],
    links: [{ label: "View Case Study", href: "#" }],
  },
];

const TIMELINE = [
  { year: "2021 – Present", role: "Senior UX Designer P4 / Product design Lead", company: "Rocket Software", note: "Architected design systems and led AI integration initiatives, driving innovation in enterprise software and establishing UX best practices across global teams." },
  { year: "2021", role: "Senior UX / UI Consultant/ Product design Lead", company: "Adroient ITES / Hitachi Vantara", note: "Led UX design for an AI-powered high tension tower health monitoring system, implementing cutting-edge predictive analytics interfaces." },
  { year: "2013 – 2021", role: "Senior UX / UI Designer / Developer", company: "AIT Global India", note: "Delivered transformative solutions generating $8M revenue across banking, financial services, e-commerce, and healthcare sectors with focus on mobile experiences." },
  { year: "2013 – 2013", role: "Web Designer", company: "WIZETRON", note: "Built foundation in digital design and web development, establishing core skills in user-centered design and front-end development." },
  { year: "2019 – 2021", role: "IxDF — Human Computer Interaction and UX Managemt", company: "Interaction Design Foundation", note: "Certified in UX Management, Design Thinking, and Agile Methods for UX Design.", isEducation: true },
  { year: "2013 – 2015", role: "Bachelor of Computer Application", company: "SunRise University, Alwar, Rajasthan", note: "Foundation in computing, software development, and digital systems.", isEducation: true },
];

const SKILLS = [ "Design Ops & Process", "UX Management", "Stakeholder Management", "Design Thinking", "Roadmap Strategy", "Data-Driven Design", "Research & Data Synthesis", "Competitive Analysis", "End-to-End Design","Journey Mapping", "wireframe & Rapid Prototyping", "Claude AI", "GitHub Copilot", "Hotjar", "Google Analytics", "Adobe Analytics", "Figma AI", "Adobe XD", "Miro AI", "Locofy AI", "Cursor AI", "VS Code", "Prompt Engineering", "Process Orchestrations", "AI Assisted Design", "Vibe Coding", "Conversational UX", "Design Systems", "Usability Testing", "Accessibility", "JAWS & Narrator", "HTML", "CSS", "Basic JavaScript", "Bootstrap", "WordPress"  ];

export default function Portfolio() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef({});
  const contentRef = useRef(null);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }); },
      { root: container, threshold: 0.4 }
    );
    Object.values(sectionRefs.current).forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedProject === null) return;
    const handler = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowRight") setSelectedProject((p) => (p + 1) % PROJECTS.length);
      if (e.key === "ArrowLeft") setSelectedProject((p) => (p - 1 + PROJECTS.length) % PROJECTS.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedProject]);

  const setRef = (id) => (el) => { sectionRefs.current[id] = el; };

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const onScroll = () => setShowScrollTop(el.scrollTop > 400);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    if (contentRef.current) contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={styles.root}>
      <style>{css}</style>


      {/* MOBILE HEADER */}
      <div className="mobile-header">
        <div className="mobile-brand">
          <div className="mobile-brand-dot" />
          <span className="mobile-brand-name">Ismil Nadaf</span>
        </div>
        <button
          className={`hamburger${mobileNavOpen ? " open" : ""}`}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {mobileNavOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-overlay-header">
            <div className="mobile-brand">
              <div className="mobile-brand-dot" />
              <span className="mobile-brand-name">Ismil Nadaf</span>
            </div>
            <button
              className="hamburger open"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
            >
              <span /><span /><span />
            </button>
          </div>
          <nav>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className="mobile-nav-btn"
                onClick={() => {
                  setMobileNavOpen(false);
                  setSelectedProject(null);
                  scrollTo(item.id);
                }}
              >
                <span className="num">{item.num}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* INNER LAYOUT */}
      <div className="inner-layout" style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>
      {/* LEFT NAV */}
      <aside style={styles.aside} className="aside-desktop">
        <div style={styles.brand}>
          <div style={styles.brandDot} />
          <span style={styles.brandName}>Ismil Nadaf</span>
        </div>
        <nav style={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              style={{ ...styles.navItem, ...(active === item.id ? styles.navItemActive : {}) }}
              onClick={() => { setSelectedProject(null); scrollTo(item.id); }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={styles.navNum}>{item.num}</span>
              <span style={{ ...styles.navLabel, opacity: active === item.id || hovered === item.id ? 1 : 0.4, transform: active === item.id || hovered === item.id ? "translateX(4px)" : "translateX(0)", transition: "all 0.25s ease" }}>
                {item.label}
              </span>
              {active === item.id && <div style={styles.navIndicator} />}
            </button>
          ))}
        </nav>
        <div style={styles.asideFooter}>
          <span style={styles.asideFooterText}>Senior Product and UX Design Leader</span>
          <span style={styles.asideFooterText}>Pune, Maharashtra, India</span>
        </div>
      </aside>

      {/* RIGHT PANE */}
      <div style={styles.rightPane} className="right-pane">
        <main ref={contentRef} className="main-scroll" style={{ ...styles.main, opacity: selectedProject !== null ? 0 : 1, pointerEvents: selectedProject !== null ? "none" : "auto", transition: "opacity 0.3s ease" }}>

          {/* HERO */}
          <section id="hero" ref={setRef("hero")} style={styles.section} className="section-pad">
            <div style={styles.heroInner} className="fade-up">
              <p style={styles.heroEyebrow}>Welcome!</p>
              <div style={{ marginBottom: "1.25rem" }} className="hero-title">
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.15rem" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)", color: "#aaa", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 400 }}>Hello, I am</span>
                </div>
                <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)", lineHeight: 1.0, fontWeight: 400, letterSpacing: "-0.03em", fontFamily: "'DM Serif Display', Georgia, serif", margin: 0 }}>
                  <span style={{ display: "block", color: "#1A1A1A" }}>Ismil Nadaf</span>
                  <span style={{ display: "block", color: "#1A1A1A", position: "relative" }}>
                    
                    <span style={{ position: "absolute", bottom: "4px", left: 0, width: "100%", height: "2px", background: "linear-gradient(90deg, #1A1A1A 0%, transparent 100%)", opacity: 0.15, borderRadius: "2px" }} />
                  </span>
                </h1>
                <div style={{ marginTop: "0.85rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ width: "24px", height: "1px", background: "#1A1A1A", opacity: 0.3, display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(0.68rem, 1.1vw, 0.8rem)", color: "#888", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }} className="hero-muted">Specialist · Strategist · Designer · Leader</span>
                </div>
              </div>
              <p style={styles.heroBio} className="hero-bio">
                I firmly believe that technology has the power to revolutionize the way we learn, communicate, and create. My mission is to craft products and services that harmoniously bridge the gap between humans and technology, empowering individuals to reach their full potential.
              </p>
              <div style={styles.heroStats} className="hero-stats">
                {[{ n: "14", l: "Years of Digital Innovation" }, { n: "Global", l: "Experience" }, { n: "4+", l: "Industries Transformed" }].map((s) => (
                  <div key={s.n} style={styles.heroStat}>
                    <span style={styles.heroStatNum}>{s.n}</span>
                    <span style={styles.heroStatLabel}>{s.l}</span>
                  </div>
                ))}
              </div>
              <div style={styles.heroActions} className="hero-actions">
                <button style={styles.btnPrimary} onClick={() => scrollTo("projects")}>View work</button>
                <a href="https://www.linkedin.com/in/ismil-nadaf-a31b7529/" target="_blank" rel="noreferrer" style={styles.btnLink}>LinkedIn ↗</a>
              </div>
            </div>
            <div style={styles.heroScroll} className="hero-scroll">
              <span style={styles.heroScrollLine} className="scroll-line" />
              <span style={styles.heroScrollText}>scroll</span>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" ref={setRef("about")} style={{ ...styles.section, minHeight: "unset", justifyContent: "flex-start" }} className="section-pad">
            <SectionLabel label="About" />
            <div>
              <h2 style={styles.sectionTitle}>Strategic designer at the intersection of human experience and business impact.</h2>
              <p style={{ ...styles.bodyText, marginTop: "1.25rem" }}>Strategic Product Design Leader with over 14 years of experience driving digital transformation across Banking, Fintech, Electrical Power, Marketing, E-commerce, and Software Development. Expert in blending human-centered design with business objectives to deliver high-impact products, including AI-powered platforms and complex design systems.</p>
              <p style={{ ...styles.bodyText, marginTop: "1.25rem" }}>Proven track record of leveraging design to drive revenue growth from $8M in delivered value and $2.3M annual savings.</p>
              <div style={styles.skillsRow}>
                {SKILLS.map((s) => <span key={s} style={styles.skillChip}>{s}</span>)}
              </div>
            </div>

          </section>

          {/* PROJECTS */}
          <section id="projects" ref={setRef("projects")} style={styles.section} className="section-pad">
            <SectionLabel label="Featured Projects" />
            <h2 style={styles.sectionTitle}>Selected work.</h2>
            <p style={styles.projectsHint}>Click any project to view the full case study.</p>
            <div style={styles.projectsList}>
              {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} index={i} onClick={() => setSelectedProject(i)} />)}
            </div>
          </section>

          {/* TIMELINE */}
          <section id="timeline" ref={setRef("timeline")} style={styles.section} className="section-pad">
            <SectionLabel label="Career" />
            <h2 style={styles.sectionTitle}>Experience &amp; education.</h2>
            <div style={{ ...styles.timeline, marginTop: "1.5rem" }}>
              {TIMELINE.filter(t => !t.isEducation).map((item, i, arr) => <TimelineItem key={i} item={item} last={i === arr.length - 1} />)}
            </div>
            <div style={{ marginTop: "3rem" }}>
              <SectionLabel label="Education" />
              <div style={styles.timeline}>
                {TIMELINE.filter(t => t.isEducation).map((item, i, arr) => <TimelineItem key={i} item={item} last={i === arr.length - 1} />)}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <section id="footer" ref={setRef("footer")} style={styles.footerSection} className="footer-section">
            <div style={styles.footerInner}>
              <p style={styles.footerEyebrow}>Ready to transform your digital experience?</p>
              <h2 style={styles.footerTitle} className="footer-title">Let&#39;s Connect.</h2>
              <p style={styles.footerSubText}>With 14 years of expertise in Product &amp; UX design and digital transformation, I bring strategic vision and proven results to every project.</p>

            </div>
            <div style={styles.footerBar} className="footer-bar">
              <span style={styles.footerBarText}>© 2025 Ismil Nadaf</span>
              <span style={styles.footerBarText}>Crafted with passion for human-centered design.</span>
            </div>
          </section>
        </main>

        {selectedProject !== null && (
          <ProjectDetail
            project={PROJECTS[selectedProject]}
            index={selectedProject}
            total={PROJECTS.length}
            onClose={() => setSelectedProject(null)}
            onNext={() => setSelectedProject((selectedProject + 1) % PROJECTS.length)}
            onPrev={() => setSelectedProject((selectedProject - 1 + PROJECTS.length) % PROJECTS.length)}
          />
        )}
      </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && selectedProject === null && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed", bottom: "2rem", right: "2rem",
            width: "46px", height: "46px", borderRadius: "50%",
            background: "#1A1A1A", color: "#F7F5F2",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.1rem", zIndex: 90,
            boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            transition: "transform 0.2s ease, opacity 0.2s ease",
            animation: "fadeUp 0.3s ease both",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

/* ─── Project Detail View ─────────────────────────────────── */
function ProjectDetail({ project, index, total, onClose, onNext, onPrev }) {
  const scrollRef = useRef(null);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [project.title]);

  return (
    <div style={styles.detailWrapper} className="detail-enter detail-wrapper">
      {/* Top bar */}
      <div style={styles.detailTopBar} className="detail-top-bar">
        <button style={styles.detailBackBtn} onClick={onClose}>
          <span>←</span><span>Back to projects</span>
        </button>
        <span style={styles.detailCounterText}>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>

      {/* Scrollable body */}
      <div ref={scrollRef} style={styles.detailScroll}>

        {/* ══ DOCUBUILDER — Full Case Study (project 0) ══ */}
        {index === 0 ? (
          <DocuBuilderCaseStudy />
        ) : index === 1 ? (
          <WeconnectCaseStudy />
        ) : index === 2 ? (
          <DroneInspectionCaseStudy />
        ) : index === 3 ? (
          <RocketUnifaceCaseStudy />
        ) : (
          /* Generic layout for all other projects */
          <GenericDetail project={project} />
        )}
      </div>

      {/* Bottom nav */}
      <div style={styles.detailNav} className="detail-nav-pad">
        <button style={styles.detailNavBtn} onClick={onPrev}>
          <span style={styles.navArrow}>←</span>
          <div style={styles.navBtnInfo}>
            <span style={styles.navBtnSublabel}>Previous</span>
            <span style={styles.navBtnTitle} className="nav-btn-title">{PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length].title}</span>
          </div>
        </button>
        <div style={styles.dotRow} className="dot-row">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{ ...styles.dot, width: i === index ? "20px" : "6px", background: i === index ? "#1A1A1A" : "rgba(0,0,0,0.15)" }} />
          ))}
        </div>
        <button style={{ ...styles.detailNavBtn, flexDirection: "row-reverse" }} onClick={onNext}>
          <span style={styles.navArrow}>→</span>
          <div style={{ ...styles.navBtnInfo, textAlign: "right" }}>
            <span style={styles.navBtnSublabel}>Next</span>
            <span style={styles.navBtnTitle} className="nav-btn-title">{PROJECTS[(index + 1) % PROJECTS.length].title}</span>
          </div>
        </button>
      </div>
    </div>
  );
}

/* ─── Weconnect Case Study ────────────────────────────────── */
function WeconnectCaseStudy() {
  const tealAccent = "#18ba89";
  const darkTeal = "#032B2F";

  return (
    <div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #075E66 0%, #0a8a6a 50%, #18ba89 100%)", color: "white", padding: "3.5rem 3rem 3rem", position: "relative", overflow: "hidden" }} className="cs-hero">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(24,186,137,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(24,186,137,0.08) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
        <div style={cs.heroInner}>
          <span style={{ ...cs.pill, background: "rgba(24,186,137,0.2)", border: "1px solid rgba(24,186,137,0.4)", color: "#e0fff5" }}>AI · SaaS · Conversational Marketing</span>
          <h2 style={cs.heroTitle}>Conversational Marketing Platform</h2>
          <p style={cs.heroSub}>Weconnect — Empowering SMBs with AI-Powered Engagement</p>
          <p style={{ ...cs.heroTagline, color: "#7FFFD4" }}>78% Activation Rate &amp; 2,450 Businesses Onboarded in 3 Months</p>
          <div style={cs.resultBand}>
            <p style={cs.resultText}>
              I led the end-to-end product design for a <strong>no-code AI chatbot platform</strong> targeting non-technical SMB owners. By redesigning the onboarding funnel three times based on activation data, we achieved the <strong>highest activation rate in company history</strong> within 30 days of launch.
            </p>
          </div>
          <div style={cs.metricsRow} className="cs-metrics">
            <div style={cs.metric}>
              <span style={cs.metricNum}>78%</span>
              <span style={cs.metricLabel}>Activation Rate</span>
              <span style={cs.metricSub}>Highest in company history</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>2,450</span>
              <span style={cs.metricLabel}>Businesses Onboarded</span>
              <span style={cs.metricSub}>Within 3 months</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>30min</span>
              <span style={cs.metricLabel}>Bot Launch Time</span>
              <span style={cs.metricSub}>No coding required</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>3x</span>
              <span style={cs.metricLabel}>Onboarding Redesigns</span>
              <span style={cs.metricSub}>Data-driven iterations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div style={styles.detailStatsStrip} className="detail-stats-strip">
        <div className="detail-stat-cell" style={{ ...styles.detailStatCell, borderRight: "1px solid rgba(0,0,0,0.07)" }}>
          <span style={styles.detailStatCellLabel}>Role</span>
          <span style={styles.detailStatCellValue}>Product Designer</span>
        </div>
        <div className="detail-stat-cell" style={{ ...styles.detailStatCell, borderRight: "1px solid rgba(0,0,0,0.07)" }}>
          <span style={styles.detailStatCellLabel}>Duration</span>
          <span style={styles.detailStatCellValue}>9 Months</span>
        </div>
        <div className="detail-stat-cell" style={styles.detailStatCell}>
          <span style={styles.detailStatCellLabel}>Team</span>
          <span style={styles.detailStatCellValue}>4-Person Product Team</span>
        </div>
      </div>

      {/* Section 1: The Final Solution */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: tealAccent }}>🚀 The Final Solution</p>
        <h3 style={cs.sectionTitle}>What We Built</h3>
        <p style={cs.sectionIntro}>A no-code platform that lets any SMB owner build, launch, and optimize an AI-powered chatbot in under 30 minutes — no technical background required.</p>
        <div style={cs.solCards}>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>01</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Visual Flow Builder <span style={{ ...cs.solTag, background: "rgba(24,186,137,0.1)", color: tealAccent }}>Core Product</span></h4>
              <p style={cs.solBody}>A drag-and-drop canvas that lets users build chatbot conversation flows visually, with pre-built blocks for lead capture, FAQs, and booking — no coding required.</p>
              <div style={{ ...cs.solResult, color: tealAccent, background: "rgba(24,186,137,0.08)", border: "1px solid rgba(24,186,137,0.2)" }}>The Result: Average bot creation time dropped from 3 days to 28 minutes</div>
            </div>
          </div>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>02</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Intelligent Template Library</h4>
              <p style={cs.solBody}>Industry-specific templates (e-commerce, restaurants, services) with smart suggestions based on business type, reducing blank-canvas anxiety for new users.</p>
            </div>
          </div>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>03</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Unified Inbox</h4>
              <p style={cs.solBody}>A single dashboard merging live chat, bot conversations, and lead management so owners never miss a customer interaction across any channel.</p>
            </div>
          </div>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>04</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Real-Time Analytics Panel</h4>
              <p style={cs.solBody}>Plain-language performance metrics showing bot effectiveness, drop-off points, and top-performing flows — designed for non-technical business owners.</p>
            </div>
          </div>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>05</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>One-Click Channel Deployment</h4>
              <p style={cs.solBody}>Deploy the same bot to WhatsApp, Instagram, and website chat simultaneously with a single toggle — no need to rebuild for each channel.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Product Strategy */}
      <div style={{ ...cs.section, background: darkTeal }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: "#7FFFD4" }}>🎯 The Product Strategy</p>
        <h3 style={{ ...cs.sectionTitle, color: "#fff" }}>Solving the SMB Complexity Trap</h3>
        <p style={{ ...cs.sectionIntro, color: "rgba(255,255,255,0.8)" }}>
          The core challenge was not building AI — it was making AI <strong>feel simple</strong> to someone who had never built a chatbot.
        </p>
        <div style={cs.strategyGrid} className="cs-strategy-grid">
          <div style={cs.strategyBlock}>
            <h4 style={{ ...cs.strategyHeading, color: "#7FFFD4" }}>The Strategic Pivot</h4>
            <p style={{ ...cs.sectionIntro, color: "rgba(255,255,255,0.75)", marginTop: "0.5rem", marginBottom: 0 }}>
              Early versions overwhelmed SMB users with features. The pivot: <strong>Progressive Empowerment</strong> — start users with a working bot in 5 minutes, then gradually unlock advanced features as confidence grows.
            </p>
          </div>
          <div style={cs.strategyBlock}>
            <h4 style={{ ...cs.strategyHeading, color: "#7FFFD4" }}>The Strategic Trade-off</h4>
            <div style={cs.tradeoffItem}>
              <span style={{ ...cs.tradeoffLabel, color: "#7FFFD4" }}>The Tension</span>
              <span style={cs.tradeoffText}>Power users wanted full customization; new users needed guardrails and guidance.</span>
            </div>
            <div style={{ ...cs.tradeoffItem, marginTop: "0.9rem" }}>
              <span style={{ ...cs.tradeoffLabel, color: "#7FFFD4" }}>The Decision</span>
              <span style={cs.tradeoffText}>A tiered experience — a guided Quick Start path for beginners and an advanced mode unlocked after first successful bot deployment.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: The Journey */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: tealAccent }}>🔍 The Journey</p>
        <h3 style={cs.sectionTitle}>How We Got There</h3>
        <div style={cs.journeyGrid} className="cs-journey-grid">
          <div style={cs.journeyCard}>
            <div style={cs.journeyIcon}>⚡</div>
            <h4 style={cs.journeyTitle}>The Challenge &amp; Pain Points</h4>
            <p style={cs.sectionIntro}>SMB owners needed to compete with enterprise customer engagement but had zero technical resources. Existing tools were either too complex or too limited.</p>
            <div style={cs.quote}>
              <p style={cs.quoteText}>I tried three chatbot tools and gave up every time. I run a restaurant, not a software company.</p>
              <cite style={cs.quoteCite}>— Restaurant Owner, SMB User</cite>
            </div>
            <div style={cs.quote}>
              <p style={cs.quoteText}>I lose leads every night when I am closed. I need something that responds for me.</p>
              <cite style={cs.quoteCite}>— E-commerce Store Owner</cite>
            </div>
            <div style={cs.quote}>
              <p style={cs.quoteText}>The setup took 2 days and I still do not know if it is working.</p>
              <cite style={cs.quoteCite}>— Service Business Owner</cite>
            </div>
          </div>
          <div style={{ ...cs.journeyCard, background: "rgba(24,186,137,0.04)", border: "1px solid rgba(24,186,137,0.15)" }}>
            <div style={cs.journeyIcon}>💡</div>
            <h4 style={cs.journeyTitle}>The Aha Moment</h4>
            <p style={cs.sectionIntro}>Through <strong>24 interviews with SMB owners</strong> and usability testing, I discovered the core blocker: <strong>Fear of Failure.</strong></p>
            <p style={{ ...cs.sectionIntro, marginTop: "0.75rem" }}>Users were not afraid of technology — they were afraid of wasting time on something that would not work. This insight led to the <strong>5-Minute Win</strong> onboarding strategy: get users a live, working bot before asking them to invest further.</p>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Research Methods</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🎤</span>
            <div>
              <strong style={cs.researchTitle}>SMB Owner Interviews</strong>
              <p style={cs.researchDesc}>24 interviews across 6 business categories</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>📱</span>
            <div>
              <strong style={cs.researchTitle}>Competitor Teardowns</strong>
              <p style={cs.researchDesc}>Analysed 8 chatbot platforms for friction points</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>📊</span>
            <div>
              <strong style={cs.researchTitle}>Activation Funnel Analysis</strong>
              <p style={cs.researchDesc}>Mapped 1,200 drop-off points in the onboarding flow</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🧪</span>
            <div>
              <strong style={cs.researchTitle}>Usability Testing</strong>
              <p style={cs.researchDesc}>5 rounds of testing with non-technical participants</p>
            </div>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Key Insights</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>😰</span>
            <div>
              <strong style={cs.researchTitle}>Fear of Blank Canvas</strong>
              <p style={cs.researchDesc}>Users froze when faced with an empty flow builder — they needed a starting point, not a blank slate.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>⏱</span>
            <div>
              <strong style={cs.researchTitle}>Time is the Real Cost</strong>
              <p style={cs.researchDesc}>SMB owners valued time over features. A fast, simple setup beat a powerful but complex one every time.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>📈</span>
            <div>
              <strong style={cs.researchTitle}>Proof Before Investment</strong>
              <p style={cs.researchDesc}>Users needed to see results — even small ones — before they would commit to learning the platform.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🔁</span>
            <div>
              <strong style={cs.researchTitle}>Iteration is the Product</strong>
              <p style={cs.researchDesc}>The most successful users were those who could quickly test, fail, and improve their bots without fear.</p>
            </div>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Testing &amp; Iteration — 3 Onboarding Redesigns</h4>
        <div style={cs.iterTimeline} className="cs-iter-timeline">
          <div style={{ ...cs.iterItem, background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.2)" }}>
            <span style={{ ...cs.iterDot, background: "#ef4444" }} />
            <div>
              <strong style={cs.iterLabel}>Version 1</strong>
              <p style={cs.iterText}>Full feature tour upfront — <span style={{ color: "#ef4444", fontWeight: 600 }}>22% activation rate</span></p>
            </div>
          </div>
          <span style={cs.iterArrow}>→</span>
          <div style={{ ...cs.iterItem, background: "rgba(251,146,60,0.06)", borderColor: "rgba(251,146,60,0.2)" }}>
            <span style={{ ...cs.iterDot, background: "#f97316" }} />
            <div>
              <strong style={cs.iterLabel}>Version 2</strong>
              <p style={cs.iterText}>Simplified 3-step wizard — <span style={{ color: "#f97316", fontWeight: 600 }}>51% activation rate</span></p>
            </div>
          </div>
          <span style={cs.iterArrow}>→</span>
          <div style={{ ...cs.iterItem, background: "rgba(24,186,137,0.07)", borderColor: "rgba(24,186,137,0.25)" }}>
            <span style={{ ...cs.iterDot, background: "#18ba89" }} />
            <div>
              <strong style={cs.iterLabel}>Version 3 (Final)</strong>
              <p style={cs.iterText}>5-Minute Win live bot first — <span style={{ color: "#18ba89", fontWeight: 600 }}>78% activation rate</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div style={{ ...cs.section, background: "#fafaf8" }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: tealAccent }}>✏️ Design Process</p>
        <h3 style={cs.sectionTitle}>The Messy Middle</h3>
        <p style={cs.sectionIntro}>Before the 5-Minute Win, there were two failed onboarding strategies, a near-fatal oversimplification, and one product direction that the data forced us to abandon entirely.</p>

        {/* Wrong belief */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: "4px solid #ef4444", borderRadius: "10px", padding: "1.5rem 1.75rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#ef4444", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 600 }}>What I Believed at the Start</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.45, marginBottom: "0.75rem" }}>
            "If we make it feature-rich and powerful, SMBs will see the value and push through the learning curve."
          </p>
          <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>This was the original product direction — a full-featured chatbot builder packed with customisation options. We shipped it. 22% of users completed onboarding. The other 78% left before creating a single flow.</p>
        </div>

        {/* 3 directions */}
        <h4 style={cs.subsectionTitle}>3 Onboarding Strategies — Only One Worked</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "2rem" }} className="cs-three-col">
          <div style={{ background: "#fff", border: "1px solid #fecaca", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#ef4444", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>VERSION 1 — FAILED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Full Feature Tour</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Every feature shown upfront — chatbot builder, analytics, channels, templates. SMBs felt overwhelmed. Most left before finishing setup. 22% activation rate.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #fed7aa", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97316", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#f97316", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>VERSION 2 — FAILED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Simplified 3-Step Wizard</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Stripped to three steps. Better — but users still hit a blank canvas at the end and froze. No starting point meant no momentum. 51% activation rate.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#22c55e", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>VERSION 3 — SHIPPED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>5-Minute Win</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Users got a live, working bot on their website before the onboarding ended. The result was tangible before any investment. 78% activation rate.</p>
          </div>
        </div>

        {/* Feature iteration */}
        <h4 style={cs.subsectionTitle}>How the Template Library Actually Solved the Blank Canvas Problem</h4>
        <p style={cs.sectionIntro}>The blank canvas was killing activation. We tried 4 approaches before finding what actually worked.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }} className="cs-four-col">
          {[
            { v: "v1", label: "Empty canvas, tooltips", result: "Users froze", color: "#ef4444", note: "Tooltips explaining features did not reduce anxiety" },
            { v: "v2", label: "Generic starter templates", result: "Low relevance", color: "#f97316", note: "Generic bots felt foreign to a restaurant or salon owner" },
            { v: "v3", label: "Category-based templates", result: "Better adoption", color: "#eab308", note: "Right idea — but too many categories caused choice paralysis" },
            { v: "v4", label: "Auto-suggested by business type", result: "78% completed", color: "#22c55e", note: "One relevant template, pre-selected based on signup data" },
          ].map((item) => (
            <div key={item.v} style={{ background: "#fff", border: `1px solid ${item.color}44`, borderTop: `3px solid ${item.color}`, borderRadius: "8px", padding: "1rem" }}>
              <div style={{ fontSize: "0.68rem", fontFamily: "'DM Mono', monospace", color: item.color, fontWeight: 700, marginBottom: "0.4rem", letterSpacing: "0.06em" }}>{item.v.toUpperCase()}</div>
              <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.35rem", lineHeight: 1.35 }}>{item.label}</p>
              <p style={{ fontSize: "0.92rem", fontWeight: 700, color: item.color, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.4rem" }}>{item.result}</p>
              <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>

        {/* The conflict */}
        <div style={{ background: darkTeal, borderRadius: "12px", padding: "1.75rem 2rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#7FFFD4", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 600 }}>The Decision That Almost Did Not Happen</p>
          <p style={{ fontSize: "1.02rem", fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, marginBottom: "1rem" }}>
            The engineering team pushed back on the auto-suggestion feature. They argued it required business-type classification at signup, which added complexity to the registration flow.
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            Their concern was legitimate — adding a field to signup risked increasing drop-off before the user even reached onboarding. But removing it meant returning to the blank canvas problem that had killed two previous versions.
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            The solution: move business-type selection into the onboarding flow itself, framing it as personalisation rather than a form field. One question, visually styled as cards — not a dropdown. Drop-off did not increase. Template relevance did.
          </p>
          <div style={{ background: "rgba(127,255,212,0.08)", border: "1px solid rgba(127,255,212,0.2)", borderRadius: "8px", padding: "1rem 1.25rem" }}>
            <p style={{ fontSize: "0.88rem", color: "#7FFFD4", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: 0, fontStyle: "italic" }}>
              This framing shift — from data collection to personalisation — became a design principle applied to every subsequent onboarding step.
            </p>
          </div>
        </div>

        {/* Principle */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>📐</span>
          <div>
            <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 600 }}>DOCUMENTED DESIGN PRINCIPLE</p>
            <p style={{ fontSize: "0.95rem", color: "#1A1A1A", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: 0, fontStyle: "italic" }}>
              "Every question we ask a user must feel like it benefits them, not us. If it feels like a form, redesign it."
            </p>
            <p style={{ fontSize: "0.78rem", color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", margin: "0.5rem 0 0" }}>Applied to every data-collection moment across the entire platform.</p>
          </div>
        </div>
      </div>

      {/* Full-width case study image */}
      <div style={{ width: "100%", margin: "0 0 0 0", lineHeight: 0 }}>
        <img
          src="/images/weconnect-mockup.png"
          alt="Case study mockup"
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </div>

      {/* Section 4: Business Impact */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: tealAccent }}>📈 Business Impact</p>
        <h3 style={cs.sectionTitle}>Measurable Results</h3>
        <div style={cs.impactGroups}>
          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>🚀 Activation &amp; Growth</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>78%</span>
                <span style={cs.impactDesc}>Activation Rate<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Highest in company history</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>2,450</span>
                <span style={cs.impactDesc}>Businesses Onboarded<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Within 3 months</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>3x</span>
                <span style={cs.impactDesc}>Activation Improvement<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>22% to 78%</small></span>
              </div>
            </div>
          </div>
          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>⚡ Speed &amp; Usability</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>28min</span>
                <span style={cs.impactDesc}>Avg. Bot Creation Time<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Down from 3 days</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>84</span>
                <span style={cs.impactDesc}>SUS Score<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Up from 61</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>62%</span>
                <span style={cs.impactDesc}>Support Tickets Reduced<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Post-launch</small></span>
              </div>
            </div>
          </div>
          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>💼 Business Outcomes</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>41%</span>
                <span style={cs.impactDesc}>Increase in Lead Capture<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>For active users</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>3.8x</span>
                <span style={cs.impactDesc}>ROI for SMB Users<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Avg. first 90 days</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: tealAccent }}>89%</span>
                <span style={cs.impactDesc}>30-Day Retention<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Among activated users</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: User Feedback */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: tealAccent }}>💬 User Feedback</p>
        <h3 style={cs.sectionTitle}>In Their Own Words</h3>
        <div style={cs.quotesGrid} className="cs-quotes-grid">
          <div style={cs.userQuote}>I had a working chatbot on my website in 20 minutes. I did not believe it was possible until I did it.</div>
          <div style={cs.userQuote}>We stopped losing leads overnight. The bot handles enquiries while I sleep — it paid for itself in week one.</div>
          <div style={cs.userQuote}>I tried two other tools before this. Weconnect is the first one I actually understood.</div>
        </div>
      </div>

      {/* Section 6: Key Learnings */}
      <div style={{ ...cs.section, background: "#f8fafc" }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: tealAccent }}>💡 Key Learnings &amp; Reflection</p>
        <h3 style={cs.sectionTitle}>What We Learned</h3>
        <div style={cs.learningsGrid} className="cs-learnings-grid">
          <div style={cs.learningsCol}>
            <h4 style={{ ...cs.learningsColTitle, borderColor: tealAccent }}>What Worked</h4>
            <ul style={cs.caseList}>
              <li style={cs.caseListItem}>The <strong>5-Minute Win</strong> strategy — getting users a live result before asking for investment was the single biggest lever for activation</li>
              <li style={cs.caseListItem}>Template-first approach eliminated blank-canvas anxiety and got users moving immediately</li>
              <li style={cs.caseListItem}>Data-driven iteration — rebuilding onboarding 3 times based on real drop-off data was the right call</li>
            </ul>
          </div>
          <div style={cs.learningsCol}>
            <h4 style={{ ...cs.learningsColTitle, borderColor: tealAccent }}>What I Would Change</h4>
            <ul style={cs.caseList}>
              <li style={cs.caseListItem}>Involve SMB users in week 1 of design, not just testing — earlier insight would have saved the first two failed onboarding versions</li>
              <li style={cs.caseListItem}>Build the analytics panel earlier — users who could see their bot working stayed longer</li>
              <li style={cs.caseListItem}>Design for mobile-first from the start — 60% of SMB owners managed their business from phones</li>
            </ul>
          </div>
        </div>
        <div style={cs.takeaway}>
          <span style={cs.takeawayIcon}>🎯</span>
          <div>
            <strong style={cs.takeawayTitle}>Core Takeaway</strong>
            <p style={cs.takeawayText}>The best onboarding does not teach the product — it delivers the product core value before the user has time to doubt themselves. For SMBs, a single working result is worth more than ten feature explanations.</p>
          </div>
        </div>
      </div>

    </div>
  );
}


/* ─── Drone Inspection Case Study ────────────────────────── */
function DroneInspectionCaseStudy() {
  const cyan = "#30cfd0";
  const darkBg = "#0a0e1a";

  return (
    <div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0d1b2a 0%, #1a3a4a 50%, #0a2a3a 100%)", color: "white", padding: "3.5rem 3rem 3rem", position: "relative", overflow: "hidden" }} className="cs-hero">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(48,207,208,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(48,207,208,0.06) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
        <div style={cs.heroInner}>
          <span style={{ ...cs.pill, background: "rgba(48,207,208,0.2)", border: "1px solid rgba(48,207,208,0.4)", color: "#b2fafa" }}>Industrial UX · AI Interface · Field Technology</span>
          <h2 style={cs.heroTitle}>Drone-Based Tower Health Inspection</h2>
          <p style={cs.heroSub}>HIBI — AI-Powered Infrastructure Monitoring</p>
          <p style={{ ...cs.heroTagline, color: "#30cfd0" }}>75% Faster Inspections &amp; 85% Cost Savings vs. Helicopter Surveys</p>
          <div style={cs.resultBand}>
            <p style={cs.resultText}>
              I designed the end-to-end UX for an <strong>AI-powered drone inspection platform</strong> used by field engineers in high-voltage tower environments. The interface had to work on tablets in direct sunlight, support gloved hands, and surface complex AI anomaly detection in plain language that non-specialist engineers could trust and act on immediately.
            </p>
          </div>
          <div style={cs.metricsRow} className="cs-metrics">
            <div style={cs.metric}>
              <span style={cs.metricNum}>75%</span>
              <span style={cs.metricLabel}>Faster Inspections</span>
              <span style={cs.metricSub}>vs. traditional methods</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>85%</span>
              <span style={cs.metricLabel}>Cost Reduction</span>
              <span style={cs.metricSub}>vs. helicopter surveys</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>0</span>
              <span style={cs.metricLabel}>Missed Anomalies</span>
              <span style={cs.metricSub}>In pilot testing</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>92%</span>
              <span style={cs.metricLabel}>Engineer Trust Score</span>
              <span style={cs.metricSub}>AI recommendations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div style={styles.detailStatsStrip} className="detail-stats-strip">
        <div className="detail-stat-cell" style={{ ...styles.detailStatCell, borderRight: "1px solid rgba(0,0,0,0.07)" }}>
          <span style={styles.detailStatCellLabel}>Role</span>
          <span style={styles.detailStatCellValue}>Senior UX / UI Consultant / Product design Lead</span>
        </div>
        <div className="detail-stat-cell" style={{ ...styles.detailStatCell, borderRight: "1px solid rgba(0,0,0,0.07)" }}>
          <span style={styles.detailStatCellLabel}>Duration</span>
          <span style={styles.detailStatCellValue}>6 Months</span>
        </div>
        <div className="detail-stat-cell" style={styles.detailStatCell}>
          <span style={styles.detailStatCellLabel}>Team</span>
          <span style={styles.detailStatCellValue}>12-Person Product Team</span>
        </div>
      </div>

      {/* Section 1: The Final Solution */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: cyan }}>🚀 The Final Solution</p>
        <h3 style={cs.sectionTitle}>What We Built</h3>
        <p style={cs.sectionIntro}>A tablet-first inspection platform that guides field engineers through drone-assisted tower surveys, surfaces AI anomaly detection in plain language, and generates compliance reports automatically — all designed to work in the harshest outdoor conditions.</p>
        <div style={cs.solCards}>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>01</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>High-Contrast Field Interface <span style={{ ...cs.solTag, background: "rgba(48,207,208,0.1)", color: cyan }}>Core Design Challenge</span></h4>
              <p style={cs.solBody}>A purpose-built tablet UI with oversized touch targets (minimum 48px), maximum contrast ratios, and glare-resistant colour palette — operable with insulated gloves in direct sunlight at 50m heights.</p>
              <div style={{ ...cs.solResult, color: cyan, background: "rgba(48,207,208,0.08)", border: "1px solid rgba(48,207,208,0.2)" }}>Result: Zero input errors reported during 3-month field pilot</div>
            </div>
          </div>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>02</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>AI Anomaly Detection Dashboard</h4>
              <p style={cs.solBody}>Translates raw AI model outputs into plain-language severity alerts with visual overlays on drone imagery, enabling non-specialist engineers to identify and classify defects without deep AI knowledge.</p>
            </div>
          </div>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>03</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Guided Inspection Workflow</h4>
              <p style={cs.solBody}>Step-by-step mission planner that auto-generates drone flight paths based on tower type and inspection scope, reducing pre-mission setup from 45 minutes to under 8 minutes.</p>
            </div>
          </div>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>04</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Offline-First Data Capture</h4>
              <p style={cs.solBody}>Full functionality in zero-connectivity environments — all inspection data, annotations, and AI results sync automatically when the engineer returns to connectivity range.</p>
            </div>
          </div>
          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>05</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Automated Compliance Reporting</h4>
              <p style={cs.solBody}>One-tap generation of regulatory-compliant inspection reports with drone imagery, AI findings, engineer annotations, and GPS coordinates — eliminating 4 hours of post-inspection paperwork.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Product Strategy */}
      <div style={{ ...cs.section, background: darkBg }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: cyan }}>🎯 The Design Strategy</p>
        <h3 style={{ ...cs.sectionTitle, color: "#fff" }}>Designing for Extreme Conditions</h3>
        <p style={{ ...cs.sectionIntro, color: "rgba(255,255,255,0.8)" }}>
          Standard UX principles do not apply when your user is 50 metres in the air wearing insulated gloves, fighting wind, and making safety-critical decisions under time pressure.
        </p>
        <div style={cs.strategyGrid} className="cs-strategy-grid">
          <div style={cs.strategyBlock}>
            <h4 style={{ ...cs.strategyHeading, color: cyan }}>The Design Pivot</h4>
            <p style={{ ...cs.sectionIntro, color: "rgba(255,255,255,0.75)", marginTop: "0.5rem", marginBottom: 0 }}>
              Initial designs followed standard enterprise UI patterns — dense data tables, small interactive elements, complex navigation. Field testing revealed these were completely unusable at height. The pivot: <strong>Extreme Simplification</strong> — every screen reduced to a single primary action, with secondary actions hidden until needed.
            </p>
          </div>
          <div style={cs.strategyBlock}>
            <h4 style={{ ...cs.strategyHeading, color: cyan }}>The Critical Trade-off</h4>
            <div style={cs.tradeoffItem}>
              <span style={{ ...cs.tradeoffLabel, color: cyan }}>The Tension</span>
              <span style={cs.tradeoffText}>Office-based managers wanted rich data and full control. Field engineers needed extreme simplicity and speed.</span>
            </div>
            <div style={{ ...cs.tradeoffItem, marginTop: "0.9rem" }}>
              <span style={{ ...cs.tradeoffLabel, color: cyan }}>The Decision</span>
              <span style={cs.tradeoffText}>Two separate interface modes — a simplified Field Mode for engineers at height, and a full Desktop Mode for managers reviewing results in the office.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: The Journey */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: cyan }}>🔍 The Journey</p>
        <h3 style={cs.sectionTitle}>How We Got There</h3>
        <div style={cs.journeyGrid} className="cs-journey-grid">
          <div style={cs.journeyCard}>
            <div style={cs.journeyIcon}>⚡</div>
            <h4 style={cs.journeyTitle}>The Challenge &amp; Pain Points</h4>
            <p style={cs.sectionIntro}>High-voltage tower inspections were conducted manually by climbing engineers or expensive helicopter surveys — both slow, dangerous, and costly. Existing drone tools were designed for pilots, not infrastructure engineers.</p>
            <div style={cs.quote}>
              <p style={cs.quoteText}>I cannot read the screen up here. The sun makes everything invisible and I cannot use the touchscreen with my safety gloves on.</p>
              <cite style={cs.quoteCite}>— Field Engineer, Site Visit</cite>
            </div>
            <div style={cs.quote}>
              <p style={cs.quoteText}>The AI flags 200 things per tower. I need to know which three actually matter today. I do not have time to interpret machine learning outputs.</p>
              <cite style={cs.quoteCite}>— Senior Infrastructure Engineer</cite>
            </div>
            <div style={cs.quote}>
              <p style={cs.quoteText}>Writing the post-inspection report takes longer than the inspection itself. And I have to do six towers a day.</p>
              <cite style={cs.quoteCite}>— Field Inspection Team Lead</cite>
            </div>
          </div>
          <div style={{ ...cs.journeyCard, background: "rgba(48,207,208,0.04)", border: "1px solid rgba(48,207,208,0.15)" }}>
            <div style={cs.journeyIcon}>💡</div>
            <h4 style={cs.journeyTitle}>The Aha Moment</h4>
            <p style={cs.sectionIntro}>During a site visit, I watched a field engineer squinting at a standard tablet UI in bright sunlight, jabbing at small buttons with gloved fingers and missing every tap. The problem was not the data or the AI — it was that <strong>no one had ever designed for this physical environment.</strong></p>
            <p style={{ ...cs.sectionIntro, marginTop: "0.75rem" }}>Every design decision from that point was filtered through one question: <strong>Can an engineer do this with one gloved hand, in direct sunlight, at height, under time pressure?</strong> If not, redesign it.</p>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Research Methods</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🏗</span>
            <div>
              <strong style={cs.researchTitle}>Site Visits &amp; Contextual Inquiry</strong>
              <p style={cs.researchDesc}>Accompanied 8 field engineers on live tower inspections across 3 sites</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🎤</span>
            <div>
              <strong style={cs.researchTitle}>Stakeholder Interviews</strong>
              <p style={cs.researchDesc}>22 interviews with engineers, safety officers, and operations managers</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🧪</span>
            <div>
              <strong style={cs.researchTitle}>Simulated Field Testing</strong>
              <p style={cs.researchDesc}>Usability tests conducted outdoors in sunlight with safety gloves and time pressure</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>📋</span>
            <div>
              <strong style={cs.researchTitle}>Workflow Shadowing</strong>
              <p style={cs.researchDesc}>Mapped the full inspection process from pre-mission planning to report submission</p>
            </div>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Key Insights</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>☀️</span>
            <div>
              <strong style={cs.researchTitle}>Environment is the UX</strong>
              <p style={cs.researchDesc}>Sunlight, wind, height, and gloves fundamentally change how users interact with any interface. Standard WCAG contrast ratios are not enough outdoors.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🤖</span>
            <div>
              <strong style={cs.researchTitle}>AI Trust Requires Explainability</strong>
              <p style={cs.researchDesc}>Engineers would not act on AI recommendations they could not understand. Plain-language explanations were more important than accuracy percentages.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>⚠️</span>
            <div>
              <strong style={cs.researchTitle}>Safety Overrides Efficiency</strong>
              <p style={cs.researchDesc}>Any feature that increased cognitive load at height was a safety risk. Speed of task completion mattered less than reduction of errors.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>📵</span>
            <div>
              <strong style={cs.researchTitle}>Offline is the Default</strong>
              <p style={cs.researchDesc}>Remote tower locations had zero reliable connectivity. Offline-first was not a nice-to-have — it was a fundamental requirement for any adoption.</p>
            </div>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Testing &amp; Iteration</h4>
        <div style={cs.iterTimeline} className="cs-iter-timeline">
          <div style={{ ...cs.iterItem, background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.2)" }}>
            <span style={{ ...cs.iterDot, background: "#ef4444" }} />
            <div>
              <strong style={cs.iterLabel}>Round 1</strong>
              <p style={cs.iterText}>Standard enterprise UI — <span style={{ color: "#ef4444", fontWeight: 600 }}>failed all outdoor tests</span></p>
            </div>
          </div>
          <span style={cs.iterArrow}>→</span>
          <div style={{ ...cs.iterItem, background: "rgba(251,146,60,0.06)", borderColor: "rgba(251,146,60,0.2)" }}>
            <span style={{ ...cs.iterDot, background: "#f97316" }} />
            <div>
              <strong style={cs.iterLabel}>Round 2</strong>
              <p style={cs.iterText}>High-contrast redesign — <span style={{ color: "#f97316", fontWeight: 600 }}>touch targets still too small</span></p>
            </div>
          </div>
          <span style={cs.iterArrow}>→</span>
          <div style={{ ...cs.iterItem, background: "rgba(48,207,208,0.07)", borderColor: "rgba(48,207,208,0.25)" }}>
            <span style={{ ...cs.iterDot, background: "#30cfd0" }} />
            <div>
              <strong style={cs.iterLabel}>Round 3 (Final)</strong>
              <p style={cs.iterText}>Full Field Mode with glove-optimised targets — <span style={{ color: "#30cfd0", fontWeight: 600 }}>zero input errors in pilot</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div style={{ ...cs.section, background: "#fafaf8" }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: cyan }}>✏️ Design Process</p>
        <h3 style={cs.sectionTitle}>The Messy Middle</h3>
        <p style={cs.sectionIntro}>Before zero input errors, there were three rounds of failures. The standard UX playbook did not survive its first contact with a field engineer at 50 metres.</p>

        {/* Wrong belief */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: "4px solid #ef4444", borderRadius: "10px", padding: "1.5rem 1.75rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#ef4444", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 600 }}>What I Believed at the Start</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.45, marginBottom: "0.75rem" }}>
            "Good UX principles are universal. High contrast and clear labels will be enough for outdoor use."
          </p>
          <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>I designed the first version at my desk using standard accessibility guidelines. WCAG AA contrast ratios. Clear icons. Logical navigation. In a lab setting it tested well. In a field test at noon in direct sunlight with safety gloves, it was completely unusable.</p>
        </div>

        {/* 3 directions */}
        <h4 style={cs.subsectionTitle}>3 Interface Approaches — Only One Survived the Field</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "2rem" }} className="cs-three-col">
          <div style={{ background: "#fff", border: "1px solid #fecaca", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#ef4444", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>ROUND 1 — FAILED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Standard Enterprise UI</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>WCAG AA compliant, standard touch targets, clean layout. Failed every outdoor test. Engineers could not read the screen and missed every tap with gloves on.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #fed7aa", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97316", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#f97316", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>ROUND 2 — PARTIAL</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>High-Contrast Redesign</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Pushed contrast far beyond WCAG minimums, increased font sizes. Screen was readable — but touch targets were still too small for insulated gloves. Error rate remained high.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#22c55e", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>ROUND 3 — SHIPPED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Full Field Mode</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Minimum 48px touch targets, single primary action per screen, glove-optimised spacing. Zero input errors in the 3-month pilot.</p>
          </div>
        </div>

        {/* Feature iteration */}
        <h4 style={cs.subsectionTitle}>How the Anomaly Severity Display Evolved</h4>
        <p style={cs.sectionIntro}>Engineers refused to act on outputs they could not understand. It took 4 iterations to find the right language.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }} className="cs-four-col">
          {[
            { v: "v1", label: "Raw confidence scores", result: "Not trusted", color: "#ef4444", note: "87.3% confidence meant nothing to a non-specialist engineer" },
            { v: "v2", label: "Traffic light system", result: "Ambiguous", color: "#f97316", note: "Red/amber/green without context — engineers did not know what action to take" },
            { v: "v3", label: "Severity + action prompt", result: "Better", color: "#eab308", note: "Told engineers what was wrong but not how urgent. Decisions still delayed." },
            { v: "v4", label: "Plain-language + urgency + action", result: "92% trust", color: "#22c55e", note: "Critical: Replace within 30 days. Engineers acted immediately without consulting anyone." },
          ].map((item) => (
            <div key={item.v} style={{ background: "#fff", border: `1px solid ${item.color}44`, borderTop: `3px solid ${item.color}`, borderRadius: "8px", padding: "1rem" }}>
              <div style={{ fontSize: "0.68rem", fontFamily: "'DM Mono', monospace", color: item.color, fontWeight: 700, marginBottom: "0.4rem", letterSpacing: "0.06em" }}>{item.v.toUpperCase()}</div>
              <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.35rem", lineHeight: 1.35 }}>{item.label}</p>
              <p style={{ fontSize: "0.92rem", fontWeight: 700, color: item.color, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.4rem" }}>{item.result}</p>
              <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>

        {/* The conflict */}
        <div style={{ background: darkBg, borderRadius: "12px", padding: "1.75rem 2rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: cyan, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 600 }}>The Decision That Almost Did Not Happen</p>
          <p style={{ fontSize: "1.02rem", fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, marginBottom: "1rem" }}>
            The safety team wanted to add a mandatory confirmation step before every drone flight — a full checklist screen that engineers had to complete before launching.
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            Their concern was completely valid from a compliance perspective. But testing showed that a multi-step pre-flight screen at height, in wind, with gloves, took over 4 minutes and introduced more errors than it prevented — engineers rushed through it to get it done.
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            The solution: convert the checklist into a single summary screen with large visual indicators, completable in under 60 seconds. Safety team approved it after seeing the error-rate comparison data from both versions.
          </p>
          <div style={{ background: "rgba(48,207,208,0.08)", border: "1px solid rgba(48,207,208,0.2)", borderRadius: "8px", padding: "1rem 1.25rem" }}>
            <p style={{ fontSize: "0.88rem", color: cyan, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: 0, fontStyle: "italic" }}>
              Data, not opinion, resolved the disagreement. We made it a rule: every internal design debate would be settled by testing, not seniority.
            </p>
          </div>
        </div>

        {/* Principle */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>📐</span>
          <div>
            <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 600 }}>DOCUMENTED DESIGN PRINCIPLE</p>
            <p style={{ fontSize: "0.95rem", color: "#1A1A1A", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: 0, fontStyle: "italic" }}>
              "Design for the worst possible conditions first. If it works in direct sunlight with gloves at 50 metres, it will work anywhere."
            </p>
            <p style={{ fontSize: "0.78rem", color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", margin: "0.5rem 0 0" }}>This became the baseline for every usability test conducted on the platform.</p>
          </div>
        </div>
      </div>

      {/* Full-width case study image */}
      <div style={{ width: "100%", margin: "0 0 0 0", lineHeight: 0 }}>
        <img
          src="/images/hmtdash-mockup.png"
          alt="Case study mockup"
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </div>

      {/* Section 4: Business Impact */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: cyan }}>📈 Business Impact</p>
        <h3 style={cs.sectionTitle}>Measurable Results</h3>
        <div style={cs.impactGroups}>
          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>⚡ Operational Efficiency</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>75%</span>
                <span style={cs.impactDesc}>Faster Inspection Cycles<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>vs. traditional climbing inspection</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>8min</span>
                <span style={cs.impactDesc}>Pre-Mission Setup<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Down from 45 minutes</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>6x</span>
                <span style={cs.impactDesc}>More Towers Per Day<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Per engineer per shift</small></span>
              </div>
            </div>
          </div>
          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>💰 Cost &amp; Safety</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>85%</span>
                <span style={cs.impactDesc}>Cost Reduction<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>vs. helicopter-based surveys</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>0</span>
                <span style={cs.impactDesc}>Missed Critical Anomalies<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>During 3-month pilot</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>100%</span>
                <span style={cs.impactDesc}>Climb-Free Inspection<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Eliminated high-risk manual access</small></span>
              </div>
            </div>
          </div>
          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>🤖 AI Adoption</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>92%</span>
                <span style={cs.impactDesc}>Engineer Trust Score<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>For AI recommendations</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>4hrs</span>
                <span style={cs.impactDesc}>Paperwork Eliminated<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Per day per engineer</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: cyan }}>78</span>
                <span style={cs.impactDesc}>SUS Score<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Up from 41 (legacy system)</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: User Feedback */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: cyan }}>💬 User Feedback</p>
        <h3 style={cs.sectionTitle}>In Their Own Words</h3>
        <div style={cs.quotesGrid} className="cs-quotes-grid">
          <div style={cs.userQuote}>I can actually read this screen in the field. The big buttons work with my gloves. This is the first tool that was clearly built for people like me.</div>
          <div style={cs.userQuote}>The AI used to show me a wall of numbers I did not understand. Now it just tells me what is wrong and how serious it is. I trust it now.</div>
          <div style={cs.userQuote}>I used to spend 4 hours writing reports after a full day in the field. Now I tap one button and it is done before I get back to the vehicle.</div>
        </div>
      </div>

      {/* Section 6: Key Learnings */}
      <div style={{ ...cs.section, background: "#f8fafc" }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: cyan }}>💡 Key Learnings &amp; Reflection</p>
        <h3 style={cs.sectionTitle}>What We Learned</h3>
        <div style={cs.learningsGrid} className="cs-learnings-grid">
          <div style={cs.learningsCol}>
            <h4 style={{ ...cs.learningsColTitle, borderColor: cyan }}>What Worked</h4>
            <ul style={cs.caseList}>
              <li style={cs.caseListItem}>Site visits were the single most valuable research method — nothing in the office could replicate the reality of field conditions</li>
              <li style={cs.caseListItem}>Simulated outdoor usability testing (sunlight, gloves, time pressure) caught critical issues that lab testing completely missed</li>
              <li style={cs.caseListItem}>Plain-language AI explanations over technical confidence scores — engineers acted on recommendations they could understand</li>
              <li style={cs.caseListItem}>Two-mode design (Field Mode vs. Desktop Mode) resolved the tension between simplicity for engineers and depth for managers</li>
            </ul>
          </div>
          <div style={cs.learningsCol}>
            <h4 style={{ ...cs.learningsColTitle, borderColor: cyan }}>What I Would Change</h4>
            <ul style={cs.caseList}>
              <li style={cs.caseListItem}>Involve safety officers earlier — their regulatory requirements shaped 30% of the final design and were discovered too late</li>
              <li style={cs.caseListItem}>Test offline sync edge cases from day one — data loss in the field is catastrophic and we found sync bugs only in late testing</li>
              <li style={cs.caseListItem}>Design the reporting template in parallel with the inspection flow — late changes to report format caused three rounds of rework</li>
            </ul>
          </div>
        </div>
        <div style={cs.takeaway}>
          <span style={cs.takeawayIcon}>🎯</span>
          <div>
            <strong style={cs.takeawayTitle}>Core Takeaway</strong>
            <p style={cs.takeawayText}>The most important design research you can do is go where your users actually work. A desk-based designer cannot imagine the reality of using software at 50 metres in the wind. Getting into the field transformed every design decision and produced a product that engineers genuinely trusted with their safety.</p>
          </div>
        </div>
      </div>

    </div>
  );
}


/* ─── Rocket Uniface Case Study ──────────────────────────── */
function RocketUnifaceCaseStudy() {
  const purple = "#764ba2";
  const darkBg = "#120a1e";

  return (
    <div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a0533 0%, #3b1068 50%, #764ba2 100%)", color: "white", padding: "3.5rem 3rem 3rem", position: "relative", overflow: "hidden" }} className="cs-hero">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(118,75,162,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(118,75,162,0.1) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
        <div style={cs.heroInner}>
          <span style={{ ...cs.pill, background: "rgba(118,75,162,0.25)", border: "1px solid rgba(118,75,162,0.5)", color: "#e8d5ff" }}>Design System · Enterprise UX · Low-Code Platform</span>
          <h2 style={cs.heroTitle}>Rocket Uniface UX</h2>
          <p style={cs.heroSub}>Rocket Software — Modernising a 40-Year-Old Enterprise Platform</p>
          <p style={{ ...cs.heroTagline, color: "#c4a0ff" }}>65% Faster Dev Cycles &amp; $15K–$50K Licensing Eliminated Per Client</p>
          <div style={cs.resultBand}>
            <p style={cs.resultText}>
              I led the UX modernisation of Rocket Uniface — a mission-critical enterprise platform used by global banks, insurers, and government agencies for 40 years. The challenge was to adopt <strong>Microsoft Fluent Design System</strong> and build a custom widget framework that satisfied both veteran power users who had decades of muscle memory and new developers who expected modern tooling.
            </p>
          </div>
          <div style={cs.metricsRow} className="cs-metrics">
            <div style={cs.metric}>
              <span style={cs.metricNum}>65%</span>
              <span style={cs.metricLabel}>Faster Dev Cycles</span>
              <span style={cs.metricSub}>For enterprise teams post-launch</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>$50K</span>
              <span style={cs.metricLabel}>Licensing Saved</span>
              <span style={cs.metricSub}>Per client per year</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>3</span>
              <span style={cs.metricLabel}>Product Lines</span>
              <span style={cs.metricSub}>Adopted the design system</span>
            </div>
            <div style={cs.metric}>
              <span style={cs.metricNum}>40yr</span>
              <span style={cs.metricLabel}>Platform Legacy</span>
              <span style={cs.metricSub}>Modernised without disruption</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div style={styles.detailStatsStrip} className="detail-stats-strip">
        <div className="detail-stat-cell" style={{ ...styles.detailStatCell, borderRight: "1px solid rgba(0,0,0,0.07)" }}>
          <span style={styles.detailStatCellLabel}>Role</span>
          <span style={styles.detailStatCellValue}>Senior UX Designer P4 / Product design Lead</span>
        </div>
        <div className="detail-stat-cell" style={{ ...styles.detailStatCell, borderRight: "1px solid rgba(0,0,0,0.07)" }}>
          <span style={styles.detailStatCellLabel}>Duration</span>
          <span style={styles.detailStatCellValue}>Ongoing (2021 – Present)</span>
        </div>
        <div className="detail-stat-cell" style={styles.detailStatCell}>
          <span style={styles.detailStatCellLabel}>Team</span>
          <span style={styles.detailStatCellValue}>Rocket Software — Global Team</span>
        </div>
      </div>

      {/* Section 1: The Final Solution */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: purple }}>🚀 The Final Solution</p>
        <h3 style={cs.sectionTitle}>What We Built</h3>
        <p style={cs.sectionIntro}>A Fluent Design-based UX system and extensible widget framework that lets enterprise organisations build fully branded, production-grade applications inside Rocket Uniface — without writing UI code or paying for third-party component libraries.</p>
        <div style={cs.solCards}>

          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>01</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Fluent Design System Foundation <span style={{ ...cs.solTag, background: "rgba(118,75,162,0.12)", color: purple }}>Core Achievement</span></h4>
              <p style={cs.solBody}>Adopted Microsoft Fluent Design System as the visual language for the entire platform — standardising typography, colour tokens, spacing, motion, and elevation rules across all Uniface UI surfaces.</p>
              <div style={{ ...cs.solResult, color: purple, background: "rgba(118,75,162,0.08)", border: "1px solid rgba(118,75,162,0.2)" }}>Result: Eliminated visual inconsistency across 200+ legacy UI components</div>
            </div>
          </div>

          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>02</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Custom Widget Framework</h4>
              <p style={cs.solBody}>A composable component architecture that allows organisations to create their own branded widgets — extending the platform with custom UI blocks without requiring engineering support or platform source code access.</p>
            </div>
          </div>

          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>03</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Progressive Disclosure Navigation</h4>
              <p style={cs.solBody}>Redesigned the platform navigation to reveal advanced features progressively — protecting the mental models of veteran users while surfacing modern workflows naturally for new developers joining the platform.</p>
            </div>
          </div>

          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>04</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>AI-Assisted Development Interface</h4>
              <p style={cs.solBody}>Integrated AI code suggestions and contextual help directly into the low-code editor — reducing the learning curve for new developers and accelerating application build time for experienced teams.</p>
            </div>
          </div>

          <div style={cs.solCard} className="sol-card">
            <div style={cs.solNum}>05</div>
            <div style={{ flex: 1 }}>
              <h4 style={cs.solTitle}>Unified Component Documentation Hub</h4>
              <p style={cs.solBody}>A living design system documentation site — spec sheets, usage guidelines, code snippets, and Figma tokens — enabling distributed global teams to build consistently without centralised design reviews.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: Product Strategy */}
      <div style={{ ...cs.section, background: darkBg }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: "#c4a0ff" }}>🎯 The Design Strategy</p>
        <h3 style={{ ...cs.sectionTitle, color: "#fff" }}>Modernising Without Breaking Trust</h3>
        <p style={{ ...cs.sectionIntro, color: "rgba(255,255,255,0.8)" }}>
          Rocket Uniface customers had built entire banking and insurance systems over decades. A wrong move could destroy years of user trust and trigger enterprise churn.
        </p>
        <div style={cs.strategyGrid} className="cs-strategy-grid">
          <div style={cs.strategyBlock}>
            <h4 style={{ ...cs.strategyHeading, color: "#c4a0ff" }}>The Strategic Pivot</h4>
            <p style={{ ...cs.sectionIntro, color: "rgba(255,255,255,0.75)", marginTop: "0.5rem", marginBottom: 0 }}>
              Early proposals called for a complete UI overhaul. Research revealed this would alienate power users who had decades of keyboard shortcuts, mental models, and macros built around the existing interface. The pivot: <strong>Additive Modernisation</strong> — layer the new design system on top of existing patterns, never removing, always extending.
            </p>
          </div>
          <div style={cs.strategyBlock}>
            <h4 style={{ ...cs.strategyHeading, color: "#c4a0ff" }}>The Critical Trade-off</h4>
            <div style={cs.tradeoffItem}>
              <span style={{ ...cs.tradeoffLabel, color: "#c4a0ff" }}>The Tension</span>
              <span style={cs.tradeoffText}>New developers expected a modern, visual-first low-code experience. Veterans expected every existing keyboard shortcut and workflow to remain exactly as it was.</span>
            </div>
            <div style={{ ...cs.tradeoffItem, marginTop: "0.9rem" }}>
              <span style={{ ...cs.tradeoffLabel, color: "#c4a0ff" }}>The Decision</span>
              <span style={cs.tradeoffText}>Dual interaction layers — a new visual component panel for discovery-based development, with the full legacy keyboard-driven interface preserved and accessible at all times beneath it.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: The Journey */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: purple }}>🔍 The Journey</p>
        <h3 style={cs.sectionTitle}>How We Got There</h3>
        <div style={cs.journeyGrid} className="cs-journey-grid">
          <div style={cs.journeyCard}>
            <div style={cs.journeyIcon}>⚡</div>
            <h4 style={cs.journeyTitle}>The Challenge &amp; Pain Points</h4>
            <p style={cs.sectionIntro}>Uniface was losing enterprise deals to modern low-code competitors. New developers found it intimidating and dated. But existing customers — global banks and insurers — could not afford disruption to mission-critical workflows.</p>
            <div style={cs.quote}>
              <p style={cs.quoteText}>I have used this platform for 22 years. Every time they change something I lose a week of productivity relearning workflows my hands know by reflex.</p>
              <cite style={cs.quoteCite}>— Senior Enterprise Developer, Banking</cite>
            </div>
            <div style={cs.quote}>
              <p style={cs.quoteText}>We evaluated Uniface against three competitors. The interface looked like it was from 2005. Our junior devs refused to learn it.</p>
              <cite style={cs.quoteCite}>— IT Director, Insurance Company</cite>
            </div>
            <div style={cs.quote}>
              <p style={cs.quoteText}>We pay three different UI licensing fees on top of the Uniface license. Our CTO wants them gone. We need this to do it natively.</p>
              <cite style={cs.quoteCite}>— Enterprise Architect, Government Agency</cite>
            </div>
          </div>
          <div style={{ ...cs.journeyCard, background: "rgba(118,75,162,0.04)", border: "1px solid rgba(118,75,162,0.15)" }}>
            <div style={cs.journeyIcon}>💡</div>
            <h4 style={cs.journeyTitle}>The Aha Moment</h4>
            <p style={cs.sectionIntro}>After shadowing a veteran developer, I watched them navigate using only keyboard shortcuts — never touching the mouse — at extraordinary speed. A full visual redesign would have destroyed this entirely.</p>
            <p style={{ ...cs.sectionIntro, marginTop: "0.75rem" }}>The insight: <strong>veteran users and new users were using completely different mental models of the same product.</strong> The solution was not to pick one — it was to design an interface that served both simultaneously, with neither group aware of the compromise.</p>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Research Methods</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🎤</span>
            <div>
              <strong style={cs.researchTitle}>Stakeholder Interviews</strong>
              <p style={cs.researchDesc}>31 interviews across enterprise clients, developers, and product leadership across 6 countries</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>👀</span>
            <div>
              <strong style={cs.researchTitle}>Contextual Inquiry</strong>
              <p style={cs.researchDesc}>Shadowed 14 developers — both veterans and new hires — during live application development sessions</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🏆</span>
            <div>
              <strong style={cs.researchTitle}>Competitive Teardowns</strong>
              <p style={cs.researchDesc}>Analysed OutSystems, Mendix, and ServiceNow to identify the modern patterns customers expected</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>📋</span>
            <div>
              <strong style={cs.researchTitle}>Component Audit</strong>
              <p style={cs.researchDesc}>Full audit of 200+ existing UI components to identify consolidation and modernisation opportunities</p>
            </div>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Key Insights</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🧠</span>
            <div>
              <strong style={cs.researchTitle}>Legacy is a Feature, Not a Bug</strong>
              <p style={cs.researchDesc}>For veteran users, decades of muscle memory represent enormous value. Disrupting it is not modernisation — it is destruction of a competitive advantage.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🎨</span>
            <div>
              <strong style={cs.researchTitle}>Visual Polish Drives Procurement</strong>
              <p style={cs.researchDesc}>Enterprise procurement decisions are made by IT directors and CTOs who judge on first impressions. Modern aesthetics directly influenced deal outcomes.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🧩</span>
            <div>
              <strong style={cs.researchTitle}>Extensibility Over Completeness</strong>
              <p style={cs.researchDesc}>Customers wanted to build their own branded components. A closed system — however polished — would still require expensive third-party licensing.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🌍</span>
            <div>
              <strong style={cs.researchTitle}>Global Teams Need Async Design Alignment</strong>
              <p style={cs.researchDesc}>With developers across 12 time zones, a shared living documentation system was more valuable than any design review process.</p>
            </div>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>4 Pillars of the Design System</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🔷</span>
            <div>
              <strong style={cs.researchTitle}>Consistency</strong>
              <p style={cs.researchDesc}>Every token, component, and pattern standardised across all product lines — one source of truth.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>🔌</span>
            <div>
              <strong style={cs.researchTitle}>Extensibility</strong>
              <p style={cs.researchDesc}>The system was built to be extended, not forked — customers add to it without breaking the foundation.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>♿</span>
            <div>
              <strong style={cs.researchTitle}>Accessibility</strong>
              <p style={cs.researchDesc}>WCAG 2.1 AA compliance built in at token level — not retrofitted as an afterthought.</p>
            </div>
          </div>
          <div style={cs.researchItem}>
            <span style={cs.researchIcon}>⚡</span>
            <div>
              <strong style={cs.researchTitle}>Performance</strong>
              <p style={cs.researchDesc}>Every component optimised for Uniface runtime — no visual system that looked good in Figma but degraded in production.</p>
            </div>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Testing &amp; Iteration</h4>
        <div style={cs.iterTimeline} className="cs-iter-timeline">
          <div style={{ ...cs.iterItem, background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.2)" }}>
            <span style={{ ...cs.iterDot, background: "#ef4444" }} />
            <div>
              <strong style={cs.iterLabel}>Phase 1</strong>
              <p style={cs.iterText}>Full visual overhaul proposed — <span style={{ color: "#ef4444", fontWeight: 600 }}>veteran users rejected it entirely</span></p>
            </div>
          </div>
          <span style={cs.iterArrow}>→</span>
          <div style={{ ...cs.iterItem, background: "rgba(251,146,60,0.06)", borderColor: "rgba(251,146,60,0.2)" }}>
            <span style={{ ...cs.iterDot, background: "#f97316" }} />
            <div>
              <strong style={cs.iterLabel}>Phase 2</strong>
              <p style={cs.iterText}>Fluent skin on top of legacy layout — <span style={{ color: "#f97316", fontWeight: 600 }}>new users still found it confusing</span></p>
            </div>
          </div>
          <span style={cs.iterArrow}>→</span>
          <div style={{ ...cs.iterItem, background: "rgba(118,75,162,0.08)", borderColor: "rgba(118,75,162,0.3)" }}>
            <span style={{ ...cs.iterDot, background: "#764ba2" }} />
            <div>
              <strong style={cs.iterLabel}>Phase 3 (Final)</strong>
              <p style={cs.iterText}>Dual interaction layers with shared Fluent tokens — <span style={{ color: "#764ba2", fontWeight: 600 }}>both user groups satisfied</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div style={{ ...cs.section, background: "#fafaf8" }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: purple }}>✏️ Design Process</p>
        <h3 style={cs.sectionTitle}>The Messy Middle</h3>
        <p style={cs.sectionIntro}>Before the dual interaction layers, there were two rejected overhauls and one stakeholder confrontation that nearly ended the project entirely.</p>

        {/* Wrong belief */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: "4px solid #ef4444", borderRadius: "10px", padding: "1.5rem 1.75rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#ef4444", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 600 }}>What I Believed at the Start</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.45, marginBottom: "0.75rem" }}>
            "A modern redesign will win over even the most resistant veteran users once they see how much better it looks."
          </p>
          <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>This was my initial assumption and the internal stakeholder expectation. We designed a comprehensive Fluent-based overhaul. Clean, modern, beautifully consistent. The first veteran user test lasted 11 minutes before the participant stood up and said they would never use it.</p>
        </div>

        {/* 3 directions */}
        <h4 style={cs.subsectionTitle}>3 Modernisation Approaches — Only One Survived</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "2rem" }} className="cs-three-col">
          <div style={{ background: "#fff", border: "1px solid #fecaca", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#ef4444", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>PHASE 1 — REJECTED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Full Visual Overhaul</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Complete Fluent redesign — new navigation, new component layout, new interaction patterns. Veteran users rejected it entirely. 22 years of muscle memory destroyed in one update.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #fed7aa", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97316", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#f97316", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>PHASE 2 — PARTIAL</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Fluent Skin on Legacy Layout</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Applied Fluent visual tokens to the existing layout without changing structure. Veterans were comfortable — but new users still found the navigation confusing and dated.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#22c55e", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>PHASE 3 — SHIPPED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Dual Interaction Layers</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Legacy keyboard interface preserved exactly. New visual component panel layered on top. Both user groups use the same product — neither is aware of the compromise.</p>
          </div>
        </div>

        {/* Feature iteration */}
        <h4 style={cs.subsectionTitle}>How the Widget Framework Naming Convention Was Fixed</h4>
        <p style={cs.sectionIntro}>The framework worked technically — but engineers refused to use it because the naming felt alien. It took 4 rounds to get language veterans would adopt.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }} className="cs-four-col">
          {[
            { v: "v1", label: "Abstract design tokens", result: "Ignored", color: "#ef4444", note: "color-primary-500 meant nothing to engineers used to legacy property names" },
            { v: "v2", label: "Fluent standard naming", result: "Partial adoption", color: "#f97316", note: "Microsoft naming felt foreign to a Uniface-native team" },
            { v: "v3", label: "Hybrid legacy-Fluent names", result: "Confused", color: "#eab308", note: "Two naming systems running in parallel created inconsistency" },
            { v: "v4", label: "Veteran-led token naming", result: "Full adoption", color: "#22c55e", note: "Veteran developers renamed the tokens in their own language. Adoption went from 30% to 94%." },
          ].map((item) => (
            <div key={item.v} style={{ background: "#fff", border: `1px solid ${item.color}44`, borderTop: `3px solid ${item.color}`, borderRadius: "8px", padding: "1rem" }}>
              <div style={{ fontSize: "0.68rem", fontFamily: "'DM Mono', monospace", color: item.color, fontWeight: 700, marginBottom: "0.4rem", letterSpacing: "0.06em" }}>{item.v.toUpperCase()}</div>
              <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.35rem", lineHeight: 1.35 }}>{item.label}</p>
              <p style={{ fontSize: "0.92rem", fontWeight: 700, color: item.color, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.4rem" }}>{item.result}</p>
              <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>

        {/* The conflict */}
        <div style={{ background: darkBg, borderRadius: "12px", padding: "1.75rem 2rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#c4a0ff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 600 }}>The Decision That Almost Did Not Happen</p>
          <p style={{ fontSize: "1.02rem", fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, marginBottom: "1rem" }}>
            A senior product stakeholder wanted to force all users onto the new interface after a 6-month transition window. Veterans would have to adapt or leave.
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            The business case was understandable — maintaining two interaction layers indefinitely adds engineering complexity. But the customers at risk were banks and insurers running mission-critical systems. Losing even two enterprise accounts would have cost more than years of dual-layer maintenance.
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            I presented the churn risk analysis alongside a long-term roadmap showing how the dual-layer approach would become a single layer naturally as veteran users retired over time. The forced migration was cancelled.
          </p>
          <div style={{ background: "rgba(196,160,255,0.08)", border: "1px solid rgba(196,160,255,0.2)", borderRadius: "8px", padding: "1rem 1.25rem" }}>
            <p style={{ fontSize: "0.88rem", color: "#c4a0ff", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: 0, fontStyle: "italic" }}>
              Design decisions that affect long-standing enterprise relationships require business evidence, not just UX rationale. I learned to bring both to every stakeholder conversation.
            </p>
          </div>
        </div>

        {/* Principle */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>📐</span>
          <div>
            <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 600 }}>DOCUMENTED DESIGN PRINCIPLE</p>
            <p style={{ fontSize: "0.95rem", color: "#1A1A1A", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: 0, fontStyle: "italic" }}>
              "Never remove what users rely on. Add alongside, never instead of. Retirement happens naturally — it should never be forced."
            </p>
            <p style={{ fontSize: "0.78rem", color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", margin: "0.5rem 0 0" }}>Applied to every subsequent feature deprecation decision across the platform.</p>
          </div>
        </div>
      </div>

      {/* Full-width case study image */}
      <div style={{ width: "100%", margin: "0 0 0 0", lineHeight: 0 }}>
        <img
          src="/images/unifaceide-mockup.png"
          alt="Case study mockup"
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </div>

      {/* Section 4: Business Impact */}
      <div style={cs.section} className="cs-section">
        <p style={{ fontSize: "0.78rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: purple, textTransform: "uppercase", fontWeight: 600 }}>📈 Business Impact</p>
        <h3 style={cs.sectionTitle}>Measurable Results</h3>
        <div style={cs.impactGroups}>

          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>⚡ Developer Productivity</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>65%</span>
                <span style={cs.impactDesc}>Faster App Development<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Enterprise teams post-launch</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>3x</span>
                <span style={cs.impactDesc}>Faster Component Reuse<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Via widget framework</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>82</span>
                <span style={cs.impactDesc}>SUS Score<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Up from 54 (legacy UI)</small></span>
              </div>
            </div>
          </div>

          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>💰 Cost &amp; Commercial Impact</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>$50K</span>
                <span style={cs.impactDesc}>Licensing Eliminated<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Per client per year</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>3</span>
                <span style={cs.impactDesc}>Product Lines Adopted<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Design system rollout</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>$2.3M</span>
                <span style={cs.impactDesc}>Annual Savings Delivered<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Operational efficiency</small></span>
              </div>
            </div>
          </div>

          <div style={cs.impactGroup}>
            <div style={cs.impactGroupLabel}>🎯 Adoption &amp; Quality</div>
            <div style={cs.impactStats} className="cs-impact-stats">
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>200+</span>
                <span style={cs.impactDesc}>Components Standardised<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Across entire platform</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>0</span>
                <span style={cs.impactDesc}>Veteran User Churn<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>During modernisation</small></span>
              </div>
              <div style={cs.impactStat}>
                <span style={{ ...cs.impactNum, color: purple }}>AA</span>
                <span style={cs.impactDesc}>WCAG Compliance<small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>Full 2.1 accessibility</small></span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section 5: User Feedback */}
      <div style={cs.section} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: purple }}>💬 User Feedback</p>
        <h3 style={cs.sectionTitle}>In Their Own Words</h3>
        <div style={cs.quotesGrid} className="cs-quotes-grid">
          <div style={cs.userQuote}>It looks like a completely different product — but all my shortcuts still work. I did not have to relearn anything. That is genuinely impressive.</div>
          <div style={cs.userQuote}>We cancelled two third-party UI library subscriptions on the day we went live. That alone paid for the upgrade project in under six months.</div>
          <div style={cs.userQuote}>Our junior developers actually want to use it now. We went from struggling to recruit Uniface talent to having people ask to work on it.</div>
        </div>
      </div>

      {/* Section 6: Key Learnings */}
      <div style={{ ...cs.section, background: "#f8fafc" }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: purple }}>💡 Key Learnings &amp; Reflection</p>
        <h3 style={cs.sectionTitle}>What We Learned</h3>
        <div style={cs.learningsGrid} className="cs-learnings-grid">
          <div style={cs.learningsCol}>
            <h4 style={{ ...cs.learningsColTitle, borderColor: purple }}>What Worked</h4>
            <ul style={cs.caseList}>
              <li style={cs.caseListItem}><strong>Additive modernisation</strong> — layering new on top of old, never removing, preserved veteran trust while delivering the modern feel new users expected</li>
              <li style={cs.caseListItem}>Adopting Fluent Design System as the foundation gave the team a shared visual language and dramatically reduced design decision overhead</li>
              <li style={cs.caseListItem}>Building the widget framework for extensibility from day one — customers became design system contributors rather than workaround creators</li>
              <li style={cs.caseListItem}>Living documentation reduced design review requests by 70% — teams in different time zones could ship consistently without waiting for feedback</li>
            </ul>
          </div>
          <div style={cs.learningsCol}>
            <h4 style={{ ...cs.learningsColTitle, borderColor: purple }}>What I Would Change</h4>
            <ul style={cs.caseList}>
              <li style={cs.caseListItem}>Involve veteran users in token naming — early naming conventions felt too abstract for engineers who thought in legacy component terms</li>
              <li style={cs.caseListItem}>Define the accessibility standard earlier — retrofitting WCAG AA compliance onto 40 components mid-project added two months to the timeline</li>
              <li style={cs.caseListItem}>Build the documentation hub in parallel, not after — teams started building before the docs were ready and created inconsistencies that took months to correct</li>
            </ul>
          </div>
        </div>
        <div style={cs.takeaway}>
          <span style={cs.takeawayIcon}>🎯</span>
          <div>
            <strong style={cs.takeawayTitle}>Core Takeaway</strong>
            <p style={cs.takeawayText}>Modernising a platform that people have relied on for 40 years is not a design challenge — it is a trust challenge. The visual system was secondary. The real work was understanding exactly which aspects of the legacy experience represented genuine user value and protecting them with the same care as any new feature.</p>
          </div>
        </div>
      </div>

    </div>
  );
}


/* ─── Generic detail layout (projects 1–3) ───────────────── */
function GenericDetail({ project }) {
  return (
    <div>
      <div style={{ ...styles.detailHero, background: project.gradient }}>
        <div style={styles.detailHeroInner}>
          <div style={styles.detailMetaRow}>
            <span style={styles.detailMetaChipDark}>{project.category}</span>
            <span style={styles.detailMetaChipDark}>{project.year}</span>
          </div>
          <div style={styles.detailEmoji}>{project.emoji}</div>
          <h1 style={{ ...styles.detailTitle, color: "#fff" }}>{project.title}</h1>
          <p style={{ ...styles.detailSubtitle, color: "rgba(255,255,255,0.85)" }}>{project.description}</p>
        </div>
      </div>
      <div style={styles.detailStatsStrip} className="detail-stats-strip">
        {[{ label: "Role", value: project.role }, { label: "Duration", value: project.duration }, { label: "Team", value: project.team }].map((s, i) => (
          <div key={s.label} className="detail-stat-cell" style={{ ...styles.detailStatCell, borderRight: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
            <span style={styles.detailStatCellLabel}>{s.label}</span>
            <span style={styles.detailStatCellValue}>{s.value}</span>
          </div>
        ))}
      </div>
      <div style={styles.detailBody} className="detail-body-pad">
        <div style={styles.detailSection}>
          <p style={styles.detailSectionLabel}>Overview</p>
          <p style={styles.detailBodyText}>{project.longDescription}</p>
        </div>
        <div style={styles.detailSection}>
          <p style={styles.detailSectionLabel}>Key Highlights</p>
          <div style={styles.highlightList}>
            {project.highlights.map((h, i) => (
              <div key={i} style={styles.highlightItem}>
                <span style={{ ...styles.highlightDot, background: project.accent }} />
                <span style={styles.highlightText}>{h}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ ...styles.outcomeBlock, borderLeftColor: project.accent }}>
          <span style={styles.outcomeLabel}>Outcome</span>
          <p style={styles.outcomeText}>{project.outcome}</p>
        </div>
        <div style={styles.detailSection}>
          <p style={styles.detailSectionLabel}>Tech &amp; Tools</p>
          <div style={styles.tagsList}>
            {project.tags.map((t) => <span key={t} style={{ ...styles.detailTag, background: `${project.accent}28` }}>{t}</span>)}
          </div>
        </div>
        <div style={styles.linksRow}>
          {project.links.map((l) => <a key={l.label} href={l.href} style={styles.detailLink}>{l.label} ↗</a>)}
        </div>
      </div>
    </div>
  );
}

/* ─── DocuBuilder Full Case Study Component ───────────────── */
function DocuBuilderCaseStudy() {
  return (
    <div>
      {/* Dark hero */}
      <div style={cs.hero} className="cs-hero">
        <div style={cs.heroBgGrid} />
        <div style={cs.heroInner}>
          <span style={cs.pill}>Financial Services · Enterprise Platform</span>
          <h2 style={cs.heroTitle}>Cloud-Based Automated Publishing Platform</h2>
          <p style={cs.heroSub}>DocuBilder- Redesigning the Future of FinTech</p>
          <p style={cs.heroTagline}>78% Faster Document Creation &amp; $2.3M Annual Savings</p>
          <div style={cs.resultBand}>
            <p style={cs.resultText}>
              I led the UX transformation of a fragmented, manual reporting process into an <strong>automated publishing engine</strong>. By shifting the product strategy from <strong>"Black Box Automation"</strong> to <strong>"Transparent Control,"</strong> we reduced the document lifecycle from <strong>7 hours to 90 minutes</strong> while maintaining 100% compliance.
            </p>
          </div>
          <div style={cs.metricsRow} className="cs-metrics">
            {[
              { num: "78%", label: "Faster Production", sub: "7 hrs → 1.5 hrs" },
              { num: "89%", label: "Error Reduction", sub: "Eliminated copy-paste risk" },
              { num: "$2.3M", label: "Annual ROI", sub: "Operational efficiency" },
              { num: "92%", label: "Feature Adoption", sub: "First 30 days" },
            ].map((m) => (
              <div key={m.label} style={cs.metric}>
                <span style={cs.metricNum}>{m.num}</span>
                <span style={cs.metricLabel}>{m.label}</span>
                <span style={cs.metricSub}>{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ── Stats Strip ── */}
      <div style={styles.detailStatsStrip} className="detail-stats-strip">
        {[{ label: "Role", value: "Lead Product & UX Designer" }, { label: "Duration", value: "12 Months" }, { label: "Team", value: "8-Person Product Team" }].map((s, i) => (
          <div key={s.label} className="detail-stat-cell" style={{ ...styles.detailStatCell, borderRight: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
            <span style={styles.detailStatCellLabel}>{s.label}</span>
            <span style={styles.detailStatCellValue}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* ── Section 1: Final Solution ── */}
      <div style={cs.section} className="cs-section">
        <p style={cs.sectionLabel}>🚀 The Final Solution</p>
        <h3 style={cs.sectionTitle}>How it Works</h3>
        <p style={cs.sectionIntro}>Before we dive into the process, here is the final system designed to bridge the gap between complex data and compliant design.</p>
        <div style={cs.solCards}>
          {[
            { num: "01", title: "Data Field Inspector", tag: "Trust through Transparency", body: "To solve user resistance to automation, I designed a hover-state inspector that shows the exact source, timestamp, and transformation logic for every data point.", result: "The Result: Manual verification time dropped by 67%" },
            { num: "02", title: "Smart Template Editor", tag: null, body: "A drag-and-drop builder with natural language conditional rules, allowing non-technical marketing teams to update 200+ templates in minutes rather than weeks.", result: null },
            { num: "03", title: "Unified Review Dashboard", tag: null, body: "A Kanban-style hub that eliminates context-switching by merging compliance, data, and design reviews into a single collaborative view.", result: null },
            { num: "04", title: "Intelligent Change Tracking", tag: null, body: "Side-by-side diff view highlighting only data/content changes, ignoring formatting noise.", result: null },
            { num: "05", title: "Automated Workflow Engine", tag: null, body: "Rule-based routing with notifications, parallel approvals, and complete audit trails.", result: null },
          ].map((s) => (
            <div key={s.num} style={cs.solCard} className="sol-card">
              <div style={cs.solNum}>{s.num}</div>
              <div style={{ flex: 1 }}>
                <h4 style={cs.solTitle}>{s.title}{s.tag && <span style={cs.solTag}>{s.tag}</span>}</h4>
                <p style={cs.solBody}>{s.body}</p>
                {s.result && <div style={cs.solResult}>{s.result}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 2: Product Strategy ── */}
      <div style={{ ...cs.section, background: "#0A0E27" }} className="cs-section">
        <p style={{ ...cs.sectionLabel, color: "#FFB088" }}>🎯 The Product Strategy</p>
        <h3 style={{ ...cs.sectionTitle, color: "#fff" }}>Balancing Speed &amp; Trust</h3>
        <p style={{ ...cs.sectionIntro, color: "rgba(255,255,255,0.8)" }}>
          At a senior level, my role wasn't just to design screens — it was to solve the <strong>"Automation Paradox."</strong>
        </p>
        <div style={cs.strategyGrid} className="cs-strategy-grid">
          <div style={cs.strategyBlock}>
            <h4 style={cs.strategyHeading}>The Strategic Pivot</h4>
            <p style={{ ...cs.sectionIntro, color: "rgba(255,255,255,0.72)", marginTop: "0.5rem", marginBottom: 0 }}>
              The original business goal was to <em>"automate everything."</em> However, my research revealed that Investment Analysts didn't trust a system they couldn't audit. I pivoted the strategy to <strong>"Assisted Automation."</strong>
            </p>
          </div>
          <div style={cs.strategyBlock}>
            <h4 style={cs.strategyHeading}>The Strategic Trade-off</h4>
            <div style={cs.tradeoffItem}>
              <span style={cs.tradeoffLabel}>The Problem</span>
              <span style={cs.tradeoffText}>Power users wanted total customization; Business users wanted speed.</span>
            </div>
            <div style={{ ...cs.tradeoffItem, marginTop: "0.9rem" }}>
              <span style={cs.tradeoffLabel}>The Decision</span>
              <span style={cs.tradeoffText}>I moved layout logic to a Global Design System layer — analysts stay on-brand automatically while designers focus on high-level strategy rather than fixing typos.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 3: The Journey ── */}
      <div style={cs.section} className="cs-section">
        <p style={cs.sectionLabel}>🔍 The Journey</p>
        <h3 style={cs.sectionTitle}>How We Got There</h3>
        <div style={cs.journeyGrid} className="cs-journey-grid">
          <div style={cs.journeyCard}>
            <div style={cs.journeyIcon}>⚡</div>
            <h4 style={cs.journeyTitle}>The Challenge &amp; Pain Points</h4>
            <p style={cs.sectionIntro}>Analysts were spending 4+ hours daily manually moving data from Bloomberg into InDesign. One typo could result in massive compliance fines and lost client trust.</p>
            {[
              { q: "\"I spend 4 hours copying data from Bloomberg into InDesign. One error and I lose client trust.\"", who: "— Investment Analyst" },
              { q: "\"I can't tell what changed between versions without comparing PDFs line by line.\"", who: "— Compliance Officer" },
              { q: "\"Updating 200+ templates when branding changes takes 3 weeks.\"", who: "— Marketing Operations Manager" },
            ].map((qt) => (
              <div key={qt.who} style={cs.quote}>
                <p style={cs.quoteText}>{qt.q}</p>
                <cite style={cs.quoteCite}>{qt.who}</cite>
              </div>
            ))}
          </div>
          <div style={{ ...cs.journeyCard, ...cs.journeyCardAccent }}>
            <div style={cs.journeyIcon}>💡</div>
            <h4 style={cs.journeyTitle}>The "Aha!" Moment</h4>
            <p style={cs.sectionIntro}>Through <strong>18 in-depth interviews</strong> and contextual inquiries, I discovered the core blocker: <strong>Risk.</strong></p>
            <p style={{ ...cs.sectionIntro, marginTop: "0.75rem" }}>Users did not hate the work; they hated the <em>vulnerability</em> of not knowing if the automated data was correct. This insight led directly to the creation of the <strong>Data Field Inspector.</strong></p>
          </div>
        </div>

        <h4 style={cs.subsectionTitle}>Research Methods</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          {[
            { icon: "🎤", title: "In-Depth Interviews", desc: "18 interviews across 4 financial institutions" },
            { icon: "👀", title: "Contextual Inquiry", desc: "Shadowed 12 users during actual document production" },
            { icon: "📊", title: "Data Analysis", desc: "Analyzed 450+ support tickets from legacy systems" },
            { icon: "📔", title: "Diary Studies", desc: "Tracked 8 participants over 2 weeks" },
          ].map((r) => (
            <div key={r.title} style={cs.researchItem}>
              <span style={cs.researchIcon}>{r.icon}</span>
              <div>
                <strong style={cs.researchTitle}>{r.title}</strong>
                <p style={cs.researchDesc}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>


        {/* 4 Pillars of Insight */}
        <h4 style={cs.subsectionTitle}>The 4 Pillars of Insight</h4>
        <div style={cs.researchGrid} className="cs-research-grid">
          {[
            { icon: "🔍", label: "Trust Over Speed", text: "Users wouldn't adopt automation if they couldn't verify the 'black box' logic." },
            { icon: "⚖️", label: "The Control Paradox", text: "Users wanted automation, but they feared losing the ability to override it." },
            { icon: "🔄", label: "Context Switching Kills", text: "Toggling between 7 different tools was the primary cause of fatigue." },
            { icon: "🌐", label: "Asynchronous Collaboration", text: "Global teams needed clear status visibility over real-time chat." },
          ].map((p) => (
            <div key={p.label} style={cs.researchItem}>
              <span style={cs.researchIcon}>{p.icon}</span>
              <div>
                <strong style={cs.researchTitle}>{p.label}</strong>
                <p style={cs.researchDesc}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Design Principles */}
        <h4 style={cs.subsectionTitle}>Design Principles</h4>
        <p style={{ ...cs.sectionIntro, marginBottom: "1rem" }}>Based on the research, I established five guiding principles that governed every design decision:</p>
        <div style={cs.researchGrid} className="cs-research-grid">
          {[
            { icon: "👁", label: "Transparent by Default", text: "Show the 'why' behind every automated number." },
            { icon: "↩️", label: "Forgiving and Reversible", text: "Every action must be undoable to reduce user anxiety." },
            { icon: "🎯", label: "Context over Clicks", text: "Bring the tools to the data, not the other way around." },
            { icon: "◎", label: "Progressive Disclosure", text: "Hide advanced features until they are needed to keep the UI clean." },
            { icon: "✦", label: "Clarity over Cleverness", text: "Use simple, functional language over complex financial jargon." },
          ].map((p) => (
            <div key={p.label} style={cs.researchItem}>
              <span style={cs.researchIcon}>{p.icon}</span>
              <div>
                <strong style={cs.researchTitle}>{p.label}</strong>
                <p style={cs.researchDesc}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h4 style={cs.subsectionTitle}>Testing &amp; Iteration — 5 Rounds</h4>
        <div style={cs.iterTimeline} className="cs-iter-timeline">
          <div style={{ ...cs.iterItem, background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.2)" }}>
            <span style={{ ...cs.iterDot, background: "#ef4444" }} />
            <div>
              <strong style={cs.iterLabel}>Iteration 1</strong>
              <p style={cs.iterText}>Data Inspector hidden in a menu → <span style={{ color: "#ef4444", fontWeight: 600 }}>20% discoverability</span></p>
            </div>
          </div>
          <span style={cs.iterArrow}>→</span>
          <div style={{ ...cs.iterItem, background: "rgba(34,197,94,0.07)", borderColor: "rgba(34,197,94,0.25)" }}>
            <span style={{ ...cs.iterDot, background: "#22c55e" }} />
            <div>
              <strong style={cs.iterLabel}>Final Version</strong>
              <p style={cs.iterText}>Progressive Disclosure hover-state, placed where the eye naturally rests → <span style={{ color: "#22c55e", fontWeight: 600 }}>85% discoverability</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div style={{ ...cs.section, background: "#fafaf8" }} className="cs-section">
        <p style={cs.sectionLabel}>✏️ Design Process</p>
        <h3 style={cs.sectionTitle}>The Messy Middle</h3>
        <p style={cs.sectionIntro}>Before the polished final system, there were wrong turns, rejected directions, and one internal conflict that nearly killed the most important feature.</p>

        {/* Wrong belief */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: "4px solid #ef4444", borderRadius: "10px", padding: "1.5rem 1.75rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#ef4444", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 600 }}>What I Believed at the Start</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.45, marginBottom: "0.75rem" }}>
            "If we automate everything and make it fast, analysts will love it."
          </p>
          <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>This was the brief, the stakeholder expectation, and my starting assumption. I began designing a fully automated pipeline — data pulled from Bloomberg, formatted automatically, ready to send. It was technically impressive. Nobody wanted to use it.</p>
        </div>

        {/* 3 directions */}
        <h4 style={cs.subsectionTitle}>3 Directions Explored — Only One Survived</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "2rem" }} className="cs-three-col">
          <div style={{ background: "#fff", border: "1px solid #fecaca", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#ef4444", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>DIRECTION A — REJECTED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Full Black Box Automation</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Complete automation, no data source visibility. Fast, clean — and completely distrusted. Round 1 testing killed it. Users refused to sign off on numbers they could not verify.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #fed7aa", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97316", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#f97316", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>DIRECTION B — REJECTED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Manual with Automation Suggestions</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Automation as a passive assistant, humans do everything. Users felt safer but hated the speed. It was barely faster than the old process. Rejected in round 2 — defeated the business case entirely.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <strong style={{ fontSize: "0.78rem", color: "#22c55e", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>DIRECTION C — SHIPPED</strong>
            </div>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>Transparent Assisted Automation</p>
            <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Automation does the work. The Data Field Inspector shows exactly where every number came from. Users stay in control without doing the manual labour. Passed every round of testing.</p>
          </div>
        </div>

        {/* The inspector evolution */}
        <h4 style={cs.subsectionTitle}>How the Data Field Inspector Actually Got Built</h4>
        <p style={{ ...cs.sectionIntro, marginBottom: "1.25rem" }}>The inspector was the most iterated feature in the project — 4 distinct forms before it worked.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }} className="cs-four-col">
          {[
            { v: "v1", label: "Buried in sidebar menu", result: "12% found it", color: "#ef4444", note: "Nobody opened the menu during normal workflow" },
            { v: "v2", label: "Floating tooltip on click", result: "34% found it", color: "#f97316", note: "Users did not know data cells were clickable" },
            { v: "v3", label: "Persistent icon on hover", result: "67% found it", color: "#eab308", note: "Close — but icon competed with data visually" },
            { v: "v4", label: "Progressive disclosure at eye-line", result: "85% found it", color: "#22c55e", note: "Appears exactly where the eye rests on the document" },
          ].map((item) => (
            <div key={item.v} style={{ background: "#fff", border: `1px solid ${item.color}44`, borderTop: `3px solid ${item.color}`, borderRadius: "8px", padding: "1rem" }}>
              <div style={{ fontSize: "0.68rem", fontFamily: "'DM Mono', monospace", color: item.color, fontWeight: 700, marginBottom: "0.4rem", letterSpacing: "0.06em" }}>{item.v.toUpperCase()}</div>
              <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.35rem", lineHeight: 1.35 }}>{item.label}</p>
              <p style={{ fontSize: "0.92rem", fontWeight: 700, color: item.color, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.4rem" }}>{item.result}</p>
              <p style={{ fontSize: "0.78rem", color: "#94a3b8", lineHeight: 1.55, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>

        {/* The conflict */}
        <div style={{ background: "#0A0E27", borderRadius: "12px", padding: "1.75rem 2rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#FFB088", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 600 }}>The Decision That Almost Did Not Happen</p>
          <p style={{ fontSize: "1.02rem", fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, marginBottom: "1rem" }}>
            The compliance team wanted the inspector removed entirely. They argued it added visual noise to documents that needed to look clean for client delivery.
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            This was a legitimate concern — the inspector was visible during document editing, and compliance officers were worried clients might see draft annotations. I had two options: remove the feature, or solve the real problem.
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            I proposed a single toggle: <strong style={{ color: "#FFB088" }}>Edit Mode</strong> vs <strong style={{ color: "#FFB088" }}>Delivery Mode</strong>. In Edit Mode the inspector is fully visible. In Delivery Mode it disappears completely — the document looks exactly as the client receives it.
          </p>
          <div style={{ background: "rgba(255,176,136,0.1)", border: "1px solid rgba(255,176,136,0.25)", borderRadius: "8px", padding: "1rem 1.25rem" }}>
            <p style={{ fontSize: "0.88rem", color: "#FFB088", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: 0, fontStyle: "italic" }}>
              This single decision unblocked the feature, resolved the compliance objection, and became one of the most praised aspects of the final product. The toggle was never in the original scope.
            </p>
          </div>
        </div>

        {/* Figma annotation */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>📐</span>
          <div>
            <p style={{ fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 600 }}>Documented in Figma Component Notes</p>
            <p style={{ fontSize: "0.95rem", color: "#1A1A1A", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", margin: 0, fontStyle: "italic" }}>
              "Rule: Every automated data point must show its source on hover. No exceptions. If the data cannot be traced, it should not be automated."
            </p>
            <p style={{ fontSize: "0.78rem", color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", marginTop: "0.5rem", margin: "0.5rem 0 0" }}>This principle was adopted as an official product rule and applied to every subsequent feature built on the automation engine.</p>
          </div>
        </div>
      </div>

      {/* Full-width case study image */}
      <div style={{ width: "100%", margin: "0 0 0 0", lineHeight: 0 }}>
        <img
          src="/images/apptura-mockup.png"
          alt="Case study mockup"
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </div>

      {/* ── Section 4: Business Impact ── */}
      <div style={cs.section} className="cs-section">
        <p style={cs.sectionLabel}>📈 Business Impact</p>
        <h3 style={cs.sectionTitle}>Measurable Results</h3>
        <div style={cs.impactGroups}>
          {[
            { groupLabel: "⏱ Time Savings", stats: [{ num: "78%", desc: "Document Creation Faster", sub: "5–7 hrs → 1.5 hrs" }, { num: "68%", desc: "Review Time Faster", sub: "25 min → 8 min" }, { num: "81%", desc: "Template Creation Faster", sub: "4 hrs → 45 min" }] },
            { groupLabel: "✅ Quality", stats: [{ num: "89%", desc: "Error Reduction", sub: "7.2% → 0.8%" }, { num: "0", desc: "Reissuances", sub: "Post-launch" }, { num: "43%", desc: "More Compliance Errors Caught", sub: "" }] },
            { groupLabel: "💼 Business", stats: [{ num: "$2.3M", desc: "Annual Cost Savings", sub: "" }, { num: "92%", desc: "Feature Adoption", sub: "Month 1" }, { num: "81", desc: "SUS Score", sub: "Up from 52" }] },
          ].map((group) => (
            <div key={group.groupLabel} style={cs.impactGroup}>
              <div style={cs.impactGroupLabel}>{group.groupLabel}</div>
              <div style={cs.impactStats} className="cs-impact-stats">
                {group.stats.map((s) => (
                  <div key={s.desc} style={cs.impactStat}>
                    <span style={cs.impactNum}>{s.num}</span>
                    <span style={cs.impactDesc}>
                      {s.desc}
                      {s.sub && <small style={{ display: "block", fontSize: "0.68rem", color: "#94a3b8", marginTop: "2px" }}>{s.sub}</small>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 5: User Feedback ── */}
      <div style={cs.section} className="cs-section">
        <p style={cs.sectionLabel}>💬 User Feedback</p>
        <h3 style={cs.sectionTitle}>In Their Own Words</h3>
        <div style={cs.quotesGrid} className="cs-quotes-grid">
          {[
            "\"I finally have time to analyze data instead of copying it around. The data inspector changed everything.\"",
            "\"Review time dropped from 25 minutes to 8. I catch more errors because I'm not distracted by formatting noise.\"",
            "\"We launched 8 new funds last quarter without adding staff.\"",
          ].map((q, i) => <div key={i} style={cs.userQuote}>{q}</div>)}
        </div>
      </div>

      {/* ── Section 6: Key Learnings ── */}
      <div style={{ ...cs.section, background: "#f8fafc" }} className="cs-section">
        <p style={cs.sectionLabel}>💡 Key Learnings &amp; Reflection</p>
        <h3 style={cs.sectionTitle}>What We Learned</h3>
        <div style={cs.learningsGrid} className="cs-learnings-grid">
          <div style={cs.learningsCol}>
            <h4 style={cs.learningsColTitle}>What Worked</h4>
            <ul style={cs.caseList}>
              <li style={cs.caseListItem}>Making automation <strong>"forgiving"</strong> and <strong>"reversible"</strong> turned internal skeptics into the product's biggest advocates</li>
              <li style={cs.caseListItem}>Progressive disclosure served both novice and power users — basic/advanced modes hit the sweet spot</li>
              <li style={cs.caseListItem}>5 rounds of testing caught critical issues before they became expensive</li>
            </ul>
          </div>
          <div style={cs.learningsCol}>
            <h4 style={cs.learningsColTitle}>What I Would Change</h4>
            <ul style={cs.caseList}>
              <li style={cs.caseListItem}>Involve compliance stakeholders in initial wireframing — early feedback could have saved <strong>3 weeks of rework</strong> on audit trail exports</li>
              <li style={cs.caseListItem}>Test with real data from day 1 (revealed 12 edge cases wed missed)</li>
              <li style={cs.caseListItem}>Plan for mobile use cases upfront</li>
            </ul>
          </div>
        </div>
        <div style={cs.takeaway}>
          <span style={cs.takeawayIcon}>🎯</span>
          <div>
            <strong style={cs.takeawayTitle}>Core Takeaway</strong>
            <p style={cs.takeawayText}>Enterprise UX is not just about aesthetics — it is about building trust in the systems people rely on for their livelihoods. Making automation transparent, controllable, and reversible is what separates adoption from resistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ──────────────────────────────────────── */
function SectionLabel({ label }) {
  return (
    <div style={styles.sectionLabelWrap}>
      <div style={styles.sectionLabelLine} />
      <span style={styles.sectionLabelText}>{label}</span>
    </div>
  );
}

function ProjectCard({ project, index, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{ ...styles.projectCard, borderBottomColor: hov ? project.accent : "rgba(0,0,0,0.08)", transform: hov ? "translateY(-2px)" : "translateY(0)", transition: "all 0.3s ease", cursor: "pointer" }}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={styles.projectCardTop} className="project-card-top">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={styles.projectIndex}>0{index + 1}</span>
          <span style={styles.projectEmoji}>{project.emoji}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ ...styles.projectViewHint, opacity: hov ? 1 : 0, transform: hov ? "translateX(0)" : "translateX(-8px)", transition: "all 0.25s ease" }}>
            View case study →
          </span>
        </div>
      </div>
      <h3 style={styles.projectTitle}>{project.title}</h3>
      <p style={styles.projectDesc}>{project.description}</p>
      <div style={styles.projectTags}>
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} style={{ ...styles.projectTag, background: hov ? `${project.accent}28` : "rgba(0,0,0,0.04)" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, last }) {
  return (
    <div style={styles.timelineItem}>
      <div style={styles.timelineLeft}>
        <span style={styles.timelineYear}>{item.year}</span>
        {!last && <div style={styles.timelineLine} />}
      </div>
      <div style={styles.timelineRight}>
        <span style={styles.timelineRole}>{item.role}</span>
        <span style={styles.timelineCompany}>{item.company}</span>
        <p style={styles.timelineNote}>{item.note}</p>
      </div>
    </div>
  );
}

/* ─── DocuBuilder Case Study Styles ──────────────────────── */
const cs = {
  hero: { background: "linear-gradient(135deg, #0A0E27 0%, #1a2a5e 50%, #0f3460 100%)", color: "white", padding: "3.5rem 3rem 3rem", position: "relative", overflow: "hidden" },
  heroBgGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,107,53,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,53,0.06) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" },
  heroInner: { position: "relative", zIndex: 1 },
  pill: { display: "inline-block", background: "rgba(255,107,53,0.2)", border: "1px solid rgba(255,107,53,0.4)", color: "#e0f5ff", padding: "5px 16px", borderRadius: "50px", fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em", marginBottom: "1rem" },
  heroTitle: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 400, color: "white", marginBottom: "0.4rem", lineHeight: 1.15, letterSpacing: "-0.02em" },
  heroSub: { fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.3rem" },
  heroTagline: { fontSize: "1.05rem", fontWeight: 600, color: "#FF6B35", fontFamily: "'DM Mono', monospace", marginBottom: "1.5rem", letterSpacing: "0.01em" },
  resultBand: { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "4px solid #FF6B35", borderRadius: "8px", padding: "1.1rem 1.4rem", marginBottom: "1.75rem" },
  resultText: { fontSize: "0.97rem", lineHeight: 1.85, color: "rgba(255,255,255,0.95)", fontFamily: "'DM Sans', sans-serif", margin: 0 },
  metricsRow: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" },
  metric: { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "1.1rem 1rem", display: "flex", flexDirection: "column", gap: "4px" },
  metricNum: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "2rem", color: "#fff", lineHeight: 1 },
  metricLabel: { fontSize: "0.82rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.95)", letterSpacing: "0.01em" },
  metricSub: { fontSize: "0.78rem", fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.78)", letterSpacing: "0" },
  section: { padding: "2.5rem 3rem", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fff" },
  sectionDark: { background: "rgba(0,160,220,0.08)", border: "1px solid rgba(79,172,254,0.15)", borderRadius: "12px" },
  sectionLabel: { fontSize: "0.78rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "#FF6B35", textTransform: "uppercase", marginBottom: "0.5rem", display: "block" },
  sectionTitle: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", fontWeight: 400, color: "#1A1A1A", marginBottom: "0.6rem", letterSpacing: "-0.02em" },
  sectionIntro: { fontSize: "0.97rem", lineHeight: 1.85, color: "#374151", fontFamily: "'DM Sans', sans-serif", marginBottom: "1.5rem" },
  solCards: { display: "flex", flexDirection: "column" },
  solCard: { display: "flex", gap: "1.25rem", padding: "1.25rem 0", borderBottom: "1px solid rgba(0,0,0,0.06)", alignItems: "flex-start" },
  solNum: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.6rem", color: "#FF6B35", lineHeight: 1, minWidth: "32px", paddingTop: "0.15rem" },
  solTitle: { fontSize: "1rem", fontWeight: 600, color: "#1A1A1A", fontFamily: "'DM Mono', monospace", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" },
  solTag: { background: "rgba(255,107,53,0.1)", color: "#FF6B35", padding: "2px 8px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.04em" },
  solBody: { fontSize: "0.95rem", lineHeight: 1.8, color: "#374151", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" },
  solResult: { fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", color: "#16a34a", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)", padding: "0.35rem 0.7rem", borderRadius: "4px", display: "inline-block" },
  strategyGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginTop: "1rem" },
  strategyBlock: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "1.25rem" },
  strategyHeading: { fontSize: "0.9rem", fontWeight: 600, color: "#FFB088", fontFamily: "'DM Mono', monospace", marginBottom: "0.6rem", letterSpacing: "0.02em" },
  tradeoffItem: { display: "flex", flexDirection: "column", gap: "0.2rem" },
  tradeoffLabel: { fontSize: "0.68rem", fontFamily: "'DM Mono', monospace", color: "#FF6B35", letterSpacing: "0.08em", textTransform: "uppercase" },
  tradeoffText: { fontSize: "0.93rem", color: "rgba(255,255,255,0.88)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65 },
  journeyGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" },
  journeyCard: { background: "#F8F9FC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "1.5rem" },
  journeyCardAccent: { background: "rgba(255,107,53,0.04)", border: "1px solid rgba(255,107,53,0.15)" },
  journeyIcon: { fontSize: "1.5rem", marginBottom: "0.6rem" },
  journeyTitle: { fontSize: "0.97rem", fontWeight: 600, color: "#1A1A1A", fontFamily: "'DM Mono', monospace", marginBottom: "0.6rem", letterSpacing: "0.01em" },
  quote: { background: "#fff", border: "1px solid #E2E8F0", borderLeft: "3px solid #FF6B35", borderRadius: "6px", padding: "0.75rem 1rem", marginTop: "0.75rem" },
  quoteText: { fontSize: "0.92rem", fontStyle: "italic", color: "#374151", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, marginBottom: "0.2rem" },
  quoteCite: { fontSize: "0.74rem", fontFamily: "'DM Mono', monospace", color: "#FF6B35", fontStyle: "normal" },
  subsectionTitle: { fontSize: "0.8rem", fontFamily: "'DM Mono', monospace", color: "#1A1A1A", letterSpacing: "0.06em", marginBottom: "0.9rem", marginTop: "0.5rem", textTransform: "uppercase", display: "block" },
  researchGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2rem" },
  researchItem: { display: "flex", gap: "0.75rem", background: "#F8F9FC", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0.9rem", alignItems: "flex-start" },
  researchIcon: { fontSize: "1.2rem", marginTop: "2px" },
  researchTitle: { fontSize: "0.85rem", fontFamily: "'DM Mono', monospace", color: "#1A1A1A", display: "block", marginBottom: "0.2rem" },
  researchDesc: { fontSize: "0.88rem", fontFamily: "'DM Sans', sans-serif", color: "#444", margin: 0, lineHeight: 1.5 },
  iterTimeline: { display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" },
  iterItem: { display: "flex", gap: "0.75rem", border: "1px solid", borderRadius: "8px", padding: "0.9rem 1rem", flex: 1, alignItems: "flex-start" },
  iterDot: { width: "10px", height: "10px", borderRadius: "50%", marginTop: "4px", flexShrink: 0 },
  iterLabel: { fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", color: "#1A1A1A", display: "block", marginBottom: "0.2rem" },
  iterText: { fontSize: "0.88rem", fontFamily: "'DM Sans', sans-serif", color: "#444", lineHeight: 1.5 },
  iterArrow: { fontSize: "1.2rem", color: "#CBD5E1", flexShrink: 0 },
  impactGroups: { display: "flex", flexDirection: "column", gap: "1.75rem" },
  impactGroup: {},
  impactGroupLabel: { fontSize: "0.76rem", fontFamily: "'DM Mono', monospace", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" },
  impactStats: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" },
  impactStat: { background: "#F8F9FC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.3rem" },
  impactNum: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "2rem", color: "#FF6B35", lineHeight: 1 },
  impactDesc: { fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", color: "#374151", lineHeight: 1.4 },
  quotesGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" },
  userQuote: { background: "#F8F9FC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "1.25rem", fontSize: "0.97rem", fontStyle: "italic", color: "#374151", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65 },
  learningsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" },
  learningsCol: { background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "1.5rem" },
  learningsColTitle: { fontSize: "0.95rem", fontWeight: 600, color: "#1A1A1A", fontFamily: "'DM Mono', monospace", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "2px solid #FF6B35", letterSpacing: "0.02em", display: "block" },
  caseList: { listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" },
  caseListItem: { fontSize: "0.95rem", color: "#374151", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, paddingLeft: "1.4rem", position: "relative" },
  takeaway: { display: "flex", gap: "1rem", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "1.5rem", alignItems: "flex-start" },
  takeawayIcon: { fontSize: "1.5rem", flexShrink: 0 },
  takeawayTitle: { display: "block", fontSize: "0.88rem", fontFamily: "'DM Mono', monospace", color: "#1A1A1A", marginBottom: "0.5rem", letterSpacing: "0.02em" },
  takeawayText: { fontSize: "0.95rem", fontFamily: "'DM Sans', sans-serif", color: "#374151", lineHeight: 1.75, margin: 0 },
};



/* ─── Portfolio Styles ────────────────────────────────────── */
const styles = {
  root: { display: "flex", flexDirection: "column", height: "100vh", fontFamily: "'DM Serif Display', Georgia, serif", background: "#F7F5F2", color: "#1A1A1A", overflow: "hidden" },
  aside: { width: "220px", minWidth: "220px", display: "flex", flexDirection: "column", padding: "2.5rem 2rem", borderRight: "1px solid rgba(0,0,0,0.07)", background: "#F7F5F2", height: "100%", zIndex: 10, flexShrink: 0 },
  brand: { display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "3.5rem" },
  brandDot: { width: "8px", height: "8px", borderRadius: "50%", background: "#1A1A1A" },
  brandName: { fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", fontWeight: 500, letterSpacing: "0.04em" },
  nav: { display: "flex", flexDirection: "column", gap: "0.1rem", flex: 1 },
  navItem: { display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.55rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", position: "relative" },
  navItemActive: {},
  navNum: { fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#777", letterSpacing: "0.04em", minWidth: "18px" },
  navLabel: { fontSize: "0.92rem", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.01em", color: "#1A1A1A", fontWeight: 400 },
  navIndicator: { position: "absolute", right: "-2rem", width: "3px", height: "100%", background: "#1A1A1A", borderRadius: "2px" },
  asideFooter: { display: "flex", flexDirection: "column", gap: "0.25rem" },
  asideFooterText: { fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#777", letterSpacing: "0.03em" },
  rightPane: { flex: 1, position: "relative", overflow: "hidden" },
  main: { height: "100%", overflowY: "auto", scrollBehavior: "smooth" },
  section: { minHeight: "100vh", padding: "5rem 5rem 4rem 5rem", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: "1px solid rgba(0,0,0,0.05)", position: "relative" },
  heroInner: { maxWidth: "860px" },
  heroEyebrow: { fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", color: "#777", textTransform: "uppercase", marginBottom: "1.25rem" },
  heroTitle: { fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", lineHeight: 1.1, fontWeight: 400, marginBottom: "1.25rem", letterSpacing: "-0.02em" },
  heroTitleMuted: { color: "#888", fontSize: "clamp(1rem, 2vw, 1.4rem)", fontFamily: "'DM Mono', monospace", fontWeight: 400, letterSpacing: "0.01em" },
  heroBio: { fontSize: "1.05rem", lineHeight: 1.85, color: "#333", fontFamily: "'DM Sans', sans-serif", marginBottom: "2rem" },
  heroStats: { display: "flex", gap: "2.5rem", marginBottom: "2rem", flexWrap: "wrap" },
  heroStat: { display: "flex", flexDirection: "column", gap: "0.2rem" },
  heroStatNum: { fontSize: "1.8rem", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1 },
  heroStatLabel: { fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif", color: "#666", letterSpacing: "0.02em", textTransform: "uppercase", fontWeight: 400 },
  heroActions: { display: "flex", gap: "1rem", alignItems: "center" },
  btnPrimary: { background: "#1A1A1A", color: "#F7F5F2", border: "none", padding: "0.75rem 1.75rem", fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em", cursor: "pointer" },
  btnLink: { fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", color: "#555", letterSpacing: "0.05em", textDecoration: "none", padding: "0.75rem 0", opacity: 0.7 },
  heroScroll: { position: "absolute", bottom: "2.5rem", left: "5rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" },
  heroScrollLine: { display: "block", width: "1px", height: "40px", background: "#1A1A1A", opacity: 0.2 },
  heroScrollText: { fontSize: "0.62rem", fontFamily: "'DM Mono', monospace", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" },
  sectionLabelWrap: { display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" },
  sectionLabelLine: { width: "30px", height: "1px", background: "#1A1A1A", opacity: 0.3 },
  sectionLabelText: { fontSize: "0.76rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "#666", textTransform: "uppercase" },
  sectionTitle: { fontSize: "clamp(1.5rem, 2.8vw, 2.3rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: "0.75rem" },
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", marginBottom: "2rem", alignItems: "start" },
  bodyText: { fontSize: "1rem", lineHeight: 1.85, color: "#333", fontFamily: "'DM Sans', sans-serif" },
  skillsRow: { display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" },
  skillChip: { padding: "0.3rem 0.75rem", border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em", color: "#444" },
  statsRow: { display: "flex", gap: "3rem", borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "2rem" },
  statItem: { display: "flex", flexDirection: "column", gap: "0.25rem" },
  statNum: { fontSize: "1.8rem", fontWeight: 400, letterSpacing: "-0.02em" },
  statLabel: { fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#666", letterSpacing: "0.05em" },
  projectsHint: { fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", color: "#777", letterSpacing: "0.03em", marginTop: "0.5rem", marginBottom: "2rem" },
  projectsList: { display: "flex", flexDirection: "column" },
  projectCard: { padding: "2rem 0", borderBottom: "1px solid" },
  projectCardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" },
  projectIndex: { fontSize: "0.78rem", fontFamily: "'DM Sans', sans-serif", color: "#888", fontWeight: 500, letterSpacing: "0.01em" },
  projectEmoji: { fontSize: "1.1rem" },
  projectCategory: { fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#777", letterSpacing: "0.05em" },
  projectViewHint: { fontSize: "0.82rem", fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A", fontWeight: 600, letterSpacing: "0.01em" },
  projectTitle: { fontSize: "1.45rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: "0.6rem" },
  projectDesc: { fontSize: "0.95rem", lineHeight: 1.75, color: "#444", fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" },
  projectTags: { display: "flex", gap: "0.4rem", flexWrap: "wrap" },
  projectTag: { padding: "0.25rem 0.6rem", fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", color: "#666", letterSpacing: "0.05em", transition: "background 0.25s" },
  timeline: { display: "flex", flexDirection: "column" },
  timelineItem: { display: "flex", gap: "2.5rem", paddingBottom: "2.25rem" },
  timelineLeft: { display: "flex", flexDirection: "column", alignItems: "center", width: "56px", minWidth: "56px" },
  timelineYear: { fontSize: "0.82rem", fontFamily: "'DM Sans', sans-serif", color: "#444", fontWeight: 500, letterSpacing: "0.01em", marginBottom: "0.75rem", textAlign: "center", lineHeight: 1.4 },
  timelineLine: { flex: 1, width: "1px", background: "rgba(0,0,0,0.1)", minHeight: "30px" },
  timelineRight: { display: "flex", flexDirection: "column", paddingBottom: "0.5rem" },
  timelineRole: { fontSize: "1.08rem", fontWeight: 500, marginBottom: "0.2rem" },
  timelineCompany: { fontSize: "0.78rem", fontFamily: "'DM Mono', monospace", color: "#555", letterSpacing: "0.04em", marginBottom: "0.5rem" },
  timelineNote: { fontSize: "0.95rem", lineHeight: 1.8, color: "#444", fontFamily: "'DM Sans', sans-serif" },
  footerSection: { display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1A1A1A", color: "#F7F5F2", padding: "4rem 5rem 3rem 5rem" },
  footerInner: { display: "flex", flexDirection: "column" },
  footerEyebrow: { fontSize: "0.78rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.07em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", marginBottom: "1.25rem" },
  footerTitle: { fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.25rem", color: "#F7F5F2" },
  footerSubText: { fontSize: "1rem", fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "2rem" },
  footerEmail: { fontSize: "1rem", fontFamily: "'DM Mono', monospace", color: "#C8B8A2", textDecoration: "none", letterSpacing: "0.03em", marginBottom: "1.5rem", display: "inline-block", borderBottom: "1px solid rgba(200,184,162,0.3)", paddingBottom: "0.25rem" },
  footerMeta: { display: "flex", gap: "2rem", marginBottom: "2.5rem" },
  footerMetaItem: { fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#555", letterSpacing: "0.04em" },
  footerLinks: { display: "flex", gap: "2rem" },
  footerLink: { fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", color: "#555", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" },
  footerBar: { display: "flex", justifyContent: "space-between", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.07)" },
  footerBarText: { fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", color: "#333", letterSpacing: "0.05em" },
  detailWrapper: { position: "absolute", inset: 0, background: "#F7F5F2", display: "flex", flexDirection: "column", zIndex: 20, height: "100%" },
  detailTopBar: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.1rem 3rem", borderBottom: "1px solid rgba(0,0,0,0.07)", flexShrink: 0, background: "#F7F5F2" },
  detailBackBtn: { display: "flex", alignItems: "center", gap: "0.6rem", background: "none", border: "none", cursor: "pointer", fontSize: "0.75rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em", color: "#555", padding: 0 },
  detailCounterText: { fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", color: "#CCC", letterSpacing: "0.08em" },
  detailScroll: { flex: 1, overflowY: "auto" },
  detailHero: { padding: "3.5rem 3rem 3rem", position: "relative", overflow: "hidden" },
  detailHeroInner: { maxWidth: "680px", position: "relative", zIndex: 1 },
  detailMetaRow: { display: "flex", gap: "0.5rem", marginBottom: "1rem" },
  detailMetaChipDark: { padding: "0.2rem 0.65rem", border: "1px solid rgba(255,255,255,0.3)", fontSize: "0.65rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.07em", color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.1)" },
  detailEmoji: { fontSize: "2.5rem", marginBottom: "0.75rem" },
  detailTitle: { fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1rem" },
  detailSubtitle: { fontSize: "0.92rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" },
  detailStatsStrip: { display: "flex", borderBottom: "1px solid rgba(0,0,0,0.07)" },
  detailStatCell: { flex: 1, padding: "1.25rem 3rem", display: "flex", flexDirection: "column", gap: "0.3rem" },
  detailStatCellLabel: { fontSize: "0.6rem", fontFamily: "'DM Mono', monospace", color: "#AAA", letterSpacing: "0.1em", textTransform: "uppercase" },
  detailStatCellValue: { fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", color: "#1A1A1A" },
  detailBody: { padding: "2.5rem 3rem 4rem", maxWidth: "760px" },
  detailSection: { marginBottom: "2.25rem" },
  detailSectionLabel: { fontSize: "0.74rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "#777", textTransform: "uppercase", marginBottom: "0.9rem" },
  detailBodyText: { fontSize: "0.9rem", lineHeight: 1.85, color: "#444", fontFamily: "'DM Sans', sans-serif" },
  highlightList: { display: "flex", flexDirection: "column", gap: "0.7rem" },
  highlightItem: { display: "flex", alignItems: "flex-start", gap: "0.8rem" },
  highlightDot: { width: "6px", height: "6px", borderRadius: "50%", marginTop: "0.42rem", flexShrink: 0 },
  highlightText: { fontSize: "0.87rem", lineHeight: 1.6, color: "#444", fontFamily: "'DM Sans', sans-serif" },
  outcomeBlock: { padding: "1.4rem 1.75rem", borderLeft: "3px solid", background: "rgba(0,0,0,0.02)", marginBottom: "2.25rem" },
  outcomeLabel: { display: "block", fontSize: "0.6rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", color: "#AAA", textTransform: "uppercase", marginBottom: "0.45rem" },
  outcomeText: { fontSize: "1.05rem", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.5, color: "#1A1A1A", fontFamily: "'DM Serif Display', Georgia, serif" },
  tagsList: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
  detailTag: { padding: "0.3rem 0.75rem", fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", color: "#555", letterSpacing: "0.05em" },
  linksRow: { display: "flex", gap: "1.5rem", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.07)" },
  detailLink: { fontSize: "0.78rem", fontFamily: "'DM Mono', monospace", color: "#1A1A1A", textDecoration: "none", letterSpacing: "0.05em", borderBottom: "1px solid rgba(0,0,0,0.18)", paddingBottom: "0.15rem" },
  detailNav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.9rem 3rem", borderTop: "1px solid rgba(0,0,0,0.07)", flexShrink: 0, background: "#F7F5F2" },
  detailNavBtn: { display: "flex", alignItems: "center", gap: "0.9rem", background: "none", border: "none", cursor: "pointer", padding: "0.4rem 0" },
  navArrow: { fontSize: "1.1rem", color: "#1A1A1A", lineHeight: 1 },
  navBtnInfo: { display: "flex", flexDirection: "column", gap: "0.12rem" },
  navBtnSublabel: { fontSize: "0.58rem", fontFamily: "'DM Mono', monospace", color: "#AAA", letterSpacing: "0.1em", textTransform: "uppercase" },
  navBtnTitle: { fontSize: "0.78rem", fontFamily: "'DM Serif Display', Georgia, serif", color: "#1A1A1A", letterSpacing: "-0.01em", maxWidth: "180px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  dotRow: { display: "flex", alignItems: "center", gap: "0.4rem" },
  dot: { height: "6px", borderRadius: "3px", transition: "all 0.3s ease" },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 2px; }
  .fade-up { animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  .scroll-line { animation: scrollPulse 2s ease-in-out infinite; }
  @keyframes scrollPulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.6; } }
  .detail-enter { animation: detailSlide 0.38s cubic-bezier(0.22, 1, 0.36, 1) both; }
  @keyframes detailSlide { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  button:hover { opacity: 0.75; }
  a[href]:hover { opacity: 0.7; }
  li { list-style: none; }
  li::before { content: '✓'; position: absolute; left: 0; color: #FF6B35; font-weight: bold; }

  /* ── Mobile Nav Overlay ── */
  .mobile-header { display: none; }
  .mobile-nav-overlay {
    position: fixed; inset: 0; background: #F7F5F2; z-index: 300;
    display: flex; flex-direction: column; padding: 1.5rem;
    animation: fadeUp 0.25s ease both;
  }
  .mobile-nav-overlay-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
  .mobile-nav-btn {
    background: none; border: none; cursor: pointer; width: 100%;
    font-family: 'DM Serif Display', Georgia, serif; font-size: 1.8rem;
    color: #1A1A1A; text-align: left; padding: 1rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    display: flex; align-items: center; gap: 1rem;
  }
  .mobile-nav-btn .num { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: #999; letter-spacing: 0.06em; }
  .hamburger {
    background: none; border: none; cursor: pointer; padding: 0.3rem;
    display: flex; flex-direction: column; gap: 5px; z-index: 301;
  }
  .hamburger span { display: block; width: 22px; height: 1.5px; background: #1A1A1A; transition: all 0.28s ease; }
  .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
  .mobile-brand { display: flex; align-items: center; gap: 0.5rem; }
  .mobile-brand-dot { width: 7px; height: 7px; border-radius: 50%; background: #1A1A1A; }
  .mobile-brand-name { font-family: 'DM Mono', monospace; font-size: 0.78rem; letter-spacing: 0.03em; color: #1A1A1A; }

  /* ── Tablet ≤1024px ── */
  @media (max-width: 1024px) {
    .aside-desktop { width: 180px !important; min-width: 180px !important; padding: 2rem 1.5rem !important; }
    .cs-strategy-grid { grid-template-columns: 1fr !important; }
    .cs-journey-grid { grid-template-columns: 1fr !important; }
    .cs-quotes-grid { grid-template-columns: 1fr !important; }
    .cs-learnings-grid { grid-template-columns: 1fr !important; }
    .cs-metrics { grid-template-columns: repeat(2,1fr) !important; }
    .about-grid { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
  }

  /* ── Mobile ≤768px ── */
  @media (max-width: 900px) {
    .cs-three-col { grid-template-columns: 1fr !important; }
    .cs-four-col { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 768px) {
    .aside-desktop { display: none !important; }
    .mobile-header {
      display: flex !important; align-items: center; justify-content: space-between;
      padding: 1rem 1.5rem; border-bottom: 1px solid rgba(0,0,0,0.07);
      background: #F7F5F2; position: sticky; top: 0; z-index: 50; flex-shrink: 0;
      width: 100%;
    }
    .section-pad { padding: 2.5rem 1.5rem 2rem !important; min-height: unset !important; }
    .footer-section { padding: 2.5rem 1.5rem 2rem !important; min-height: unset !important; }
    .hero-title { font-size: 2rem !important; }
    .hero-scroll { display: none !important; }
    .about-grid { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
    .stats-row { flex-wrap: wrap !important; gap: 1.25rem !important; }
    .footer-meta { flex-direction: column !important; gap: 0.4rem !important; }
    .footer-bar { flex-direction: column !important; gap: 0.4rem !important; }
    .cs-hero { padding: 2rem 1.5rem !important; }
    .cs-section { padding: 1.75rem 1.5rem !important; }
    .cs-metrics { grid-template-columns: repeat(2,1fr) !important; gap: 0.75rem !important; }
    .cs-strategy-grid { grid-template-columns: 1fr !important; }
    .cs-journey-grid { grid-template-columns: 1fr !important; }
    .cs-research-grid { grid-template-columns: 1fr !important; }
    .cs-impact-stats { grid-template-columns: repeat(2,1fr) !important; }
    .cs-quotes-grid { grid-template-columns: 1fr !important; }
    .cs-learnings-grid { grid-template-columns: 1fr !important; }
    .cs-iter-timeline { flex-direction: column !important; }
    .sol-card { flex-direction: column !important; }
    .detail-top-bar { padding: 0.85rem 1.25rem !important; }
    .detail-stats-strip { flex-direction: column !important; }
    .detail-stat-cell { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.07) !important; }
    .detail-body-pad { padding: 1.5rem 1.25rem 3rem !important; }
    .detail-nav-pad { padding: 0.75rem 1rem !important; }
    .nav-btn-title { display: none !important; }
    .dot-row { display: none !important; }
  }

  @media (max-width: 480px) {
    .section-pad { padding: 2rem 1.25rem !important; }
    .cs-section { padding: 1.5rem 1.25rem !important; }
    .cs-metrics { grid-template-columns: 1fr 1fr !important; }
  }
`
