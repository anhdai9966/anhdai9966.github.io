// Chức năng
// 1 thêm công việc cần làm
// 2 sửa
// 3 xóa
// 4 lọc danh sách
// 5 hiện thị danh sách đã hoàn thành hay chưa

// Đối tượng
// list todo
// id, title, status

let todos;

const randomId = () => {
  return Math.floor(Math.random() * 1001);
};

const todoListEl = document.querySelector(".todo-list");
const todoOptionEls = document.querySelectorAll(".todo-option-item input");
const todoInputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");

const renderTodo = (arr) => {
  todoListEl.innerHTML = "";
  // kiểm tra danh sách công việc có trống hay không
  if (arr.length == 0) {
    todoListEl.innerHTML =
      "<p class='todos-empty'>Không có công việc nào trong danh sách</p>";
    return;
  }

  // Hiển thị danh sách
  let html = "";
  arr.forEach((t) => {
    html += `
        <div class="todo-item ${t.status ? "active-todo" : ""}">
        <div class="todo-item-title">
            <input type="checkbox" ${t.status ? "checked" : ""} 
            onclick="toggleStatus(${t.id})"/>
            <p>${t.title}</p>
            <input type="text" class="text text${t.id} hide" value="${
      t.title
    }"  />
        </div>
        <div class="option">
            <button class="btn btn-update" onclick="updateTodo(${t.id})">
                <img src="./img/pencil.svg" alt="icon" />
            </button>
            <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                <img src="./img/remove.svg" alt="icon" />
            </button>
        </div>
        </div>`;
  });
  todoListEl.innerHTML = html;
};

// xóa công việc
const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  setDataToLocalStorage(todos);
  // renderTodo(todos);
};

// thay đổi trạng thái công việc
const toggleStatus = (id) => {
  // lấy ra công việc cần thay đổi
  let todo = todos.find((todo) => todo.id == id);
  // thay đổi trạng thái của công việc đó
  todo.status = !todo.status;
  // hiển thị lại giao diện
  // renderTodo(todos);
  setDataToLocalStorage(todos);
};

// lọc công việc theo trạng thái
Array.from(todoOptionEls).forEach((input) => {
  input.addEventListener("change", () => {
    let option = input.value;

    let todosFilter = [];
    switch (option) {
      case "all":
        todosFilter = [...todos];
        break;
      case "active":
        todosFilter = todos.filter((todo) => todo.status == true);
        break;
      case "unactive":
        todosFilter = todos.filter((todo) => todo.status == false);
        break;

      default:
        todosFilter = [...todos];
        break;
    }
    renderTodo(todosFilter);
  });
});
const addTodo = () => {
  // lấy dữ liệu trong ô input
  let title = todoInputEl.value;
  //kiểm tr tiêu đề có trống hay không
  if (title == "") {
    alert("Tiêu đề công việc không được để trống");
    return;
  }

  // tạo công việc mới
  let newTodo = {
    id: randomId(),
    title: title,
    status: false,
  };
  // thêm vào mảng để quản lý
  todos.push(newTodo);

  // renderTodo(todos);
  setDataToLocalStorage(todos);
  todoInputEl.value = "";
};
// thêm công việc
btnAdd.addEventListener("click", () => {
  addTodo();
});

// khi nhấn phím enter
todoInputEl.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    addTodo();
  }
});

// lấy dữ liệu từ localstorage
const getDataFromLocalstorage = () => {
  let data = localStorage.getItem("todos");
  if (data) {
    todos = JSON.parse(data);
  } else {
    todo = [];
  }
  renderTodo(todos);
};

// lưu dữ liệu vào localstorage
const setDataToLocalStorage = (arr) => {
  localStorage.setItem("todos", JSON.stringify(arr));
  renderTodo(arr);
};

// update todo
const updateTodo = (id) => {
  const text = document.querySelector(`.text${id}`);

  text.previousElementSibling.classList.toggle("hide");
  // text.focus();
  text.addEventListener("keydown", (event) => {
    if (event.code == "Enter") {
      updateTodo();
    }
  });
  if (!text.classList.contains("hide")) {
    updateTodo();
  }
  text.classList.toggle("hide");

  const updateTodo = () => {
    let todo = todos.find((todo) => todo.id == id);
    todo.title = text.value;
    setDataToLocalStorage(todos);
  };
};

getDataFromLocalstorage();
