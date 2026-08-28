import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { watchSpace } from '../lib/db'
import SpaceCard from '../components/SpaceCard'
import Loader from '../components/Loader'

export default function Dashboard() {
  const { profile } = useAuth()
  const navigate = useNavigate()
  const isAdmin = profile?.role === 'admin'
  const [assignedSpace, setAssignedSpace] = useState(undefined)

  useEffect(() => {
    if (isAdmin || !profile?.assignedType || !profile?.assignedId) {
      setAssignedSpace(null)
      return
    }
    const unsub = watchSpace(profile.assignedType, profile.assignedId, setAssignedSpace)
    return unsub
  }, [isAdmin, profile])

  if (isAdmin) {
    return (
      <div className="page">
        <h1 className="page-title">İdarəetmə paneli</h1>
        <div className="dashboard-grid">
          <button className="dashboard-card" onClick={() => navigate('/masalar')}>
            <span className="dashboard-card-icon">🍽️</span>
            <span className="dashboard-card-title">Masalar</span>
            <span className="dashboard-card-sub">Zal masalarını idarə et</span>
          </button>
          <button className="dashboard-card" onClick={() => navigate('/otaqlar')}>
            <span className="dashboard-card-icon">🚪</span>
            <span className="dashboard-card-title">Otaqlar</span>
            <span className="dashboard-card-sub">Ayrıca otaqları idarə et</span>
          </button>
        </div>
      </div>
    )
  }

  if (assignedSpace === undefined) return <Loader />

  if (!assignedSpace) {
    return (
      <div className="page">
        <h1 className="page-title">Xoş gəldiniz, {profile?.name}</h1>
        <p className="empty-state">Sizə hələ masa və ya otaq təyin edilməyib.</p>
      </div>
    )
  }

  return (
    <div className="page">
      <h1 className="page-title">Xoş gəldiniz, {profile?.name}</h1>
      <p className="page-sub">Sizə təyin edilmiş yer</p>
      <div className="dashboard-grid single">
        <SpaceCard type={profile.assignedType} space={assignedSpace} />
      </div>
    </div>
  )
}
