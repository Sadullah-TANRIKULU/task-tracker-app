import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="bg-slate-200 h-screen flex flex-col items-center gap-4">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
