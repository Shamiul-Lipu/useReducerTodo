import "./App.css";
import TodoComponent from "./components/TodoComponent";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <>
      <TodoProvider>
        <TodoComponent />
      </TodoProvider>
    </>
  );
}

export default App;
