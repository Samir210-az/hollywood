import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { profile, signOut } = useAuth()
  const navigate = useNavigate()
  const isAdmin = profile?.role === 'admin'

  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/logo.png" alt="Hollywood Restaurant" />
        <span>Hollywood Restaurant</span>
      </Link>
      <nav className="navbar-links">
        {isAdmin && (
          <>
            <Link to="/masalar">Masalar</Link>
            <Link to="/otaqlar">Otaqlar</Link>
            <Link to="/admin/isciler">İşçilər</Link>
          </>
        )}
      </nav>
      <div className="navbar-user">
        <span className="navbar-username">{profile?.name}</span>
        <button className="btn-link" onClick={handleSignOut}>
          Çıxış
        </button>
      </div>
    </header>
  )
}
