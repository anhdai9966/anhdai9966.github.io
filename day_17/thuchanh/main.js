// Lắng nghe sự kiện click ở 3 nút button theo 3 cách sau :

// Button “Change content” sử dụng “HTML-attribute”
// Button “Change color” sử dụng “DOM property”
// Button “Change background” sử dụng “addEventListener”
// Thực hiện các chức năng sau:

// Yêu cầu 1:

// Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ

let quote = [
  'The purpose of our lives is to be happy',
  "Life is what happens when you're busy making other plans.",
  'Get busy living or get busy dying.',
  'You only live once, but if you do it right, once is enough.',
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
];

const text = document.getElementById('text');

const fnQuote = () => {
  let rdn = Math.floor(Math.random() * quote.length);
  text.innerText = quote[rdn];
};
// Yêu cầu 2:

// Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX)

function randomHexCode() {
  // tạo thư viện cho key Hex
  let hexKey = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    hexCode = '#';

  // một mã hex có 7 ký tự với # đầu tiên nên còn 6 nên length = 6
  for (let i = 0; i < 6; i++) {
    // Tạo key ngẫu nhiên từ thư viện
    let rdomNum = Math.floor(Math.random() * 16);
    // hexCode.push(hexKey[rdomNum]);
    hexCode += hexKey[rdomNum];
  }
  // return hexCode.join('');
  return hexCode;
}

// DOM property

const changeColor = document.getElementById('btn-2');

changeColor.onclick = () => {
  text.style.color = `${randomHexCode()}`;
};

// Yêu cầu 3:

// Khi nhấn vào button “Change background” thì thay đổi màu của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)

function randomRgbCode() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// “addEventListener”

const changeBGC = document.getElementById('btn-3');

changeBGC.addEventListener('click', () => {
  text.style.backgroundColor = `${randomRgbCode()}`;
});
