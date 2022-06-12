// mounse
// document.addEventListener('click', function () {
//   console.log('mousedown');
// });

// document.addEventListener('mousedown', function () {
//   console.log('mousedown');
// });

// document.addEventListener('mousemove', function () {
//   console.log('mousemove');
// });

// document.addEventListener('mouseup', function () {
//   console.log('mouseup');
// });

document.addEventListener("mousedown", function (event) {
  // xóa hình tròn
  const boxEl = document.querySelector(".box");

  // kiểm tra nếu tồn tại thì xóa
  if (boxEl) {
    boxEl.parentElement.removeChild(boxEl);
  }
  // b1: tạo ra hình tròn
  let box = document.createElement("div");
  box.classList.add("box");
  // b2: gán tọa độ
  //   console.log(event);
  box.style.top = `${event.offsetY}px`;
  box.style.left = `${event.offsetX}px`;
  // b3: gắn phần tử vào DOM
  document.body.prepend(box);
  console.log(event);
});
