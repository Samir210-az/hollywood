import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Header({ title, backTo }) {
  const { employee, isAdmin, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-10 border-b border-obsidian-700 bg-obsidian-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {backTo && (
            <button
              onClick={() => navigate(backTo)}
              className="rounded-full p-2 text-gold-400 transition hover:bg-obsidian-800"
              aria-label="Geri"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          <Link to="/" className="flex items-center gap-2">
            <img src="/hollywood/logo.png" alt="Hollywood Restaurant" className="h-9 w-9 rounded-full" />
            <span className="font-display text-lg font-semibold text-gold-400">
              {title ?? 'Hollywood Restaurant'}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-obsidian-100">{employee?.name}</p>
            <p className="text-xs text-obsidian-400">{isAdmin ? 'Administrator' : 'İşçi'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-obsidian-600 px-3 py-1.5 text-sm text-obsidian-300 transition hover:border-gold-500 hover:text-gold-400"
          >
            Çıxış
          </button>
        </div>
      </div>
    </header>
  )
}
