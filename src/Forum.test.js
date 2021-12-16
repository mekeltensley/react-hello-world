import { render, screen } from '@testing-library/react';
import Forum from './Forum';

test('renders dashboard tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Dasboard/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders customers tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Customers/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders authentication tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Authentication/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders payments tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Payments/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders transfers tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Transfer/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders question tag', () => {
  render(<Forum />);
  const spanElement = screen.getByTitle(/Question/i);
  expect(spanElement).toBeInTheDocument();
});

