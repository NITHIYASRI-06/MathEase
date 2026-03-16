import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const GEOGEBRA_APPS = {
  geometry: 'https://www.geogebra.org/geometry?embed',
  graphing: 'https://www.geogebra.org/graphing?embed',
  '3d': 'https://www.geogebra.org/3d?embed',
  cas: 'https://www.geogebra.org/cas?embed',
}

const DESMOS_BASE = 'https://www.desmos.com/calculator?embed'

export default function TopicPage() {
  const { id } = useParams()
  const [topic, setTopic] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [panelMode, setPanelMode] = useState('split') // 'split' | 'full-tool' | 'full-info'

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/topics/${id}`)
      .then(r => { setTopic(r.data); setActiveStep(0) })
      .catch(() => setError('Topic not found'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return (
    <div className="loading-center" style={{ paddingTop: 64 }}>
      <div className="loader" />
      <span>Loading topic...</span>
    </div>
  )

  if (error || !topic) return (
    <div className="loading-center" style={{ paddingTop: 64 }}>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>😕</div>
      <p style={{ color: 'var(--text2)' }}>Topic not found.</p>
      <Link to="/categories" className="btn btn-outline" style={{ marginTop: '1rem' }}>Back to Topics</Link>
    </div>
  )

  const embedUrl = topic.tool === 'desmos'
    ? DESMOS_BASE
    : (GEOGEBRA_APPS[topic.ggb_app] || GEOGEBRA_APPS.geometry)

  const isDesmos = topic.tool === 'desmos'

  return (
    <div style={{ paddingTop: '64px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .step-item { transition: all 0.2s; cursor: pointer; }
        .step-item:hover { background: var(--card-hover) !important; }
      `}</style>

      {/* Top bar */}
      <div style={{
        background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
        padding: '0.7rem 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/categories" style={{
            color: 'var(--muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            ← Topics
          </Link>
          <span style={{ color: 'var(--border2)' }}>/</span>
          <span style={{ color: 'var(--text)', fontSize: '0.92rem', fontWeight: 500 }}>{topic.name}</span>
          <span className={`badge badge-${topic.tool}`} style={{ fontSize: '0.68rem' }}>
            {isDesmos ? '📊 Desmos' : '🔷 GeoGebra'}
          </span>
          <span className={`badge diff-${topic.difficulty?.toLowerCase()}`} style={{ fontSize: '0.68rem' }}>{topic.difficulty}</span>
        </div>

        {/* View toggle */}
        <div style={{ display: 'flex', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 8, padding: 3, gap: 3 }}>
          {[
            { mode: 'full-info', icon: '≡', label: 'Info' },
            { mode: 'split', icon: '⊟', label: 'Split' },
            { mode: 'full-tool', icon: '⊞', label: 'Tool' },
          ].map(v => (
            <button key={v.mode} onClick={() => setPanelMode(v.mode)} style={{
              background: panelMode === v.mode ? 'var(--bg2)' : 'transparent',
              color: panelMode === v.mode ? 'var(--text)' : 'var(--muted)',
              border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem',
              fontSize: '0.78rem', cursor: 'pointer', transition: 'all 0.15s'
            }}>
              {v.icon} {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: layoutCols(panelMode), overflow: 'hidden', minHeight: 0 }}>

        {/* INFO PANEL */}
        {panelMode !== 'full-tool' && (
          <div style={{ overflowY: 'auto', borderRight: '1px solid var(--border)', padding: '1.5rem', animation: 'fadeUp 0.4s ease' }}>

            {/* Description */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '0.7rem', lineHeight: 1.3 }}>{topic.name}</h2>
              <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7 }}>{topic.description}</p>
            </div>

            {/* Formulas */}
            {topic.formulas?.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Key Formulas</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {topic.formulas.map((f, i) => (
                    <div key={i} style={{
                      background: 'var(--bg2)', border: '1px solid var(--border)',
                      borderLeft: '3px solid var(--cyan)',
                      borderRadius: '0 8px 8px 0',
                      padding: '0.6rem 0.9rem',
                      fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text)'
                    }}>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Steps */}
            {topic.steps?.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Try It Step by Step</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {topic.steps.map((step, i) => (
                    <div key={i} className="step-item"
                      onClick={() => setActiveStep(i)}
                      style={{
                        background: activeStep === i ? 'rgba(77,255,195,0.06)' : 'var(--card)',
                        border: `1px solid ${activeStep === i ? 'var(--cyan-border)' : 'var(--border)'}`,
                        borderRadius: 'var(--radius)',
                        padding: '0.85rem 1rem',
                        display: 'flex', gap: '0.8rem', alignItems: 'flex-start'
                      }}
                    >
                      <div style={{
                        width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                        background: activeStep === i ? 'var(--cyan)' : 'var(--bg3)',
                        color: activeStep === i ? '#08091A' : 'var(--muted)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                        border: `1px solid ${activeStep === i ? 'var(--cyan)' : 'var(--border)'}`
                      }}>
                        {i + 1}
                      </div>
                      <p style={{ fontSize: '0.87rem', lineHeight: 1.6, color: activeStep === i ? 'var(--text)' : 'var(--text2)', margin: 0 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hint box */}
            <div style={{
              background: 'var(--gold-dim)', border: '1px solid rgba(255,209,102,0.2)',
              borderRadius: 'var(--radius)', padding: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>💡 Tip</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.6 }}>
                {isDesmos
                  ? 'Click on any expression in Desmos to highlight it. Use sliders to explore how changing values affects the graph in real time.'
                  : 'Drag any free point in GeoGebra to see how the figure changes dynamically. Use the Tools panel to add new constructions.'}
              </p>
            </div>

            {/* Navigate to next/prev */}
            <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
              <Link to="/categories" className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}>
                ← All Topics
              </Link>
            </div>
          </div>
        )}

        {/* TOOL PANEL */}
        {panelMode !== 'full-info' && (
          <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Tool header */}
            <div style={{
              padding: '0.6rem 1rem', background: 'var(--bg2)',
              borderBottom: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.85rem' }}>{isDesmos ? '📊' : '🔷'}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text2)' }}>
                  {isDesmos ? 'Desmos Graphing Calculator' : `GeoGebra ${topic.ggb_app || 'Geometry'}`}
                </span>
              </div>
              <a
                href={isDesmos ? 'https://desmos.com/calculator' : `https://geogebra.org/${topic.ggb_app || 'geometry'}`}
                target="_blank" rel="noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                Open full screen ↗
              </a>
            </div>

            <iframe
              key={embedUrl}
              src={embedUrl}
              style={{ flex: 1, border: 'none', width: '100%' }}
              allowFullScreen
              title={`${topic.tool} — ${topic.name}`}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function layoutCols(mode) {
  if (mode === 'split') return '380px 1fr'
  if (mode === 'full-tool') return '0 1fr'
  return '1fr 0'
}
