import { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  // const [taskValue, setTaskValue] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const taskRef = useRef();
  const handleTask = (e) => {
    // setTaskValue(e.target.value);
    console.log(taskRef.current.value);
  };
  const handleStatus = (e) => {
    setTaskStatus(e.target.value);
  };
  const handleReset = () => {
    // setTaskValue("");
    setTaskStatus(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      // name: taskValue,
      completed: Boolean(taskStatus),
    };
    setTasks([...tasks, task]);
    handleReset();
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Task Name"
          autoComplete="off"
          onChange={handleTask}
          // value={taskValue}
          ref={taskRef}
        />
        <select value={taskStatus} onChange={handleStatus}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <button className="btn">Add Task</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
      </form>
      {/* <p>{taskValue}</p> */}
    </section>
  );
};
