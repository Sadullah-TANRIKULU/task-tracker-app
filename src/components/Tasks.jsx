import Task from "./Task";

const Tasks = (props) => {
  const {taskData, datetimeData} = props;
  return (
    <div className="tasks flex flex-col justify-center items-center gap-2 w-80 pb-4 ">
        <h1 className="text-center" >Tasks</h1>
      <Task taskData ={taskData} datetimeData={datetimeData} />
      <Task taskData ={taskData} datetimeData={datetimeData} />
      <Task taskData ={taskData} datetimeData={datetimeData} />
    </div>
  );
};

export default Tasks;
