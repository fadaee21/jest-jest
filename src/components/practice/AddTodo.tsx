import { useState } from "react";
export type TodoProp = { setTodos: any; todos: any };
const AddTodo = ({ setTodos, todos }: TodoProp) => {
  const [value, setValue] = useState("");

  const addTodo = () => {
    const updateTodos = [
      ...todos,
      {
        id: Math.random(),
        task: value,
        done: false,
      },
    ];
    setTodos(updateTodos);
    setValue("");
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add new task"
      />
      <button data-testid="mm" onClick={addTodo}>fuck</button>
    </div>
  );
};

export default AddTodo;
