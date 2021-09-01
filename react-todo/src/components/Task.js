import React from 'react'

const Task = ({ task, onDelete, onCheckClick }) => {
    return (
        <div id="1" className="task">
            <div className="task-base">
                <div className={"checkboxAndTask" + (task.done ? " taskDone" : "")} >
                    <input type="checkbox" id="2" className="custom-checkbox" onClick={event => onCheckClick(event.target.checked, task)}/>
                    <label>{task.title}</label>
                </div>
                <button onClick={() => onDelete(task)}>x</button>
            </div>
            <div className="task-description">
                <p>{task.description}</p>
                <p id="date" className={(new Date(task.date) < new Date() ? "lastDate" : "")}>{task.date.toLocaleDateString('uk')}</p>
            </div>
        </div>
    )
}

export default Task