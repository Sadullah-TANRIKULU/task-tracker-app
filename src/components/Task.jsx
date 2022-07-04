import { HiTrash } from "react-icons/hi";
const Task = (props) => {
  
  console.log(props);
  const {taskData, datetimeData} = props;

  const handleClick = () => {
    const taskTitle = document.querySelector('.taskTitle');
    taskTitle.style.textDecoration = 'line-through';
    const taskDate = document.querySelector('.taskDate');
    taskDate.style.textDecoration = 'line-through';
    const taskInfo = document.querySelector('.taskInfo');
    taskInfo.style.backgroundColor = 'red';
    taskTitle.style.color = 'white';
    taskDate.style.color = 'white';
  }

  const handleTrashClick = () => {
    const task = document.querySelector('.task');
    // task.style.display = 'none';
    task.remove();
  }

  return (
    <div className="task bg-orange-100 w-full flex justify-between cursor-crosshair">
      <div className="taskInfo w-11/12" onClick={handleClick} >
        <h4 className="taskTitle h-14 truncate" >{taskData}/task title goes here</h4>
        <p className="taskDate text-sm truncate" >{datetimeData}/date time data goes here</p>
      </div>
      <div className="trashicon flex items-center cursor-pointer w-1/12">
        <HiTrash className="w-10" onClick={handleTrashClick} />
      </div>
    </div>
  );
};

export default Task;
