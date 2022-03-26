import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ThemeContextProvider from '../../../context/ThemeContext';
import AddStudy from './index';

describe('test add study component', () => {
  const mockOnSubmit = jest.fn();

  afterEach(() => cleanup);

  it('should call the onSubmit function', async () => {
    render(
      <ThemeContextProvider>
        <AddStudy addNewStudy={mockOnSubmit} />
      </ThemeContextProvider>
    );

    fireEvent.change(screen.getByLabelText('Add something new to study'), {
      target: {
        value: 'Testing Title Input'
      }
    });
    fireEvent.change(screen.getByLabelText('Time'), {
      target: {
        value: '00:45:00'
      }
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
