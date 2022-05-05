import styled from "styled-components";

export const StyledForm = styled.form`
  .date-picker {
    width: 100%;
    
    & input {
      padding: 0 1.5rem;
      height: 2rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: #e7e9ee;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size: 1rem;
`

export const StyledButton = styled.button`
    height: 2rem;
    margin-top: 1rem;
    width: 5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: transparent;
    font-weight: 400;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`