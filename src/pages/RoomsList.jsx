import UnitListPage from '../components/UnitListPage.jsx'

export default function RoomsList() {
  return (
    <UnitListPage
      type="otaq"
      node="rooms"
      title="Otaqlar"
      emptyText="Hələ heç bir otaq əlavə edilməyib."
    />
  )
}
