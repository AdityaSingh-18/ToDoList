import './ToDoList.css'

export default function ToDoList() {
  return (
    <>
        <div className='toDoContainer'>
            <h1 className='toDoTitle'>ToDoList</h1>
            <form className='toDoForm'>
                <input className='toDoInput' type="text"></input>
                <button className='toDoSave'>Save</button>
                <button className='clearAll'>Clear All</button>
            </form>
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
