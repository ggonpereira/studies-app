import React, { useEffect, useState } from 'react';
import List from './List';
import AddStudy from './AddStudy';
// import StartStudy from './StartStudy';

import { Container } from './styles';

const Home: React.FC = () => {
  const [studies, setStudies] = useState(() => {
    const storedStudies = localStorage.getItem('@studiesApp:Studies');

    if (storedStudies) return JSON.parse(storedStudies);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem('@studiesApp:Studies', JSON.stringify(studies));
  }, [studies]);

  return (
    <Container>
      <List studies={studies} setStudies={setStudies} />
      <main>
        <AddStudy addNewStudy={setStudies} />
        {/* <StartStudy /> */}
      </main>
    </Container>
  );
};

export default Home;
