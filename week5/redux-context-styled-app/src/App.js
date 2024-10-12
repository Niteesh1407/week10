// src/App.js
import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import TaskList from './components/TaskList';
import { AppContainer } from './components/StyledComponents';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <AppContainer isDark={isDarkTheme}>
      <h1>Task Manager</h1>
      <ThemeSwitcher />
      <TaskList />
    </AppContainer>
  );
}

export default App;
