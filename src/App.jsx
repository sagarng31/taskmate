import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 2451,
      name: "Study React",
      completed: true,
    },
    {
      id: 4215,
      name: "Study JavaScript",
      completed: false,
    },
    {
      id: 1240,
      name: "Learn Node",
      completed: false,
    },
  ]);

  function handleDelete(dropId) {
    console.log(dropId);
    setTasks(tasks.filter((task) => task.id !== dropId));
  }

  return (
    <>
      <section className="App">
        <h1>Task List</h1>
        <ul>
          {tasks.map(({ id, name }) => (
            <li key={id}>
              <span>
                {id} - {name}
              </span>
              <button onClick={() => handleDelete(id)} className="delete">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
