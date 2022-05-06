import { useState } from 'react';
import Modal from 'react-modal'; // https://github.com/reactjs/react-modal
import { AppointmentsList } from '../components/AppointmentList/AppointmentsList';
import { InputFields } from '../components/InputFields/InputFields';
import { useAppointments } from '../hooks/useAppointments';
import { EditModal } from '../components/EditModal/EditModal';

Modal.setAppElement('#root');

export function AppointmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAppointment, setEditAppointment] = useState(undefined);
  const {
    appointments,
    loading,
    error,
    updateAppointment,
    deleteAppointment,
    createAppointment,
  } = useAppointments();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No appointments to show</p>;

  return (
    <>
      <EditModal
        isModalOpen={isModalOpen}
        onClose={() => {
          setEditAppointment(undefined);
          setIsModalOpen(false);
        }}
        onUpdate={(appt) => {
          updateAppointment(appt, editAppointment);
          setEditAppointment(undefined);
          setIsModalOpen(false);
        }}
        appointment={editAppointment}
      />
      <InputFields onSubmit={(appt) => createAppointment(appt)} />
      <AppointmentsList
        appointments={appointments}
        onDelete={(id) => deleteAppointment(id)}
        onEdit={(appt) => {
          setEditAppointment(appt);
          setIsModalOpen(true);
        }}
      />
    </>
  );
}
