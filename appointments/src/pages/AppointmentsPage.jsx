import { useState } from "react";
import Modal from "react-modal"; // https://github.com/reactjs/react-modal
import { AppointmentsList } from "../components/AppointmentList/AppointmentsList";
import { InputFields } from "../components/InputFields/InputFields";
import { useAppointments } from "../hooks/useAppointments";
import { EditModal } from "../components/EditModal/EditModal";

Modal.setAppElement("#root");

export const AppointmentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAppointmentId, setEditAppointmentId] = useState(undefined)
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
          setEditAppointmentId(undefined)
          setIsModalOpen(false)
        }}
        onUpdate={(appt) => {
          updateAppointment(appt, editAppointmentId)
          setEditAppointmentId(undefined)
          setIsModalOpen(false);
        }}
      />
      <InputFields onSubmit={(appt) => createAppointment(appt)} />
      <AppointmentsList
        appointments={appointments}
        onDelete={(id) => deleteAppointment(id)}
        onEdit={(appt) => {
          setEditAppointmentId(appt.id)
          setIsModalOpen(true);
        }}
      />
    </>
  );
};
