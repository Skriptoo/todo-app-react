const TaskView = (props: {
    taskList: {
        id: number, 
        taskName: string, 
        taskDescription: string, 
        taskCreationDate: string,
        isDone: boolean
    }[],
    setTaskList: Function,
    setUpdateTask: Function,
    setUpdateId: Function,
}) => {


    const checkBoxChanged = (id: number) => {
        const checkbox = document.getElementById(id.toString()) as HTMLInputElement | null;
        if(checkbox?.checked){
            const task = props.taskList.find((e) => e.id === id);
            task!.isDone = true;
            console.log(task);
            props.setTaskList(props.taskList.map((e) => (e.id === task!.id ? task : e)));
        }
        else {
            const task = props.taskList.find((e) => e.id === id);
            task!.isDone = false;
            console.log(task);
            props.setTaskList(props.taskList.map((e) => (e.id === task!.id ? task : e)));
        } 
    }
    const deleteTask = (id: number) => {
        props.setTaskList(props.taskList.filter((e) => e.id !== id));
    } 

    const updateTask = (id: number) => {
        props.setUpdateTask((prev: any) => !prev);
        props.setUpdateId(id);
        //task!.taskName = "essa";
        //props.setTaskList(props.taskList.map((e) => (e.id === task!.id ? task : e)));
    }
    return (
        <div className="border border w-100">
            {props.taskList.map(e => 
            <div key={e.id} className="border">
                <div className="d-flex justify-content-between">
                    <h2> {e.taskName} </h2>
                    <form>
                        <input type="checkbox" id={(e.id).toString()} onChange={() => checkBoxChanged(e.id)} checked={e.isDone}/>
                    </form>
                </div>
                <p> {e.id}</p>
                <p> Created: {e.taskCreationDate}</p>
                <p> {e.taskDescription }</p>
                <div>
                    <button onClick={() => deleteTask(e.id)} className="btn btn-outline-danger">Delete</button>
                    <button onClick={() => updateTask(e.id)} className="btn btn-outline-success">Update</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default TaskView;