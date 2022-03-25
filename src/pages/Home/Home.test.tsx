import { fireEvent, render, screen, cleanup } from '@testing-library/react';

import App from '../../App';

describe('test home page', () => {
  afterEach(() => cleanup);

  it('form and clockContainer should start with light theme colors', () => {
    render(<App />);
    const formElement = screen.getByTestId('form');
    const clockContainer = screen.getByTestId('clockContainer');

    expect(formElement).toHaveStyle(`background-color: #d3d2d2`);
    expect(clockContainer).toHaveStyle(`background-color: #d3d2d2`);
  });

  it('should change the colors of form and clockContainer', () => {
    render(<App />);
    const buttonElement = screen.getByText('🌚');
    fireEvent.click(buttonElement);

    const formElement = screen.getByTestId('form');
    const clockContainer = screen.getByTestId('clockContainer');

    expect(formElement).toHaveStyle(`background-color: #232726`);
    expect(clockContainer).toHaveStyle(`background-color: #232726`);
  });
});
