import { useState } from "react";

const AddTask = ({data, setData}) => {
  const [taskData, setTaskData] = useState('');
  const [datetimeData, setDatetimeData] = useState('');
    
  const handleChangeTaskData = (e) => {
    setTaskData(e.target.value);
    // console.log(e.target.value)
  };
  const handleChangeDatetimeData = (e) => {
    setDatetimeData(e.target.value);
    // console.log(e.target.value)
  };
  
  const handleClick = () => {
    console.log('clicked');
    const id = new Date().getTime();
    setData([...data, {id, taskData, datetimeData}]);
  }
    
  // console.log(taskData);
  // console.log(datetimeData);

  return (
    <div className="addTask flex flex-col justify-center items-center gap-2 w-11/12 ">
      <div className="taskInput flex flex-col w-full ">
        <label className="font-bold" htmlFor="">Task</label>
        <input className="h-10 bg-gradient-to-l from-sky-200 to-lime-200 rounded-md" type="text" onChange={handleChangeTaskData} value={taskData} />
      </div>

      <div className="daytimeInput flex flex-col w-full">
        <label className="font-bold" htmlFor="">Day & Time</label>
        <input className="bg-gradient-to-l from-sky-200 to-lime-200 rounded-md" type="datetime" onChange={handleChangeDatetimeData} value={datetimeData} />
      </div>
      <button
        className="bg-amber-300 rounded-md w-40 text-white"
        onClick={handleClick}
      >
        Save Task
      </button>
      {/* { taskData || datetimeData ? <Tasks taskData ={taskData} datetimeData={datetimeData} /> : 'noData' } */}
      {/* <Tasks data = {data} /> */}
    </div>
  );
};

export default AddTask;
