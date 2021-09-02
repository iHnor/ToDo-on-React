import React from 'react'
import { Link } from 'react-router-dom'

const TodayTask = ({ task, lists, onDelete, onCheckClick, onShowList }) => {

    console.log(lists);
    // console.log(task.listsId);
    function getList (){
        let list = lists.filter(l => l.id === task.listsId)
        return list[0]
    }
    const list = getList();
    
    return (
        
        <div id="1" className="task">
            <div className="task-base">
                <div className={"checkboxAndTask" + (task.done ? " taskDone" : "")} >
                    <input type="checkbox" id="2" className="custom-checkbox" onChange={event => onCheckClick(event.target.checked, task)} checked={task.done} />
                    <label>{task.title}</label>
                </div>
                <button onClick={() => onDelete(task)}>x</button>
            </div>
            <div className="task-description">
                <p>{task.description}</p>
                <p id="date" className={(new Date(task.date) < new Date() ? "lastDate" : "")}>{task.date.toLocaleDateString('uk')}</p>
            </div>
            <div className="listLink">
                <Link onClick={() => onShowList(getList())}  >{list.nameList}</Link>
            </div>
        </div>
    )
}

export default TodayTask