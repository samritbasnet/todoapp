import React from "react";
import { useState } from "react";

import "../src/todo.css";
import "../src/index.css";



function App() {
  const [tasks,setTasks]=useState([]);
  const [newTask,setNewTask]=useState("");


  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); 
    }
  };

  return (
 
      <div>
      <h1 className='title'>Todo List app</h1>
        <label className='label'>Items to Add</label>
        <input className='input'  type='text' name="item" placeholder='Add new task'
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
        /> 
      <button className='addbtn' onClick={addTask}>Add an item</button>
    
      <p className='todo'>Todo List</p>
      <ul>
        {tasks.map((task,index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      </div>
  )
}

export default App
