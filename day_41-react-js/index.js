// Bài 1: Tìm số lớn nhất trong mảng

const arr = [1, 3, 5, 2, 9];
const max = arr.reduce((a, b) => a > b? a: b)

console.log('🚀 ~ max', max)
// Bài 2: Tìm số nhỏ nhất trong mảng
const min = arr.reduce((a, b) => a < b? a: b)

console.log('🚀 ~ min', min)

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function getResultArr(arr) {
  return arr.map(n => n % 2);
}

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
console.log(getResultArr([3, 4, 5, 6, 9])) // [1, 0, 1, 0, 1]

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function repeatStr(str, num) {
  return str.repeat(num);
}
console.log(repeatStr('a', 10));

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
function repeatString(str = '', num) {
  return str.repeat(num).split('').join('-');
}
console.log(repeatString('a', 10));

// Bài 6: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false
function checkElementExist(arr, val) {
  return arr.some(v => v == val);
};

console.log(checkElementExist([1,2,3,4,5], 5))
console.log(checkElementExist([1,2,3,4,5], 6))


// Bài 7: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
function getElementGreater(arr, num) {
  return arr.filter(v => v > num);
};
console.log(getElementGreater([1,2,3,4,5], 3))

// Bài 8: Viết function để tạo mã màu HEX ngẫu nhiên.

// randomHexCode() => #728a98
// randomHexCode() => #a72938
function randomHexCode() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex}`;
};

console.log(randomHexCode())
console.log(randomHexCode())

// Bài 9: Viết function để tạo mã màu RGB ngẫu nhiên.

// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)
function randomRgbCode() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`;
};

console.log(randomRgbCode())
console.log(randomRgbCode())


// Bài 10. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]
function sortStudents(arr = []) {
  return arr.sort((a, b) => b.localeCompare(a, 'vi'));
};

console.log(sortStudents(['Nam', 'Dương', 'Hoa', 'Tuấn', 'Đại']));

// Bài 11: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
function shuffle(arr) {
  return arr.sort(() => 0.5 - Math.random())
};
console.log(shuffle([1,2,3,4,5]));

// Bài 12: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
function symmetricDifference(arr1, arr2) {
  return arr1.filter(val => !arr2.some(v => v == val)).concat(arr2.filter(val => !arr1.some(v => v == val)));
};

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Bài 13: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function union(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2)))
}

console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));