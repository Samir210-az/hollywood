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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:py-3">
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
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.png"
              alt="Hollywood Restaurant"
              className="h-11 w-11 rounded-full sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
            <span className="max-w-[100px] truncate font-display text-sm font-semibold leading-tight text-gold-400 sm:max-w-none sm:text-lg md:text-xl">
              {title ?? 'Hollywood'}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          {isAdmin && (
            <>
              <Link
                to="/rezervasiyalar"
                className="rounded-full p-1.5 text-obsidian-300 transition hover:bg-obsidian-800 hover:text-gold-400 sm:p-2"
                aria-label="Rezervasiyalar"
                title="Rezervasiyalar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
                </svg>
              </Link>
              <Link
                to="/isciler"
                className="rounded-full p-1.5 text-obsidian-300 transition hover:bg-obsidian-800 hover:text-gold-400 sm:p-2"
                aria-label="İşçilər"
                title="İşçilər"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </>
          )}

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
