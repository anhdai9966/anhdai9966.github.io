// Bài 2

// Tạo 1 hình tròn trong trang web (có thẻ sử dụng html hoặc tạo bằng javascript)

// Lắng nghe sự kiện khi người dùng bấm vào các phím mũi tên để di chuyển hình tròn
// Phím mũi tên lên : Di chuyển hình tròn lên 20px;
// Phím mũi tên xuống : Di chuyển hình tròn xuống 20px;
// Phím mũi tên sang trái : Di chuyển hình tròn sang trái 20px;
// Phím mũi tên sang phải : Di chuyển hình tròn sang phải 20px;

const circle = document.querySelector(".circle");
let curent = circle.getBoundingClientRect();
let topValue = curent.top;
let leftValue = curent.left;

document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowDown") {
    topValue += 20;
    circle.style.top = `${topValue}px`;
  }
  if (event.code == "ArrowUp") {
    topValue -= 20;
    circle.style.top = `${topValue}px`;
  }
  if (event.code == "ArrowRight") {
    leftValue += 20;
    circle.style.left = `${leftValue}px`;
  }
  if (event.code == "ArrowLeft") {
    leftValue -= 20;
    circle.style.left = `${leftValue}px`;
  }
});
