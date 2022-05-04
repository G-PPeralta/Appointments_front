// import { useEffect, useState } from "react";
import { useAppointments } from "../../hooks/useAppointments";

export const AppointmentList = () => {
  
  const { appointments, loading, error } = useAppointments()
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong. Try reloading the page</p>

  return (
    <table>
      <thead>
        <th>Título</th>
        <th>Data</th>
        <th>Descrição</th>
      </thead>
      <tbody>
        { console.log(appointments) }
        {appointments && appointments.map((appointment) => (
          <tr key={appointment.id}>
            <td>{appointment.title}</td>
            <td>{appointment.time}</td>
            <td>{appointment.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
