import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROFILE, ARTICLES } from "./data";

var accent = "#d4896a";
var green = "#7daa6e";
var cyan = "#5bb8d4";

function Tag(props) {
  var dk = props.dk;
  var a = props.a;
  return (
    <span style={{
      display: "inline-block", padding: "5px 14px", borderRadius: 22, fontSize: 12.5, fontWeight: 500,
      border: a ? "1px solid rgba(125,170,110,0.45)" : ("1px solid " + (dk ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)")),
      color: a ? green : (dk ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)"),
      margin: "3px 4px 3px 0",
    }}>{props.children}</span>
  );
}

var CSS = `
  * { box-sizing: border-box; margin: 0; }
  html { scroll-behavior: smooth; }
  .article-layout { display: grid; grid-template-columns: 1fr 260px; gap: 48px; }
  .article-title { font-size: clamp(24px, 5vw, 42px); }
  .article-subtitle { font-size: 16px; }
  .article-content-pad { padding: 48px 20px 80px; }
  .article-sec-title { font-size: 22px; }
  .article-sec-num { width: 36px; height: 36px; font-size: 14px; }
  .article-cta-box { padding: 32px 28px; }
  .article-cta-title { font-size: 20px; }
  .article-nav { padding: 0 24px; }
  .article-nav-inner { height: 58px; }
  .article-tags-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
  .article-meta { display: flex; gap: 16px; align-items: center; }
  .article-author { display: flex; align-items: center; gap: 14; }
  .numbered-item { display: flex; gap: 16px; margin: 16px 0; }
  .numbered-box { width: 32px; height: 32px; min-width: 32px; }
  .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
  .cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  @media (max-width: 900px) { 
    .article-layout { grid-template-columns: 1fr; } 
    .article-sidebar { display: none; } 
  }
  @media (max-width: 768px) {
    .article-content-pad { padding: 32px 16px 60px !important; }
    .article-title { font-size: 28px !important; }
    .article-subtitle { font-size: 14.5px !important; }
    .article-sec-title { font-size: 19px !important; }
    .article-cta-box { padding: 24px 20px !important; }
    .article-cta-title { font-size: 18px !important; }
    .article-nav { padding: 0 16px !important; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 480px) {
    .article-content-pad { padding: 24px 14px 48px !important; }
    .article-title { font-size: 22px !important; line-height: 1.25 !important; }
    .article-subtitle { font-size: 13.5px !important; }
    .article-sec-title { font-size: 17px !important; }
    .article-sec-num { width: 30px !important; height: 30px !important; font-size: 12px !important; }
    .article-cta-box { padding: 20px 16px !important; }
    .article-cta-title { font-size: 16px !important; }
    .article-nav { padding: 0 12px !important; }
    .article-nav-inner { height: 50px !important; }
    .article-meta { gap: 10px !important; font-size: 12px !important; }
    .article-meta span { font-size: 12px !important; }
    .article-tags-row { gap: 4px !important; }
    .article-author { gap: 10px !important; }
    .article-author img { width: 38px !important; height: 38px !important; }
    .numbered-item { gap: 12px !important; margin: 12px 0 !important; }
    .numbered-box { width: 28px !important; height: 28px !important; min-width: 28px !important; font-size: 12px !important; }
    .stats-grid { grid-template-columns: 1fr !important; gap: 8px !important; }
    .cta-buttons { flex-direction: column !important; align-items: stretch !important; }
    .cta-buttons a { text-align: center !important; }
  }
`;

export default function ArticlePage() {
  var params = useParams();
  var articleId = params.id;
  var article = ARTICLES.find(function(a) { return a.id === articleId; });
  var _dk = useState(true);
  var dk = _dk[0];
  var setDk = _dk[1];

  var bg = dk ? "#0c0c13" : "#f5f3ef";
  var card = dk ? "#131320" : "#fff";
  var tx = dk ? "rgba(255,255,255,0.88)" : "#1a1a2e";
  var mt = dk ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)";
  var bd = dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.1)";

  if (!article) {
    return (
      <div style={{ background: bg, color: tx, minHeight: "100vh", fontFamily: "'Inter', -apple-system, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 20 }}>
        <h1 style={{ fontSize: 24 }}>Article not found</h1>
        <Link to="/" style={{ color: accent, textDecoration: "none", fontSize: 16 }}>← Back to Portfolio</Link>
      </div>
    );
  }

  function renderItem(item, key) {
    if (item.type === "p") return <p key={key} className="article-p" style={{ color: mt, fontSize: 14.5, lineHeight: 1.85, margin: "8px 0", overflowWrap: "break-word", wordWrap: "break-word" }}>{item.text}</p>;
    if (item.type === "h3") return <h3 key={key} style={{ fontSize: 17, fontWeight: 700, margin: "28px 0 12px", color: tx, overflowWrap: "break-word" }}>{item.text}</h3>;
    if (item.type === "bullet") return <div key={key} style={{ paddingLeft: 16, position: "relative", marginBottom: 7, color: mt, fontSize: 14, lineHeight: 1.75, overflowWrap: "break-word" }}><span style={{ position: "absolute", left: 0, color: cyan }}>•</span>{item.text}</div>;
    if (item.type === "bullet-bold") return <div key={key} style={{ paddingLeft: 16, position: "relative", marginBottom: 7, color: mt, fontSize: 14, lineHeight: 1.75, overflowWrap: "break-word" }}><span style={{ position: "absolute", left: 0, color: cyan }}>•</span><strong style={{ color: tx }}>{item.bold}</strong>{item.text}</div>;
    if (item.type === "numbered") return (
      <div key={key} style={{ display: "flex", gap: 16, margin: "16px 0" }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(212,137,106,0.12)", border: "1px solid rgba(212,137,106,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: accent, fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{item.num}</div>
        <div><strong style={{ color: tx, fontSize: 15 }}>{item.title}</strong><p style={{ color: mt, fontSize: 14, lineHeight: 1.75, marginTop: 4, overflowWrap: "break-word" }}>{item.text}</p></div>
      </div>
    );
    if (item.type === "insight") return (
      <div key={key} style={{ background: "rgba(91,184,212,0.08)", border: "1px solid rgba(91,184,212,0.2)", borderRadius: 12, padding: "16px 20px", margin: "20px 0", fontSize: 14, lineHeight: 1.75, color: mt, overflowWrap: "break-word" }}>
        <span style={{ color: cyan, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>💡 Key Insight</span>
        <div style={{ marginTop: 8 }}>{item.text}</div>
      </div>
    );
    if (item.type === "quote") return <div key={key} style={{ borderLeft: "3px solid " + accent, paddingLeft: 20, margin: "20px 0", fontStyle: "italic", color: "rgba(255,255,255,0.6)", fontSize: 14.5, lineHeight: 1.8, overflowWrap: "break-word" }}>{item.text}</div>;
    if (item.type === "table") return (
      <div key={key} className="article-table-wrap" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", margin: "16px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead><tr>{item.headers.map(function(h, hi) { return <th key={hi} style={{ padding: "10px 14px", borderBottom: "2px solid " + bd, textAlign: "left", color: cyan, fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>; })}</tr></thead>
          <tbody>{item.rows.map(function(r, ri) { return <tr key={ri}>{r.map(function(c, ci) { return <td key={ci} style={{ padding: "10px 14px", borderBottom: "1px solid " + bd, color: ci === r.length - 1 ? accent : mt, fontWeight: ci === r.length - 1 ? 600 : 400 }}>{c}</td>; })}</tr>; })}</tbody>
        </table>
      </div>
    );
    if (item.type === "stats") return (
      <div key={key} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "16px 0" }}>
        {item.items.map(function(pair, si) { return <div key={si} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid " + bd, borderRadius: 12, padding: "16px 18px" }}><div style={{ fontSize: 24, fontWeight: 800, color: accent }}>{pair[0]}</div><div style={{ color: mt, fontSize: 13, marginTop: 4 }}>{pair[1]}</div></div>; })}
      </div>
    );
    if (item.type === "closing") return <p key={key} style={{ fontStyle: "italic", color: accent, fontSize: 15, textAlign: "center", margin: "24px 0" }}>{item.text}</p>;
    return null;
  }

  return (
    <div className="article-page-wrap" style={{ background: bg, color: tx, minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: "100vw", overflowX: "hidden" }}>
      <style>{CSS}</style>
      <nav style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", background: dk ? "rgba(12,12,19,0.9)" : "rgba(245,243,239,0.9)", borderBottom: "1px solid " + bd, padding: "0 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 58 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg," + accent + ",#8b5e3c)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13 }}>A</div>
            <span style={{ fontWeight: 600, fontSize: 15 }}>Anurag B M</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="article-nav-links">
            <span style={{ color: mt, fontSize: 13 }}>~ {article.readTime.toUpperCase()}</span>
            <button onClick={function() { setDk(!dk); }} style={{ background: "transparent", border: "1px solid " + bd, borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: tx, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>{dk ? "☀️" : "🌙"}</button>
          </div>
        </div>
      </nav>
      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "48px 20px 80px" }} className="article-layout">
        <article className="article-content" style={{ minWidth: 0, overflowWrap: "break-word" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>{article.tags.slice(0, 3).map(function(t) { return <Tag key={t} a dk={dk}>{t}</Tag>; })}</div>
          <h1 className="article-title" style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 16px" }}>{article.title}</h1>
          <p style={{ color: mt, fontSize: 16, lineHeight: 1.7, margin: "0 0 32px" }}>{article.subtitle}</p>
          <hr style={{ border: "none", borderTop: "1px solid " + bd, margin: "0 0 8px" }} />
          {article.sections.map(function(sec, si) {
            return (
              <div key={si}>
                <div id={"sec-" + si} className="article-sec-row" style={{ display: "flex", alignItems: "center", gap: 14, margin: "48px 0 20px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(91,184,212,0.12)", border: "1px solid rgba(91,184,212,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: cyan, fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{sec.num}</div>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: tx, margin: 0 }}>{sec.title}</h2>
                </div>
                {sec.content.map(function(item, ii) { return renderItem(item, si + "-" + ii); })}
              </div>
            );
          })}
          <hr style={{ border: "none", borderTop: "1px solid " + bd, margin: "36px 0" }} />
          <div style={{ background: "linear-gradient(135deg, rgba(212,137,106,0.15), rgba(91,184,212,0.15))", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "32px 28px", textAlign: "center" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 10px" }}>Enjoyed this article?</h3>
            <p style={{ color: mt, fontSize: 14, margin: "0 0 20px" }}>Connect with me for more on AI testing, automation frameworks, and QA best practices.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid " + bd, color: tx, padding: "10px 22px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>🔗 Connect on LinkedIn</a>
              <a href={"mailto:" + PROFILE.email} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid " + bd, color: tx, padding: "10px 22px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>✉️ Mail</a>
              <a href={"tel:" + PROFILE.phone} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid " + bd, color: tx, padding: "10px 22px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>📞 {PROFILE.phone}</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid " + bd, marginTop: 36, paddingTop: 20, display: "flex", alignItems: "center", gap: 14 }}>
            <img src={PROFILE.photo} alt={PROFILE.name} style={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover" }} />
            <div><div style={{ fontWeight: 600, fontSize: 14 }}>{PROFILE.name}</div><div style={{ color: mt, fontSize: 13 }}>{PROFILE.title} • <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: accent, textDecoration: "none" }}>LinkedIn</a></div></div>
          </div>
        </article>
        <aside className="article-sidebar" style={{ position: "sticky", top: 80, alignSelf: "start" }}>
          <div style={{ background: card, border: "1px solid " + bd, borderRadius: 14, padding: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: mt, marginBottom: 14 }}>On This Page</div>
            {article.sections.map(function(sec, si) {
              return (
                <div key={si} style={{ padding: "8px 0 8px 14px", borderLeft: "2px solid transparent", cursor: "pointer", color: mt, fontSize: 13, transition: "all 0.2s" }}
                  onMouseEnter={function(e) { e.currentTarget.style.color = cyan; e.currentTarget.style.borderLeftColor = cyan; }}
                  onMouseLeave={function(e) { e.currentTarget.style.color = mt; e.currentTarget.style.borderLeftColor = "transparent"; }}
                  onClick={function() { var el = document.getElementById("sec-" + si); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>
                  {sec.num}. {sec.title}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
