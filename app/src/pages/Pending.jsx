import { useAuth } from '../context/AuthContext'

export default function Pending() {
  const { profile, signOut } = useAuth()

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <img src="/logo.png" alt="Hollywood Restaurant" className="auth-logo" />
        <h1>Gözləmədəsiniz</h1>
        <p className="auth-sub">
          Salam, {profile?.name || ''}. Hesabınız qeydiyyatdan keçib, lakin sizə hələ masa
          və ya otaq təyin edilməyib. Zəhmət olmasa administrator (Vüsal) ilə əlaqə saxlayın.
        </p>
        <button className="btn-secondary" onClick={signOut}>
          Çıxış et
        </button>
      </div>
    </div>
  )
}
