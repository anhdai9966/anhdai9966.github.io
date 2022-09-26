/* eslint-disable no-mixed-operators */
const TodosView = function ({ todos, handlerDelete, handlerEdit, handlerChange }) {
  if (!todos.length) return <p>Danh sách công việc trống</p>;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" name="checkbox" id={'checkbox' + todo.id} checked={todo.status} onChange={e => handlerChange(e, todo.id)} />
          <label htmlFor={'checkbox' + todo.id} style={{ color: (todo.status && 'red') || 'black' }}>
            {todo.title}
          </label>

          <button onClick={() => handlerEdit(todo.id)}>Edit</button>
          <button onClick={() => handlerDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodosView;
