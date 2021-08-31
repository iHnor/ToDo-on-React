import './App.css';

function App() {
  return (
    <div class="Todo">

      <div class="left-bar">
        <div class="list-name">
          <h1>ToDo List</h1>
        </div>
        <div id="Lists"></div>
        <div class="sort-buttons">
          <button onclick="showDone()" id="showBtn" disabled>Show done</button>
          <button onclick="hideDone()" id="hideBtn" >Hide done</button>
        </div>
      </div>

      <div class="right-bar">
        <div id="tasks">
          <div id="1" class="task">
            <div class="task-base">
              <div class="checkboxAndTask">
                <input type="checkbox" id="2" class="custom-checkbox" />
                <label>First Task</label>
              </div>
              <button>x</button>
            </div>
            <div class="task-description">
              <p>asdf</p>
              <p id="date" class="lastDate">03.08.2021</p>
            </div>
          </div>
          <div id="2" class="task">
            <div class="task-base">
              <div class="checkboxAndTask">
                <input type="checkbox" id="2" class="custom-checkbox" />
                <label>Second Task</label>
              </div>
              <button>x</button>
            </div>
            <div class="task-description">
              <p>tmp</p>
              <p id="date" class="lastDate">03.08.2021</p>
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
    </div>
  );
}

export default App;
