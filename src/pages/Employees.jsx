import { useEffect, useState } from 'react'
import { onValue, push, ref, set, update } from 'firebase/database'
import { db } from '../firebase.js'
import { toArray } from '../utils/toArray.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const emptyForm = { name: '', phone: '', pin: '', role: 'işçi' }

export default function Employees() {
  const [employees, setEmployees] = useState(null)
  const [rooms, setRooms] = useState([])
  const [tables, setTables] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  useEffect(() => {
    const unsubEmployees = onValue(ref(db, 'employees'), (snapshot) => {
      setEmployees(toArray(snapshot.val()))
    })
    const unsubRooms = onValue(ref(db, 'rooms'), (snapshot) => setRooms(toArray(snapshot.val())))
    const unsubTables = onValue(ref(db, 'tables'), (snapshot) => setTables(toArray(snapshot.val())))
    return () => {
      unsubEmployees()
      unsubRooms()
      unsubTables()
    }
  }, [])

  function updateField(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function handleAdd(e) {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.phone.trim() || !form.pin.trim()) {
      setError('Ad, telefon və PIN mütləq doldurulmalıdır')
      return
    }

    const normalizedPhone = form.phone.trim().replace(/\s+/g, '')
    const alreadyExists = employees?.some((emp) => emp.phone === normalizedPhone)
    if (alreadyExists) {
      setError('Bu telefon nömrəsi ilə artıq işçi qeydə alınıb')
      return
    }

    const newRef = push(ref(db, 'employees'))
    await set(newRef, {
      name: form.name.trim(),
      phone: normalizedPhone,
      pin: form.pin.trim(),
      role: form.role,
    })
    setForm(emptyForm)
  }

  async function handleRemove(id) {
    const emp = employees?.find((item) => item.id === id)
    const updates = { [`employees/${id}`]: null }

    if (emp?.assignedUnits) {
      Object.values(emp.assignedUnits).forEach((unitRef) => {
        const unitNode = unitRef.type === 'otaq' ? 'rooms' : 'tables'
        updates[`${unitNode}/${unitRef.id}/assignedEmployeeId`] = null
        updates[`${unitNode}/${unitRef.id}/assignedEmployeeName`] = null
      })
    }

    await update(ref(db), updates)
  }

  return (
    <div className="flex min-h-screen flex-col bg-obsidian-950">
      <Header title="İşçilər" backTo="/" />
      <main className="flex-1 mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-2xl font-semibold text-obsidian-50">İşçilər</h1>
        <p className="mt-1 text-obsidian-400">
          Yeni işçi əlavə edin. Otaq/masa təyinatı həmin otaq və ya masanın səhifəsindən edilir.
        </p>

        <form onSubmit={handleAdd} className="mt-6 space-y-4 rounded-2xl border border-obsidian-700 bg-obsidian-800 p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm text-obsidian-300">Ad Soyad</label>
              <input
                value={form.name}
                onChange={updateField('name')}
                className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-obsidian-300">Telefon</label>
              <input
                type="tel"
                value={form.phone}
                onChange={updateField('phone')}
                placeholder="0501234567"
                className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-obsidian-300">PIN kod</label>
              <input
                value={form.pin}
                onChange={updateField('pin')}
                placeholder="4 rəqəm"
                className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-obsidian-300">Rol</label>
              <select
                value={form.role}
                onChange={updateField('role')}
                className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              >
                <option value="işçi">İşçi</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            className="rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500"
          >
            İşçini əlavə et
          </button>
        </form>

        <div className="mt-8 space-y-3">
          {employees?.map((emp) => (
            <div key={emp.id} className="flex items-center justify-between rounded-xl border border-obsidian-700 bg-obsidian-800 p-4">
              <div>
                <p className="font-medium text-obsidian-50">
                  {emp.name}
                  {emp.role === 'admin' && (
                    <span className="ml-2 rounded-full bg-gold-500/10 px-2 py-0.5 text-xs text-gold-400">Admin</span>
                  )}
                </p>
                <p className="text-sm text-obsidian-400">{emp.phone}</p>
                {emp.assignedUnits && Object.values(emp.assignedUnits).length > 0 && (
                  <p className="text-xs text-obsidian-500">
                    Təyinat:{' '}
                    {Object.values(emp.assignedUnits)
                      .map((unitRef) => {
                        const list = unitRef.type === 'otaq' ? rooms : tables
                        return list.find((u) => u.id === unitRef.id)?.name
                      })
                      .filter(Boolean)
                      .join(', ') || '—'}
                  </p>
                )}
              </div>
              <button
                onClick={() => handleRemove(emp.id)}
                className="rounded-lg border border-obsidian-600 px-3 py-1.5 text-xs text-obsidian-300 transition hover:border-red-500 hover:text-red-400"
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
