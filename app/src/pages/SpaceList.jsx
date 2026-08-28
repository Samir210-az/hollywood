import { useEffect, useState } from 'react'
import { watchSpaces, createSpace, deleteSpace } from '../lib/db'
import { useAuth } from '../context/AuthContext'
import SpaceCard from '../components/SpaceCard'

const TITLES = {
  masa: { title: 'Masalar', singular: 'Masa' },
  otaq: { title: 'Otaqlar', singular: 'Otaq' },
}

export default function SpaceList({ type }) {
  const { profile } = useAuth()
  const isAdmin = profile?.role === 'admin'
  const [spaces, setSpaces] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [capacity, setCapacity] = useState(4)
  const [busy, setBusy] = useState(false)

  const { title, singular } = TITLES[type]

  useEffect(() => {
    const unsub = watchSpaces(type, setSpaces)
    return unsub
  }, [type])

  async function handleCreate(e) {
    e.preventDefault()
    if (!name.trim()) return
    setBusy(true)
    try {
      await createSpace(type, { name: name.trim(), capacity })
      setName('')
      setCapacity(4)
      setShowForm(false)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">{title}</h1>
        {isAdmin && (
          <button className="btn-primary" onClick={() => setShowForm((v) => !v)}>
            {showForm ? 'Bağla' : `+ Yeni ${singular.toLowerCase()}`}
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="inline-form">
          <input
            type="text"
            placeholder={`${singular} adı (məs: ${type === 'masa' ? 'Masa 1' : 'Otaq A'})`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            min="1"
            placeholder="Tutum"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          <button type="submit" className="btn-primary" disabled={busy}>
            Əlavə et
          </button>
        </form>
      )}

      {spaces.length === 0 ? (
        <p className="empty-state">Hələ {title.toLowerCase()} əlavə edilməyib.</p>
      ) : (
        <div className="space-grid">
          {spaces.map((s) => (
            <div key={s.id} className="space-card-wrap">
              <SpaceCard type={type} space={s} />
              {isAdmin && (
                <button
                  className="space-card-delete"
                  title="Sil"
                  onClick={(e) => {
                    e.preventDefault()
                    if (confirm(`${s.name} silinsin?`)) deleteSpace(type, s.id)
                  }}
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
