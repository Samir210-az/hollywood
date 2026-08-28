import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { onValue, ref, update } from 'firebase/database'
import { db } from '../firebase.js'
import { toArray } from '../utils/toArray.js'
import Header from '../components/Header.jsx'

export default function ReservationsOverview() {
  const [reservations, setReservations] = useState(null)
  const [units, setUnits] = useState({})

  useEffect(() => {
    const unsubReservations = onValue(ref(db, 'reservations'), (snapshot) => {
      const list = toArray(snapshot.val()).sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
      setReservations(list)
    })

    const unsubRooms = onValue(ref(db, 'rooms'), (snapshot) => {
      setUnits((prev) => ({ ...prev, otaq: toArray(snapshot.val()) }))
    })

    const unsubTables = onValue(ref(db, 'tables'), (snapshot) => {
      setUnits((prev) => ({ ...prev, masa: toArray(snapshot.val()) }))
    })

    return () => {
      unsubReservations()
      unsubRooms()
      unsubTables()
    }
  }, [])

  async function cancel(id) {
    await update(ref(db, `reservations/${id}`), { status: 'ləğv edilib' })
  }

  function unitName(res) {
    const list = units[res.targetType] ?? []
    return list.find((u) => u.id === res.targetId)?.name ?? '—'
  }

  function unitPath(res) {
    const base = res.targetType === 'otaq' ? '/otaqlar' : '/masalar'
    return `${base}/${res.targetId}`
  }

  return (
    <div className="min-h-screen bg-obsidian-950">
      <Header title="Rezervasiyalar" backTo="/" />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-2xl font-semibold text-obsidian-50">Rezervasiyalar</h1>
        <p className="mt-1 text-obsidian-400">Bütün otaq və masalar üzrə rezervasiyalar</p>

        {reservations === null && <p className="mt-8 text-obsidian-500">Yüklənir...</p>}

        {reservations !== null && reservations.length === 0 && (
          <p className="mt-8 text-obsidian-500">Hələ heç bir rezervasiya yoxdur.</p>
        )}

        <div className="mt-8 space-y-3">
          {reservations?.map((res) => (
            <div
              key={res.id}
              className={`rounded-xl border p-4 ${
                res.status === 'ləğv edilib'
                  ? 'border-obsidian-700 bg-obsidian-800/50 opacity-50'
                  : 'border-obsidian-700 bg-obsidian-800'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link to={unitPath(res)} className="text-sm font-medium text-gold-400 hover:underline">
                    {res.targetType === 'otaq' ? 'Otaq' : 'Masa'}: {unitName(res)}
                  </Link>
                  <p className="mt-1 font-medium text-obsidian-50">{res.customerName}</p>
                  <p className="text-sm text-obsidian-400">
                    {res.date} · {res.time} · {res.guests} nəfər · {res.phone}
                  </p>
                  {res.note && <p className="mt-1 text-sm text-obsidian-500">{res.note}</p>}
                  <p className="mt-1 text-xs text-obsidian-600">
                    Qeydə alan: {res.createdByName}
                    {res.employeeName && ` · Xidmət: ${res.employeeName}`}
                  </p>
                </div>

                {res.status !== 'ləğv edilib' && (
                  <button
                    onClick={() => cancel(res.id)}
                    className="shrink-0 rounded-lg border border-obsidian-600 px-3 py-1.5 text-xs text-obsidian-300 transition hover:border-red-500 hover:text-red-400"
                  >
                    Ləğv et
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
