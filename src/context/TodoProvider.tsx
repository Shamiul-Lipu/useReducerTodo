import { ReactNode, Reducer, createContext } from "react";
import { useReducer } from "react";

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TodoProviderProps = {
  children: ReactNode;
};

type TAction = {
  type: "addTodo" | "changeIsCompleted";
  payload: TTodo | string;
};

const typeConstants = {
  ADD_TODO: "addTodo",
  TASK_COMPLETE: "changeIsCompleted",
};

const initialState: TTodo[] = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer: Reducer<any, TAction> = (
  currentState: TTodo[],
  action: TAction
) => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...currentState, action.payload];

    case typeConstants.TASK_COMPLETE:
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );

    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = { state, dispatch };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
