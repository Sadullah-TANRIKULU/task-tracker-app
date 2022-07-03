import { useState } from "react";
import AddTask from "./AddTask";
import SaveTaskButton from "./SaveTaskButton";


const ShowCloseButton = () => {
    const [showTaskBar, setShowTaskBar] = useState(true);

    const handleClick = () => {
        console.log('clicked');
        setShowTaskBar(!showTaskBar); 
    }

    return ( 
        <div className="showclosebtn">
            <button className="bg-amber-300 rounded-md w-36" onClick={handleClick} >
                Show Add Task Bar
            </button>
            { showTaskBar && <AddTask /> }
            { showTaskBar && <SaveTaskButton /> }
        </div>
     );
}
 
export default ShowCloseButton;