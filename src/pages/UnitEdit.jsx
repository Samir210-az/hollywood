import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { onValue, ref, remove, update } from 'firebase/database'
import { db } from '../firebase.js'
import { toArray } from '../utils/toArray.js'
import { useAuth } from '../context/AuthContext.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function UnitEdit({ type }) {
  const { id } = useParams()
  const { isAdmin } = useAuth()
  const navigate = useNavigate()
  const node = type === 'otaq' ? 'rooms' : 'tables'
  const backPath = type === 'otaq' ? '/otaqlar' : '/masalar'

  const [unit, setUnit] = useState(undefined)
  const [name, setName] = useState('')
  const [capacity, setCapacity] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const unsubscribe = onValue(ref(db, `${node}/${id}`), (snapshot) => {
      const data = snapshot.val()
      setUnit(data ? { id, ...data } : null)
      if (data) {
        setName(data.name)
        setCapacity(data.capacity)
      }
    })
    return () => unsubscribe()
  }, [node, id])

  if (!isAdmin) return <Navigate to="/" replace />
  if (unit === null) return <Navigate to={backPath} replace />

  async function handleSave(e) {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Ad boş ola bilməz')
      return
    }

    setSaving(true)
    try {
      await update(ref(db, `${node}/${id}`), {
        name: name.trim(),
        capacity: Number(capacity) || 1,
      })
      navigate(`${backPath}/${id}`)
    } catch (err) {
      setError('Yadda saxlanmadı, yenidən cəhd edin')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      `"${unit.name}" silinsin? Bu bölməyə aid bütün rezervasiyalar da silinəcək. Bu əməliyyat geri qaytarıla bilməz.`,
    )
    if (!confirmed) return

    setDeleting(true)
    try {
      const updates = { [`${node}/${id}`]: null }

      if (unit.assignedEmployeeId) {
        updates[`employees/${unit.assignedEmployeeId}/assignedUnits/${type}-${id}`] = null
      }

      const reservationsSnapshot = await new Promise((resolve) => {
        onValue(ref(db, 'reservations'), resolve, { onlyOnce: true })
      })
      toArray(reservationsSnapshot.val())
        .filter((r) => r.targetType === type && r.targetId === id)
        .forEach((r) => {
          updates[`reservations/${r.id}`] = null
        })

      await update(ref(db), updates)
      navigate(backPath)
    } catch (err) {
      setError('Silinmə zamanı xəta baş verdi, yenidən cəhd edin')
      setDeleting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-obsidian-950">
      <Header title="Redaktə" backTo={unit ? `${backPath}/${id}` : backPath} />

      {unit && (
        <main className="flex-1 mx-auto max-w-md px-4 py-10">
          <h1 className="font-display text-2xl font-semibold text-obsidian-50">{unit.name} — redaktə</h1>

          <form onSubmit={handleSave} className="mt-6 space-y-4 rounded-2xl border border-obsidian-700 bg-obsidian-800 p-5">
            <div>
              <label className="mb-1.5 block text-sm text-obsidian-300">Ad</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-obsidian-300">Tutum (nəfər)</label>
              <input
                type="number"
                min="1"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 py-2.5 text-sm font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500 disabled:opacity-60"
            >
              {saving ? 'Yadda saxlanılır...' : 'Yadda saxla'}
            </button>
          </form>

          <button
            onClick={handleDelete}
            disabled={deleting}
            className="mt-4 w-full rounded-lg border border-red-800 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500/10 disabled:opacity-60"
          >
            {deleting ? 'Silinir...' : `${unit.name} sil`}
          </button>
        </main>
      )}
      <Footer />
    </div>
  )
}
