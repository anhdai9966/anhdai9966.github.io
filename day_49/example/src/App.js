// component A -> B -> C
// A lưu trữ state truyền xuống component C để hiển thị thông tin
// global state:

import TodoList from './components/todoList';

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    );
}

export default App;
