import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Header from './index';

import ThemeContextProvider from '../../context/ThemeContext';

describe('test header component', () => {
  beforeEach(() =>
    render(
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
    )
  );
  afterEach(() => cleanup);

  it('should be in the document', () => {
    const headerContainer = screen.getByTestId('headerContainer');

    expect(headerContainer).toBeInTheDocument();
  });

  it('should start with dark theme', () => {
    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('🌚');
  });

  it('should change the theme to light', () => {
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    const newButton = screen.getByRole('button');
    expect(newButton).toHaveTextContent('🌞');
  });
});
