import { useState } from "react";
import { useAppointments } from "../../hooks/useAppointments";

export const InputFields = () => {
  const { createAppointment } = useAppointments()
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState();

  const handleCreateAppointment = (event) => {
    event.preventDefault();
    createAppointment({ title, date, description })
  }

  return (
    <form onSubmit={ handleCreateAppointment }>
      <input
        type="text"
        placeholder="Enter a title"
        value={ title }
        onChange={ (event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Insert a date"
        value={ date }
        onChange={ (event) => setDate(event.target.value)}
      />
      <input
        type="text"
        placeholder="Insert a description"
        value={ description }
        onChange={ (event) => setDescription(event.target.value) }
      />
      <button type="submit">
        Add
      </button>
    </form>
  )
}