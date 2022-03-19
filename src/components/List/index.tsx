import React from 'react';
import { Tasks } from '../../types/Tasks';
import { ListStyled, Subtitle, Menu, Item } from './styles';

const List = () => {
  const tasks: Tasks[] = [
    {
      title: 'React',
      time: '02:00:00'
    },
    {
      title: 'JavaScript',
      time: '01:00:00'
    },
    {
      title: 'PHP',
      time: '01:30:00'
    }
  ];

  return (
    <ListStyled>
      <Subtitle as="h2">Studies of the day</Subtitle>
      <Menu>
        {tasks.map((task, index) => (
          <Item key={`${task.title}${index}`}>
            <Subtitle as="h3">{task.title}</Subtitle>
            <span>{task.time}</span>
          </Item>
        ))}
      </Menu>
    </ListStyled>
  );
};

export default List;
