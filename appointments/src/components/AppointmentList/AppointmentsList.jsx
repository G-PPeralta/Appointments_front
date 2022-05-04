import { useAppointments } from "../../hooks/useAppointments";

export const AppointmentList = () => {
  const { appointments, loading, error, updateAppointment, deleteAppointment } = useAppointments();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Try reloading the page</p>;

  return (
    <table>
      <thead>
        <th>Título</th>
        <th>Data</th>
        <th>Descrição</th>
      </thead>
      <tbody>
        {appointments &&
          appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.title}</td>
              <td>{appointment.time}</td>
              <td>{appointment.description}</td>
              <td>
                <button onClick={ () => updateAppointment() }>
                  Edit
                </button>
              </td>
              <td>
                <input type="text" />
                {' '}
                <button onClick={ () => deleteAppointment() }>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
