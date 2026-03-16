import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CategoriesPage() {
  const [categories, setCategories] = useState({})
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [activeLetter, setActiveLetter] = useState(null)
  const [searchResults, setSearchResults] = useState(null)
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    axios.get('/api/categories').then(r => {
      setCategories(r.data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!search.trim()) { setSearchResults(null); return }
    const t = setTimeout(async () => {
      setSearching(true)
      try {
        const r = await axios.get(`/api/search?q=${encodeURIComponent(search)}`)
        setSearchResults(r.data)
      } finally {
        setSearching(false)
      }
    }, 350)
    return () => clearTimeout(t)
  }, [search])

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const displayCategories = activeLetter
    ? { [activeLetter]: categories[activeLetter] || [] }
    : categories

  if (loading) return (
    <div className="loading-center" style={{ paddingTop: 64 }}>
      <div className="loader" />
      <span>Loading topics...</span>
    </div>
  )

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '3rem 0 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag">Full Library</span>
          <h1 className="section-title">Topics A to Z</h1>
          <p className="section-sub" style={{ marginBottom: '1.8rem' }}>Every math topic you need, mapped to the perfect visualization tool.</p>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 480 }}>
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', fontSize: '1rem' }}>⌕</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search topics, e.g. 'derivatives', 'triangles'..."
              style={{
                width: '100%',
                background: 'var(--bg3)',
                border: '1px solid var(--border2)',
                borderRadius: 10,
                padding: '0.8rem 1rem 0.8rem 2.8rem',
                color: 'var(--text)',
                fontSize: '0.93rem',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--cyan-border)'}
              onBlur={e => e.target.style.borderColor = 'var(--border2)'}
            />
            {search && (
              <button onClick={() => { setSearch(''); setSearchResults(null) }} style={{
                position: 'absolute', right: '0.8rem', top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '1rem'
              }}>×</button>
            )}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

        {/* Search results */}
        {searchResults !== null ? (
          <div style={{ animation: 'fadeUp 0.3s ease' }}>
            <div style={{ marginBottom: '1.5rem', color: 'var(--text2)', fontSize: '0.9rem' }}>
              {searching ? 'Searching...' : `${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${search}"`}
            </div>
            {searchResults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
                <p>No topics found for "{search}". Try a different term.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem' }}>
                {searchResults.map((t, i) => <TopicCard key={i} topic={t} showLetter />)}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Alphabet pill nav */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2.5rem' }}>
              <button
                onClick={() => setActiveLetter(null)}
                style={pillStyle(activeLetter === null)}
              >All</button>
              {alphabet.map(l => (
                <button
                  key={l}
                  onClick={() => setActiveLetter(activeLetter === l ? null : l)}
                  style={pillStyle(activeLetter === l, !categories[l])}
                  disabled={!categories[l]}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Topics by letter */}
            {Object.entries(displayCategories).map(([letter, topics]) => (
              topics && topics.length > 0 && (
                <div key={letter} style={{ marginBottom: '3rem', animation: 'fadeUp 0.4s ease' }} id={`letter-${letter}`}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: 'var(--bg2)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--cyan)'
                    }}>{letter}</div>
                    <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>{topics.length} topic{topics.length !== 1 ? 's' : ''}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(290px,1fr))', gap: '0.9rem' }}>
                    {topics.map((t, i) => <TopicCard key={i} topic={t} />)}
                  </div>
                </div>
              )
            ))}
          </>
        )}
      </div>
    </div>
  )
}

function TopicCard({ topic, showLetter }) {
  return (
    <Link to={`/topic/${topic.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius)', padding: '1.2rem 1.4rem',
        display: 'flex', alignItems: 'center', gap: '0.9rem',
        transition: 'all 0.2s', cursor: 'pointer'
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'var(--card-hover)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.transform = 'translateY(0)' }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 9, background: topic.tool === 'desmos' ? 'var(--cyan-dim)' : 'var(--gold-dim)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1rem', flexShrink: 0
        }}>
          {topic.tool === 'desmos' ? '📊' : '🔷'}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.88rem', fontWeight: 500, marginBottom: '0.3rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--text)' }}>
            {showLetter && <span style={{ color: 'var(--muted)', marginRight: '0.3rem' }}>[{topic.letter}]</span>}
            {topic.name}
          </div>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            <span className={`badge badge-${topic.tool}`} style={{ fontSize: '0.65rem' }}>
              {topic.tool === 'desmos' ? 'Desmos' : 'GeoGebra'}
            </span>
            <span className={`badge diff-${topic.difficulty?.toLowerCase()}`} style={{ fontSize: '0.65rem' }}>
              {topic.difficulty}
            </span>
          </div>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: '0.85rem', flexShrink: 0 }}>→</span>
      </div>
    </Link>
  )
}

function pillStyle(active, disabled = false) {
  return {
    background: active ? 'var(--cyan)' : 'var(--card)',
    color: active ? '#08091A' : disabled ? 'var(--muted)' : 'var(--text2)',
    border: `1px solid ${active ? 'var(--cyan)' : 'var(--border)'}`,
    borderRadius: 8, padding: '0.35rem 0.65rem',
    fontSize: '0.82rem', fontWeight: active ? 600 : 400,
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'all 0.15s',
    minWidth: 36, textAlign: 'center',
    fontFamily: 'var(--font-mono)'
  }
}
