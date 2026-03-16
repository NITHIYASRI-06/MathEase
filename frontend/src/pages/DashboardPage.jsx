import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const QUICK_LINKS = [
  { letter: 'C', topic: 'Calculus — Derivatives', tool: 'desmos', difficulty: 'Advanced', id: 'calculus-derivatives' },
  { letter: 'T', topic: 'Trigonometry', tool: 'desmos', difficulty: 'Intermediate', id: 'trigonometry' },
  { letter: 'G', topic: 'Triangle Geometry', tool: 'geogebra', difficulty: 'Beginner', id: 'geometry-triangles' },
  { letter: 'Q', topic: 'Quadratic Equations', tool: 'desmos', difficulty: 'Beginner', id: 'quadratics' },
  { letter: 'V', topic: 'Vectors', tool: 'geogebra', difficulty: 'Intermediate', id: 'vectors' },
  { letter: 'L', topic: 'Limits', tool: 'desmos', difficulty: 'Advanced', id: 'limits' },
]

const HIGHLIGHTS = [
  { icon: '📈', color: 'var(--cyan)', label: 'Desmos', desc: 'Algebra · Calculus · Stats', sub: '50+ topics' },
  { icon: '🔷', color: 'var(--gold)', label: 'GeoGebra', desc: 'Geometry · Vectors · Proofs', sub: '30+ topics' },
]

export default function DashboardPage() {
  const { user } = useAuth()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>

        {/* Welcome */}
        <div style={{ marginBottom: '3rem', animation: 'fadeUp 0.5s ease' }}>
          <span className="section-tag">{greeting}</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '0.6rem' }}>
            Welcome back, <span style={{ color: 'var(--cyan)' }}>{user?.name?.split(' ')[0]}</span> 👋
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: '1rem' }}>Pick up where you left off, or explore a new topic.</p>
        </div>

        {/* Tool highlight cards 
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.3rem', marginBottom: '3.5rem' }}>
          {HIGHLIGHTS.map((h, i) => (
            <Link to="/categories" key={i} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '2rem',
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                transition: 'all 0.25s ease', cursor: 'pointer'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'var(--card-hover)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: 16, fontSize: '1.6rem',
                  background: i === 0 ? 'var(--cyan-dim)' : 'var(--gold-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>{h.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.3rem', color: h.color }}>{h.label}</div>
                  <div style={{ color: 'var(--text2)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{h.desc}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>{h.sub}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>*/}

        {/* Quick topic access */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <span className="section-tag" style={{ marginBottom: '0.3rem' }}>Explore</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Popular Topics</h2>
            </div>
            <Link to="/categories" className="btn btn-ghost" style={{ fontSize: '0.88rem', padding: '0.6rem 1.2rem' }}>
              Browse All A–Z →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {QUICK_LINKS.map((q, i) => (
              <Link to={`/topic/${q.id}`} key={i} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '1.3rem 1.5rem',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  transition: 'all 0.2s', cursor: 'pointer'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--card-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--card)' }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, background: 'var(--bg3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700,
                    color: 'var(--cyan)', flexShrink: 0, border: '1px solid var(--border)'
                  }}>
                    {q.letter}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.3rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{q.topic}</div>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <span className={`badge badge-${q.tool}`}>{q.tool === 'desmos' ? '📊 Desmos' : '🔷 GeoGebra'}</span>
                      <span className={`badge diff-${q.difficulty.toLowerCase()}`}>{q.difficulty}</span>
                    </div>
                  </div>
                  <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div style={{
          background: 'var(--bg2)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)', padding: '2rem 2.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>Explore all topics A to Z</h3>
            <p style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>Browse the complete library of 80+ math topics with guided visual tools.</p>
          </div>
          <Link to="/categories" className="btn btn-primary">Browse A–Z Library →</Link>
        </div>
      </div>
    </div>
  )
}
