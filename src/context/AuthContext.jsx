import { createContext, useContext, useEffect, useState } from 'react'
import { get, onValue, ref } from 'firebase/database'
import { db, authReady } from '../firebase.js'
import { toArray } from '../utils/toArray.js'

const AuthContext = createContext(null)
const STORAGE_KEY = 'hollywood_session'

export function AuthProvider({ children }) {
  const [employeeId, setEmployeeId] = useState(null)
  const [employee, setEmployee] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authReady.finally(() => {
      const savedId = localStorage.getItem(STORAGE_KEY)
      if (savedId) setEmployeeId(savedId)
      setLoading(false)
    })
  }, [])

  // Sessiya boyu işçi qeydini canlı izləyir — admin təyinatı (otaq/masa) və ya
  // rolu dəyişsə, işçi yenidən daxil olmadan da bunu görür.
  useEffect(() => {
    if (!employeeId) {
      setEmployee(null)
      return
    }

    const unsubscribe = onValue(ref(db, `employees/${employeeId}`), (snapshot) => {
      if (snapshot.exists()) {
        setEmployee({ id: employeeId, ...snapshot.val() })
      } else {
        setEmployee(null)
        setEmployeeId(null)
        localStorage.removeItem(STORAGE_KEY)
      }
    })

    return () => unsubscribe()
  }, [employeeId])

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
    setEmployeeId(match.id)
    localStorage.setItem(STORAGE_KEY, match.id)
    return match
  }

  function logout() {
    setEmployeeId(null)
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
