import './App.css';

import LeftBar from './components/LeftBar'
import BaseBar from './components/TasksAndForm';

function App() {

  const users = {
    title: "First task"
  }

  return (
    <div className="Todo">
      <LeftBar />
      <BaseBar user={users}/>
    </div>
  );
}

export default App;
