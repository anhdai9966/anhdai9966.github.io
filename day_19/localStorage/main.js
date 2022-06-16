if (typeof Storage !== "undefined") {
  console.log("Có hỗ trợ");
} else {
  console.log("Không hỗ trợ");
}

// lưu item
localStorage.setItem("name", "Ngô B");
localStorage.setItem("number", "1");
localStorage.setItem("isStatus", "false");

let numbers = [1, 2, 3, 4, 5, 6];
let todos = [
  {
    id: 1,
    title: "Đi chơi",
    status: true,
  },
  {
    id: 2,
    title: "Đi ăn",
    status: false,
  },
  {
    id: 3,
    title: "Đi bơi",
    status: true,
  },
  {
    id: 4,
    title: "Làm bài tập ở nhà",
    status: false,
  },
];

localStorage.setItem("numbers", JSON.stringify(numbers));
localStorage.setItem("todos", JSON.stringify(todos));

// chuỗi JSON
// Object - JSON: JSON.stringify()
// JSON - Object: JSON.parse();

// lấy ra dữ liệu
console.log(numbers);
console.log(todos);
console.log(localStorage.getItem("numbers"));
console.log(localStorage.getItem("todos"));
console.log(JSON.parse(localStorage.getItem("numbers")));
console.log(JSON.parse(localStorage.getItem("todos")));
