import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { db } from '../firebase.js'
import { toArray } from '../utils/toArray.js'
import { useAuth } from '../context/AuthContext.jsx'
import Header from '../components/Header.jsx'
import UnitCard from '../components/UnitCard.jsx'
import Footer from '../components/Footer.jsx'

export default function Dashboard() {
  const { employee, isAdmin } = useAuth()
  const [rooms, setRooms] = useState([])
  const [tables, setTables] = useState([])

  useEffect(() => {
    if (isAdmin) return
    const unsubRooms = onValue(ref(db, 'rooms'), (snapshot) => setRooms(toArray(snapshot.val())))
    const unsubTables = onValue(ref(db, 'tables'), (snapshot) => setTables(toArray(snapshot.val())))
    return () => {
      unsubRooms()
      unsubTables()
    }
  }, [isAdmin])

  if (!isAdmin) {
    const assignedUnits = Object.values(employee.assignedUnits ?? {})
    const myUnits = assignedUnits
      .map((entry) => {
        const list = entry.type === 'otaq' ? rooms : tables
        const unit = list.find((u) => u.id === entry.id)
        return unit ? { ...unit, type: entry.type } : null
      })
      .filter(Boolean)

    return (
      <div className="flex min-h-screen flex-col bg-obsidian-950">
        <Header />
        <main className="flex-1 mx-auto max-w-6xl px-4 py-10">
          <h1 className="font-display text-2xl font-semibold text-obsidian-50">Xoş gəldiniz, {employee.name}</h1>

          {myUnits.length === 0 ? (
            <p className="mt-6 text-obsidian-400">
              Sizə hələ otaq və ya masa təyin edilməyib. Administrator ilə əlaqə saxlayın.
            </p>
          ) : (
            <>
              <p className="mt-1 text-obsidian-400">Sizə təyin olunmuş bölmələr</p>
              <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
                {myUnits.map((unit) => (
                  <UnitCard key={`${unit.type}-${unit.id}`} unit={unit} type={unit.type} />
                ))}
              </div>
            </>
          )}
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-obsidian-950">
      <Header />
      <main className="flex-1 mx-auto max-w-6xl px-4 py-10">
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
      <Footer />
    </div>
  )
}
