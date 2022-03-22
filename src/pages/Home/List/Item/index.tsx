import { Item, ItemTitle } from './styles';
import CheckMarkIcon from '../../../../assets/check-mark.svg';
import DeleteIcon from '../../../../assets/trash-can.svg';

import { Studies } from '../../../../types/Studies';
import React from 'react';

interface Props extends Studies {
  currentStudy: Studies | null;
  handleChangeStudy: (task: Studies) => void;
  handleDeleteStudy: (task: Studies) => void;
}

const ListItem = ({
  id,
  title,
  time,
  isCurrentStudy,
  currentStudy,
  handleChangeStudy,
  handleDeleteStudy
}: Props) => {
  const task: Studies = {
    id,
    title,
    time,
    isCurrentStudy
  };

  return (
    <Item active={id === currentStudy?.id} onClick={() => handleChangeStudy(task)}>
      <div>
        <ItemTitle as="h3">{title}</ItemTitle>
        <span>{time}</span>
      </div>
      <div className="icons">
        {id === currentStudy?.id && <img src={CheckMarkIcon} />}
        <img
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
