import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [data, setData] = useState([]);
  const [showTaskBar, setShowTaskBar] = useState(true);

  
  return (
    <div className="app container bg-slate-200 w-full sm:w-2/4 flex flex-col items-center gap-4 rounded-t-[11px] bg-auto bg-no-repeat bg-center">
      
      <Header showTaskBar = {showTaskBar} setShowTaskBar = {setShowTaskBar}/>
      {/* <Tasks /> */}
      { showTaskBar && <AddTask data = {data} setData = {setData}/> }
      {data.length > 0 ? <Tasks data = {data}/> : <h3 className='italic text-rose-900 font-bold animate-bounce ' >No Data</h3> }
    </div>
  );
}

export default App;
