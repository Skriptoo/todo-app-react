import { useState } from "react";


const TaskForm = (props: {setTaskList: Function}) => {

    const [taskId, setTaskId] = useState(0);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskCreationDate, setTaskCreationDate] = useState('');
    const [taskEndDate, setTaskEndDate] = useState('');
    const [taskStatus, setTaskStatus] = useState(false);
    
    
    const handleOnClick = () => {
        setTaskStatus(false);
        setTaskCreationDate(new Date().toLocaleString());
    }

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTaskId(taskId + 1);
        props.setTaskList((prev: object[]) => [...prev, {
            "id": taskId, 
            "taskName": taskName, 
            "taskDescription": taskDescription,
            "taskCreationDate": taskCreationDate,
            "taskEndDate": taskEndDate,
            "isDone": taskStatus,
        }]);
        
    }

    return (
        <div className="d-flex border bg-white align-items-center flex-column w-100 h-25 m-2">
            <form onSubmit={formSubmit}>
                <label>Task name: </label>
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="w-100" required/>
                <br/>
                <label>Description: </label>
                <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="w-100" required/>
                <br/>
                <label>End date: </label>
                <input type="date" value={taskEndDate} onChange={(e) => setTaskEndDate(e.target.value)} className="w-100"/>
                <br/>
                <button type="submit" className="bg-primary text-light border w-100 h-25" onClick={handleOnClick}>Create!</button>
            </form>
        </div>

    );
}

export default TaskForm;