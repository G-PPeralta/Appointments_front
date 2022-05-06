import { useState } from "react";
import DateTimePicker from 'react-datetime-picker'; // https://www.npmjs.com/package/react-datetime-picker
import { StyledForm, StyledInput, StyledButton } from "./styles";

export const InputFields = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(new Date());
  const [description, setDescription] = useState();

  const handleCreateAppointment = (event) => {
    event.preventDefault();
    onSubmit({ 
      title, 
      time: time.toISOString(), 
      description 
    })
  }

  return (
    <StyledForm onSubmit={ handleCreateAppointment }>
      <StyledInput
        type="text"
        placeholder="Enter a title"
        value={ title }
        onChange={ (event) => setTitle(event.target.value)}
      />
      <DateTimePicker
        value={ time }
        onChange={ (newTime) => setTime(newTime)}
        className="date-picker"
      />
      <StyledInput
        type="text"
        placeholder="Insert a description"
        value={ description }
        onChange={ (event) => setDescription(event.target.value) }
      />
      <StyledButton type="submit">
        Add
      </StyledButton>
    </StyledForm>
  )
}