import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Button } from './StyledComponents';

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button isDark={isDarkTheme} onClick={toggleTheme}>
      Switch to {isDarkTheme ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default ThemeSwitcher;
