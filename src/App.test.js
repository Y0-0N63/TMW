import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const loginElement = screen.getByText(/로그인이 필요한 서비스입니다/i);
  expect(loginElement).toBeInTheDocument();
});
