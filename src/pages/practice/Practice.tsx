import { useState } from "react";
import AddTodo from "../../components/practice/AddTodo";
import TodoList from "../../components/practice/TodoList";

const Practice = () => {
  const [todos, setTodos] = useState<any>([]);
  return (
    <>
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} />
    </>
  );
};

export default Practice;
