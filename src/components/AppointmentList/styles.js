import styled from "styled-components";

export const TableContainer = styled.div `
  margin-top: 0.75rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    height: 7rem;
    border: 0;
    background: var(--shape);
    color: var(--text-title);
    border-radius: 0.25rem;
  }
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

export const StyledInput = styled.input`
  width: 50%;
  margin-top: 1rem;
  padding: 0 1.5rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size: 1rem;
`