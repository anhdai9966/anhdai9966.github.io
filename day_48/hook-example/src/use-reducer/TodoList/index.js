/**
 * Hiển thị danh sách todo ban đầu
 * thêm todo
 * xóa todo
 * sửa todo
 * @returns
 */

import { useReducer, useRef, useState } from 'react';
import { DELETE_TODO, EDIT_TODO, ADD_TODO } from './constants'
import { reducer, initalState } from './reducers'

export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initalState);
  const [value, setValue] = useState('');

  const inputRef = useRef();

  const addTodo = () => {
    if (value === '') {
      alert('Tiêu đề không được để trống');
      return;
    }

    dispatch({
      type: ADD_TODO,
      payload: {
        id: todos.length + 1,
        title: value,
        status: false,
      }
    })

    setValue('')
    inputRef.current.focus();
  }
  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id
      }
    })
  }

  return (
    <div>
      <h1>TodoList</h1>
      <input placeholder="Enter todos.." value={value} onChange={e => setValue(e.target.value)} ref={inputRef} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.length >= 0 &&
          todos.map(todo => (
            <li key={todo.id}>
              <span style={{ color: todo.status ? 'red' : 'black' }}>{todo.title}</span>
              <button>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        {todos.length === 0 && <p>Không có công việc nào trong danh sách.</p>}
      </ul>
    </div>
  );
}
