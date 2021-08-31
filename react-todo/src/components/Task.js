import React from 'react'

const Task = ({task}) => {
    return (
        <div id="1" className="task">
            <div className="task-base">
                <div className="checkboxAndTask">
                    <input type="checkbox" id="2" className="custom-checkbox" />
                    <label>{task.title}</label>
                </div>
                <button>x</button>
            </div>
            <div className="task-description">
                <p>{task.description}</p>
                <p id="date" className="lastDate">{task.date}</p>
            </div>
        </div>
    )
}

export default Task