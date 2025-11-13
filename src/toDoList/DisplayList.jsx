import './DisplayList.css';

export default function DisplayList({v, index, toDoList, setToDoList}) {
    const toDelete = (index) => {
        const updatedList = toDoList.filter((v, i) => i !== index);
        setToDoList(updatedList);
    }
    return (
        <div className='toDoItems'>
            {v}
            <button onClick={()=>toDelete(index)}>Delete</button>
        </div>
    )
}
