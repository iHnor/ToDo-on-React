import './App.css';
import React, { useState } from 'react';
import LeftBar from './components/LeftBar'
import TaskForm from './components/Form';
import Tasks from './components/Tasks'

const initialTasks = [
  {
    title: "First Task",
    done: true,
    description: "asdf",
    date: "2021-08-03T00:00:00.000Z",
    id: 2
  },
  {
    title: "First Task",
    done: false,
    description: "asdf",
    date: "2021-08-03T00:00:00.000Z",
    id: 9
  },
  {
    title: "Second Task",
    done: false,
    description: "sfgsf",
    date: "2021-08-11T00:00:00.000Z",
    id: 3
  },
  {
    title: "Fix this code!",
    done: false,
    description: "sfgsf",
    date: "2021-09-09T00:00:00.000Z",
    id: 4
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
  

  return (
    <div className="Todo">
      <LeftBar />
      <div className="right-bar">
        <Tasks tasks={tasks} onDelete={deleteTask}/>
        
        <div className="form">
          <TaskForm onSubmit={addTask}/>
        </div>

      </div>
    </div>
  );
}

export default App;
// tasks.map(task => React.createElement(Task, {task, key: task.id}))
