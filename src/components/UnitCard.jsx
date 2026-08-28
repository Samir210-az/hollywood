import { Link } from 'react-router-dom'

const STATUS_STYLES = {
  boş: {
    label: 'Boş',
    ring: 'border-emerald-700/60 hover:border-emerald-500',
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-400',
  },
  dolu: {
    label: 'Dolu',
    ring: 'border-red-700/60 hover:border-red-500',
    dot: 'bg-red-400',
    badge: 'bg-red-500/10 text-red-400',
  },
  rezerv: {
    label: 'Rezerv edilib',
    ring: 'border-amber-700/60 hover:border-amber-500',
    dot: 'bg-amber-400',
    badge: 'bg-amber-500/10 text-amber-400',
  },
}

export default function UnitCard({ unit, type }) {
  const status = STATUS_STYLES[unit.status] ?? STATUS_STYLES['boş']
  const basePath = type === 'otaq' ? '/otaqlar' : '/masalar'

  return (
    <Link
      to={`${basePath}/${unit.id}`}
      className={`group relative flex flex-col justify-between rounded-2xl border bg-obsidian-800 p-5 transition ${status.ring}`}
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-xl font-semibold text-obsidian-50">{unit.name}</h3>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.badge}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-obsidian-400">
        <span>Tutum: {unit.capacity} nəfər</span>
        {unit.assignedEmployeeName && <span className="text-obsidian-500">{unit.assignedEmployeeName}</span>}
      </div>
    </Link>
  )
}
