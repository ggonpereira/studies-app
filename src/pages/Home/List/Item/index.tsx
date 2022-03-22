import { Item, ItemTitle } from './styles';
import CheckMarkIcon from '../../../../assets/check-mark.svg';
import DeleteIcon from '../../../../assets/trash-can.svg';

import { Studies } from '../../../../types/Studies';
import React from 'react';

interface Props {
  id: string;
  title: string;
  time: string;
  currentStudy: Studies | null;
  handleChangeStudy: (task: Studies) => void;
  handleDeleteStudy: (task: Studies) => void;
}

const ListItem = ({
  id,
  title,
  time,
  currentStudy,
  handleChangeStudy,
  handleDeleteStudy
}: Props) => {
  const task: Studies = {
    id,
    title,
    time
  };

  return (
    <Item active={title === currentStudy?.title} onClick={() => handleChangeStudy(task)}>
      <div>
        <ItemTitle as="h3">{title}</ItemTitle>
        <span>{time}</span>
      </div>
      <div className="icons">
        {title === currentStudy?.title && <img src={CheckMarkIcon} />}
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
