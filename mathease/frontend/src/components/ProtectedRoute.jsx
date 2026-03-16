import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading-center">
        <div className="loader" />
        <span>Loading...</span>
      </div>
    )
  }

  return user ? children : <Navigate to="/auth" replace />
}
