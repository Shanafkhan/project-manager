import { useState } from "react";
export default function NewTasks({onAdd, onDelete}){
    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event){
        setEnteredTask(event.target.value);
    }
    function handleClick(){
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return(
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-3 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Tasks</button>
        </div>
    );
}