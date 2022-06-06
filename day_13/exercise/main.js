// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

let sortStudents = function (arr = []) {
  // arr.sort((a, b) => {
  //   if (a > b) return -1;
  //   if (a < b) return 1;
  //   return 0;
  // });
  // return arr;
  return arr.sort((a, b) => b.localeCompare(a, 'vi', { sensitivity: 'base' }));
};

console.log(sortStudents(['Nam', 'Hoa', 'Tuấn', 'Dương', 'Đài']));

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]

let shuffle = function (arr) {
  // let subArr = [];

  // arr.forEach((e) => {
  //   while (true) {
  //     let rdNum = Math.floor(Math.random() * arr.length);

  //     if (subArr[rdNum] == null) {
  //       subArr[rdNum] = e;
  //       break;
  //     }
  //   }
  // });

  // return subArr;
  // Cách khác nhanh hơn
  return arr.sort(() => 0.5 - Math.random());
};

console.log(shuffle([1, 2, 3, 4, 5]));

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

function getEle(arr1, arr2) {
  let subArr = [];
  arr1.forEach((e) => {
    if (!arr2.includes(e)) {
      subArr.push(e);
    }
  });
  return subArr;
}

let symmetricDifference = function (arr1, arr2) {
  return getEle(arr1, arr2).concat(getEle(arr2, arr1));
};

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function getE(arr) {
  let subArr = [];
  arr.forEach((e) => {
    if (!subArr.includes(e)) {
      subArr.push(e);
    }
  });
  return subArr;
}

let union = function (arr1 = [], arr2 = []) {
  // return getE(getE(arr1).concat(getE(arr2)));

  // nên nối 2 mảng lại rồi chạy
  let newArr = [...arr1, ...arr2];
  return getE(newArr);
};

console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));
