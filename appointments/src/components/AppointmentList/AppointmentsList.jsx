import { useAppointments } from "../../hooks/useAppointments";
import { TableContainer, StyledButton, StyledInput } from "./styles";

export const AppointmentList = () => {
  const { appointments, loading, error, updateAppointment, deleteAppointment } = useAppointments();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Try reloading the page</p>;

  return (
    <TableContainer>
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
                  <StyledButton onClick={ () => updateAppointment() }>
                    Edit
                  </StyledButton>
                  {' '}
                  <StyledInput type="text" />
                </td>
                <td>
                  <StyledButton onClick={ () => deleteAppointment() }>
                    Delete
                  </StyledButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
