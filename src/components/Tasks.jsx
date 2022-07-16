import Task from "./Task";

const Tasks = ({data}) => {

  // const {taskData, datetimeData} = props;
  console.log(data);
  return (

    <div className="tasks flex flex-col justify-center items-center gap-2 w-11/12 pb-4 ">
        
        {data.map((task) => (
          <Task key={data.id} data={data} />
        ))}
        
      {/* <Task taskData ={taskData} datetimeData={datetimeData} /> */}
    </div>
  );
};

export default Tasks;
