import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onCheckClick}) => { 
    return (
        <div className="tasks">
            {
                tasks.map(task =>  <Task task={task} key={task.id} onDelete={onDelete} onCheckClick={onCheckClick} />)
            }
        </div>
    )
}

export default Tasks;