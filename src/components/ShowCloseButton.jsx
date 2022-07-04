import { useState } from "react";
import AddTask from "./AddTask";


const ShowCloseButton = () => {
    const [showTaskBar, setShowTaskBar] = useState(true);
    const [btnName, setBtnName] = useState(true);

    const handleClick = () => {
        setShowTaskBar(!showTaskBar);
        setBtnName(!btnName);
    }


    return ( 
        <div className="showclosebtn flex flex-col justify-center items-center gap-2">
            <button className="bg-amber-300 rounded-md w-40" onClick={handleClick} >
                {btnName ? 'Close Add Task Bar' : 'Show Add Task Bar' }
            </button>
            { showTaskBar && <AddTask /> }
        </div>
     );
}
 
export default ShowCloseButton;