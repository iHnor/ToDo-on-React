import './App.css';

import LeftBar from './components/LeftBar'
import Task from './components/Task';
import AddForm from './components/Form';
import React from 'react';

function App() {

  const tasks = [
    {
      title: "First Task",
      done: false,
      description: "asdf",
      date: "2021-08-03T00:00:00.000Z",
      id: 2
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

  return (
    <div className="Todo">
      <LeftBar />
      <div className="right-bar">
        <div className="tasks">
          {
            tasks.map(task => <Task task={task} key={task.id}/>)
            // tasks.map(task => React.createElement(Task, {task, key: task.id}))
          }
        </div>
        <div className="form">
          <AddForm />
        </div>

      </div>
    </div>
  );
}

export default App;
