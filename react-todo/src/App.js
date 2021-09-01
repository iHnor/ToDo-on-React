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
    id: 2,
    listsId: 1
  },
  {
    title: "New Task",
    done: false,
    description: "Just description",
    date: new Date("2021-08-03"),
    id: 3,
    listsId: 1
  },
  {
    title: "Second Task",
    done: false,
    description: "Just description",
    date: new Date("2021-08-11"),
    id: 4,
    listsId: 2
  },
  {
    title: "Fix this code!",
    done: false,
    description: "Just description",
    date: new Date("2021-09-09"),
    id: 5,
    listsId:3
  }
];

const initialLists = [
  {id: 1, nameList: "First List"},
  {id: 2, nameList: "Second List"},
  {id: 3, nameList: "Third List"}
]

function App() {
  

  const [tasks, setTasks] = useState(initialTasks)

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t !== task));
  }
  
  const updateStatus = (event, task) => {
    task.done = event;
    setTasks(tasks.slice())
  }

  const showTasksInList = (lits) => {
    console.log('showTasksInList');
  }

  return (
    <div className="Todo">
      <LeftBar lists={initialLists} onCheckList={showTasksInList}/>
      <div className="right-bar">
        <Tasks tasks={tasks} onDelete={deleteTask} onCheckClick={updateStatus}/>
        <div className="form">
          <TaskForm onSubmit={addTask}/>
        </div>

      </div>
    </div>
  );
}

export default App;
// tasks.map(task => React.createElement(Task, {task, key: task.id}))
