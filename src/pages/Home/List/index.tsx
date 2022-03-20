import React, { useState } from 'react';
import { Typography } from '../../../components/Typography/styles';
import tasks from './constants/tasks';
import { Tasks } from '../../../types/Tasks';

import { ListStyled, Menu, Item, ItemTitle } from './styles';
import CheckMark from '../../../assets/check-mark.svg';

const List = () => {
  const [currentTask, setCurrentTask] = useState<Tasks | null>(() => {
    const stored = localStorage.getItem('@studiesApp:CurrentTask');
    if (stored) return JSON.parse(stored);
    return null;
  });

  const handleChangeTask = (task: Tasks) => {
    setCurrentTask(task);
    localStorage.setItem('@studiesApp:CurrentTask', JSON.stringify(task));
  };

  return (
    <ListStyled>
      <Typography as="h2" textAlign="center" noMargin>
        Studies of the day
      </Typography>
      <Menu>
        {tasks.map((task, index) => (
          <Item
            active={task.title === currentTask?.title}
            onClick={() => handleChangeTask(task)}
            key={`${task.title}${index}`}>
            <div>
              <ItemTitle as="h3">{task.title}</ItemTitle>
              <span>{task.time}</span>
            </div>
            {task.title === currentTask?.title && <img src={CheckMark} />}
          </Item>
        ))}
      </Menu>
    </ListStyled>
  );
};

export default List;
