import { createContext, useContext, useEffect, useState } from 'react'
import { get, ref } from 'firebase/database'
import { db, authReady } from '../firebase.js'
import { toArray } from '../utils/toArray.js'

const AuthContext = createContext(null)
const STORAGE_KEY = 'hollywood_session'

export function AuthProvider({ children }) {
  const [employee, setEmployee] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authReady.finally(() => {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          setEmployee(JSON.parse(saved))
        } catch {
          localStorage.removeItem(STORAGE_KEY)
        }
      }
      setLoading(false)
    })
  }, [])

  async function login(phone, pin) {
    const snapshot = await get(ref(db, 'employees'))
    const employees = toArray(snapshot.val())
    const normalizedPhone = phone.replace(/\s+/g, '')

    const match = employees.find(
      (item) => item.phone === normalizedPhone && item.pin === pin,
    )

    if (!match) {
      throw new Error('Telefon nömrəsi və ya PIN kod yanlışdır')
    }

    setEmployee(match)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(match))
    return match
  }

  function logout() {
    setEmployee(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const isAdmin = employee?.role === 'admin'

  return (
    <AuthContext.Provider value={{ employee, loading, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
