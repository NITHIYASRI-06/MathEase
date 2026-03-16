import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.9rem 2.5rem',
      background: 'rgba(8,9,26,0.88)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* Logo */}
      <Link to={user ? '/dashboard' : '/'} style={{
        fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700,
        color: 'var(--cyan)', letterSpacing: '-0.5px'
      }}>
        Math<span style={{ color: 'var(--gold)' }}>Ease</span>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {user ? (
          <>
            <NavLink to="/dashboard" active={isActive('/dashboard')}>Dashboard</NavLink>
            <NavLink to="/categories" active={isActive('/categories')}>A–Z Topics</NavLink>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.8rem',
              paddingLeft: '1.5rem', borderLeft: '1px solid var(--border)'
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)', fontWeight: 500
              }}>
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <span style={{ fontSize: '0.88rem', color: 'var(--text2)' }}>{user.name}</span>
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent', border: '1px solid var(--border)',
                  color: 'var(--muted)', padding: '0.4rem 0.9rem',
                  borderRadius: 8, fontSize: '0.82rem', transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.target.style.color = '#FF6B6B'; e.target.style.borderColor = 'rgba(255,107,107,0.4)' }}
                onMouseLeave={e => { e.target.style.color = 'var(--muted)'; e.target.style.borderColor = 'var(--border)' }}
              >
                Sign out
              </button>
            </div>
          </>
        ) : (
          <Link to="/auth" className="btn btn-primary" style={{ padding: '0.55rem 1.3rem', fontSize: '0.88rem' }}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

function NavLink({ to, active, children }) {
  return (
    <Link to={to} style={{
      color: active ? 'var(--cyan)' : 'var(--text2)',
      fontSize: '0.9rem',
      fontWeight: active ? 500 : 400,
      transition: 'color 0.2s',
      borderBottom: active ? '1px solid var(--cyan)' : '1px solid transparent',
      paddingBottom: '2px',
    }}
    onMouseEnter={e => { if (!active) e.target.style.color = 'var(--text)' }}
    onMouseLeave={e => { if (!active) e.target.style.color = 'var(--text2)' }}
    >
      {children}
    </Link>
  )
}
