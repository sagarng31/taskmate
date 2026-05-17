import "./App.css";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

function App() {
  const info = "Sagar";
  return (
    <section className="App">
      <Header />
      <TasksList info={info} />
    </section>
  );
}

export default App;
