import { useEffect, useRef, useState } from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { createEmployeeProfile } from '../lib/db'
import { useAuth } from '../context/AuthContext'

function normalizePhone(raw) {
  const digits = raw.replace(/[^\d+]/g, '')
  if (digits.startsWith('+')) return digits
  if (digits.startsWith('994')) return `+${digits}`
  if (digits.startsWith('0')) return `+994${digits.slice(1)}`
  return `+994${digits}`
}

export default function Login() {
  const { user } = useAuth()
  const [step, setStep] = useState('phone') // 'phone' | 'code'
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const confirmationRef = useRef(null)
  const recaptchaRef = useRef(null)

  useEffect(() => {
    if (!recaptchaRef.current) {
      recaptchaRef.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      })
    }
  }, [])

  if (user) return null

  async function handleSendCode(e) {
    e.preventDefault()
    setError('')
    if (!name.trim()) {
      setError('Zəhmət olmasa adınızı daxil edin.')
      return
    }
    const formatted = normalizePhone(phone)
    if (formatted.length < 12) {
      setError('Telefon nömrəsini düzgün daxil edin.')
      return
    }
    setBusy(true)
    try {
      const confirmation = await signInWithPhoneNumber(auth, formatted, recaptchaRef.current)
      confirmationRef.current = confirmation
      setStep('code')
    } catch (err) {
      console.error(err)
      setError('SMS göndərilmədi. Nömrəni yoxlayıb yenidən cəhd edin.')
    } finally {
      setBusy(false)
    }
  }

  async function handleVerifyCode(e) {
    e.preventDefault()
    setError('')
    if (!confirmationRef.current) return
    setBusy(true)
    try {
      const result = await confirmationRef.current.confirm(code)
      await createEmployeeProfile(result.user.uid, {
        name: name.trim(),
        phone: normalizePhone(phone),
      }).catch(() => {
        // Profile may already exist for returning users — that's fine.
      })
    } catch (err) {
      console.error(err)
      setError('Kod yanlışdır. Yenidən cəhd edin.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <img src="/logo.png" alt="Hollywood Restaurant" className="auth-logo" />
        <h1>Hollywood Restaurant</h1>
        <p className="auth-sub">İdarəetmə paneli</p>

        {step === 'phone' && (
          <form onSubmit={handleSendCode} className="auth-form">
            <label>
              Ad Soyad
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınızı daxil edin"
                autoComplete="name"
              />
            </label>
            <label>
              Telefon nömrəsi
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+994 XX XXX XX XX"
                autoComplete="tel"
              />
            </label>
            {error && <div className="auth-error">{error}</div>}
            <button type="submit" disabled={busy} className="btn-primary">
              {busy ? 'Göndərilir...' : 'Kod göndər'}
            </button>
          </form>
        )}

        {step === 'code' && (
          <form onSubmit={handleVerifyCode} className="auth-form">
            <p className="auth-hint">{normalizePhone(phone)} nömrəsinə göndərilən kodu daxil edin</p>
            <label>
              Təsdiq kodu
              <input
                type="text"
                inputMode="numeric"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="123456"
                autoComplete="one-time-code"
              />
            </label>
            {error && <div className="auth-error">{error}</div>}
            <button type="submit" disabled={busy} className="btn-primary">
              {busy ? 'Yoxlanılır...' : 'Təsdiqlə və daxil ol'}
            </button>
            <button
              type="button"
              className="btn-link"
              onClick={() => {
                setStep('phone')
                setCode('')
                setError('')
              }}
            >
              Nömrəni dəyiş
            </button>
          </form>
        )}

        <div id="recaptcha-container" />
      </div>
    </div>
  )
}
