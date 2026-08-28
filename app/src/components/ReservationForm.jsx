import { useState } from 'react'
import { createReservation } from '../lib/db'
import { useAuth } from '../context/AuthContext'

function today() {
  const d = new Date()
  return d.toISOString().slice(0, 10)
}

function nowTime() {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export default function ReservationForm({ space, spaceType, onClose, onCreated }) {
  const { user, profile } = useAuth()
  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState(today())
  const [time, setTime] = useState(nowTime())
  const [guests, setGuests] = useState(space.capacity || 2)
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!customerName.trim() || !phone.trim() || !date || !time) {
      setError('Zəhmət olmasa bütün vacib sahələri doldurun.')
      return
    }
    setBusy(true)
    try {
      await createReservation({
        customerName: customerName.trim(),
        phone: phone.trim(),
        date,
        time,
        guests,
        spaceType,
        spaceId: space.id,
        spaceName: space.name,
        note: note.trim(),
        createdBy: user?.uid || null,
        createdByName: profile?.name || '',
      })
      onCreated?.()
      onClose()
    } catch (err) {
      console.error(err)
      setError('Rezervasiya yaradıla bilmədi. Yenidən cəhd edin.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Yeni rezervasiya — {space.name}</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Müştəri adı *
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Müştərinin adı"
            />
          </label>
          <label>
            Telefon *
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+994 XX XXX XX XX"
            />
          </label>
          <div className="modal-row">
            <label>
              Tarix *
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
              Saat *
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
          </div>
          <label>
            Nəfər sayı *
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </label>
          <label>
            Qeyd
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Əlavə qeyd (istəyə bağlı)"
              rows={2}
            />
          </label>
          {error && <div className="auth-error">{error}</div>}
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Ləğv et
            </button>
            <button type="submit" className="btn-primary" disabled={busy}>
              {busy ? 'Yadda saxlanılır...' : 'Rezervasiya et'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
