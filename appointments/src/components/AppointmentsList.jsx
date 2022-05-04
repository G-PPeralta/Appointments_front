import { useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  return (
    <table>
      <thead>
        <th>Título</th>
        <th>Data</th>
        <th>Descrição</th>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
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
