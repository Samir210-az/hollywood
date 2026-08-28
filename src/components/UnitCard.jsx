import { Link } from 'react-router-dom'

const STATUS_STYLES = {
  boş: { label: 'Boş', ring: 'ring-emerald-500', badge: 'bg-emerald-500/90' },
  dolu: { label: 'Dolu', ring: 'ring-red-500', badge: 'bg-red-500/90' },
  rezerv: { label: 'Rezerv edilib', ring: 'ring-amber-500', badge: 'bg-amber-500/90' },
}

export default function UnitCard({ unit, type }) {
  const status = STATUS_STYLES[unit.status] ?? STATUS_STYLES['boş']
  const basePath = type === 'otaq' ? '/otaqlar' : '/masalar'
  const isOccupied = unit.status !== 'boş'

  return (
    <Link
      to={`${basePath}/${unit.id}`}
      className={`group relative block aspect-square overflow-hidden rounded-full ring-4 ring-offset-4 ring-offset-obsidian-950 transition hover:scale-[1.03] ${status.ring}`}
    >
      <img src="/logo.png" alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-40% to-transparent" />

      <span
        className={`absolute right-[13%] top-[9%] rounded-full px-2 py-0.5 text-[10px] font-medium text-obsidian-950 sm:text-xs ${status.badge}`}
      >
        {status.label}
      </span>

      <div className="absolute inset-x-0 bottom-[8%] flex flex-col items-center px-2 text-center">
        <span className="font-display text-base font-bold leading-tight text-white drop-shadow-lg sm:text-xl">
          {unit.name}
        </span>
        <span className="mt-0.5 text-[11px] leading-tight text-obsidian-200 drop-shadow-lg sm:text-xs">
          {unit.capacity} nəfər
        </span>
        {isOccupied && unit.assignedEmployeeName && (
          <span className="mt-0.5 text-xs font-medium leading-tight text-gold-300 drop-shadow-lg sm:text-sm">
            {unit.assignedEmployeeName}
          </span>
        )}
      </div>
    </Link>
  )
}
