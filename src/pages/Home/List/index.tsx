import { useContext, useEffect } from 'react';
import { Typography } from '../../../components/Typography/styles';
import { Studies } from '../../../types/Studies';

import { ListStyled, Menu } from './styles';
import ListItem from './Item';
import { ApplicationContext } from '../../../context/ApplicationContext';

interface Props {
  studies: Studies[];
  setStudies: React.Dispatch<React.SetStateAction<Studies[]>>;
}

const List = ({ studies, setStudies }: Props) => {
  const { setCurrentStudy } = useContext(ApplicationContext);

  useEffect(() => {
    const activeStudy = studies.find((study) => study.isCurrentStudy);
    setCurrentStudy(activeStudy || null);
  }, [studies]);

  const handleChangeStudy = (task: Studies) => {
    const storedStudy = localStorage.getItem('@studiesApp:Studies');
    if (storedStudy) {
      const parsedStoredValue: Studies[] = JSON.parse(storedStudy);

      parsedStoredValue.map((value) => {
        if (value.isCurrentStudy) value.isCurrentStudy = false;
        if (value.id === task.id) value.isCurrentStudy = true;
      });

      setStudies(parsedStoredValue);
    }
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
