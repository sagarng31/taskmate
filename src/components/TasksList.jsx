import { useState } from "react";
import { TaskCard } from "./TaskCard";
import "./TaskList.css";

export const TasksList = ({ tasks, setTasks }) => {
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
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </section>
  );
};
