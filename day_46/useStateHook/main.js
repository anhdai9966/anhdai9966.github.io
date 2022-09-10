const todoList = ['Đi chơi', 'Học bài', 'Đá bóng'];

const App = function () {
  const [todos, setTodos] = React.useState(todoList);

  // React.useEffect(() => {
  //   updateTodos(todos);
  // }, [todos])

  // const updateTodos = function (arr) {
  //   setTodos(arr);
  // }

  const handlerDelete = function (i) {
    // todos.splice(i, 1);
    // setTodos(todos);
    const todoFilter = todos.filter((todo, index) => index !== i);
    
    setTodos(todoFilter);
  };

  const handlersubmit = function (e) {
    // chặn trình duyệt không load trang
    e.preventDefault();
    // lấy giá trị từ form
    const dataArr = new FormData(e.target);
    // trả về data 1 obj
    const data = Object.fromEntries(dataArr);
    // thêm vào todos
    if (!data.title) return;
    setTodos([...todos, data.title]);
  };

  const TodosView = function ({ todos }) {
    if (!todos.length) return <p>Danh sách công việc trống</p>;

    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">{todo}</label>

            <button>Edit</button>
            <button onClick={() => handlerDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <React.Fragment>
      <h1>Todo List App</h1>

      <form onSubmit={handlersubmit}>
        <input type="text" name="title" placeholder="Enter todo title ..."></input>
        <button>Add</button>
      </form>

      <TodosView todos={todos} />

      <button>All</button>
      <button>Active</button>
      <button>UnActive</button>
      <button>Clear All</button>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
