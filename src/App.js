import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            THIS IS THE SETTUP APP
             <TaskForm />
             <Tasks />
      </header>
    </div>
  );
}

export default App;
