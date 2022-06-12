// Bài 1

// Nhấn phím enter thì xuất hiện 1 hình tròn ở vị trí bất kỳ trong trang web
const circle = document.querySelector(".circle");

document.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    if (square) {
      square.style.display = "none";
    }
    // circle.offsetWidth để lấy kích thức phần tử trong html
    let offsetX = Math.floor(
      Math.random() * window.innerWidth - circle.offsetWidth
    );
    let offsetY = Math.floor(Math.random() * window.innerHeight);
    circle.style.top = `${offsetY}px`;
    circle.style.left = `${offsetX}px`;
    circle.style.display = "block";
  }
});
// Nhấn các phím space thì xuất hiện 1 hình vuông ở vị trí bất kỳ trong trang web
const square = document.querySelector(".square");

document.addEventListener("keydown", (event) => {
  if (event.code == "Space") {
    if (circle) {
      circle.style.display = "none";
    }
    // square.offsetWidth để lấy kích thức phần tử trong html
    let offsetX = Math.floor(
      Math.random() * window.innerWidth - square.offsetWidth
    );
    let offsetY = Math.floor(Math.random() * window.innerHeight);
    square.style.top = `${offsetY}px`;
    square.style.left = `${offsetX}px`;
    square.style.display = "block";
  }
});
// Nhấn các phím còn lại thì đổi màu background của trang web thành 1 màu bất kỳ
function randomRgbCode() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

document.addEventListener("keydown", (event) => {
  if (event.code !== "Space" && event.code !== "Enter") {
    document.body.style.backgroundColor = `${randomRgbCode()}`;
  }
});

// Mỗi lần nhấn phím chỉ có 1 hình được xuất hiện (hình tròn hoặc hình vuông tùy thuộc vào phím được bấm)
