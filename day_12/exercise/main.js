// Bài tập về nhà

// Bài 1: Tìm số lớn nhất trong mảng

function maxArr(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || arr[i] == null) {
      return 'Mảng là các số, không được bỏ trống, hãy kiểm tra lại';
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

let myArr = [3, 4, 1, 39, -3, 9, 5, 30];
console.log(maxArr(myArr));

// Bài 2: Tìm số nhỏ nhất trong mảng

function minArr(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || arr[i] == null) {
      return 'Mảng là các số, không được bỏ trống, hãy kiểm tra lại';
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

let myArr1 = [3, 4, 1, 0.5, 39, 7, 9, 5, 30];
console.log(minArr(myArr1));

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

function convertArr(arr) {
  let subArr = [];

  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i] % 2);
  }
  return subArr;
}

let myArr2 = [4, 2, 5, 6, 2, 7];
console.log(convertArr(myArr2));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần

function repeatStr(str) {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(str);
  }

  return arr.join('');
}

console.log(repeatStr('a'));

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’

function repeatStrWithDash(str) {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(str);
  }

  return arr.join('-');
}

console.log(repeatStrWithDash('a'));
