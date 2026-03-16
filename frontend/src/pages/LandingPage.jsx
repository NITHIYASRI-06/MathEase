import { Link } from 'react-router-dom'

const FLOATING_EQ = [
  { eq: '∫₀^∞ e^(-x²)dx = √π/2', top: '14%', left: '4%', delay: '0s' },
  { eq: 'y = mx + b', top: '22%', right: '6%', delay: '1.5s' },
  { eq: '∇²φ = ρ/ε₀', bottom: '32%', left: '5%', delay: '3s' },
  { eq: 'e^(iπ) + 1 = 0', bottom: '22%', right: '4%', delay: '2s' },
  { eq: "f'(x) = lim Δx→0", top: '52%', left: '2%', delay: '4s' },
  { eq: 'sin²θ + cos²θ = 1', top: '62%', right: '3%', delay: '2.5s' },
]

const FEATURES = [
  { icon: '📈', color: 'c1', title: 'Live Graph Plotting', desc: 'Type any function and watch it plot instantly. Explore transformations, intersections, and families of curves in real time.' },
  { icon: '🔷', color: 'c2', title: 'Geometry Studio', desc: 'Construct triangles, circles, and proofs with GeoGebra\'s engine — guided step-by-step from inside Math Ease.' },
  { icon: '∂', color: 'c3', title: 'Calculus Explorer', desc: 'Visualize derivatives, integrals, and limits. See the tangent line move as you scrub through any function.' },
  { icon: '🎯', color: 'c4', title: 'Guided Problem Solving', desc: 'Each topic comes with curated examples and step-by-step walkthroughs tied directly to the interactive canvas.' },
  { icon: '🔗', color: 'c5', title: 'Share & Collaborate', desc: 'Save your graphs and share them with classmates or teachers via a simple link. No account needed to view.' },
  { icon: '📚', color: 'c6', title: 'A–Z Topic Library', desc: 'Topics organized A to Z — from Algebra to Z-scores — covering beginner to JEE-advanced levels.' },
]



export default function LandingPage() {

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* HERO */}
      <section style={{
        minHeight: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '4rem 2rem', position: 'relative', overflow: 'hidden'
      }}>
        <div className="grid-bg" />
        <div style={{
          position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77,255,195,0.08) 0%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none'
        }} />

        {FLOATING_EQ.map((e, i) => (
          <div key={i} style={{
            position: 'absolute', fontFamily: 'var(--font-mono)', color: 'var(--muted)',
            fontSize: '0.82rem', opacity: 0.3, pointerEvents: 'none',
            animation: `floatEq 8s ease-in-out infinite`,
            animationDelay: e.delay,
            top: e.top, left: e.left, right: e.right, bottom: e.bottom
          }}>
            {e.eq}
          </div>
        ))}

        <style>{`
          @keyframes floatEq { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
        `}</style>


        <h1 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.6rem,6vw,4.8rem)',
          fontWeight: 700, letterSpacing: '-2px', lineHeight: 1.1,
          maxWidth: 820, marginBottom: '1.4rem'
        }}>
          Make <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>math</em> feel<br />
          <span style={{ color: 'var(--gold)' }}>beautifully</span> simple
        </h1>

        <p style={{ color: 'var(--text2)', fontSize: '1.08rem', maxWidth: 540, lineHeight: 1.75, marginBottom: '2.4rem' }}>
          Math Ease bridges the gap between complex visualization tools and students.
          Explore algebra, calculus, and geometry through interactive graphs — no setup required.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/categories" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2.2rem' }}>
            Explore Topics →
          </Link>
        </div>
      </section>



      {/* FEATURES */}
      <section id="features" style={{ padding: '5rem 0' }}>
        <div className="container">
          <span className="section-tag">Why Math Ease</span>
          <h2 className="section-title">Everything you need to<br />understand math visually</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>Stop memorizing. Start seeing. Math Ease turns abstract formulas into living, breathing visuals.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.3rem' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '2rem',
                transition: 'all 0.3s ease', cursor: 'default'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan-border)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'var(--card-hover)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--card)' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: ['var(--cyan-dim)','var(--gold-dim)','var(--purple-dim)','var(--cyan-dim)','var(--gold-dim)','var(--purple-dim)'][i],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', marginBottom: '1.2rem'
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.55rem', fontFamily: 'var(--font-body)' }}>{f.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* HOW IT WORKS */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <span className="section-tag">Process</span>
          <h2 className="section-title">Three steps to clarity</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', marginTop: '3rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 36, left: '16%', right: '16%', height: 1, background: 'linear-gradient(90deg, var(--cyan), var(--purple), var(--gold))', opacity: 0.3 }} />
            {[
              { num: '01', color: 'var(--cyan)', border: 'rgba(77,255,195,0.3)', title: 'Pick your topic', desc: 'Browse A–Z or search for a concept. Math Ease maps every topic to the right visualization tool automatically.' },
              { num: '02', color: 'var(--purple)', border: 'rgba(155,143,255,0.3)', title: 'Explore visually', desc: 'An embedded Desmos or GeoGebra canvas opens pre-loaded with the relevant graph. Interact and discover.' },
              { num: '03', color: 'var(--gold)', border: 'rgba(255,209,102,0.3)', title: 'Learn & apply', desc: 'Side-by-side explanations guide you through the math. Practice with follow-up problems linked to the visual.' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%', border: `1px solid ${s.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.2rem', fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem', fontWeight: 700, color: s.color,
                  background: 'var(--bg2)', position: 'relative', zIndex: 1
                }}>{s.num}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(77,255,195,0.04) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, letterSpacing: '-1px', maxWidth: 560, margin: '0 auto 1rem' }}>
          Ready to see math<br /><em>differently?</em>
        </h2>
        <p style={{ color: 'var(--text2)', marginBottom: '2rem' }}>Free forever. No paywalls. No AI. Just mathematics.</p>
        <Link to="/categories" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.5rem' }}>
          Start Exploring →
        </Link>
        <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '1rem' }}>Built by Nithiyasri A · II B.Sc. Mathematics · Madras Christian College</p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '2.5rem' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--cyan)' }}>
            Math<span style={{ color: 'var(--gold)' }}>Ease</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['About', 'Topics', 'For Teachers', 'Blog'].map(link => (
              <a key={link} href="#" style={{ color: 'var(--muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{link}</a>
            ))}
          </div>
          <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>© 2026 MathEase · Built with ♥ for students</div>
        </div>
      </footer>
    </div>
  )
}
