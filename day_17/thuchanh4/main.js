// Yêu cầu :

// Khi người dùng nhập password và bấm nút “Show”, lúc này hiển thị password và nội dung button chuyển từ “Show” --> “Hide”
// Ngược lại khi người dùng bấm vào nút “Hide”, lúc này ẩn password và nội dung button chuyển từ “Hide” --> “Show”

// Gợi ý : Thay đổi thuộc tính type của input để ẩn hiện password

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (input.type == "password") {
    input.type = "text";
    btn.innerText = "Hide";
  } else if (input.type == "text") {
    input.type = "password";
    btn.innerText = "Show";
  }
});
