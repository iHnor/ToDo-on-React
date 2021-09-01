import React from 'react'
import List from './List'


const LeftBar = ({lists, onCheckList}) => {
    return (
        <div className="left-bar">
            <div className="list-name">
                <h1>ToDo List</h1>
            </div>
            <div className="Lists">
                {
                    lists.map(list => <List list={list} onCheckList={onCheckList}/> )
                }
            </div>
            <div className="add-buttons">
                {/* <button onClick="showDone()" id="showBtn" disabled>Show done</button>
                <button onClick="hideDone()" id="hideBtn" >Hide done</button> */}
                {/* <button id="showBtn" disabled>Show done</button>
                <button id="hideBtn" >Hide done</button> */}
            </div>
        </div>
    )
}

export default LeftBar