import { useState } from "react";
import Task from "./Task";
import { HiTrash } from "react-icons/hi";
import Tasks from "./Tasks";

const AddTask = () => {
  const [taskData, setTaskData] = useState('');
  const [datetimeData, setDatetimeData] = useState('');

  
  const handleChangeTaskData = (e) => {
    setTaskData(e.target.value);
  };
  const handleChangeDatetimeData = (e) => {
    setDatetimeData(e.target.value);
  };
  
  const handleClick = () => {
    handleChangeTaskData();
    handleChangeDatetimeData();
  }
    
  console.log(taskData);
  console.log(datetimeData);

  return (
    <div className="addTask flex flex-col">
      <div className="task flex flex-col">
        <label htmlFor="">Task</label>
        <input type="text" onChange={handleChangeTaskData} value={taskData} />
      </div>

      <div className="daytime flex flex-col">
        <label htmlFor="">Day & Time</label>
        <input type="text" onChange={handleChangeDatetimeData} value={datetimeData} />
      </div>
      <button
        className="bg-amber-300 rounded-md w-36"
        onClick={() => handleClick()}
      >
        Save Task
      </button>
      {<Tasks taskData ={taskData} datetimeData={datetimeData} />}
    </div>
  );
};

export default AddTask;
