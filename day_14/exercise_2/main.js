const grades = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
];

// Viết function tính thứ hạng trung bình của cả lớp

const averageRank1 = (arr) => {
  return arr.reduce((sum, num) => (sum += num.grade), 0) / arr.length;
};

console.log(averageRank1(grades));

// Viết function tính thứ hạng trung bình của nam trong lớp

const averageRank2 = (arr) => {
  return (
    arr.reduce((sum, num) => (num.sex == 'M' ? (sum += num.grade) : sum), 0) /
    arr.length
  );
};

console.log(averageRank2(grades));

// Viết function tính thứ hạng trung bình của Nữ trong lớp

const averageRank3 = (arr) => {
  return (
    arr.reduce((sum, num) => (num.sex == 'F' ? (sum += num.grade) : sum), 0) /
    arr.length
  );
};

console.log(averageRank3(grades));

// Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp

const findMaxMale = (arr) => {
  let max = 0;

  arr.forEach((ele) => {
    if (ele.sex == 'M') {
      max < ele.grade ? (max = ele.grade) : max;
    }
  });

  return arr.filter((item) => item.grade == max);
};

console.log(findMaxMale(grades));

// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp

const findMaxFemale = (arr) => {
  let max = 0;

  arr.forEach((ele) => {
    if (ele.sex == 'F') {
      max < ele.grade ? (max = ele.grade) : max;
    }
  });

  return arr.filter((item) => item.grade == max);
};

console.log(findMaxFemale(grades));

// Viết function thứ hạng cao nhất của cả lớp

const findMaxAll = (arr) => {
  return arr.sort((a, b) => b.grade - a.grade).slice(0, 1);
};

console.log(findMaxAll(grades));

// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp

const getFemale = (arr) => {
  return arr.filter((item) => item.sex == 'F');
};

console.log(getFemale(grades));

// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái

const sortLetter1 = (arr) =>
  arr.sort((a, b) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
  );

console.log(sortLetter1(grades));

// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần

const sortgrade = (arr) => arr.sort((a, b) => b.grade - a.grade);

console.log(sortgrade(grades));

// Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”

const getName = (arr, str) => {
  return arr.filter((item) => item.name.includes(str));
};

console.log(getName(grades, 'J'));

// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp

const getTop5 = (arr) => {
  return arr.sort((a, b) => b.grade - a.grade).slice(0, 5);
};

console.log(getTop5(grades));
