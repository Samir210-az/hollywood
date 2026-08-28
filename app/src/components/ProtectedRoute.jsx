import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Loader from './Loader'

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, profile, loading } = useAuth()

  if (loading) return <Loader />
  if (!user) return <Navigate to="/login" replace />
  if (!profile) return <Loader />
  if (profile.role !== 'admin' && !profile.assignedId) {
    return <Navigate to="/pending" replace />
  }
  if (adminOnly && profile.role !== 'admin') {
    return <Navigate to="/" replace />
  }

  return children
}
