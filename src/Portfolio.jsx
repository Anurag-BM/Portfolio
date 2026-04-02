import { useState, useEffect, useRef } from "react";
import {
  PROFILE, HERO, STATS, ABOUT, EXPERIENCE, ACHIEVEMENTS,
  EDUCATION, SKILLS, TERMINAL_LINES
} from "./data";

const NAV = ["About", "Experience", "Skills", "Contact"];
const accent = "#d4896a";
const green = "#7daa6e";

function Terminal() {
  const [v, setV] = useState(0);
  useEffect(() => {
    const ts = TERMINAL_LINES.map((l, i) => setTimeout(() => setV(i + 1), l.delay + 500));
    return () => ts.forEach(clearTimeout);
  }, []);
  return (
    <div style={{ background: "#141420", borderRadius: 14, overflow: "hidden", fontFamily: "'SF Mono','Fira Code','Courier New', monospace", fontSize: 13, height: "100%", border: "1px solid rgba(255,255,255,0.06)", minHeight: 200 }}>
      <div style={{ display: "flex", gap: 7, padding: "11px 15px", background: "rgba(0,0,0,0.3)", alignItems: "center" }}>
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e", flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28ca41", flexShrink: 0 }} />
        <span style={{ marginLeft: 14, color: "rgba(255,255,255,0.3)", fontSize: 12, fontWeight: 500 }}>test-runner</span>
      </div>
      <div style={{ padding: "14px 18px" }}>
        {TERMINAL_LINES.slice(0, v).map((l, i) => (
          <div key={i} style={{ color: l.color, lineHeight: 1.85, minHeight: l.text ? "auto" : 10, fontWeight: l.text.startsWith("$") ? 700 : 400 }}>{l.text}</div>
        ))}
        {v < TERMINAL_LINES.length && <span style={{ color: "#4ade80", animation: "blink 1s infinite" }}>_</span>}
      </div>
      <style>{`@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}`}</style>
    </div>
  );
}

const Tag = ({ children, a, dk }) => (
  <span style={{
    display: "inline-block", padding: "5px 14px", borderRadius: 22, fontSize: 12.5, fontWeight: 500,
    border: a ? "1px solid rgba(125,170,110,0.45)" : `1px solid ${dk ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)"}`,
    color: a ? green : (dk ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)"),
    margin: "3px 4px 3px 0", letterSpacing: 0.2,
  }}>{children}</span>
);

const SLabel = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
    <div style={{ width: 28, height: 2, background: accent }} />
    <span style={{ color: accent, fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>{children}</span>
  </div>
);

export default function Portfolio() {
  const [nav, setNav] = useState("");
  const [dk, setDk] = useState(true);
  const refs = useRef({});

  const bg = dk ? "#0c0c13" : "#f5f3ef";
  const card = dk ? "#131320" : "#fff";
  const tx = dk ? "rgba(255,255,255,0.88)" : "#1a1a2e";
  const mt = dk ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)";
  const bd = dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.1)";

  const go = (id) => refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  const sr = (id) => (el) => { refs.current[id] = el; };

  useEffect(() => {
    const o = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setNav(e.target.id); }), { threshold: 0.25 });
    Object.values(refs.current).forEach((el) => el && o.observe(el));
    return () => o.disconnect();
  }, []);

  const css = `
    * { box-sizing: border-box; margin: 0; }
    body { background: ${bg}; }
    .stats-row { display: grid; grid-template-columns: 1fr 1fr 1fr 1.4fr; gap: 14px; }
    @media (max-width: 768px) { .stats-row { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 480px) { .stats-row { grid-template-columns: 1fr; } }
    .exp-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; }
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
    .about-grid { display: grid; grid-template-columns: 280px 1fr; gap: 48px; align-items: start; }
    @media (max-width: 700px) { .about-grid { grid-template-columns: 1fr; } }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    @media (max-width: 600px) { .contact-grid { grid-template-columns: 1fr; } }
    .achieve-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 14px; }
    @media (max-width: 700px) { .achieve-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 480px) { .achieve-grid { grid-template-columns: 1fr; } }
  `;

  return (
    <div style={{ background: bg, color: tx, minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", transition: "background 0.3s, color 0.3s" }}>
      <style>{css}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", background: dk ? "rgba(12,12,19,0.85)" : "rgba(245,243,239,0.85)", borderBottom: `1px solid ${bd}`, padding: "0 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 58 }}>
          <div style={{ fontWeight: 700, fontSize: 18 }}><span style={{ color: accent }}>SDET</span><span style={{ color: mt }}>.</span>Portfolio</div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
            {NAV.map((n) => (
              <button key={n} onClick={() => go(n)} style={{ background: "transparent", border: nav === n ? `1px solid ${accent}` : "1px solid transparent", color: nav === n ? accent : mt, padding: "6px 16px", borderRadius: 22, cursor: "pointer", fontSize: 13.5, fontWeight: 500, transition: "all 0.2s" }}>{n}</button>
            ))}
            <button onClick={() => setDk(!dk)} style={{ background: "transparent", border: `1px solid ${bd}`, borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: tx, fontSize: 15, marginLeft: 8, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
              {dk ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px" }}>

        {/* HERO */}
        <section style={{ textAlign: "center", padding: "76px 0 56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: card, border: `1px solid ${bd}`, borderRadius: 40, padding: "8px 20px 8px 8px", marginBottom: 32 }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, #8b5e3c)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 16 }}>{PROFILE.name.charAt(0)}</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 600, fontSize: 14.5, color: tx }}>{PROFILE.name}</div>
              <div style={{ color: mt, fontSize: 12.5 }}>{PROFILE.title}</div>
            </div>
          </div>

          <h1 style={{ fontSize: "clamp(32px, 5.5vw, 58px)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: -0.5, fontStyle: "italic" }}>
            {HERO.headlineTop}<br />
            <span style={{ background: "linear-gradient(90deg, #d4896a, #c87f5a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{HERO.headlineBottom}</span>
          </h1>
          <p style={{ color: mt, fontSize: 15.5, maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.75 }}>{HERO.tagline}</p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
            <button onClick={() => go("Experience")} style={{ background: "#b5714e", color: "#fff", border: "none", padding: "13px 26px", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>📋 View My Work</button>
            <button onClick={() => go("Contact")} style={{ background: "transparent", color: tx, border: `1px solid ${bd}`, padding: "13px 26px", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontSize: 14 }}>Get in Touch →</button>
          </div>

          <div className="stats-row">
            {STATS.map((s, i) => (
              <div key={i} style={{ background: card, border: `1px solid ${bd}`, borderRadius: 14, padding: "26px 22px", textAlign: "left" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: s.color, border: `1px solid ${s.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 20 }}>{s.icon}</div>
                <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -0.5, color: tx }}>{s.val}</div>
                <div style={{ color: mt, fontSize: 14, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
            <Terminal />
          </div>
        </section>

        {/* ABOUT */}
        <section id="About" ref={sr("About")} style={{ padding: "80px 0" }}>
          <div className="about-grid">
            <div>
              <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden", border: `1px solid ${bd}` }}>
                <img src={PROFILE.photo} alt={PROFILE.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16, justifyContent: "center" }}>
                {ABOUT.badgeTags.map((t) => <Tag key={t} a dk={dk}>{t}</Tag>)}
              </div>
            </div>
            <div>
              <SLabel>About Me</SLabel>
              <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 22px" }}>{ABOUT.heading}</h2>
              <div style={{ color: mt, lineHeight: 1.85, fontSize: 14.5 }}>
                {ABOUT.paragraphs.map((p, i) => <p key={i} style={{ marginTop: i > 0 ? 14 : 0 }}>{p}</p>)}
              </div>
              {Object.entries(ABOUT.toolCategories).map(([cat, tools]) => (
                <div key={cat} style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 11, color: mt, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>{cat}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{tools.map((t) => <Tag key={t} a dk={dk}>{t}</Tag>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="Experience" ref={sr("Experience")} style={{ padding: "80px 0" }}>
          <SLabel>Career</SLabel>
          <h2 style={{ fontSize: 34, fontWeight: 700, margin: "0 0 8px" }}>Work Experience</h2>
          <p style={{ color: mt, marginBottom: 48, fontSize: 15 }}>4.5+ years of ensuring quality across mobile, web, API & AI platforms</p>
          <div style={{ position: "relative", paddingLeft: 28 }}>
            <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 2, background: bd }} />
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ position: "relative", marginBottom: 36 }}>
                <div style={{ position: "absolute", left: -28, top: 10, width: 16, height: 16, borderRadius: "50%", background: i === 0 ? accent : (dk ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"), border: `3px solid ${bg}` }} />
                <div style={{ background: card, border: `1px solid ${bd}`, borderRadius: 16, padding: 28, borderTop: i === 0 ? `3px solid ${accent}` : `1px solid ${bd}` }}>
                  <div className="exp-header">
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 42, height: 42, borderRadius: 12, background: dk ? "rgba(212,137,106,0.1)" : "rgba(212,137,106,0.15)", border: "1px solid rgba(212,137,106,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🏢</div>
                      <div>
                        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{e.title}</h3>
                        <a href={e.url} target="_blank" rel="noopener noreferrer" style={{ color: accent, fontSize: 14, textDecoration: "none", fontWeight: 500 }}>{e.company} ↗</a>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ background: "rgba(212,137,106,0.12)", color: accent, padding: "5px 14px", borderRadius: 22, fontSize: 12, fontWeight: 600, border: "1px solid rgba(212,137,106,0.25)" }}>📅 {e.period}</span>
                      <div style={{ color: mt, fontSize: 12.5, marginTop: 5 }}>📍 {e.location}</div>
                    </div>
                  </div>
                  <p style={{ color: mt, fontSize: 13.5, lineHeight: 1.75, margin: "18px 0" }}>{e.description}</p>
                  <ul style={{ paddingLeft: 0, margin: "14px 0 18px", listStyle: "none" }}>
                    {e.bullets.map((b, j) => (
                      <li key={j} style={{ color: mt, fontSize: 13.5, lineHeight: 1.85, marginBottom: 7, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: accent, fontWeight: 700, fontSize: 16, top: -1 }}>•</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 14, borderTop: `1px solid ${bd}` }}>
                    {e.tags.map((t) => <Tag key={t} dk={dk}>{t}</Tag>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section style={{ padding: "60px 0" }}>
          <div style={{ textAlign: "center" }}>
            <SLabel>Recognition</SLabel>
            <h2 style={{ fontSize: 34, fontWeight: 700, margin: "0 0 44px" }}>Achievements</h2>
          </div>
          <div className="achieve-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} style={{ background: card, border: `1px solid ${bd}`, borderRadius: 16, padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{a.icon}</div>
                <h3 style={{ margin: "0 0 8px", fontSize: 14.5, fontWeight: 700 }}>{a.title}</h3>
                <div style={{ color: accent, fontSize: 12, fontWeight: 500 }}>Recognized by {a.from}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section style={{ padding: "60px 0" }}>
          <div style={{ textAlign: "center" }}>
            <SLabel>Academics</SLabel>
            <h2 style={{ fontSize: 34, fontWeight: 700, margin: "0 0 8px" }}>Education</h2>
            <p style={{ color: mt, marginBottom: 44, fontSize: 15 }}>My academic journey that built the foundation for my career.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 700, margin: "0 auto" }}>
            {EDUCATION.map((e, i) => (
              <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, minWidth: 50 }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: dk ? "rgba(212,137,106,0.2)" : "rgba(212,137,106,0.3)", lineHeight: 1 }}>{e.num}</div>
                  {i < EDUCATION.length - 1 && <div style={{ width: 2, height: 40, background: bd }} />}
                </div>
                <div style={{ background: card, border: `1px solid ${bd}`, borderRadius: 16, padding: 24, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(212,137,106,0.1)", border: "1px solid rgba(212,137,106,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{e.icon}</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{e.title}</h3>
                      <div style={{ color: accent, fontSize: 13.5, fontWeight: 500 }}>{e.sub}</div>
                    </div>
                  </div>
                  <div style={{ color: mt, fontSize: 13.5, marginBottom: 14 }}>📍 {e.location}</div>
                  <div style={{ display: "flex", gap: 8 }}>{e.tags.map((t) => <Tag key={t} a dk={dk}>{t}</Tag>)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="Skills" ref={sr("Skills")} style={{ padding: "80px 0" }}>
          <div style={{ textAlign: "center" }}>
            <SLabel>Expertise</SLabel>
            <h2 style={{ fontSize: 34, fontWeight: 700, margin: "0 0 8px" }}>SDET Skills & Tools</h2>
            <p style={{ color: mt, marginBottom: 48, fontSize: 15 }}>The methodologies, tools, and platforms I use to deliver quality</p>
          </div>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div key={i} style={{ background: card, border: `1px solid ${bd}`, borderRadius: 16, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: dk ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", border: `1px solid ${bd}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{s.icon}</div>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>{s.title}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{s.items.map((item) => <Tag key={item} dk={dk}>{item}</Tag>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="Contact" ref={sr("Contact")} style={{ padding: "80px 0 60px" }}>
          <div className="contact-grid">
            <div>
              <SLabel>Contact</SLabel>
              <h2 style={{ fontSize: 30, fontWeight: 700, margin: "0 0 16px" }}>Let's work together</h2>
              <p style={{ color: mt, lineHeight: 1.75, fontSize: 14.5, marginBottom: 28 }}>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
              <a href={`mailto:${PROFILE.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: accent, color: "#fff", padding: "13px 26px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Say Hello →</a>
            </div>
            <div>
              <div style={{ background: card, border: `1px solid ${bd}`, borderRadius: 16, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${bd}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 18 }}>✉️</span>
                    <span style={{ fontSize: 14, color: tx }}>{PROFILE.email}</span>
                  </div>
                  <button onClick={() => navigator.clipboard.writeText(PROFILE.email)} style={{ background: "transparent", border: `1px solid ${bd}`, borderRadius: 8, width: 34, height: 34, cursor: "pointer", color: mt, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }} title="Copy">📋</button>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 18 }}>📞</span>
                    <span style={{ fontSize: 14, color: tx }}>{PROFILE.phone}</span>
                  </div>
                  <button onClick={() => navigator.clipboard.writeText(PROFILE.phone)} style={{ background: "transparent", border: `1px solid ${bd}`, borderRadius: 8, width: 34, height: 34, cursor: "pointer", color: mt, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }} title="Copy">📋</button>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 16, justifyContent: "center" }}>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" style={{ background: card, border: `1px solid ${bd}`, borderRadius: 12, padding: "10px 20px", textDecoration: "none", color: tx, fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>🔗 LinkedIn</a>
                <a href={`mailto:${PROFILE.email}`} style={{ background: card, border: `1px solid ${bd}`, borderRadius: 12, padding: "10px 20px", textDecoration: "none", color: tx, fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>✉️ Email</a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: `1px solid ${bd}`, padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={{ fontWeight: 700, fontSize: 16 }}><span style={{ color: accent }}>SDET</span><span style={{ color: mt }}>.</span>Portfolio</span>
            <div style={{ color: mt, fontSize: 12, marginTop: 5 }}>Ensuring quality, reliability, and innovation — one release at a time.</div>
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            {NAV.map((n) => <button key={n} onClick={() => go(n)} style={{ background: "none", border: "none", color: mt, cursor: "pointer", fontSize: 13 }}>{n}</button>)}
          </div>
        </footer>
      </div>
    </div>
  );
}
