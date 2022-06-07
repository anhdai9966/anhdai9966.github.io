// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất

// // Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3

// tạo hàm có tham số là một mảng
const max2Numbers = (arr) => {
  // sắp xếp mảng theo chiều giảm dần các số
  arr.sort((a, b) => b - a);

  // tạo biến để lưu giá trị nhỏ nhất và một biến để lọc thứ tự trong mảng
  let max2 = 0,
    i = 0;

  // dùng while để lặp lại các giá trị đầu (lớn nhất) giống nhau để lấy giá trị nhỏ thứ 2
  while (true) {
    if (arr[0] !== arr[i]) {
      max2 = arr[i];
      return max2;
    }
    // tăng thứ tự so sánh trong mảng
    i++;
    // kiểm tra nếu không có số lớn thứ 2 thì thoát khỏi vòng lặp
    if (i == arr.length) {
      return 'Không có số nào lớn thứ 2';
    }
  }
};

console.log(`Số lơn thứ nhì trong mảng là: ${max2Numbers([2, 1, 4, 3, 4])}`);

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].

// tạo hàm
const getStringHasMaxLength = (arr) => {
  // tạo biến có độ dài lớn nhất
  let max = 0;

  // duyệt các phần tử của mảng
  arr.forEach((ele) => {
    // so sáng độ dài của từng phần tử với max để tìm ra độ dài lớn nhất
    ele.length > max ? (max = ele.length) : max;
  });

  // lọc giá trị có độ dài bằng với độ dài lớn nhất
  return arr.filter((item) => {
    return item.length == max;
  });
};

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// // Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9

// tạo hàm
const getRandomElement = (arr) => {
  // tạo một số nguyên ngẫu nhiên trong khoảng số lượng phần tử của mảng
  let rdnum = Math.floor(Math.random() * arr.length);
  // trả về giá trị bất kỳ trong mảng
  return arr[rdnum];
};

console.log(getRandomElement([3, 7, 9, 11])); // kiểm tra những phần tử không xác định

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// // Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]

// tạo hàm có 2 tham số
const similarity = (arr1, arr2) => {
  // tạo một mảng phụ để lưu các các biến giống nhau
  let subarr = [];

  // chỉ cần lặp qua các phần tử của mảng đầu rồi so sánh với mảng thử 2 không cần ngược lại
  arr1.forEach((ele) => {
    // so sánh phần tử giống nhau
    if (arr2.includes(ele)) {
      subarr.push(ele);
    }
  });
  // trả về mảng cần tìm
  return subarr;
};

console.log(similarity([1, 2, 3], [1, 2, 4]));

// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// // Ví dụ:
// getTime("9:20:56", 7) => "9:21:3"

// Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss

// tạo hàm với 2 tham số
const getTime = (str = [], num) => {
  // tách chuỗi thời gian thành 1 mảng với 3 phần tử không có ':', và tạo ra biến tổng số giây,
  let arr = str.split(':'),
    sumSecond = 0;

  // xác định điều kiện đề bài
  if (num < 1000) {
    // tính tổng số giây
    sumSecond = arr[0] * 3600 + arr[1] * 60 + arr[2] + num;
  }

  // tạo lại số giờ phút giây từ tổng số giây
  let h = Math.floor((sumSecond / 3600) % 12);
  let m = Math.floor((sumSecond % 3600) / 60);
  let s = Math.floor((sumSecond % 3600) % 60);

  // thêm nó vào mảng
  let time = [h, m, s];

  // trả về chuỗi đã thêm :
  return time.join(':');
};

console.log(getTime('9:20:56', 7));

// Bài 6 (2 điểm). Cho mảng users như sau:

users = [
  {
    name: 'Bùi Công Sơn',
    age: 30,
    isStatus: true,
  },
  {
    name: 'Nguyễn Thu Hằng',
    age: 27,
    isStatus: false,
  },
  {
    name: 'Phạm Văn Dũng',
    age: 20,
    isStatus: false,
  },
];

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true

// tạo hàm với 1 tham số
const getUsers = (obj) => {
  // lọc các phần tử của obj tìm xem giá trị tuổi có lớn hơn 25 và isStatus là true
  return obj.filter((item) => {
    return item.age > 25 && item.isStatus;
  });
};

console.log(getUsers(users));

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

// tạo hàm sắp xếp
const sortAge = (obj) => {
  // vì tuổi là một số dương nên ta dùng sort như sau
  return obj.sort((a, b) => a.age - b.age);
};

console.log(sortAge(users));

// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// // Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }

// tạo hàm
const getCountElement = (arr = []) => {
  // tạo một mảng tạm thời để lưu trữ
  let subArr = [];

  // tìm các phần tử trùng nhau rồi đưa vào mảng tạm thời
  arr.forEach((ele) => {
    if (arr.includes(ele, arr.indexOf(ele) + 1) && !subArr.includes(ele)) {
      subArr.push(ele);
    } else if (!arr.includes(ele, arr.indexOf(ele) + 1)) {
      subArr.push(ele);
    }
  });

  // tạo các biến phụ
  let result = [];
  let j = 0;
  let count = 1; // đặt biến đếm ban đầu =1

  // duyệt các phần tử trong mảng subArr
  subArr.forEach((ele) => {
    // so sánh nó với mảng arr rồi đếm số lần xuất hiện nếu nó đúng
    for (let i = 0; i < arr.length; i++) {
      // phần này em chưa làm được
      if (arr.includes(ele, j)) {
        count++;
        j += arr.indexOf(ele) + 1;
      } else {
        j = 0;
        count = 1;
        break;
      }
    }

    // tạo một obj rồi thêm vào một mảng
    let obj = {};
    obj.name = ele;
    obj.count = count;
    result.push(obj);
  });

  // trả về kết quả
  return result;
};

console.log(getCountElement(['one', 'two', 'three', 'one', 'one', 'three']));
