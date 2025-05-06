
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './index.css'

function App() {


  return (
    <>
      <div>
        <div className="header-container">
          <h1>Todo List</h1>
          <div className="add-task-wrapper">
            <AddTask />
          </div>
        </div>
        <TaskList />
      </div>
    </>
  );
}

export default App;
