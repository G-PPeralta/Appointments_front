import { useEffect, useState } from 'react';

export const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  // require('dotenv').config();

  // const URL = process.env.BACKEND_URL;

  useEffect(() => {
    setLoading(true);

    fetch('https://appointments-api-ik.herokuapp.com/appointments')
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const createAppointment = (appointment) => {
    fetch(`https://appointments-api-ik.herokuapp.com/appointments`, {
      method: 'POST',
      body: JSON.stringify(appointment),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setAppointments([...appointments, data]);
      });
  };

  const updateAppointment = (appointment, id) => {
    fetch(`https://appointments-api-ik.herokuapp.com/appointments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment),
    })
      .then((response) => response.json())
      .then((data) => {
        setAppointments(
          appointments.map((appt) => (appt.id !== id ? appt : appointment)),
        );
      });
  };

  const deleteAppointment = (id) => {
    fetch(`https://appointments-api-ik.herokuapp.com/appointments/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setAppointments(appointments.filter((appt) => appt.id !== id));
    });
  };

  return {
    appointments,
    loading,
    error,
    createAppointment,
    updateAppointment,
    deleteAppointment,
  };
};
