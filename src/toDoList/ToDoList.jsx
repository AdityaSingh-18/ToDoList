import { useState } from "react";
import {ToastContainer, toast} from "react-toastify"
import DisplayList from "./DisplayList";
import './ToDoList.css';

export default function ToDoList() {

    let [toDoList, setToDoList] = useState([]);

    let saveToDoList = (event) => {
        event.preventDefault();
        let newItem = event.target.toDo.value;
        if(!newItem){
            toast.error("Invalid Input", { autoClose: 1500 });
        }
        else{
            if(!toDoList.includes(newItem)){
                setToDoList([...toDoList, newItem]);
                toast.success("Task Saved", { autoClose: 1500 });
            } 
            else{
                toast.error("Task Already in the List", { autoClose: 1500 });
            }
        }
        event.target.reset();
    }

    let clearToDoList = () => {
        if (toDoList.length === 0) {
            toast.warn("No tasks to clear", { autoClose: 1500 });
        } 
        else {
            setToDoList([]);
            toast.error("All tasks cleared", { autoClose: 1500 });
        }
    }
    
    let items = toDoList.map((v, i) =>{
        return(
            <DisplayList v={v} key={i} index={i} toDoList={toDoList} setToDoList={setToDoList}/>
        )
    });

    return (
    <>
        <ToastContainer />
        <div className="toDoContainer">
            <h1 className="toDoTitle">ToDo List</h1>
            <form className="toDoForm" onSubmit={saveToDoList}>
                <input className="toDoInput" type="text" name="toDo" />
                <button className="button toDoSave">Save</button>
            </form>
            <button className="button clearAll" onClick={clearToDoList}>Clear All</button>
            <div className="listContainer">
                <div className={toDoList.length !== 0 ? "scroll showBorder" : "scroll"}>
                    {items}
                </div>
            </div>
        </div>
    </>
  )
}
