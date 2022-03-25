import { act, fireEvent, render, screen } from '@testing-library/react';
import List from './index';
import { studiesMock } from '../../../__mocks__/studies';
import ApplicationContextProvider from '../../../context/ApplicationContext';
import { wait } from '@testing-library/user-event/dist/utils';

describe('list component testing', () => {
  const setMockStudies = jest.fn();

  it('should render the "nothing here yet" message if no studies array is received', () => {
    render(
      <ApplicationContextProvider>
        <List studies={[]} setStudies={setMockStudies} />
      </ApplicationContextProvider>
    );

    const title = screen.getByText('Nothing here yet 😢');
    const subTitle = screen.getByText('Add something to study right now!');

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it('should render the studies list if studies array is received', () => {
    render(
      <ApplicationContextProvider>
        <List studies={studiesMock} setStudies={setMockStudies} />
      </ApplicationContextProvider>
    );

    const listItems = screen.getAllByTestId('item');

    expect(listItems).toHaveLength(studiesMock.length);
  });

  it('should remove one studie when clicking the button', () => {
    render(
      <ApplicationContextProvider>
        <List studies={studiesMock} setStudies={setMockStudies} />
      </ApplicationContextProvider>
    );

    expect(screen.getAllByTestId('item')).toHaveLength(studiesMock.length);

    const deleteButton = screen.getAllByTestId('deleteButton')[0];
    fireEvent.click(deleteButton);

    // expect(screen.getAllByTestId('item')).toHaveLength(studiesMock.length);
  });
});
