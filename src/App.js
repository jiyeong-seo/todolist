import { useSelector } from "react-redux";
import { TodoList } from "./pages";

function App() {
  const counterStore = useSelector((state) => state);
  console.log(counterStore.counter.number);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
