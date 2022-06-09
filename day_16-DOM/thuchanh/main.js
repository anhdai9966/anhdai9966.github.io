// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó

const heading = document.getElementById('heading');
heading.style.color = 'red';
heading.style.textTransform = 'upperCase';

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”

const para = document.getElementsByClassName('para');

for (let i = 0; i < para.length; i++) {
  para[i].style.color = 'blue';
  para[i].style.fontSize = '20px';
}

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”

const a = document.createElement('a');
a.innerText = 'facebook';
a.href = 'https://www.facebook.com/';
document.body.append(a);

const para3 = document.querySelector('.para-3');

// document.body.insertBefore(a, para3);

para3.insertAdjacentElement('afterend', a);

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”

const title = document.getElementById('title');

title.innerText = 'Đây là thẻ tiêu đề';

// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)

const description = document.querySelector('.description');

description.classList.add('text-bold');

const textBold = document.querySelector('.text-bold');
textBold.style.fontWeight = 'bold';

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”

const btn = document.createElement('button');
btn.innerText = 'Click me';
document.body.appendChild(btn);

para3.parentNode.replaceChild(btn, para3);

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó

const para2 = document.querySelector('.para-2');

const para2Copy = para2.cloneNode(true);

para2.insertAdjacentElement('afterend', para2Copy);

// Xóa thẻ có class=“para-1”

const para1 = document.querySelector('.para-1');

para1.parentNode.removeChild(para1);
