import { AppointmentsList } from "../components/AppointmentList/AppointmentsList";
import { InputFields } from "../components/InputFields/InputFields";
import { useAppointments } from "../hooks/useAppointments";

export function AppointmentsPage() {
  const { 
    appointments, 
    loading, 
    error, 
    updateAppointment, 
    deleteAppointment, 
    createAppointment 
  } = useAppointments();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No appointments to show</p>;

  return (
    <>
      <InputFields onCreate={(appt) => createAppointment(appt)} />
      <AppointmentsList appointments={appointments} onDelete={(id) => deleteAppointment(id)} />
    </>
  );
}
