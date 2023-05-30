const FilterTask = (props: {
    taskList: {
        id: number, 
        taskName: string, 
        taskDescription: string, 
        taskCreationDate: string,
        isDone: boolean
    }[],
    setTaskList: Function,
    }) => {

    const taskList = props.taskList;

    const filterTaskList = (filter: string) => {
        switch(filter){
            case "all": {
                props.setTaskList(taskList);
                break;
            }
            case "done": {
                props.setTaskList(props.taskList.filter((e) => e.isDone === true))
                break;
            }
            case "pending": {
                props.setTaskList(props.taskList.filter((e) => e.isDone === false))
                break;
            }

        }
    }

    return(
        <div className="d-flex align-items-center justify-content-center m-2">
            <button className="w-25 h-25 btn btn-outline-primary" onClick={() => filterTaskList("done")}>Done</button>
            <button className="w-25 h-25 btn btn-outline-primary" onClick={() => filterTaskList("pending")}>Pending</button>
            <button className="w-25 h-25 btn btn-outline-primary" onClick={() => filterTaskList("all")}>All</button>
        </div>
    )

}

export default FilterTask;