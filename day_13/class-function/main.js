// function expression
// có nghĩa là function có thể gán cho một biến

// regular function
function sum(a, b) {
  return a + b;
}

// Anonymous function

const sum1 = function (a, b) {
  return a + b;
};

console.log(sum1(3, 4));

// hight order function (HOF): Function bậc cao
// truyền vào làm tham số cho function khác

const filterNumber = function (arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// lấy ra số chắn
let data1 = filterNumber([1, 2, 3, 4, 5, 6], function (ele) {
  return ele % 2 == 0;
});

//  lấy ra số lẻ
let data2 = filterNumber([1, 2, 3, 4, 5, 6], function (ele) {
  return ele % 2 != 0;
});

console.log(data1);
console.log(data2);

// có thể được trả về từ function khác
const sum2 = function (a, b) {
  return function (c) {
    return a + b + c;
  };
};

let func = sum2(10, 20)(30);
console.log(func);

// Arrow function

// const sum3 = (a, b) => {
//     return a + b;
// };

// or

const sum3 = (a, b) => a + b;

// forEach

let number = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

number.forEach(function (value, index) {
  console.log(`index: ${index} - ${value}`);
});

number.forEach((value) => console.log(value));

// tính tổng
let total = 0;

number.forEach((value) => (total += value));
console.log(total);

// in ra các số lẻ
number.forEach((value) => {
  if (value % 2 == 0) {
    return;
  }
  console.log(value);
});

// for...of ----------------------------
for (const value of number) {
  console.log(value);
}

// ... duỗi các giá trị của mảng

// tìm số lớn nhất
let numbers = [1, 4, 11, 6, 2, 4, 7, 0];
console.log(Math.max(...numbers)); // 11

let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [...a1, ...a2];
console.log(a3);

// copy

let numberCopy = number.slice();
let numberCopy1 = [...`number`];

let name = value;
