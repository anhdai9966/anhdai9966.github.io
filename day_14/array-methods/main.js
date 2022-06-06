// map

function modulo1(arr) {
  let num = [];
  for (let i = 0; i < array.length; i++) {
    num.push(arr[i] % 2);
  }
  return num;
}

function modulo2(arr) {
  let result;

  result = array.map((ele) => ele % 2); // kết quả

  return result;
}

// filter

const getEleGreater = (arr, num) => {
  let result = arr.filter((ele) => {
    ele > num; // điều kiện
  });
  return result;
};

// find

// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
  return arr.find((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7])); // 6

// findIndex
// trả về chỉ số của giá trị đó

// some
// chỉ cần ít nhất 1 phần tử đúng điều kiện thì trả về true còn lại là false

// every
// tất cả các phần tử trong mảng phải đúng điều kiện trả về true còn lại là false
