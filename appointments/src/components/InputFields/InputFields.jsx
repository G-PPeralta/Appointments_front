import { useAppointments } from "../../hooks/useAppointments";

export const InputFields = () => {
  const { createAppointment } = useAppointments()

  const handleCreateAppointment = () => {
    createAppointment({})
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Enter a title"
      />
      <input
        type="text"
        placeholder="Insert a date"
      />
      <input
        type="text"
        placeholder="Insert a description"
      />
      <button onClick={() => handleCreateAppointment()}>
        Add
      </button>
    </form>
  )
}