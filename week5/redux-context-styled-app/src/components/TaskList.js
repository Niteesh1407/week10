// src/components/TaskList.js
import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import ThemeContext from '../context/ThemeContext';
import { TaskListContainer, TaskItem, Button, FilterButton, StyledInput } from './StyledComponents';

const TaskList = () => {
  const { tasks, addTask, toggleTaskCompletion, removeTask } = useContext(TaskContext);
  const { isDarkTheme } = useContext(ThemeContext);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    if (newTask) {
      addTask(newTask);
      setNewTask('');
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <TaskListContainer isDark={isDarkTheme}>
      <h2>Task List</h2>

      <div>
        <FilterButton isDark={isDarkTheme} onClick={() => setFilter('all')}>
          All
        </FilterButton>
        <FilterButton isDark={isDarkTheme} onClick={() => setFilter('completed')}>
          Completed
        </FilterButton>
        <FilterButton isDark={isDarkTheme} onClick={() => setFilter('pending')}>
          Pending
        </FilterButton>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <TaskItem key={index} completed={task.completed} isDark={isDarkTheme}>
            <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
            <Button isDark={isDarkTheme} onClick={() => removeTask(index)}>
              Remove
            </Button>
          </TaskItem>
        ))}
      </ul>

      <StyledInput
        isDark={isDarkTheme}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <Button isDark={isDarkTheme} onClick={handleAddTask}>
        Add Task
      </Button>
    </TaskListContainer>
  );
};

export default TaskList;
