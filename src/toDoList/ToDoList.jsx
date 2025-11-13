import { useState } from 'react'
import './ToDoList.css'

export default function ToDoList() {

    let [toDoList, setToDoList] = useState([]);

    let saveToDoList = (event) => {
        event.preventDefault();
        let newItem = event.target.toDo.value;
        setToDoList([...toDoList, newItem]);
    }

    return (
    <>
        <div className='toDoContainer'>
            <h1 className='toDoTitle'>ToDoList</h1>
            <form className='toDoForm' onSubmit={saveToDoList}>
                <input className='toDoInput' type="text" name='toDo'></input>
            </form>
            <button className='toDoSave'>Save</button>
            <button className='clearAll'>Clear All</button>
            <div className='listContainer'>
                <ul>
                    <li>Items</li>
                    <li>Items</li>
                    <li>Items</li>
                    <li>Items</li>
                </ul>
            </div>
        </div>
    </>
  )
}
