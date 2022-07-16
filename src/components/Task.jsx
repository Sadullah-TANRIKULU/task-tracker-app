import { useState } from "react";
import { HiTrash } from "react-icons/hi";

const Task = ({props}) => {
  console.log(props);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(!isClicked);
    // console.log(isClicked);
    if (!isClicked) {
      e.target.style.backgroundColor = "coral";
      e.target.style.color = "white";
      e.target.style.fontWeight = "bold";
      e.target.style.textDecoration = "line-through";
    } else {
      e.target.style.backgroundColor = "#FFEDD5";
      e.target.style.color = "black";
      e.target.style.fontWeight = "normal";
      e.target.style.textDecoration = "none";
    }
  };

  const handleTrashClick = (id) => {
    console.log(id);
  };

  return (
    <div className="task bg-orange-100 w-full flex justify-between cursor-crosshair">
      <div className="taskInfo w-11/12 truncate" onClick={handleClick}>
        
        <br />
        
      </div>
      <div className="trashicon flex items-center cursor-pointer w-1/12">
        <HiTrash className="w-10" onClick={handleTrashClick} />
      </div>
    </div>
  );
};

export default Task;
