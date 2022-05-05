import { render, screen } from '@testing-library/react';
import { AppointmentsList } from './AppointmentsList';

describe('Tests if elements are being rendered', () => {
  test('renders table head for Title', () => {
    render(<AppointmentsList />);
    const inputTitleElement = screen.getByText('Title')
    expect(inputTitleElement).toBeInTheDocument();
  });

  test('renders table head for Date', () => {
    render(<AppointmentsList />);
    const inputTitleElement = screen.getByText('Date')
    expect(inputTitleElement).toBeInTheDocument();
  });

  test('renders table head for Description', () => {
    render(<AppointmentsList />);
    const inputTitleElement = screen.getByText('Description')
    expect(inputTitleElement).toBeInTheDocument();
  });
})