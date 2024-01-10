import { FormEvent, useContext, useState } from "react";
import { TTodo, TodoContext } from "../context/TodoProvider";

const TodoComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { state, dispatch }: any = useContext(TodoContext);
  const [task, setTask] = useState("");

  console.log(state);

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(32).substring(2, 7),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1>ADD TODO</h1>
      <form onSubmit={handleSumbit}>
        <label htmlFor="title">Task</label>
        <input
          type="text"
          name="todo"
          placeholder="Task"
          onBlur={(e) => setTask(e.target.value)}
          style={{ margin: "5px 0", padding: "5px" }}
        />
        <input
          type="submit"
          value="Submit"
          style={{ padding: "8px 16px", marginTop: "10px" }}
        />
      </form>
      {/* input todo tasks */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        {state.map((item: TTodo) => (
          <div key={item.id}>
            <p
              onClick={() =>
                dispatch({ type: "changeIsCompleted", payload: item.id })
              }
              style={{ cursor: "pointer", borderBottom: "1px solid black" }}
            >
              {item.title}: Task Completed: {`${item.isCompleted}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoComponent;
