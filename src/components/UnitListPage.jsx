import { useEffect, useState } from 'react'
import { onValue, push, ref, set } from 'firebase/database'
import { db } from '../firebase.js'
import { toArray } from '../utils/toArray.js'
import { useAuth } from '../context/AuthContext.jsx'
import Header from './Header.jsx'
import UnitCard from './UnitCard.jsx'

export default function UnitListPage({ type, node, title, emptyText }) {
  const { isAdmin } = useAuth()
  const [units, setUnits] = useState(null)
  const [formOpen, setFormOpen] = useState(false)
  const [name, setName] = useState('')
  const [capacity, setCapacity] = useState('')

  useEffect(() => {
    const unsubscribe = onValue(ref(db, node), (snapshot) => {
      const list = toArray(snapshot.val()).sort((a, b) => a.name.localeCompare(b.name, 'az'))
      setUnits(list)
    })
    return () => unsubscribe()
  }, [node])

  async function handleAdd(e) {
    e.preventDefault()
    if (!name.trim()) return

    const newRef = push(ref(db, node))
    await set(newRef, {
      name: name.trim(),
      capacity: Number(capacity) || 1,
      status: 'boş',
    })
    setName('')
    setCapacity('')
    setFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-obsidian-950">
      <Header title={title} backTo="/" />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-semibold text-obsidian-50">{title}</h1>
            <p className="mt-1 text-obsidian-400">
              {isAdmin ? 'Vəziyyətə klikləyərək rezervasiya edin' : 'Sizə təyin olunmuş bölmələr'}
            </p>
          </div>

          {isAdmin && (
            <button
              onClick={() => setFormOpen((prev) => !prev)}
              className="rounded-lg border border-gold-600 px-4 py-2 text-sm font-medium text-gold-400 transition hover:bg-gold-500/10"
            >
              {formOpen ? 'Bağla' : '+ Yeni əlavə et'}
            </button>
          )}
        </div>

        {formOpen && (
          <form onSubmit={handleAdd} className="mt-6 flex flex-wrap items-end gap-4 rounded-2xl border border-obsidian-700 bg-obsidian-800 p-5">
            <div>
              <label className="mb-1.5 block text-sm text-obsidian-300">Ad</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={type === 'otaq' ? 'Otaq 1' : 'Masa 1'}
                className="rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-obsidian-300">Tutum (nəfər)</label>
              <input
                type="number"
                min="1"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="w-32 rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500"
            >
              Əlavə et
            </button>
          </form>
        )}

        {units === null && <p className="mt-8 text-obsidian-500">Yüklənir...</p>}

        {units !== null && units.length === 0 && (
          <p className="mt-8 text-obsidian-500">{emptyText}</p>
        )}

        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
          {units?.map((unit) => (
            <UnitCard key={unit.id} unit={unit} type={type} />
          ))}
        </div>
      </main>
    </div>
  )
}
