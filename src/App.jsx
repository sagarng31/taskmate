import "./App.css";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

function App() {
  return (
    <section className="App">
      <Header />
      <TasksList />
    </section>
  );
}

export default App;
