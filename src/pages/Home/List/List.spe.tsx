import { render, screen } from '@testing-library/react';
import React from 'react';
import List from './index';

describe('list testing', () => {
  const mockStudies = [
    {
      id: '123456',
      title: 'Mock Study 1',
      time: '01:40:30',
      isCurrentStudy: true,
      isConcluded: false
    },
    {
      id: '654321',
      title: 'Mock Study 2',
      time: '00:30:10',
      isCurrentStudy: false,
      isConcluded: true
    }
  ];

  const setMockStudies = jest.fn();

  it('should not render the list, only the empty list message', () => {
    React.useState = jest.fn().mockReturnValue([mockStudies, {}]);

    const { getByTestId } = render(<List studies={mockStudies} setStudies={setMockStudies} />);

    screen.debug();
  });
});
