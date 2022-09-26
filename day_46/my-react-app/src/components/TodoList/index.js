/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from 'react';
import TodoView from './TodoView';

export default function TodoList() {
  // dùng để render
  const [todos, setTodos] = useState([]);
  
  // dùng để lấy giấ trị trong ô input
  const [inputValue, setInputValue] = useState('');
  // dùng để chọn phần tử dom
  const todoRef = useRef();

  const storageTodos = function () {
    const storage = localStorage.getItem('todos');
    return storage? JSON.parse(storage) : [];
  } 
  
  // thêm vào todos lần chạy đầu tiên
  useEffect(() => {
    setTodos(storageTodos);
  }, [])


  const persistTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const removeTodos = function () {
    localStorage.removeItem('todos');
  }

  const randomId = () => {
    return Math.floor(Math.random() * 1001);
  };

  const handlerChange = function (e, id) {
    const todosUpdate = todos.map(todo => {
      if (todo.id === id) todo.status = e.target.checked;
      return todo;
    });

    setTodos(todosUpdate);
    // lưu vào local
    persistTodos(todosUpdate);
  };

  const handlerEdit = function (id) {
    const todoTitle = window.prompt('Nhập tên công việc muốn thay đổi');

    const todosUpdate = todos.map(todo => {
      if (todo.id === id) todo.title = todoTitle;
      return todo;
    });

    setTodos(todosUpdate);
    // lưu vào local
    persistTodos(todosUpdate);
  };

  const handlerDelete = function (id) {
    const todosUpdate = todos.filter(todo => todo.id !== id);

    setTodos(todosUpdate);
    // lưu vào local
    persistTodos(todosUpdate);
  };

  const handlerSubmit = function () {
    // thêm vào todos
    if (!inputValue) return;
    // tạo công việc mới

    const todosUpdate = [...todos, {
      id: randomId(),
      title: inputValue,
      status: false,
    }]

    setTodos(todosUpdate);
    // lưu vào local
    persistTodos(todosUpdate);
    // clear input
    setInputValue('');

    todoRef.current.focus();
  };

  const handlerClearAll = function () {
    setTodos([]);
    removeTodos();
  }

  const handlerAll = function () {
    setTodos(storageTodos);
  }

  const handlerActive = function () {
    const todoUpdate = storageTodos().filter(todo => todo.status === true);
    
    setTodos(todoUpdate);
  }
  
  const handlerUnActive = function () {
    const todoUpdate = storageTodos().filter(todo => todo.status === false);

    setTodos(todoUpdate);
  }

  return (
    <>
      <h1>Todo List App</h1>

      <div>
        <input ref={todoRef} type="text" name="title" placeholder="Enter todo title ..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={handlerSubmit}>Add</button>
      </div>

      <TodoView todos={todos} handlerDelete={handlerDelete} handlerEdit={handlerEdit} handlerChange={handlerChange} />

      <button onClick={() => handlerAll()}>All</button>
      <button onClick={() => handlerActive()}>Active</button>
      <button onClick={() => handlerUnActive()}>UnActive</button>
      <button onClick={() => handlerClearAll()}>Clear All</button>
    </>
  );
}
