import { useState } from 'react'
import { push, ref, serverTimestamp, set } from 'firebase/database'
import { db } from '../firebase.js'
import { useAuth } from '../context/AuthContext.jsx'

const emptyForm = { customerName: '', phone: '', date: '', time: '', guests: 2, note: '' }

export default function ReservationForm({ targetType, targetId, onCreated }) {
  const { employee } = useAuth()
  const [form, setForm] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function updateField(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.customerName.trim() || !form.phone.trim() || !form.date || !form.time) {
      setError('Ad, telefon, tarix və saat mütləq doldurulmalıdır')
      return
    }

    setSubmitting(true)
    try {
      const reservationsRef = ref(db, 'reservations')
      const newRef = push(reservationsRef)
      await set(newRef, {
        targetType,
        targetId,
        customerName: form.customerName.trim(),
        phone: form.phone.trim(),
        date: form.date,
        time: form.time,
        guests: Number(form.guests) || 1,
        note: form.note.trim(),
        status: 'aktiv',
        createdByName: employee?.name ?? 'Naməlum',
        createdAt: serverTimestamp(),
      })
      setForm(emptyForm)
      onCreated?.()
    } catch (err) {
      setError('Rezervasiya yadda saxlanmadı, yenidən cəhd edin')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-obsidian-700 bg-obsidian-800 p-5">
      <h3 className="font-display text-lg font-semibold text-obsidian-50">Yeni rezervasiya</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-obsidian-300">Müştərinin adı</label>
          <input
            value={form.customerName}
            onChange={updateField('customerName')}
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
          <label className="mb-1.5 block text-sm text-obsidian-300">Tarix</label>
          <input
            type="date"
            value={form.date}
            onChange={updateField('date')}
            className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-obsidian-300">Saat</label>
          <input
            type="time"
            value={form.time}
            onChange={updateField('time')}
            className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-obsidian-300">Nəfər sayı</label>
          <input
            type="number"
            min="1"
            value={form.guests}
            onChange={updateField('guests')}
            className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-obsidian-300">Qeyd (istəyə bağlı)</label>
          <input
            value={form.note}
            onChange={updateField('note')}
            className="w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500 disabled:opacity-60"
      >
        {submitting ? 'Yadda saxlanılır...' : 'Rezervasiyanı əlavə et'}
      </button>
    </form>
  )
}
