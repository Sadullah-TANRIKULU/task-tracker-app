const AddTask = () => {
  return (
    <div className="addTask flex flex-col">
      <div className="task flex flex-col">
        <label htmlFor="">Task</label>
        <input type="text" />
      </div>

      <div className="daytime flex flex-col">
        <label htmlFor="">Day & Time</label>
        <input type="datetime" name="" id="" />
      </div>
    </div>
  );
};

export default AddTask;
