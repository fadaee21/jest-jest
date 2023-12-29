const TodoList = ({ todos }: any) => {
  return (
    <ul>
      {todos.map((todo: any) => {
        return <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
};

export default TodoList;
