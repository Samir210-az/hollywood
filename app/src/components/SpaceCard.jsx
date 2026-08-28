import { Link } from 'react-router-dom'

const STATUS_LABEL = {
  'boş': 'Boş',
  'dolu': 'Dolu',
  'rezerv': 'Rezerv olunub',
}

export default function SpaceCard({ type, space }) {
  const statusClass = `status-${space.status || 'boş'}`

  return (
    <Link to={`/${type === 'masa' ? 'masalar' : 'otaqlar'}/${space.id}`} className={`space-card ${statusClass}`}>
      <div className="space-card-top">
        <h3>{space.name}</h3>
        <span className="status-dot" />
      </div>
      <div className="space-card-meta">
        <span>{space.capacity} nəfərlik</span>
        <span className="space-card-status">{STATUS_LABEL[space.status] || 'Boş'}</span>
      </div>
    </Link>
  )
}
