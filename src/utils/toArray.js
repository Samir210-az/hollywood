// Firebase RTDB ardıcıl olmayan (non-sequential) massivləri düz object kimi qaytarır.
// Bütün siyahı halına salınan snapshot-larda bu helper istifadə olunmalıdır.
export function toArray(snapshotVal) {
  if (!snapshotVal) return []
  if (Array.isArray(snapshotVal)) {
    return snapshotVal
      .map((value, id) => (value ? { id: String(id), ...value } : null))
      .filter(Boolean)
  }
  return Object.entries(snapshotVal).map(([id, value]) => ({ id, ...value }))
}
