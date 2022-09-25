
import './App.css';
import { ToDoList } from './ToDoList';


function App() {

  return (
    <div className='App'>
      <div className='cont'>
        <h1>To Do List</h1>
      </div>
      <div className='cont'>
        <ToDoList/>
      </div>
    </div> 
  );
}

export default App;
