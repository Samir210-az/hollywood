import { ref, remove, update } from 'firebase/database'
import { db } from '../firebase.js'

export default function ReservationList({ reservations }) {
  async function cancel(id) {
    await update(ref(db, `reservations/${id}`), { status: 'ləğv edilib' })
  }

  async function deleteReservation(id) {
    await remove(ref(db, `reservations/${id}`))
  }

  if (reservations.length === 0) {
    return <p className="text-obsidian-500">Hələ rezervasiya yoxdur.</p>
  }

  return (
    <div className="space-y-3">
      {reservations.map((res) => (
        <div
          key={res.id}
          className={`flex items-center justify-between rounded-xl border p-4 ${
            res.status === 'ləğv edilib'
              ? 'border-obsidian-700 bg-obsidian-800/50 opacity-50'
              : 'border-obsidian-700 bg-obsidian-800'
          }`}
        >
          <div>
            <p className="font-medium text-obsidian-50">{res.customerName}</p>
            <p className="text-sm text-obsidian-400">
              {res.date} · {res.time} · {res.guests} nəfər · {res.phone}
            </p>
            {res.note && <p className="mt-1 text-sm text-obsidian-500">{res.note}</p>}
            <p className="mt-1 text-xs text-obsidian-600">
              Qeydə alan: {res.createdByName}
              {res.employeeName && ` · Xidmət: ${res.employeeName}`}
            </p>
          </div>

          {res.status !== 'ləğv edilib' ? (
            <button
              onClick={() => cancel(res.id)}
              className="shrink-0 rounded-lg border border-obsidian-600 px-3 py-1.5 text-xs text-obsidian-300 transition hover:border-red-500 hover:text-red-400"
            >
              Ləğv et
            </button>
          ) : (
            <button
              onClick={() => deleteReservation(res.id)}
              className="shrink-0 rounded-lg border border-obsidian-600 px-3 py-1.5 text-xs text-obsidian-300 transition hover:border-red-500 hover:text-red-400"
            >
              Sil
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
