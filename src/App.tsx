import React from 'react';
import List from './components/List';
import Form from './components/SimpleForm';

import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Form />
        <List />
      </div>
    </>
  );
};

export default App;
