import './App.css';
import AddTask from './components/AddTask';
import ShowCloseButton from './components/ShowCloseButton';
import Header from './components/Header';
import Task from './components/Task';
import Tasks from './components/Tasks';
import SaveTaskButton from './components/SaveTaskButton';

function App() {
  return (
    <div className="bg-slate-200 h-screen flex flex-col items-center gap-4">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
