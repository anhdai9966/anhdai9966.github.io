// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
const btnAdd = document.createElement("button");
btnAdd.innerText = "Thêm";
document.body.prepend(btnAdd);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Nhập nội dung";
document.body.prepend(input);
input.focus();

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)

const list = document.querySelector("#list");

const getText = () => {
  if (input.value == "") {
    alert("Bạn phải nhập thông tin gì đó");
  } else {
    list.insertAdjacentHTML("beforeend", `<li>${input.value}</li>`);
  }
};

btnAdd.addEventListener("click", () => {
  getText();
  input.value = "";
  input.focus();
});

// thêm trải nghiệm nếu người dùng nhập xong thì thêm luôn vào danh sách
input.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    getText();
    input.value = "";
  }
});

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

const btnRemove = document.createElement("button");
btnRemove.innerText = "Xóa";

document.body.insertBefore(btnRemove, list);

btnRemove.addEventListener("click", () => {
  let lastList = list.lastElementChild;
  if (lastList) {
    list.removeChild(lastList);
  }
});

// Thêm 1 nút Hide trên đầu của danh sách ul
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide

list.insertAdjacentHTML("beforebegin", "<br><br>");

const btnHide = document.createElement("button");
btnHide.innerText = "Hide";

list.insertAdjacentElement("beforebegin", btnHide);

btnHide.addEventListener("click", () => {
  list.classList.toggle("hide");
  list.classList.contains("hide")
    ? (btnHide.innerText = "Show")
    : (btnHide.innerText = "Hide");
});
