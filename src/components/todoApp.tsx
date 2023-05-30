import TaskForm from "./createTaskForm";
import { useState } from "react";
import TaskView from "./taskView";
import UpdateTask from "./updateTask";
import FilterTask from "./filterTasks";

const TodoApp = () => {
    const [taskList, setTaskList] = useState<{
        id: number, 
        taskName: string, 
        taskDescription: string, 
        taskCreationDate: string, 
        isDone: boolean
    }[]>([]);
    const [updateTask, setUpdateTask] = useState(false);
    const [updateId, setUpdateId] = useState(0);
    return (
        <div className="w-100 d-flex h-100">
            <div className="w-25 d-flex h-100 flex-column m-2">
                <TaskForm setTaskList={setTaskList}/>
                {updateTask ? <UpdateTask setTaskList={setTaskList} taskList={taskList} updateId={updateId} setUpdateTask={setUpdateTask}/> : null}
            </div>
            <div className="d-flex flex-column w-50 h-100 p-2">
                <FilterTask taskList={taskList} setTaskList={setTaskList}/>
                <TaskView taskList={taskList} setTaskList={setTaskList} setUpdateTask={setUpdateTask} setUpdateId={setUpdateId}/>
            </div>
            
        </div>
    )
}

export default TodoApp;