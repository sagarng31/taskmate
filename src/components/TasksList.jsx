import { useState } from "react";
import { TaskCard } from "./TaskCard";
import "./TaskList.css";

export const TasksList = ({ info }) => {
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

  const [show, setShow] = useState(true);

  function handleShow() {
    setShow(!show);
  }

  function handleDelete(dropId) {
    console.log(dropId);
    setTasks(tasks.filter((task) => task.id !== dropId));
  }

  return (
    <section className="tasklist">
      <ul>
        <div className="header">
          <h1>Task List</h1>
          <button className="trigger" onClick={handleShow}>
            {show ? "Hide" : "Show"}
          </button>
        </div>
        {show &&
          tasks.map((task) => (
            <TaskCard
              info={info}
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
    </section>
  );
};
