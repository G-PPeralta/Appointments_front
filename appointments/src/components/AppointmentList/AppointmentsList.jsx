import { TableContainer, StyledButton, StyledInput } from "./styles";

export const AppointmentsList = ({appointments, onDelete}) => {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.title}</td>
                <td>{new Date(appointment.time).toLocaleString()}</td>
                <td>{appointment.description}</td>
                <td>
                  <StyledButton
                    onClick={() => {}}
                  >
                    Edit
                  </StyledButton>{" "}
                  <StyledInput type="text" />
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
};
