import React, { useContext, useEffect, useState } from 'react';
import List from './List';
import AddStudy from './AddStudy';
import StartStudy from './StartStudy';

import { Container } from './styles';
import { ApplicationContext } from '../../context/ApplicationContext';
import { Studies } from '../../types/Studies';

const Home: React.FC = () => {
  const { currentStudy, setCurrentStudy } = useContext(ApplicationContext);

  const [studies, setStudies] = useState<Studies[]>(() => {
    const storedStudies = localStorage.getItem('@studiesApp:Studies');

    if (storedStudies) return JSON.parse(storedStudies);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem('@studiesApp:Studies', JSON.stringify(studies));
  }, [studies]);

  const endTask = () => {
    if (currentStudy) {
      setCurrentStudy(null);
      setStudies((oldValues) =>
        oldValues.map((study) => {
          if (study.id === currentStudy.id) {
            return {
              ...study,
              isCurrentStudy: false,
              isConcluded: true
            };
          }
          return study;
        })
      );
    }
  };

  return (
    <Container>
      <List studies={studies} setStudies={setStudies} />
      <main>
        <AddStudy addNewStudy={setStudies} />
        <StartStudy endTask={endTask} />
      </main>
    </Container>
  );
};

export default Home;
