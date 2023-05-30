import { useState } from "react"

const UpdateTask = (props: {
        setTaskList: Function,
        taskList: {
            id: number, 
            taskName: string, 
            taskDescription: string, 
            taskCreationDate: string,
            isDone: boolean
        }[],
        updateId: number,
        setUpdateTask: Function
    }) => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskEndDate, setTaskEndDate] = useState('');

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const ev = props.taskList.find((e) => e.id === props.updateId)
        const ev_updated = {
            "id": props.updateId,
            "taskName": taskName,
            "taskDescription": taskDescription,
            "taskEndDate": taskEndDate,
            "taskCreationDate": ev?.taskCreationDate,
            "isDone": ev?.isDone
        } 
        props.setTaskList(props.taskList.map((e) => (e === ev ? ev_updated : e)))
        props.setUpdateTask((prev: any) => !prev);
    }

    return (
        <div className="d-flex border bg-white align-items-center flex-column w-100 h-50 m-2">
            <form onSubmit={formSubmit}>
                <label>Task name: </label>
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="w-100" required/>
                <br/>
                <label>Description: </label>
                <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="w-100" required/>
                <br/>
                <label>End date: </label>
                <input type="date" value={taskEndDate} onChange={(e) => setTaskEndDate(e.target.value)} className="w-100" required/>
                <br/>
                <button type="submit" className="bg-primary text-light border w-100">Create!</button>
            </form>
        </div>
    )
}

export default UpdateTask;