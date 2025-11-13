import { useState } from "react";
import './ToDoList.css';
import DisplayList from "./DisplayList";

export default function ToDoList() {

    let [toDoList, setToDoList] = useState([]);

    let saveToDoList = (event) => {
        event.preventDefault();
        let newItem = event.target.toDo.value;
        if(newItem){
            if(!toDoList.includes(newItem)){
                setToDoList([...toDoList, newItem]);
            } 
            else{
                alert("Task already exists!");
            }
        }
        event.target.reset();
    }

    let clearToDoList = () => {
        setToDoList([]);
    }
    
    let items = toDoList.map((v, i) =>{
        return(
            <DisplayList v={v} key={i} index={i} toDoList={toDoList} setToDoList={setToDoList}/>
        )
    });

    return (
    <>
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
