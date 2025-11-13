import { useState } from 'react';
import './DisplayList.css';

export default function DisplayList({v, index, toDoList, setToDoList}) {

    let [doneIndex, setDoneIndex] = useState([]);

    let doneTask = (index) => {
        setDoneIndex([...doneIndex, index]);   
    }

    let toDelete = (index) => {
        let updatedList = toDoList.filter((v, i) => i !== index);
        setToDoList(updatedList);
    }

    return (
        <div className={doneIndex.includes(index) ? "doneTasks toDoTasks" : "toDoTasks"}>
            {v}
            <span className="Icons">
                  <i onClick={() => doneTask(index)} className="fas fa-check-circle"></i>
                  <i onClick={() => toDelete(index)} className="fas fa-trash"></i>
            </span>
        </div>
    )
}
