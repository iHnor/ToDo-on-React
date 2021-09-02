import React from 'react'
import TodayTask from './TodayTask';

const Today = ({todayTasks, lists, onDelete, onCheckClick, onShowList}) => {
    
    return(
        <div className="tasks">
            {todayTasks.map(task => <TodayTask task={task} lists={lists} key={task.id} onDelete={onDelete} onCheckClick={onCheckClick} onShowList={onShowList}/>)}
        </div>
    )
}

export default Today;