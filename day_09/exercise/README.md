# Function

## Function là gì?

Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.

```js
// Định nghĩa function (lên kế hoạch)
function functionName(parameter,..) {
  // code thực thi function
}

// Gọi function (thực hiện kế hoạch)
functionName(argument,..);
```

_*Chú ý:*_

> Tham số (parameter) là biến trong khai báo hàm.\
> Đối số (argument) là giá trị thực của biến này được truyền vào hàm.

## Một số loại function

```js
// không có tham số
function sayHello() {
  console.log('Xin chào');
}

sayHello();

// có tham số
function sayHelloWithName(name) {
  console.log(`Xin chào ${name}`);
}

sayHelloWithName('Dai');

// có 2 tham số
function showInfo(name, year) {
  console.log(`Xin chào, tôi tên là ${name}, năm nay tôi ${2022 - year} tuổi.`);
}

showInfo('Dai', 1996);

// function có trả về kết quả
function sum(a, b) {
  let result = a + b;
  return result;
}

console.log(sum(3, 4));

// Default parameter ES6
// Nếu truyền thiếu tham số sẽ lấy giá trị default
function sum1(a = 10, b = 20) {
  let result = a + b;
  return result;
}

console.log(sum1(3)); // 23
console.log(sum1(3, 2)); // 5
console.log(sum1()); // 30
```

_*Chú ý:*_

> Những câu lệnh đứng sau return sẽ không được thực thi

## Phạm vi của biến (scope)

```js
// biến global scope định nghĩa bên ngoài function (biến toàn cục)
let name = 'dai';

// function scope định nghĩa bên trong function
function sum(a, b) {
  let result = a + b;
  return result;
}

// block scope định nghĩa bên trong {} (biến cục bộ)

{
  let mail = 'email@gmail.com';
}
```

_*Chú ý:*_

> Nếu trong function không có từ khóa khai báo biến đó sẽ trở thành global scope

## Kiểu dữ liệu Boolean

Giá trị của kiểu dữ liệu này chỉ có thể là true hoặc false

**Xác định giá trị Boolean**:

Để xác định giá trị boolean cho biến, biểu thức,… ta sử dụng hàm Boolean()

**Truthy value** là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là **true**.

Ngược lại, **Falsy value** là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là **false**

_*Chú ý:*_

> Có 6 giá trị sau được coi là falsy : **false**, **0**, **NaN**, **‘’**, **null**, **undefined**\
> Các giá trị còn lại, ngoài các giá trị trên được gọi là **truthy**

## Câu lệnh điều kiện if - else

**Một số toán tử cần nhớ** : ! (phủ định), || (hoặc) , && (và)

```js
// !
console.log(!true); // false
console.log(!false); // true
// &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

```js
// câu lênh if Nếu(đúng)...thì(làm gì)
console.log('câu lệnh if');
let hour = 6;
if (hour < 10) {
  console.log('good morning');
}

// câu lênh if else Nếu(đúng)...thì(làm gì), còn nếu(sai)...thì(làm gì)
let trodep = true;

if (trodep == true) {
  console.log('Đi chơi');
} else {
  console.log('Ở nhà');
}

// câu lệnh if..else if...else
money = 17;
if (money >= 30) {
  console.log('Mua iphone');
} else if (money >= 20 && money < 30) {
  console.log('Mua samsung');
} else if (money >= 15 && money < 20) {
  console.log('Mua oppo');
} else {
  console.log('Mua xiaomi');
}

// if..else lồng nhau
let number = 9;

if (number > 0) {
  console.log('Số nguyên dương');

  if (number % 2 == 0) {
    console.log('Số chẵn');
  } else {
    console.log('Số lẻ');
  }
} else if (number < 0) {
  console.log('Số nguyên âm');
} else {
  console.log('Số 0');
}
```

## Sự khác biệt giữa == và ===

== và === đều được sử dụng để so sánh

_*Chú ý:*_

- Toán tử == so sánh trừu tượng (abstract equality), tức là nó thực hiện các chuyển đổi loại cần thiết trước khi so sánh (so sánh về mặt giá trị)

- Còn toán tử === so sánh nghiêm ngặt (strict equality), nghĩa là nó sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false (so sánh về mặt giá trị và kiểu dữ liệu)

```js
console.log('2' == 2); // true
console.log('2' === 2); // false
```

## Toán tử 3 ngôi

**Cú pháp:** \
`condition? nếu đúng : nếu sai`

```js
let hour = 6;
if (hour < 12) {
  console.log('good morning');
} else {
  console.log('good afternoon');
}

// tương đương với
hour < 12 ? console.log('good morning') : console.log('good afternoon');
```
