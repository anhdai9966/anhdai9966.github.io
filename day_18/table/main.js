// Thêm class “table-bordered” cho <table>

const table = document.querySelector(".table");
table.classList.add("table-bordered");

// Thêm class “bg-dark” cho <tr> đầu tiên

const trs = document.querySelectorAll(".table  tr");
trs[0].classList.add("bg-dark");

// Thêm 1 hàng mới trong table với nội dung như sau : ‘Sean Reyes’ (@sreyes)
let getId = trs.length;
let contents = [getId, "Sean", "Reyes", "@sreyes"];

let row = contents.map((content) => {
  let td = document.createElement("td");
  td.textContent = content;
  return td;
});

const trNew = document.createElement("tr");
trNew.append(...row);
table.firstElementChild.appendChild(trNew);

// Cập nhật “Leona Dixon’s handle” thành “@dixonl” (hàng 3 - cột Handle)
let updateCell = (trs = [], row = 0, col = 0, value = "") => {
  trs[row].children[col].innerText = value;
};
updateCell(trs, 3, 3, "@dixonl");
// trs[3].lastElementChild.innerText = "@dixonl";

// Di chuyển “Rosa Reed” lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.

const temp = trs[4].cloneNode(true);
trs[4].parentNode.removeChild(trs[4]);
trs[1].insertAdjacentElement("beforebegin", temp);

const updetaId = () => {
  let i = 0;
  const trsNew = document.querySelectorAll(".table  tr");
  Array.from(trsNew).forEach((tr) => {
    if (i > 0) {
      tr.firstElementChild.innerText = `${i}`;
    }
    i++;
  });
};

updetaId();

// Đổi chỗ 2 cột “First” và “Handle” cho nhau

const changeCol = () => {
  const trsNew = document.querySelectorAll(".table  tr");
  Array.from(trsNew).forEach((tr) => {
    let temp = tr.children[1].innerText;
    tr.children[1].innerText = tr.children[3].innerText;
    tr.children[3].innerText = temp;
  });
};

changeCol();

// Các row có index là số lẻ ( trừ hàng tiêu đề cột )thì có background = “#f2f2f2”

const changeColorodd = () => {
  const trsNew = document.querySelectorAll(".table  tr");
  for (let i = 1; i < trsNew.length; i += 2) {
    trsNew[i].style.backgroundColor = "#f2f2f2";
  }
};

changeColorodd();
