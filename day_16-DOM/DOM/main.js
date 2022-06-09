// truy cập thông qua id
const heading = document.getElementById('heading');

console.log(heading); // <h1 id="heading">Đây là thẻ heading</h1>

// truy cập thông qua tag name
// HTMLCollection -> giống như mảng nhưng bản chất không phải mảng
// HTMLCollection là tập hợp các node ở dạng element node
// node: element node, text node, comment node, attribute node,...
const paras = document.getElementsByTagName('p');

console.log(paras);

console.log(paras[1]); // truy cập para 1
console.log(paras.length); // lấy số lượng phần tử

for (let i = 0; i < paras.length; i++) {
  console.log(paras[i]);
  paras[i].style.color = 'blue';
}

Array.from(paras).forEach((ele) => {
  console.log(ele);
});

// truy cập thông qua class name
const parasClassName = document.getElementsByClassName('para');
console.log(parasClassName);

// truy cập thông qua css selector
const h1 = document.querySelector('#heading');
console.log(h1);
const para1 = document.querySelector('p');
console.log(para1);

const para3 = document.querySelector('.para:nth-of-type(3)');
console.log(para3);

const para3_1 = document.querySelector('.para + .para');
console.log(para3_1);

// ul dưới

const ul2 = document.querySelector('body > ul');
console.log(ul2);
const ul2_1 = document.querySelector('.box + ul');
console.log(ul2_1);
const ul1 = document.querySelector('.box > ul');
console.log(ul1);

//
const li2 = document.querySelectorAll('body > ul li');
console.log(li2);
// thu hẹp phạm vi tìm kiếm lại
const li2_1 = ul2.querySelectorAll('li');
console.log(li2_1);

// anh em sau
console.log(ul2.nextElementSibling);
// anh em trước
console.log(ul2.previousElementSibling);
// thẻ cha
console.log(ul2.parentElement);
// thẻ con
console.log(ul2.children);
// thẻ con đầu
console.log(ul2.firstElementChild);
// thẻ con cuối
console.log(ul2.lastElementChild);

heading.style.color = 'red';
heading.style.backgroundColor = 'green';

// lấy ra nội dung
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

// heading.innerHTML = 'Xin Chào';
// heading.innerHTML = 'Xin Chào <span> helo</span>';
// heading.innerText = 'Xin Chào <span> helo</span>';
// heading.textContent = '        Xin Chào <span> helo</span>            ';

// xác định vị trí cân thêm
// đầu tiên
document.body.prepend(para1);
// cuối cùng
document.body.appendChild(para1);

const box = document.querySelector('.box');
box.prepend(para1);
// cuối
box.appendChild(para1);
document.body.insertBefore(para1, para3);

// tạo phần tử DOM
const link = document.createElement('a');
link.innerText = 'Trang google';
link.href = 'https://www.google.com/';
console.log(link);
document.body.append(link);
document.body.insertBefore(link, box);

// tạo thẻ input type='text', placeholder='Enter name', đằng trước para2

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter name';
const para2 = document.querySelector('.para');

document.body.prepend(input);
document.body.insertBefore(input, para2);

//
document.body.insertAdjacentElement('afterbegin', link);

heading.insertAdjacentElement('beforebegin', link);

para3.insertAdjacentElement('afterend', link);

box.insertAdjacentHTML('afterend', '<button>Click me</button>');

// sử dụng vòng lặp để tạo nội dung và insert

let links = [
  {
    link: 'https://www.facebook.com/',
    title: 'Trang Facebook',
  },
  {
    link: 'https://www.twitter.com/',
    title: 'Trang Twitter',
  },
  {
    link: 'https://www.instagram.com/',
    title: 'Trang Instagram',
  },
];

// truy cập
const sociaMedia = document.querySelector('.social-media');

// cách 1 tạo thẻ -> chèn
links.forEach((ele) => {
  const link = document.createElement('a');
  link.innerText = ele.title;
  link.href = ele.link;

  sociaMedia.appendChild(link);
});

// c2 insert trực tiếp
links.forEach((ele) => {
  sociaMedia.insertAdjacentHTML(
    'beforeend',
    `<a href="${ele.link}">${ele.title}</a>`
  );
});

// c3 dùng innerHTML
let html = '';
links.forEach((ele) => {
  html += `<a href="${ele.link}">${ele.title}</a></br>`;
});
sociaMedia.innerHTML = html;

// c4
links.forEach((ele) => {
  sociaMedia.innerHTML += `<a href="${ele.link}">${ele.title}</a></br>`;
});

// xóa
heading.parentElement.removeChild(heading); // xóa chính nó

// thay thế
const h3 = document.createElement(h3);
h3.innerText = 'đây là thẻ h3';

document.body.replaceChild(h3, para2);

// sao chép
