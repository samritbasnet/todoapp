import React, { useState } from "react";
import "../src/todo.css";
import "../src/index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      // Add new task to tasks array
      setTasks([...tasks, { text: newTask, completed: false }]);
      // Clear input field
      setNewTask(""); 
    }
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to edit task text
  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className="title">Todo List app</h1>
      {/* Input field for adding new tasks */}
      <label className="label">Add Task:</label>
      <input
        className="input"
        type="text"
        value={newTask}
        placeholder="Enter task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      {/* Button to add a new task */}
      <button className="addbtn" onClick={addTask}>Add Task</button>

      {/* Todo List */}
      <h2 className="todo">Todo List:</h2>
      <ul>
        {/* Render each task */}
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Checkbox to toggle task completion */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {/* Task text */}
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            {/* Button to edit task */}
            <button onClick={() => editTask(index, prompt("Edit Task", task.text))}>Edit</button>
            {/* Button to delete task */}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
