import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import Header from '../components/Header.jsx'

export default function Dashboard() {
  const { employee, isAdmin } = useAuth()

  if (!isAdmin) {
    if (employee.assignedType && employee.assignedId) {
      const path = employee.assignedType === 'otaq' ? '/otaqlar' : '/masalar'
      return <Navigate to={`${path}/${employee.assignedId}`} replace />
    }

    return (
      <div className="min-h-screen bg-obsidian-950">
        <Header />
        <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
          <p className="text-obsidian-300">
            Sizə hələ otaq və ya masa təyin edilməyib. Administrator ilə əlaqə saxlayın.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-obsidian-950">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="font-display text-2xl font-semibold text-obsidian-50">Xoş gəldiniz, {employee.name}</h1>
        <p className="mt-1 text-obsidian-400">Zalı idarə etmək üçün bölmə seçin</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Link
            to="/otaqlar"
            className="group rounded-2xl border border-obsidian-700 bg-obsidian-800 p-8 transition hover:border-gold-500 hover:shadow-gold"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-semibold text-obsidian-50">Otaqlar</h2>
            <p className="mt-1 text-sm text-obsidian-400">Bütün otaqların vəziyyəti və rezervasiyaları</p>
          </Link>

          <Link
            to="/masalar"
            className="group rounded-2xl border border-obsidian-700 bg-obsidian-800 p-8 transition hover:border-gold-500 hover:shadow-gold"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 10h16M4 10a2 2 0 00-2 2v1h20v-1a2 2 0 00-2-2M4 10V6a2 2 0 012-2h12a2 2 0 012 2v4M6 13v6M18 13v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-semibold text-obsidian-50">Masalar</h2>
            <p className="mt-1 text-sm text-obsidian-400">Zaldakı bütün masaların vəziyyəti və rezervasiyaları</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
