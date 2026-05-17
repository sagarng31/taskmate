import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

function App() {
  const info = "Sagar";
  return (
    <section className="App">
      <Header />
      <TasksList info={info} />
      <Footer />
    </section>
  );
}

export default App;
