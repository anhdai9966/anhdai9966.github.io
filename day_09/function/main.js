// Định nghĩa function (lên kế hoạch)
function sayHello() {
  console.log('Xin chào');
}

// Gọi function (thực hiện kế hoạch)
sayHello();

// có tham số
function sayHelloWithName(name) {
  console.log(`Xin chào ${name}`);
}

sayHelloWithName('Nguyễn văn A');

// 2 tham số
function showInfo(name, year) {
  console.log(`Xin chào, tôi tên là ${name}, năm nay tôi ${2022 - year} tuổi.`);
}

showInfo('Dai', 1996);

// function có trả về kết quả
function sum(a, b) {
  let result = a + b;
  return result;
  console.log(a);
}

let data = sum(3, 4);
console.log(data);

// Những câu lệnh đứng sau return sẽ không được thực thi

console.log(sum(data, 10)); // 17

// Default parameter ES6
// truyền thiếu tham số sẽ lấy giá trị default
function sum1(a = 10, b = 20) {
  let result = a + b;
  return result;
}

console.log(sum(3)); // NaN
console.log(sum1(3)); // 23
console.log(sum1(3, 2)); // 5
console.log(sum1()); // 30

// Bài tập function
function print1() {
  console.log('Xin chào các bạn.');
}

function print2(name) {
  console.log(`Xin chào ${name}.`);
}

function print3(name) {
  console.log(`Xin chào "${name}".`);
}

function getsum(a, b) {
  return a + b;
}

console.log(getsum(2, 3));

function getsquare(x) {
  return x * x;
}

console.log(getsquare(3));

function getCentury(year) {
  return Math.floor(year / 100) + 1;
}

console.log('Thế kỷ ' + getCentury(1890));

// Phạm vi của biến (scope)

// biến global scope định nghĩa bên ngoài function (biến toàn cục)
let name = 'dai';

// function scope định nghĩa bên trong function
function sum(a, b) {
  let result = a + b;
  return result;
}

// chú ý nếu trong function không có từ khóa khai báo biến đó sẽ trở thành global scope

// block scope định nghĩa bên trong {} (biến cục bộ)

{
  let mail = 'email@gmail.com';
}
