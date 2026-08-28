import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { onValue, ref, update } from 'firebase/database'
import { db } from '../firebase.js'
import { toArray } from '../utils/toArray.js'
import { useAuth } from '../context/AuthContext.jsx'
import Header from '../components/Header.jsx'
import ReservationForm from '../components/ReservationForm.jsx'
import ReservationList from '../components/ReservationList.jsx'

const STATUS_OPTIONS = [
  { value: 'boş', label: 'Boş', activeClass: 'bg-emerald-500 text-obsidian-950' },
  { value: 'dolu', label: 'Dolu', activeClass: 'bg-red-500 text-obsidian-950' },
  { value: 'rezerv', label: 'Rezerv edilib', activeClass: 'bg-amber-500 text-obsidian-950' },
]

export default function UnitDetail({ type }) {
  const { id } = useParams()
  const { employee, isAdmin } = useAuth()
  const node = type === 'otaq' ? 'rooms' : 'tables'
  const backPath = type === 'otaq' ? '/otaqlar' : '/masalar'

  const [unit, setUnit] = useState(undefined)
  const [reservations, setReservations] = useState([])
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const unsubUnit = onValue(ref(db, `${node}/${id}`), (snapshot) => {
      setUnit(snapshot.val() ? { id, ...snapshot.val() } : null)
    })

    const unsubReservations = onValue(ref(db, 'reservations'), (snapshot) => {
      const list = toArray(snapshot.val())
        .filter((r) => r.targetType === type && r.targetId === id)
        .sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`))
      setReservations(list)
    })

    const unsubEmployees = isAdmin
      ? onValue(ref(db, 'employees'), (snapshot) => setEmployees(toArray(snapshot.val())))
      : () => {}

    return () => {
      unsubUnit()
      unsubReservations()
      unsubEmployees()
    }
  }, [node, id, type, isAdmin])

  const canManage = isAdmin || (employee.assignedType === type && employee.assignedId === id)

  if (!isAdmin && !canManage) return <Navigate to="/" replace />
  if (unit === null) return <Navigate to={backPath} replace />

  async function setStatus(status) {
    await update(ref(db, `${node}/${id}`), { status })
  }

  async function assignEmployee(newEmployeeId) {
    const updates = {}
    const currentEmployeeId = unit.assignedEmployeeId

    if (currentEmployeeId && currentEmployeeId !== newEmployeeId) {
      updates[`employees/${currentEmployeeId}/assignedType`] = null
      updates[`employees/${currentEmployeeId}/assignedId`] = null
    }

    if (newEmployeeId) {
      const newEmployee = employees.find((emp) => emp.id === newEmployeeId)

      if (newEmployee?.assignedType && newEmployee?.assignedId) {
        const otherNode = newEmployee.assignedType === 'otaq' ? 'rooms' : 'tables'
        updates[`${otherNode}/${newEmployee.assignedId}/assignedEmployeeId`] = null
        updates[`${otherNode}/${newEmployee.assignedId}/assignedEmployeeName`] = null
      }

      updates[`employees/${newEmployeeId}/assignedType`] = type
      updates[`employees/${newEmployeeId}/assignedId`] = id
      updates[`${node}/${id}/assignedEmployeeId`] = newEmployeeId
      updates[`${node}/${id}/assignedEmployeeName`] = newEmployee?.name ?? null
    } else {
      updates[`${node}/${id}/assignedEmployeeId`] = null
      updates[`${node}/${id}/assignedEmployeeName`] = null
    }

    await update(ref(db), updates)
  }

  return (
    <div className="min-h-screen bg-obsidian-950">
      <Header title={unit?.name ?? '...'} backTo={backPath} />

      {unit && (
        <main className="mx-auto max-w-3xl px-4 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl font-semibold text-obsidian-50">{unit.name}</h1>
              <p className="mt-1 text-obsidian-400">Tutum: {unit.capacity} nəfər</p>
            </div>

            <div className="flex gap-2">
              {STATUS_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setStatus(option.value)}
                  disabled={!canManage}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${
                    unit.status === option.value
                      ? option.activeClass
                      : 'border border-obsidian-600 text-obsidian-300 hover:border-gold-500'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {isAdmin && (
            <div className="mt-6 rounded-2xl border border-obsidian-700 bg-obsidian-800 p-5">
              <label className="mb-1.5 block text-sm text-obsidian-300">Qulluq edən işçi</label>
              <select
                value={unit.assignedEmployeeId ?? ''}
                onChange={(e) => assignEmployee(e.target.value || null)}
                className="w-full max-w-xs rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"
              >
                <option value="">Təyin olunmayıb</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.name}
                    {emp.assignedType && emp.assignedId && emp.assignedId !== id
                      ? ` (hazırda: ${emp.assignedType === 'otaq' ? 'Otaq' : 'Masa'})`
                      : ''}
                  </option>
                ))}
              </select>
            </div>
          )}

          {canManage && (
            <div className="mt-8">
              <ReservationForm
                targetType={type}
                targetId={id}
                employees={isAdmin ? employees : []}
                defaultEmployeeId={unit.assignedEmployeeId}
              />
            </div>
          )}

          <div className="mt-8">
            <h2 className="mb-3 font-display text-lg font-semibold text-obsidian-50">Rezervasiyalar</h2>
            <ReservationList reservations={reservations} />
          </div>
        </main>
      )}
    </div>
  )
}
