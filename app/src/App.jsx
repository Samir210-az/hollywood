import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Login from './pages/Login'
import Pending from './pages/Pending'
import Dashboard from './pages/Dashboard'
import SpaceList from './pages/SpaceList'
import SpaceDetail from './pages/SpaceDetail'
import AdminEmployees from './pages/AdminEmployees'

function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="app-main">{children}</main>
    </>
  )
}

function LoginRoute() {
  const { user, loading } = useAuth()
  if (loading) return <Loader />
  if (user) return <Navigate to="/" replace />
  return <Login />
}

function PendingRoute() {
  const { user, profile, loading } = useAuth()
  if (loading) return <Loader />
  if (!user) return <Navigate to="/login" replace />
  if (profile?.role === 'admin' || profile?.assignedId) return <Navigate to="/" replace />
  return <Pending />
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/pending" element={<PendingRoute />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/masalar"
            element={
              <ProtectedRoute adminOnly>
                <AppLayout>
                  <SpaceList type="masa" />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/masalar/:id"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <SpaceDetail type="masa" />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/otaqlar"
            element={
              <ProtectedRoute adminOnly>
                <AppLayout>
                  <SpaceList type="otaq" />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/otaqlar/:id"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <SpaceDetail type="otaq" />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/isciler"
            element={
              <ProtectedRoute adminOnly>
                <AppLayout>
                  <AdminEmployees />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
