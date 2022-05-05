import { render, screen } from '@testing-library/react';
import { InputFields } from './InputFields';

describe('Tests if elements are being rendered', () => {
  test('renders input for insert Title of appointment', async () => {
    render(<InputFields />);
    const inputTitleElement = await screen.findByPlaceholderText('Enter a title')
    expect(inputTitleElement).toBeInTheDocument();
  });

  test('renders input for insert Description of appointment', async () => {
    render(<InputFields />);
    const inputDescriptionElement = await screen.findByPlaceholderText('Insert a description')
    expect(inputDescriptionElement).toBeInTheDocument();
  });

  test('Add button is on the screen', () => {
    render(<InputFields />);
    const AddButtonElement = screen.getByText('Add')
    expect(AddButtonElement).toBeInTheDocument();
  });
})


