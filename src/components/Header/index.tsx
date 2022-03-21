import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Typography } from '../Typography/styles';

import { Container, ToggleTheme } from './styles';

const Header: React.FC = () => {
  const { onToggleTheme, selectedTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Typography color="#303332">Studies App</Typography>
      <ToggleTheme type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </ToggleTheme>
    </Container>
  );
};

export default Header;
