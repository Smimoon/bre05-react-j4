import{useState} from 'react';
const ToDoList = (props) => {
    const[list, setList] = useState([]);
    
    const handleChange = (event) => {
        console.log(event.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let newList = list.concat([event.target.task.value]);
        setList(newList);
        task.value = "";
    }
    
    return(
        <>
            <ul>    
                {list.map((data, i) => <li key={i}>{data}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <label for="task">
                    Tâche :
                </label>
                <input type="text" id="task" name="task" />
                <button type="submit">Ajouter</button>
            </form>
        </>
    )
};
export default ToDoList;