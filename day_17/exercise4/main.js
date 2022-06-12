// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)

const p = document.querySelector("p");

// tách chuỗi thành mảng cả các ký tự dấu
let arrPara = p.innerText.split(/([!,?,., ])/);

// xóa khoảng trắng trong mảng
arrParaRemoveSpace = arrPara.filter((ele) => ele !== " " && ele !== "");

// thêm highlight vào những phần tử có độ dài >= 8
const highlineLongWord = arrParaRemoveSpace.map((word) =>
  word.length >= 8 ? `<span class="highlight">${word}</span>` : word
);

// ghép các phần tử trong mảng thành một giá trị duy nhất với những ký tự dấu thì không thêm khoảng cách
let para = "";
highlineLongWord.forEach((ele) => {
  if (ele.search(/[!,?,.+]/) == -1) {
    para += " " + ele;
  } else {
    para += ele;
  }
});

// hiển thị lên html
p.innerHTML = para.trimStart();

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

const link = document.createElement("a");
link.href = "https://www.facebook.com/";
link.innerText = "Facebook";

p.insertAdjacentElement("afterend", link);

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

const count = document.createElement("div");
count.innerText = p.innerText.split(/[!,?,., ]/).length + " từ";

p.insertAdjacentElement("afterend", count);

// Thay thế các ký hiệu ? => 🤔, ! => 😲

p.innerHTML = para.trimStart().replaceAll("?", `🤔`).replaceAll("!", `😲`);
