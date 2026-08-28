import { updateReservation, deleteReservation } from '../lib/db'

const STATUS_LABEL = {
  aktiv: 'Aktiv',
  'tamamlanıb': 'Tamamlanıb',
  'ləğv edilib': 'Ləğv edilib',
}

export default function ReservationList({ reservations }) {
  if (!reservations.length) {
    return <p className="empty-state">Hələ rezervasiya yoxdur.</p>
  }

  async function handleStatusChange(id, status) {
    await updateReservation(id, { status })
  }

  async function handleDelete(id) {
    if (confirm('Bu rezervasiyanı silmək istədiyinizə əminsiniz?')) {
      await deleteReservation(id)
    }
  }

  return (
    <div className="reservation-list">
      {reservations.map((r) => (
        <div key={r.id} className={`reservation-item res-${r.status?.replace(/\s/g, '-')}`}>
          <div className="reservation-main">
            <strong>{r.customerName}</strong>
            <span>{r.phone}</span>
          </div>
          <div className="reservation-details">
            <span>{r.date}</span>
            <span>{r.time}</span>
            <span>{r.guests} nəfər</span>
          </div>
          {r.note && <p className="reservation-note">{r.note}</p>}
          <div className="reservation-footer">
            <select
              value={r.status}
              onChange={(e) => handleStatusChange(r.id, e.target.value)}
            >
              {Object.entries(STATUS_LABEL).map(([val, label]) => (
                <option key={val} value={val}>
                  {label}
                </option>
              ))}
            </select>
            <button className="btn-link danger" onClick={() => handleDelete(r.id)}>
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
