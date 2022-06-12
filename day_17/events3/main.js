//  keyboard event
// // Lắng nghe sự kiện keydown
// document.addEventListener('keydown', function () {
//   console.log('keydown');
// });

// // Lắng nghe sự kiện keyup
// document.addEventListener('keyup', function () {
//   console.log('keyup');
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener('keypress', function () {
//   console.log('keypress');
// });

const input = document.querySelector('input');
const textEl = document.querySelector('span');

input.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.keyCode == 13) {
    // let value = input.value;
    let value = event.target.value;
    input.value = '';

    if (value == '') {
      alert('Nội dung không được để trống');
    }

    textEl.innerText = value;
  }
});
