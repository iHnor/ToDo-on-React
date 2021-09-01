import React from 'react'
import List from './List'


const LeftBar = ({lists, onShowList}) => {
    return (
        <div className="left-bar">
            <div className="list-name">
                <h1>ToDo List</h1>
            </div>
            <div className="Lists">
                {
                    lists.map(list => <List key={list.id} list={list} onShowList={onShowList} /> )
                }
            </div>
            {/* <div className="add-buttons">
                <button onClick="showDone()" id="showBtn" disabled>Show done</button>
                <button onClick="hideDone()" id="hideBtn" >Hide done</button>
                <button id="showBtn" disabled>Show done</button>
                <button id="hideBtn" >Hide done</button>
            </div> */}
        </div>
    )
}

export default LeftBar