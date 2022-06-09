// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777

const text = document.createElement('p');
text.innerText = 'Javascrip is awesome';
text.setAttribute('id', 'text');
text.style.color = '#777';

document.body.appendChild(text);

// Đặt kích thước phông chữ thành 2rem
text.style.fontSize = '2rem';

// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

text.innerHTML =
  'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript';

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>

const ul = document.createElement('ul');
document.body.appendChild(ul);

for (let i = 1; i <= 3; i++) {
  const li = document.createElement('li');
  li.innerText = `Item ${i}`;
  li.style.color = 'blue';
  ul.insertAdjacentElement('beforeend', li);
}

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

// <ul id="list">
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//    <li>Item 5</li>
//    <li>Item 6</li>
//    <li>Item 7</li>
// </ul>

// Sử dụng javascript để thực hiện những công việc sau

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

const list = document.querySelector('#list');

for (let i = 8; i <= 10; i++) {
  const li = document.createElement('li');
  li.innerText = `Item ${i}`;
  list.insertAdjacentElement('beforeend', li);
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

const li1 = list.firstElementChild;

li1.style.color = 'red';

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

const li3 = list.querySelector('li:nth-child(3)');

li3.style.backgroundColor = 'blue';

// Remove thẻ <li> 4

const li4 = list.querySelector('li:nth-child(4)');

list.removeChild(li4);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

const liCopy = li4.cloneNode(true);

liCopy.innerText = 'New item';

li3.insertAdjacentElement('afterend', liCopy);
