import { Item, ItemTitle } from './styles';
import CheckMark from '../../../../assets/check-mark.svg';

import { Tasks } from '../../../../types/Tasks';

interface Props {
  title: string;
  time: string;
  currentTask: Tasks | null;
  handleChangeTask: (task: Tasks) => void;
}

const ListItem = ({ title, time, currentTask, handleChangeTask }: Props) => {
  const task: Tasks = {
    title,
    time
  };

  return (
    <Item active={title === currentTask?.title} onClick={() => handleChangeTask(task)}>
      <div>
        <ItemTitle as="h3">{title}</ItemTitle>
        <span>{time}</span>
      </div>
      {title === currentTask?.title && <img src={CheckMark} />}
    </Item>
  );
};

export default ListItem;
