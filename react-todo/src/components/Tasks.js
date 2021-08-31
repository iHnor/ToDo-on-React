import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onDone}) => {
    return (
        <div className="tasks">
            {
                tasks.map(task => <Task task={task} key={task.id} onDelete={onDelete} onDone={onDone}/>)
            }
        </div>
    )
}

export default Tasks;