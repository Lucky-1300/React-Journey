import React, { useState } from 'react';

export const TodoApp = () => {
  const [task, setTask] = useState(''); // stores input value
  const [tasks, setTasks] = useState([]); // stores list of tasks

  // Handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); // clear input
    }
  };

  // Delete a task by index
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <h2>My To-Do List</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

