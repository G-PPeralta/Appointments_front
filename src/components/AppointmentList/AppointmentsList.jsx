import { TableContainer, StyledButton } from './styles';

export function AppointmentsList({ appointments, onDelete, onEdit }) {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {appointments
            && appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.title}</td>
                <td>{new Date(appointment.time).toLocaleString('pt-BR')}</td>
                <td>{appointment.description}</td>
                <td>
                  <StyledButton
                    onClick={() => onEdit(appointment)}
                  >
                    Edit
                  </StyledButton>
                </td>
                <td>
                  <StyledButton
                    onClick={() => onDelete(appointment.id)}
                  >
                    Delete
                  </StyledButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
