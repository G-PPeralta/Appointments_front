import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import { StyledInput, StyledButton } from "./styles";

export const InputFields = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(new Date());
  const [description, setDescription] = useState();

  const handleCreateAppointment = (event) => {
    event.preventDefault();
    onCreate({ 
      title, 
      time: time.toISOString(), 
      description 
    })
  }

  return (
    <form onSubmit={ handleCreateAppointment }>
      <StyledInput
        type="text"
        placeholder="Enter a title"
        value={ title }
        onChange={ (event) => setTitle(event.target.value)}
      />
      <DateTimePicker
        value={ time }
        onChange={ (newTime) => setTime(newTime)}
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
    </form>
  )
}