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
    id: 2
  },
  {
    title: "New Task",
    done: false,
    description: "Just description",
    date: new Date("2021-08-03"),
    id: 3
  },
  {
    title: "Second Task",
    done: false,
    description: "Just description",
    date: new Date("2021-08-11"),
    id: 4
  },
  {
    title: "Fix this code!",
    done: false,
    description: "Just description",
    date: new Date("2021-09-09"),
    id: 5
  }
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

  return (
    <div className="Todo">
      <LeftBar />
      <div className="right-bar">
        <Tasks tasks={tasks} onDelete={deleteTask} onDone={updateStatus}/>
        {/* onDone => onCheckClick */}
        <div className="form">
          <TaskForm onSubmit={addTask}/>
        </div>

      </div>
    </div>
  );
}

export default App;
// tasks.map(task => React.createElement(Task, {task, key: task.id}))
