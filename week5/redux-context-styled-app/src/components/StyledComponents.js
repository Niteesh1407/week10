// src/components/StyledComponents.js
import styled from 'styled-components';

export const InputButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  margin-right: 10px; /* Space between input and button */
  border-radius: 5px;
  border: ${(props) => (props.isDark ? '1px solid #7f8c8d' : '1px solid #bdc3c7')};
  background-color: ${(props) => (props.isDark ? '#2c3e50' : '#ecf0f1')};
  color: ${(props) => (props.isDark ? '#ecf0f1' : '#2c3e50')};
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.isDark ? '0 2px 4px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)'};

  &:focus {
    outline: none;
    border-color: ${(props) => (props.isDark ? '#e74c3c' : '#3498db')};
    box-shadow: ${(props) =>
      props.isDark
        ? '0 0 8px rgba(231, 76, 60, 0.6)'
        : '0 0 8px rgba(52, 152, 219, 0.6)'};
  }

  &::placeholder {
    color: ${(props) => (props.isDark ? '#95a5a6' : '#7f8c8d')};
  }

  @media (max-width: 600px) {
    margin-right: 0; /* Remove margin on small screens */
    margin-bottom: 10px;
    width: 100%;
  }
`;


export const AppContainer = styled.div`
  background-color: ${(props) => (props.isDark ? '#2c3e50' : '#ecf0f1')};
  color: ${(props) => (props.isDark ? '#ecf0f1' : '#2c3e50')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

export const ThemeToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${(props) => (props.isDark ? '#f39c12' : '#34495e')};
  color: ${(props) => (props.isDark ? '#2c3e50' : '#ecf0f1')};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.isDark ? '0 4px 6px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => (props.isDark ? '#e67e22' : '#2c3e50')};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isDark ? '#e74c3c' : '#3498db')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.isDark
      ? '0 4px 6px rgba(0, 0, 0, 0.2)'
      : '0 4px 6px rgba(0, 0, 0, 0.1)'};

  &:hover {
    background-color: ${(props) => (props.isDark ? '#c0392b' : '#2980b9')};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${(props) =>
      props.isDark
        ? '0 2px 4px rgba(0, 0, 0, 0.2)'
        : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  }

  &:focus {
    outline: none;
    box-shadow: ${(props) =>
      props.isDark
        ? '0 0 0 3px rgba(192, 57, 43, 0.5)'
        : '0 0 0 3px rgba(52, 152, 219, 0.5)'};
  }
`;

export const TaskListContainer = styled.div`
  width: 400px;
  background-color: ${(props) => (props.isDark ? '#34495e' : '#ffffff')};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.isDark ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? (props.isDark ? '#7f8c8d' : '#bdc3c7') : 'inherit')};
  font-style: ${(props) => (props.completed ? 'italic' : 'normal')};
  margin: 10px 0;
  cursor: pointer;

  span {
    flex-grow: 1;
  }
`;

export const FilterButton = styled.button`
  background-color: ${(props) => (props.isDark ? '#3498db' : '#2980b9')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  margin: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.isDark ? '0 4px 6px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)'};

  &:hover {
    background-color: ${(props) => (props.isDark ? '#2980b9' : '#1f6391')};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${(props) =>
      props.isDark
        ? '0 2px 4px rgba(0, 0, 0, 0.2)'
        : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  }

  &:focus {
    outline: none;
    box-shadow: ${(props) =>
      props.isDark
        ? '0 0 0 3px rgba(52, 152, 219, 0.5)'
        : '0 0 0 3px rgba(41, 128, 185, 0.5)'};
  }
`;
