import "./App.css";
import { AddTask } from "./components/AddTask";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

function App() {
  const info = "Sagar";
  return (
    <>
      <section className="App">
        <Header />
        <AddTask />
        <TasksList info={info} />
        <Footer />
      </section>
    </>
  );
}

export default App;
