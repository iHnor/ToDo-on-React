import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'


const LeftBar = ({ lists, onShowList, onTodayTasks }) => {

    return (
        <div className="left-bar">
            <div className="lists">
                <div className="list-name">
                    <h1>ToDo List</h1>
                </div>
                <div className="Lists">
                    {
                        lists.map(list => <List key={list.id} list={list} onShowList={onShowList} />)
                    }
                </div>
            </div>
            <div className="Today">
                <Link onClick={() => onTodayTasks(new Date())} to={`/today`}>Today tasks</Link>
            </div>


            {/* <div className="add-buttons">
                <button onClick="showDone()" id="showBtn" disabled>Show done</button>
                <button onClick="hideDone()" id="hideBtn" >Hide done</button>
                <button id="showBtn" disabled>Show done</button>
                <button id="hideBtn" >Hide done</button>
            </div> */}
            {/* <Link onClick={() => onShowList(list)} to={`/todolist/${list.id}`}>{list.nameList}</Link> */}

        </div>
    )
}

export default LeftBar