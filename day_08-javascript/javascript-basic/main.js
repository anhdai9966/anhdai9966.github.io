console.log('Hello Main.js');

// Khai báo biến
let name; // kiểu dữ liệu hiện tại là undefined
// Không thể khai báo lại cùng một tên biến, có thể thay đổi giá trị
console.log(name);
// gán giá trị
name = 'Dai Lai'; // kiểu dữ liệu hiện tại là string
console.log(name);

// Vừa khai báo vừa khởi tạo biến
let email = 'dailai@gmail.com'; // string
let number = 10; // number
let isStatus = true; // boolean
console.log(isStatus);

// kiểu dữ liệu nguyên thủy (primative type): undefined, string, number, boolean

// Khai báo hằng số
const PI = 3.14; // phải khởi tạo giá trị ngay lập tức - và không thể thay đổi
console.log(PI);

// kiểm tra kiểu dữ liệu của biến
console.log(typeof email);
console.log(typeof number);
console.log(typeof isStatus);

//  Note
let message = 'Xin chào các bạn, mình tên là "Bui Hien". Mình sinh năm 1997';
console.log(message);

// Cộng chuỗi
let firstName = 'Lai';
let lastName = 'Dai';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

let message1 =
  'Xin chào các bạn, ' + 'mình tên là "Bui Hien". ' + 'Mình sinh năm 1997';
console.log(message1);

// template strings
let address = 'ND';
let age = 26;

console.log(
  `Xin chào các bạn, mình tên là ${fullName}. Mình sinh năm ${
    2022 - age
  }, quê ở ${address}`
);

// or
console.log(
  'Xin chào các bạn, mình tên là ' +
    fullName +
    '. Mình sinh năm' +
    (2022 - age) +
    ', quê ở address'
);

// hiển thị nhiều dong
console.log(`
    dòng 1
    dòng 2
    dòng 3
`);

// math object
console.log(Math.PI);

// làm tròn
Math.round(1.5); // 2

// làm tròn xuống
Math.floor(1.5); // 1

// làm tròn lên
Math.ceil(1.4); // 2

// ngẫu nhiên
Math.random(); // từ 0 - 1

// ngẫu nhiên từ 1 đến 100
Math.floor(Math.random() * 100 + 1);

// ngẫu nhiên từ 50 - 100
Math.floor(Math.random() * (100 - 50 + 1) + 50);

// giá trị nhỏ nhất
Math.min(1, 2, 3, 4, 5);

// giá trị lớn nhất
Math.max(1, 2, 3, 4, 5);

// Số mũ
Math.pow(3, 4); // 3^4 or 3**4

// Căn bậc 2
Math.sqrt(25); // 5

'a' + 1; // 'a1'
'1' + 1; // '11'

'5' - 1; // 4

5 * '3a'; // NaN

// convert number
Number('9'); // 9
