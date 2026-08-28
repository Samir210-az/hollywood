import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { employee, login } = useAuth()
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (employee) return <Navigate to="/" replace />

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(phone, pin)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian-950 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center">
          <img src="/logo.png" alt="Hollywood Restaurant" className="h-24 w-24 rounded-full shadow-gold" />
          <h1 className="mt-4 font-display text-2xl font-semibold text-gold-400">Hollywood Restaurant</h1>
          <p className="mt-1 text-sm text-obsidian-400">İdarəetmə panelinə giriş</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-obsidian-700 bg-obsidian-900 p-6">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm text-obsidian-300">
              Telefon nömrəsi
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0501234567"
              required
              className="w-full rounded-lg border border-obsidian-600 bg-obsidian-800 px-3.5 py-2.5 text-obsidian-50 outline-none transition focus:border-gold-500"
            />
          </div>

          <div>
            <label htmlFor="pin" className="mb-1.5 block text-sm text-obsidian-300">
              PIN kod
            </label>
            <input
              id="pin"
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
              required
              className="w-full rounded-lg border border-obsidian-600 bg-obsidian-800 px-3.5 py-2.5 text-obsidian-50 outline-none transition focus:border-gold-500"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 py-2.5 font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500 disabled:opacity-60"
          >
            {submitting ? 'Yoxlanılır...' : 'Daxil ol'}
          </button>
        </form>
      </div>
    </div>
  )
}
