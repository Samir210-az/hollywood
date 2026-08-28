import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import RoomsList from './pages/RoomsList.jsx'
import TablesList from './pages/TablesList.jsx'
import UnitDetail from './pages/UnitDetail.jsx'
import Employees from './pages/Employees.jsx'

export default function App() {
  const { loading } = useAuth()

  if (loading) return null

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/otaqlar" element={<RoomsList />} />
        <Route path="/otaqlar/:id" element={<UnitDetail type="otaq" />} />
        <Route path="/masalar" element={<TablesList />} />
        <Route path="/masalar/:id" element={<UnitDetail type="masa" />} />
      </Route>

      <Route element={<ProtectedRoute adminOnly />}>
        <Route path="/isciler" element={<Employees />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
