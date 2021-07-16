import { render, screen } from '@testing-library/react';
import App, { AppFunction } from './App';

test('renders learn react link', () => {
  render(<AppFunction />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
