import { render, screen } from '@testing-library/react';
import Personal from './Personal';

test('renders about tag', () => {
    render(<Personal />);
    const spanElement = screen.getByTitle(/About/i);
    expect(spanElement).toBeInTheDocument();
  });
  test('renders services tag', () => {
    render(<Personal />);
    const spanElement = screen.getByTitle(/Services/i);
    expect(spanElement).toBeInTheDocument();
  });
  test('renders resume tag', () => {
    render(<Personal />);
    const spanElement = screen.getByTitle(/Resume/i);
    expect(spanElement).toBeInTheDocument();
  });
  
  
  