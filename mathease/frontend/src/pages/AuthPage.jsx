import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AuthPage() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, register } = useAuth()
  const navigate = useNavigate()

  function handleChange(e) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      if (mode === 'login') {
        await login(form.email, form.password)
      } else {
        if (!form.name.trim()) { setError('Name is required'); setLoading(false); return }
        if (form.password.length < 6) { setError('Password must be at least 6 characters'); setLoading(false); return }
        await register(form.name, form.email, form.password)
      }
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.detail || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      paddingTop: '64px'
    }}>
      <style>{`
        @keyframes fadeUpAuth { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .auth-field:focus { outline: none; border-color: var(--cyan-border) !important; box-shadow: 0 0 0 3px rgba(77,255,195,0.08); }
        .auth-field { transition: border-color 0.2s, box-shadow 0.2s; }
      `}</style>

      {/* LEFT PANEL — Visual */}
      <div style={{
        background: 'var(--bg2)',
        borderRight: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '3rem', position: 'relative', overflow: 'hidden'
      }}>
        <div className="grid-bg" />
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77,255,195,0.07) 0%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 400 }}>
          <Link to="/" style={{
            fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700,
            color: 'var(--cyan)', letterSpacing: '-0.5px', display: 'block', marginBottom: '2.5rem'
          }}>
            Math<span style={{ color: 'var(--gold)' }}>Ease</span>
          </Link>

          {/* Floating math cards */}
          <div style={{ position: 'relative', height: 280, marginBottom: '2.5rem' }}>
            {[
              { label: 'Derivatives', eq: "f'(x) = lim[h→0] f(x+h)-f(x) / h", top: '0%', left: '0%', color: 'cyan', delay: '0s' },
              { label: 'Unit Circle', eq: 'sin²θ + cos²θ = 1', top: '30%', right: '0%', color: 'gold', delay: '1s' },
              { label: 'Integration', eq: '∫ₐᵇ f(x)dx = F(b) − F(a)', bottom: '0%', left: '5%', color: 'purple', delay: '2s' },
            ].map((card, i) => (
              <div key={i} style={{
                position: 'absolute',
                top: card.top, bottom: card.bottom, left: card.left, right: card.right,
                background: 'var(--card)',
                border: `1px solid ${card.color === 'cyan' ? 'var(--cyan-border)' : card.color === 'gold' ? 'rgba(255,209,102,0.2)' : 'rgba(155,143,255,0.2)'}`,
                borderRadius: 'var(--radius)',
                padding: '1rem 1.2rem',
                maxWidth: 260,
                animation: 'floatCard 6s ease-in-out infinite',
                animationDelay: card.delay
              }}>
                <style>{`@keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem', marginBottom: '0.5rem',
                  color: card.color === 'cyan' ? 'var(--cyan)' : card.color === 'gold' ? 'var(--gold)' : 'var(--purple)'
                }}>{card.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.5 }}>{card.eq}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.8rem' }}>
            {mode === 'login' ? 'Welcome back!' : 'Start your journey'}
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.7 }}>
            {mode === 'login'
              ? 'Continue exploring math visually. Your saved topics are waiting.'
              : 'Join thousands of students making sense of math through beautiful visualizations.'}
          </p>
        </div>
      </div>

      {/* RIGHT PANEL — Form */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '3rem 4rem',
        animation: 'fadeUpAuth 0.5s ease'
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          {/* Mode toggle */}
          <div style={{
            display: 'flex', background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: 10, padding: 4, marginBottom: '2.5rem'
          }}>
            {['login', 'register'].map(m => (
              <button key={m} onClick={() => { setMode(m); setError('') }} style={{
                flex: 1, padding: '0.55rem', borderRadius: 7, border: 'none',
                background: mode === m ? 'var(--bg3)' : 'transparent',
                color: mode === m ? 'var(--text)' : 'var(--muted)',
                fontSize: '0.9rem', fontWeight: mode === m ? 500 : 400,
                transition: 'all 0.2s', cursor: 'pointer',
                boxShadow: mode === m ? '0 1px 4px rgba(0,0,0,0.3)' : 'none'
              }}>
                {m === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '0.4rem' }}>
            {mode === 'login' ? 'Sign in to Math Ease' : 'Create your account'}
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}
              style={{ background: 'none', border: 'none', color: 'var(--cyan)', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}>
              {mode === 'login' ? 'Register free' : 'Sign in'}
            </button>
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mode === 'register' && (
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text2)', marginBottom: '0.45rem', fontWeight: 500 }}>Full Name</label>
                <input
                  name="name" value={form.name} onChange={handleChange}
                  placeholder="Arjun Patel" required={mode === 'register'}
                  className="auth-field"
                  style={inputStyle}
                />
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text2)', marginBottom: '0.45rem', fontWeight: 500 }}>Email Address</label>
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="you@example.com" required
                className="auth-field"
                style={inputStyle}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--text2)', fontWeight: 500 }}>Password</label>
                {mode === 'login' && (
                  <a href="#" style={{ fontSize: '0.78rem', color: 'var(--muted)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >Forgot password?</a>
                )}
              </div>
              <input
                name="password" type="password" value={form.password} onChange={handleChange}
                placeholder={mode === 'register' ? 'Minimum 6 characters' : '••••••••'} required
                className="auth-field"
                style={inputStyle}
              />
            </div>

            {error && (
              <div style={{
                background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.25)',
                color: '#FF6B6B', padding: '0.7rem 1rem', borderRadius: 8, fontSize: '0.85rem'
              }}>
                {error}
              </div>
            )}

            <button
              type="submit" disabled={loading}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.97rem', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}
            >
              {loading
                ? (mode === 'login' ? 'Signing in...' : 'Creating account...')
                : (mode === 'login' ? 'Sign In →' : 'Create Account →')}
            </button>
          </form>

          <p style={{ color: 'var(--muted)', fontSize: '0.75rem', textAlign: 'center', marginTop: '1.8rem', lineHeight: 1.6 }}>
            By continuing, you agree to our{' '}
            <a href="#" style={{ color: 'var(--text2)' }}>Terms of Service</a> and{' '}
            <a href="#" style={{ color: 'var(--text2)' }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  background: 'var(--bg2)',
  border: '1px solid var(--border2)',
  borderRadius: 9,
  padding: '0.75rem 1rem',
  color: 'var(--text)',
  fontSize: '0.93rem',
}
