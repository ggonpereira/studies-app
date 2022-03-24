import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Typography } from '../Typography/styles';

import { Container, ToggleTheme } from './styles';

const Header: React.FC = () => {
  const { onToggleTheme, selectedTheme } = useContext(ThemeContext);

  return (
    <Container data-testid="headerContainer">
      <div>
        <Typography color="#303332" noMargin>
          Studies App
        </Typography>
        <ToggleTheme type="button" onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
        </ToggleTheme>
      </div>
    </Container>
  );
};

export default Header;
