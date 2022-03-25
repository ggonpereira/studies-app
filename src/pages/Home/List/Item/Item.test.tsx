import { cleanup, render, screen } from '@testing-library/react';
import { studiesMock } from '../../../../__mocks__/studies';
import Item from './index';

import { ApplicationContext } from '../../../../context/ApplicationContext';

describe('item component test', () => {
  const mockFunction = jest.fn();

  afterEach(() => cleanup);

  it('should load study title', () => {
    render(
      <Item handleChangeStudy={mockFunction} handleDeleteStudy={mockFunction} {...studiesMock[1]} />
    );
    const itemTitle = screen.getByText(studiesMock[1].title);

    expect(itemTitle).toBeInTheDocument();
  });

  it('should have the active class if the study is active', () => {
    render(
      <ApplicationContext.Provider
        value={{ currentStudy: studiesMock[1], setCurrentStudy: mockFunction }}>
        <Item
          handleChangeStudy={mockFunction}
          handleDeleteStudy={mockFunction}
          {...studiesMock[1]}
        />
      </ApplicationContext.Provider>
    );

    const item = screen.getByTestId('item');

    expect(item).toHaveClass('active');
  });

  it('should have the concluded class if the study is concluded', () => {
    render(
      <Item handleChangeStudy={mockFunction} handleDeleteStudy={mockFunction} {...studiesMock[2]} />
    );

    const item = screen.getByTestId('item');

    expect(item).toHaveClass('concluded');
  });

  it('should have the checkMark icon if the study is concluded', () => {
    render(
      <Item handleChangeStudy={mockFunction} handleDeleteStudy={mockFunction} {...studiesMock[2]} />
    );

    const checkMarkIcon = screen.getByTestId('checkMarkIcon');

    expect(checkMarkIcon).toBeInTheDocument();
  });
});
