import {
  ref,
  push,
  set,
  update,
  remove,
  onValue,
  get,
  query,
  orderByChild,
  equalTo,
  serverTimestamp,
} from 'firebase/database'
import { db } from './firebase'

// ---------- Employees ----------

export function watchEmployee(uid, callback) {
  const r = ref(db, `employees/${uid}`)
  return onValue(r, (snap) => callback(snap.exists() ? snap.val() : null))
}

export function watchAllEmployees(callback) {
  const r = ref(db, 'employees')
  return onValue(r, (snap) => {
    const val = snap.val() || {}
    callback(Object.entries(val).map(([uid, data]) => ({ uid, ...data })))
  })
}

export async function createEmployeeProfile(uid, { name, phone }) {
  // The very first person to register becomes admin automatically,
  // so Vüsal simply needs to be the first to sign up.
  const existing = await get(ref(db, 'employees'))
  const isFirstEmployee = !existing.exists() || Object.keys(existing.val()).length === 0

  await set(ref(db, `employees/${uid}`), {
    name,
    phone,
    role: isFirstEmployee ? 'admin' : 'employee',
    assignedType: null,
    assignedId: null,
    createdAt: serverTimestamp(),
  })
}

export async function updateEmployee(uid, patch) {
  await update(ref(db, `employees/${uid}`), patch)
}

export async function deleteEmployee(uid) {
  await remove(ref(db, `employees/${uid}`))
}

// ---------- Spaces (masa / otaq) ----------

export function watchSpaces(type, callback) {
  const r = ref(db, `spaces/${type}`)
  return onValue(r, (snap) => {
    const val = snap.val() || {}
    const list = Object.entries(val).map(([id, data]) => ({ id, ...data }))
    list.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    callback(list)
  })
}

export function watchSpace(type, id, callback) {
  const r = ref(db, `spaces/${type}/${id}`)
  return onValue(r, (snap) => callback(snap.exists() ? { id, ...snap.val() } : null))
}

export async function createSpace(type, { name, capacity }) {
  const listRef = ref(db, `spaces/${type}`)
  const snap = await get(listRef)
  const count = snap.exists() ? Object.keys(snap.val()).length : 0
  const newRef = push(listRef)
  await set(newRef, {
    name,
    capacity: Number(capacity) || 0,
    status: 'boş',
    order: count,
    createdAt: serverTimestamp(),
  })
  return newRef.key
}

export async function updateSpace(type, id, patch) {
  await update(ref(db, `spaces/${type}/${id}`), patch)
}

export async function deleteSpace(type, id) {
  await remove(ref(db, `spaces/${type}/${id}`))
}

export async function setSpaceStatus(type, id, status) {
  await update(ref(db, `spaces/${type}/${id}`), { status })
}

// ---------- Reservations ----------

export function watchReservationsForSpace(type, id, callback) {
  const r = ref(db, 'reservations')
  const q = query(r, orderByChild('spaceKey'), equalTo(`${type}_${id}`))
  return onValue(q, (snap) => {
    const val = snap.val() || {}
    const list = Object.entries(val).map(([resId, data]) => ({ id: resId, ...data }))
    list.sort((a, b) => {
      const da = `${a.date} ${a.time}`
      const dbb = `${b.date} ${b.time}`
      return da.localeCompare(dbb)
    })
    callback(list)
  })
}

export function watchAllReservations(callback) {
  const r = ref(db, 'reservations')
  return onValue(r, (snap) => {
    const val = snap.val() || {}
    const list = Object.entries(val).map(([resId, data]) => ({ id: resId, ...data }))
    list.sort((a, b) => {
      const da = `${a.date} ${a.time}`
      const dbb = `${b.date} ${b.time}`
      return dbb.localeCompare(da)
    })
    callback(list)
  })
}

export async function createReservation({
  customerName,
  phone,
  date,
  time,
  guests,
  spaceType,
  spaceId,
  spaceName,
  note,
  createdBy,
  createdByName,
}) {
  const listRef = ref(db, 'reservations')
  const newRef = push(listRef)
  await set(newRef, {
    customerName,
    phone,
    date,
    time,
    guests: Number(guests) || 1,
    spaceType,
    spaceId,
    spaceName,
    spaceKey: `${spaceType}_${spaceId}`,
    note: note || '',
    status: 'aktiv',
    createdBy,
    createdByName,
    createdAt: serverTimestamp(),
  })
  return newRef.key
}

export async function updateReservation(id, patch) {
  await update(ref(db, `reservations/${id}`), patch)
}

export async function deleteReservation(id) {
  await remove(ref(db, `reservations/${id}`))
}
