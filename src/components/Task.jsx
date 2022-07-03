import { HiTrash } from "react-icons/hi";
const Task = () => {
    return ( 
        <div className="task bg-orange-50 w-60 flex justify-between">
            <div className="taskinfo">
            <h4>Task title</h4>
            <p>task day time info</p>

            </div>
            <div className="trashicon flex items-center">
                <HiTrash />
            </div>

        </div>
     );
}
 
export default Task;