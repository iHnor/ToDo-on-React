import React from 'react'

const LeftBar = () => {
    return (
        <div className="left-bar">
            <div className="list-name">
                <h1>ToDo List</h1>
            </div>
            <div id="Lists"></div>
            <div className="sort-buttons">
                <button onClick="showDone()" id="showBtn" disabled>Show done</button>
                <button onClick="hideDone()" id="hideBtn" >Hide done</button>
            </div>
        </div>
    )
}

export default LeftBar