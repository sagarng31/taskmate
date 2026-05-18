import { useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <section className="App">
        <Header />
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TasksList tasks={tasks} setTasks={setTasks} />
        <Footer />
      </section>
    </>
  );
}

export default App;
