import { HiTrash } from "react-icons/hi";
const Task = (props) => {
  
  console.log(props);
  const {taskData, datetimeData} = props;
  return (
    <div className="task bg-orange-50 w-60 flex justify-between">
      <div className="taskinfo">
        <h4>{taskData}</h4>
        <p>{datetimeData}</p>
      </div>
      <div className="trashicon flex items-center cursor-pointer">
        <HiTrash />
      </div>
    </div>
  );
};

export default Task;
