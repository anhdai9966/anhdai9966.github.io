// Khai báo một mảng
let arr = [];

// khai báo mảng sau đó chèn dữ liệu cho mảng
let names = [];
names[0] = 'An';
names[1] = 'Hoa';
names[2] = 'Quynh';

console.log(names);

// Vừa khai báo vừa khởi tạo giá Trịnh
let number = [1, 2, 3, 4, 5, 6];

console.log(number);

// lấy ra giá trị của mảng
console.log(number[0]);
console.log(number[2]);
console.log(number[number.length - 1]);

// set lại gia trị
number[0] = 10;
console.log(number);

// gán một giá trị khác
let numberOther = number;
console.log(numberOther);

// thay đổi giá trị đó thì number cũng thay đổi theo
numberOther[1] = 20;
console.log(number);
console.log(numberOther);

// ví dụ
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1; //
let arr4 = arr1.sort().reverse(); // [3,2,1]
let text = '1, 2, 3';

console.log(arr1 == arr2); // false
console.log(arr1 == arr3);
console.log(arr3 == arr4);
console.log(arr1 == text);
console.log(arr4 == text);

// Duyệt mảng
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

// tính tổng
let total = 0;

for (let i = 0; i < number.length; i++) {
  total += number[i];
}

console.log(total);

// Tính tổng số lẻ
let totalOdd = 0;
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 1) {
    totalOdd += number[i];
  }
}

console.log(totalOdd);

// lấy ra mảng số chẵn
// pop push unshift shift splice
let newArr = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    newArr.push(number[i]);
  }
}

console.log(newArr);

// bài tập 1
function checkArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let myArr = [1, 2, 3, 4, 5];
console.log(checkArr(myArr));
let myArr1 = [5, 2, 3, 4, 5];
console.log(checkArr(myArr1));

// bài tập 2
function checkArr2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] || arr[i] % 2 != 0) {
      return false;
    }
  }
  return true;
}

let myArr2 = [2, 4, 6, 8, 10];
console.log(checkArr2(myArr2));

let myArr3 = [2, 3, 6, 8, 10];
console.log(checkArr2(myArr3));

let ar = new Array(5);
