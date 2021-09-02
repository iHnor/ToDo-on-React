import React from 'react'
import TodayTask from './TodayTask';

const Today = ({todayTasks, onDelete, onCheckClick}) => {
    // console.log(todayTasks);
    return(
        <div className="tasks">
            {todayTasks.map(task => <TodayTask task={task} key={task.id} onDelete={onDelete} onCheckClick={onCheckClick}/>)}
        </div>
    )
}

export default Today;