import React from 'react';
import List from './List';
import AddStudy from './AddStudy';
// import StartStudy from './StartStudy';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <List />
      <main>
        <AddStudy />
        {/* <StartStudy /> */}
      </main>
    </Container>
  );
};

export default Home;
