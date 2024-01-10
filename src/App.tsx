import "./App.css";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
// import TodoComponent from "./components/TodoComponent";
// import TodoProvider from "./context/TodoProvider";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      {/* <TodoProvider>
        <TodoComponent />
      </TodoProvider> */}
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex gap-2 border border-purple-300 rounded-md bg-slate-50 p-10">
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="px-3 py-2 rounded-md bg-green-300 text-xl font-semibold"
          >
            Increment by 5
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 rounded-md bg-green-300 text-xl font-semibold"
          >
            Increment
          </button>
          <h2 className="text-3xl mx-10">{count}</h2>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md bg-red-300 text-xl font-semibold"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
