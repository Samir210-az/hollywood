import { useEffect, useState } from 'react'
import { watchAllEmployees, updateEmployee, watchSpaces } from '../lib/db'

export default function AdminEmployees() {
  const [employees, setEmployees] = useState([])
  const [masalar, setMasalar] = useState([])
  const [otaqlar, setOtaqlar] = useState([])

  useEffect(() => {
    const unsub = watchAllEmployees(setEmployees)
    return unsub
  }, [])

  useEffect(() => {
    const unsub1 = watchSpaces('masa', setMasalar)
    const unsub2 = watchSpaces('otaq', setOtaqlar)
    return () => {
      unsub1()
      unsub2()
    }
  }, [])

  function handleAssign(uid, value) {
    if (!value) {
      updateEmployee(uid, { assignedType: null, assignedId: null })
      return
    }
    const [assignedType, assignedId] = value.split('|')
    updateEmployee(uid, { assignedType, assignedId })
  }

  function handleRoleToggle(uid, currentRole) {
    const nextRole = currentRole === 'admin' ? 'employee' : 'admin'
    updateEmployee(uid, { role: nextRole })
  }

  return (
    <div className="page">
      <h1 className="page-title">İşçilər</h1>
      {employees.length === 0 ? (
        <p className="empty-state">Hələ qeydiyyatdan keçən işçi yoxdur.</p>
      ) : (
        <div className="employee-list">
          {employees.map((emp) => (
            <div key={emp.uid} className="employee-item">
              <div className="employee-info">
                <strong>{emp.name}</strong>
                <span>{emp.phone}</span>
              </div>
              <div className="employee-controls">
                <span className={`role-badge ${emp.role}`}>
                  {emp.role === 'admin' ? 'Administrator' : 'İşçi'}
                </span>
                <select
                  value={emp.assignedType && emp.assignedId ? `${emp.assignedType}|${emp.assignedId}` : ''}
                  onChange={(e) => handleAssign(emp.uid, e.target.value)}
                  disabled={emp.role === 'admin'}
                >
                  <option value="">Təyin edilməyib</option>
                  <optgroup label="Masalar">
                    {masalar.map((m) => (
                      <option key={m.id} value={`masa|${m.id}`}>
                        {m.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Otaqlar">
                    {otaqlar.map((o) => (
                      <option key={o.id} value={`otaq|${o.id}`}>
                        {o.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
                <button
                  className="btn-link"
                  onClick={() => handleRoleToggle(emp.uid, emp.role)}
                >
                  {emp.role === 'admin' ? 'Admin səlahiyyətini al' : 'Admin et'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
