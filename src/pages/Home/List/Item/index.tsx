import { Item, ItemTitle } from './styles';
import CheckMarkIcon from '../../../../assets/check-mark.svg';
import DeleteIcon from '../../../../assets/trash-can.svg';

import { Studies } from '../../../../types/Studies';
import React, { useContext } from 'react';
import { ApplicationContext } from '../../../../context/ApplicationContext';

interface Props extends Studies {
  handleChangeStudy: (task: Studies) => void;
  handleDeleteStudy: (task: Studies) => void;
}

const ListItem = ({
  id,
  title,
  time,
  isConcluded,
  isCurrentStudy,
  handleChangeStudy,
  handleDeleteStudy
}: Props) => {
  const { currentStudy } = useContext(ApplicationContext);

  const task: Studies = {
    id,
    title,
    time,
    isCurrentStudy,
    isConcluded
  };

  return (
    <Item
      className={`${id === currentStudy?.id ? 'active' : ''} ${isConcluded ? 'concluded' : ''}`}
      onClick={() => handleChangeStudy(task)}
      data-testid="item">
      <div>
        <ItemTitle as="h3">{title}</ItemTitle>
        <span>{time}</span>
      </div>
      <div className="icons">
        {isConcluded && <img src={CheckMarkIcon} data-testid="checkMarkIcon" />}
        <img
          data-testid="deleteButton"
          src={DeleteIcon}
          onClick={(e: React.FormEvent) => {
            e.stopPropagation();
            handleDeleteStudy(task);
          }}
        />
      </div>
    </Item>
  );
};

export default ListItem;
