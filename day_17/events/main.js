// <!-- Sử dụng HTML-attribute -->
const sayHello = () => {
  alert('xin chào các bạn 1');
};

// <!-- Sử dụng DOM property -->
const btn2 = document.querySelector('#btn-2');
// btn2.onclick = () => {
//   alert('xin chào các bạn 2');
// };

// tách fn riêng ra
const sayHello2 = () => {
  alert('xin chào các bạn 2');
};
btn2.onclick = sayHello2;

// <!-- Sử dụng addEventListener -->
const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', () => {
  alert('xin chào các bạn 3');
});

// có thể tách fn ra như trên
