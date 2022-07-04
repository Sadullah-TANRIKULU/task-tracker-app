import { useState } from "react";

const ShowCloseButton = (props) => {
    // const [showTaskBar, setShowTaskBar] = useState(true);   ///APP JS ALDIM
    const [btnName, setBtnName] = useState(true);
    const {showTaskBar, setShowTaskBar} = props.props;

    const handleClick = () => {
        setShowTaskBar(!showTaskBar);
        setBtnName(!btnName);
    }


    return ( 
        <div className="showclosebtn flex flex-col justify-center items-center gap-2 text-white">
            <button className="bg-amber-300 rounded-md w-40" onClick={handleClick} >
                {btnName ? 'Close Add Task Bar' : 'Show Add Task Bar' }
            </button>
            {/* { showTaskBar && <AddTask /> } */}
        </div>
     );
}
 
export default ShowCloseButton;