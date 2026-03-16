import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(() => localStorage.getItem('me_token'))
  const [loading, setLoading] = useState(true)

  // Set axios default header whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      fetchMe()
    } else {
      delete axios.defaults.headers.common['Authorization']
      setUser(null)
      setLoading(false)
    }
  }, [token])

  async function fetchMe() {
    try {
      const res = await axios.get('/auth/me')
      setUser(res.data)
    } catch {
      logout()
    } finally {
      setLoading(false)
    }
  }

  async function login(email, password) {
    const res = await axios.post('/auth/login', { email, password })
    const { access_token, user: u } = res.data
    localStorage.setItem('me_token', access_token)
    setToken(access_token)
    setUser(u)
    return u
  }

  async function register(name, email, password) {
    const res = await axios.post('/auth/register', { name, email, password })
    const { access_token, user: u } = res.data
    localStorage.setItem('me_token', access_token)
    setToken(access_token)
    setUser(u)
    return u
  }

  function logout() {
    localStorage.removeItem('me_token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
