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
  const isOccupied = unit.status !== 'boş'

  return (
    <Link
      to={`${basePath}/${unit.id}`}
      className={`group relative flex flex-col rounded-2xl border bg-obsidian-800 p-4 transition sm:p-5 ${status.ring}`}
    >
      <div className="flex items-start justify-between gap-2">
        <img
          src="/logo.png"
          alt=""
          className="h-8 w-8 shrink-0 rounded-full opacity-90 sm:h-10 sm:w-10"
        />
        <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-medium sm:px-2.5 sm:text-xs ${status.badge}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold text-obsidian-50 sm:text-xl">{unit.name}</h3>

      <div className="mt-3 flex flex-col gap-0.5 text-xs text-obsidian-400 sm:text-sm">
        <span>Tutum: {unit.capacity} nəfər</span>
        {isOccupied && unit.assignedEmployeeName && (
          <span className="text-gold-400">{unit.assignedEmployeeName}</span>
        )}
      </div>
    </Link>
  )
}
