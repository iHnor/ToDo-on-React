import React from 'react'

const BaseBar = (props) => {
    console.log(props);
    return (
        <div className="right-bar">
            <div id="tasks">
                <div id="1" className="task">
                    <div className="task-base">
                        <div className="checkboxAndTask">
                            <input type="checkbox" id="2" className="custom-checkbox" />
                            <label>{props.user.title}</label>
                        </div>
                        <button>x</button>
                    </div>
                    <div className="task-description">
                        <p>asdf</p>
                        <p id="date" className="lastDate">03.08.2021</p>
                    </div>
                </div>
                <div id="2" className="task">
                    <div className="task-base">
                        <div className="checkboxAndTask">
                            <input type="checkbox" id="2" className="custom-checkbox" />
                            <label>Second Task</label>
                        </div>
                        <button>x</button>
                    </div>
                    <div className="task-description">
                        <p>tmp</p>
                        <p id="date" className="lastDate">03.08.2021</p>
                    </div>
                </div>
            </div>

            <form name="addTask">
                <input type="text" name="title" placeholder="Task" />
                <input type="text" name="description" placeholder="Description" />
                <input type="date" name="date" placeholder="Deadline" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default BaseBar