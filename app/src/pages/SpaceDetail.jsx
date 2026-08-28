import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { watchSpace, watchReservationsForSpace, setSpaceStatus } from '../lib/db'
import { useAuth } from '../context/AuthContext'
import ReservationForm from '../components/ReservationForm'
import ReservationList from '../components/ReservationList'
import Loader from '../components/Loader'

const PARENT = {
  masa: { label: 'Masalar', path: '/masalar' },
  otaq: { label: 'Otaqlar', path: '/otaqlar' },
}

const STATUS_OPTIONS = [
  { value: 'boş', label: 'Boş' },
  { value: 'dolu', label: 'Dolu' },
  { value: 'rezerv', label: 'Rezerv olunub' },
]

export default function SpaceDetail({ type }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const { profile } = useAuth()
  const [space, setSpace] = useState(undefined)
  const [reservations, setReservations] = useState([])
  const [showForm, setShowForm] = useState(false)

  const canManage =
    profile?.role === 'admin' ||
    (profile?.assignedType === type && profile?.assignedId === id)

  useEffect(() => {
    const unsub = watchSpace(type, id, setSpace)
    return unsub
  }, [type, id])

  useEffect(() => {
    const unsub = watchReservationsForSpace(type, id, setReservations)
    return unsub
  }, [type, id])

  if (space === undefined) return <Loader />
  if (space === null) {
    return (
      <div className="page">
        <p className="empty-state">Bu yer tapılmadı.</p>
        <Link to={PARENT[type].path} className="btn-link">
          {PARENT[type].label}na qayıt
        </Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link to={PARENT[type].path} className="back-link">
        ← {PARENT[type].label}
      </Link>

      <div className="page-header">
        <div>
          <h1 className="page-title">{space.name}</h1>
          <p className="page-sub">{space.capacity} nəfərlik</p>
        </div>
        {canManage && (
          <select
            className={`status-select status-${space.status}`}
            value={space.status}
            onChange={(e) => setSpaceStatus(type, id, e.target.value)}
          >
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        )}
      </div>

      {canManage && (
        <button className="btn-primary" onClick={() => setShowForm(true)}>
          + Yeni rezervasiya
        </button>
      )}

      <h2 className="section-title">Rezervasiyalar</h2>
      <ReservationList reservations={reservations} />

      {showForm && (
        <ReservationForm
          space={space}
          spaceType={type}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
