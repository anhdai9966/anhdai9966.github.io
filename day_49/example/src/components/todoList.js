/**
 * Hiển thị danh sách todo ban đầu
 * thêm todo
 * xóa todo
 * sửa todo
 * @returns
 */

import { useRef, useState, useContext } from 'react';
import Context from '../context/context'
import { addTodo, deleteTodo, editTodo } from '../store/action'

export default function TodoList() {
  const {todos, dispatch} = useContext(Context)
  const [value, setValue] = useState('');

  const inputRef = useRef();

  const handlerAddTodo = () => {
    if (value === '') {
      alert('Tiêu đề không được để trống');
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: value,
      status: false,
    }

    dispatch(addTodo(newTodo))

    setValue('')
    inputRef.current.focus();
  }
  const handlerDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handlerEditTodo = (id) => {
    // lấy ra công việc hiện tại
    let updateTodo = todos.find(todo => todo.id === id);

    // hiển thị popup
    let newTitle = window.prompt('Cập nhật công việc', updateTodo.title)
    console.log('🚀 newTitle: ', newTitle)
    if (newTitle == null) return ;
    if (newTitle === '') {
      window.alert('Tiêu đề không được để trống')
      return 
    }
    let payload = {
      id,
      title: newTitle
    }
    dispatch(editTodo(payload))
  }

  return (
    <div>
      <h1>TodoList</h1>
      <input placeholder="Enter todos.." value={value} onChange={e => setValue(e.target.value)} ref={inputRef} />
      <button onClick={handlerAddTodo}>Add Todo</button>
      <ul>
        {todos.length >= 0 &&
          todos.map(todo => (
            <li key={todo.id}>
              <span style={{ color: todo.status ? 'red' : 'black' }}>{todo.title}</span>
              <button onClick={() => handlerEditTodo(todo.id)}>Edit</button>
              <button onClick={() => handlerDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        {todos.length === 0 && <p>Không có công việc nào trong danh sách.</p>}
      </ul>
    </div>
  );
}
