import { useState } from "react";
import AddTask from "./AddTask";


const ShowCloseButton = () => {
    const [showTaskBar, setShowTaskBar] = useState(true);

    const handleClick = () => {
        setShowTaskBar(!showTaskBar); 
    }

    return ( 
        <div className="showclosebtn">
            <button className="bg-amber-300 rounded-md w-36" onClick={handleClick} >
                Show Add Task Bar
            </button>
            { showTaskBar && <AddTask /> }
        </div>
     );
}
 
export default ShowCloseButton;