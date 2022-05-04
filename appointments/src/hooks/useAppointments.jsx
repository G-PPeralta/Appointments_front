import { useEffect, useState } from "react";

export const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:3001/appointments')
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  const createAppointment = (appointment) => {
    setLoading(true)
    
    fetch('http://localhost:3001/appointments', {
        method: 'POST',
        body: JSON.stringify(appointment),
        headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => {
        setAppointments([
          ...appointments,
          data,
        ])
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }

  const updateAppointment = (appointment, id) => {
    setLoading(true)
    
    fetch(`http://localhost:3001/appointments/${ id }`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
    })
      .then((response) => response.json())
      .then((data) => {
        setAppointments([
          ...appointments,
          data,
        ])
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }

  const deleteAppointment = (id) => {
    setLoading(true)
    
    fetch(`http://localhost:3001/appointments/${ id }`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        setAppointments([
          ...appointments,
          data,
        ])
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }

  return { appointments, loading, error, createAppointment, updateAppointment, deleteAppointment }
}
