import { render, screen } from '@testing-library/react';
import StartStudy from './index';

describe('test start study component', () => {
  const endTask = jest.fn();

  it('should render in the document', () => {
    render(<StartStudy endTask={endTask} />);

    const startStudyContainer = screen.getByTestId('startStudyContainer');
    expect(startStudyContainer).toBeInTheDocument();
  });
});
