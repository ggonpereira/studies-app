import { render, screen } from '@testing-library/react';
import App from './App';

describe('app test', () => {
  it('should render the component App component', () => {
    render(<App />);

    const component = screen.getByTestId('mainDiv');

    expect(component).toBeInTheDocument();
  });
});
