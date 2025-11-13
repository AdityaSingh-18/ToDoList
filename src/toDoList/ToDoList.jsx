import { useState } from "react";
import './ToDoList.css';
import DisplayList from "./DisplayList";

export default function ToDoList() {

    let [toDoList, setToDoList] = useState([]);

    let saveToDoList = (event) => {
        event.preventDefault();
        let newItem = event.target.toDo.value;
        if(newItem){
            setToDoList([...toDoList, newItem]);
        }
        event.target.reset();
    }
    
    let items = toDoList.map((v, i) =>{
        return(
            <DisplayList v={v} key={i}/>
        )
    });

    return (
    <>
        <div className='toDoContainer'>
            <h1 className='toDoTitle'>ToDo List</h1>
            <form className='toDoForm' onSubmit={saveToDoList}>
                <input className='toDoInput' type='text' name='toDo' />
                <button className='toDoSave'>Save</button>
            </form>
            <button className='clearAll'>Clear All</button>
            <div className='listContainer'>
                {items}
            </div>
        </div>
    </>
  )
}
