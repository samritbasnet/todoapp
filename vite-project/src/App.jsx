
import "../src/todo.css";
import "../src/index.css";
function App() {

  return (
 
      <div>
      <h1 className='title'>Todo List app</h1>
        <label className='label'>Items to Add</label>
        <input className='input'  type='text' name="item" placeholder='Add new task'/> 
      <button className='addbtn'>Add an item</button>
    
      <p className='todo'>Todo List</p>
      </div>
  )
}

export default App
