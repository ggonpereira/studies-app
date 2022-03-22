import { useState } from 'react';
import { Typography } from '../../../components/Typography/styles';
import { Studies } from '../../../types/Studies';

import { ListStyled, Menu } from './styles';
import ListItem from './Item';

interface Props {
  studies: Studies[];
  setStudies: React.Dispatch<React.SetStateAction<Studies[]>>;
}

const List = ({ studies, setStudies }: Props) => {
  const [currentStudy, setCurrentStudy] = useState<Studies | null>(() => {
    const storedStudy = localStorage.getItem('@studiesApp:CurrentStudy');
    if (storedStudy) return JSON.parse(storedStudy);
    return null;
  });

  const handleChangeStudy = (task: Studies) => {
    setCurrentStudy(task);
    localStorage.setItem('@studiesApp:CurrentStudy', JSON.stringify(task));
  };

  const handleDeleteStudy = (task: Studies) => {
    const filtered = studies.filter((i) => i.id !== task.id);
    setStudies(filtered);
  };

  return (
    <ListStyled>
      {studies.length <= 0 ? (
        <>
          <Typography textAlign="center">Nothing here yet 😢</Typography>
          <Typography textAlign="center">Add something to study right now!</Typography>
        </>
      ) : (
        <>
          <Typography as="h2" textAlign="center" bold noMargin>
            Studies of the day
          </Typography>
          <Menu>
            {studies.map((task, index) => (
              <ListItem
                key={`${task.title}${index}`}
                currentStudy={currentStudy}
                handleChangeStudy={handleChangeStudy}
                handleDeleteStudy={handleDeleteStudy}
                {...task}
              />
            ))}
          </Menu>
        </>
      )}
    </ListStyled>
  );
};

export default List;
