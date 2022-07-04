import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  
  return (
    <div className="app container bg-slate-200 w-full sm:w-2/4 flex flex-col items-center gap-4">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
