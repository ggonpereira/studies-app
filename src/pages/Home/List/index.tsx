import { useState } from 'react';
import { Typography } from '../../../components/Typography/styles';
import tasks from './constants/tasks';
import { Tasks } from '../../../types/Tasks';

import { ListStyled, Menu } from './styles';
import ListItem from './Item';

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
          <ListItem
            key={`${task.title}${index}`}
            currentTask={currentTask}
            handleChangeTask={handleChangeTask}
            {...task}
          />
        ))}
      </Menu>
    </ListStyled>
  );
};

export default List;
