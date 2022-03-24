import { render, screen } from '@testing-library/react';
import Clock from './index';
import '@testing-library/jest-dom/extend-expect';

describe('test button component', () => {
  it('should render in the document', () => {
    render(<Clock time={3600} />);

    const clockContainer = screen.getByTestId('clockContainer');
    expect(clockContainer).toBeInTheDocument();
  });

  it('should render "60:00"', () => {
    render(<Clock time={3600} />);

    const minutesUnity = screen.getByTestId('minutesUnity');
    const minutesTen = screen.getByTestId('minutesTen');
    const secondsUnity = screen.getByTestId('secondsUnity');
    const secondsTen = screen.getByTestId('secondsTen');

    expect(minutesUnity).toHaveTextContent('6');
    expect(minutesTen).toHaveTextContent('0');
    expect(secondsUnity).toHaveTextContent('0');
    expect(secondsTen).toHaveTextContent('0');
  });
});
