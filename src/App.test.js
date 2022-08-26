import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Chickasaw Point', () => {
  render(<App />);
  expect(screen.getByText('Chickasaw Point')).toBeInTheDocument();
});
