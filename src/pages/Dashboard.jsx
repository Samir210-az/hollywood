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
    const unsubRooms = onValue(ref(db, 'rooms'), (snapshot) => setRooms(toArray(snapshot.val())))
    const unsubTables = onValue(ref(db, 'tables'), (snapshot) => setTables(toArray(snapshot.val())))
    return () => {
      unsubRooms()
      unsubTables()
    }
  }, [])

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
          <SectionCard to="/otaqlar" title="OTAQLAR" subtitle="Bütün otaqların vəziyyəti və rezervasiyaları" units={rooms} />
          <SectionCard to="/masalar" title="MASALAR" subtitle="Zaldakı bütün masaların vəziyyəti və rezervasiyaları" units={tables} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function SectionCard({ to, title, subtitle, units }) {
  const total = units.length
  const occupied = units.filter((u) => u.status === 'dolu').length
  const isFull = total > 0 && occupied === total
  const isEmpty = total > 0 && occupied === 0

  const borderClass = isFull
    ? 'border-red-600 hover:border-red-500'
    : isEmpty
      ? 'border-emerald-600 hover:border-emerald-500'
      : 'border-obsidian-700 hover:border-gold-500'

  return (
    <Link
      to={to}
      className={`group relative rounded-2xl border bg-obsidian-800 p-8 transition hover:shadow-gold ${borderClass}`}
    >
      {total > 0 && (
        <span
          className={`absolute right-6 top-6 rounded-full px-2.5 py-1 text-xs font-semibold ${
            isFull ? 'bg-red-500/15 text-red-400' : isEmpty ? 'bg-emerald-500/15 text-emerald-400' : 'bg-obsidian-700 text-obsidian-300'
          }`}
        >
          {occupied}/{total}
        </span>
      )}

      <img src="/logo.png" alt="" className="mb-4 h-12 w-12 rounded-full" />
      <h2 className="font-display text-xl font-bold uppercase tracking-wide text-obsidian-50">{title}</h2>
      <p className="mt-1 text-sm text-obsidian-400">{subtitle}</p>
    </Link>
  )
}
