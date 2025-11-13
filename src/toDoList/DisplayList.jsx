import { useState, useRef } from "react";
import './DisplayList.css';

export default function DisplayList({v, index, toDoList, setToDoList}) {
    let [editIndex, setEditIndex] = useState(null);
    let [tempValue, setTempValue] = useState("");
    let [doneIndex, setDoneIndex] = useState([]);

    let inputRef = useRef(null);

    let toDelete = (index) => {
        let updatedList = toDoList.filter((_, i) => i !== index);
        setToDoList(updatedList);
    };

    let editTask = (index) => {
        setEditIndex(index);
        setTempValue(toDoList[index]);
        setTimeout(() => inputRef.current?.focus(), 0.3);
    };

    let saveEdit = (index) => {
        let updatedTask = [...toDoList];
        updatedTask[index] = tempValue;
        setToDoList(updatedTask);
        setEditIndex(null);
        setTempValue("");
    };

    let cancelEdit = () => {
        setEditIndex(null);
        setTempValue("");
    };

    let handleChange = (event) => {
        setTempValue(event.target.value);
    };

    let doneTask = (index) => {
        setDoneIndex([...doneIndex, index]);
    };

    let undoneTask = (index) => {
        let updatedDoneIndex = doneIndex.filter((v) => v !== index);
        setDoneIndex(updatedDoneIndex);
    };

    return (
        <div className={doneIndex.includes(index) ? "doneTasks toDoTasks" : "toDoTasks"}>
            {editIndex === index ? (
                <>
                    <input className="editTask" type="text" value={tempValue} onChange={handleChange} ref={inputRef} spellCheck="false" 
                        onKeyDown={(e) => e.key === "Enter" && saveEdit(index)}
                    />
                    <span className="icons">
                        <i onClick={() => saveEdit(index)} className="fas fa-save"></i>
                        <i onClick={cancelEdit} className="fas fa-close"></i>
                    </span>
                </>
            ) : (
                <>
                    {v}
                    <>
                        <span className="icons">
                            {doneIndex.includes(index) ? (
                                <i onClick={() => undoneTask(index)} className="fas fa-undo"></i>
                            ) : (
                                <>
                                    <i onClick={() => doneTask(index)} className="fas fa-check-circle"></i>
                                    <i onClick={() => editTask(index)} className="fas fa-edit"></i>
                                </>
                            )}
                            <i onClick={() => toDelete(index)} className="fas fa-trash"></i>
                        </span>
                    </>
                </>
            )}
        </div>
    );
}
