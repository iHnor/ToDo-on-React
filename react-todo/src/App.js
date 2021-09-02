import './App.css';
import React, { useState } from 'react';
import LeftBar from './components/LeftBar'
import TaskForm from './components/Form';
import Tasks from './components/Tasks'

const initialTasks = [
  {
    title: "First Task",
    done: false,
    description: "Just description",
    date: new Date("2021-08-03"),
    id: 1,
    listsId: 1
  },
  {
    title: "New Task",
    done: false,
    description: "Just description",
    date: new Date("2021-08-03"),
    id: 2,
    listsId: 1
  },
  {
    title: "Second Task",
    done: false,
    description: "Just description",
    date: new Date("2021-08-11"),
    id: 3,
    listsId: 2
  },
  {
    title: "Fix this code!",
    done: false,
    description: "Just description",
    date: new Date("2021-09-09"),
    id: 4,
    listsId: 3
  }
];

const initialLists = [
  { id: 1, nameList: "First List", status: false },
  { id: 2, nameList: "Second List", status: false },
  { id: 3, nameList: "Third List", status: false }
]
function searchActiv(){
  let status = initialLists.filter(l => l.status === true)
  let defultValue = {id: 1}
  if (status[0] === undefined)
    return defultValue
  else  
    return status[0]
} 

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [active, setActive] = useState(tasks)

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    setActive([...active, newTask])
  }

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t !== task));
    setActive(active.filter(t => t !== task))
  }

  const updateStatus = (event, task) => {
    task.done = event;
    setTasks(tasks.slice())
  }
  const showTasksInList = (list) => {
    initialLists.forEach(l => l.status = false)
    list.status = true
    setActive(tasks.filter(t => t.listsId === list.id));
  }
  return (
    <div className="Todo">
      <LeftBar lists={initialLists} onShowList={showTasksInList} />
      <div className="right-bar">
        <Tasks tasks={active} onDelete={deleteTask} onCheckClick={updateStatus} />
        <div className="form">
          <TaskForm onSubmit={addTask} listStatus={searchActiv()}/>
        </div>

      </div>
    </div>
  );
}

export default App;
// tasks.map(task => React.createElement(Task, {task, key: task.id}))
