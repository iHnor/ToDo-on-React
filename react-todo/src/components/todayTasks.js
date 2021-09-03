import React from 'react'
import TodayTask from './TodayTask';
import GoToDate from './GoToDate'

const Today = ({ todayTasks, lists, onDelete, onCheckClick, onShowList, onTodayTasks}) => {

    return (
        <div className="tasks">
             <GoToDate onTodayTasks={onTodayTasks}/> 
            {todayTasks.map(task => <TodayTask task={task} lists={lists} key={task.id} onDelete={onDelete} onCheckClick={onCheckClick} onShowList={onShowList} />)}
        </div>
    )
}

export default Today;