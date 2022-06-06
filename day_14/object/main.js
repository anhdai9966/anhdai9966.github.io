// khai báo object

// property: đặc điểm tính chất của đối tượng
// method: hành vi hành động

let emptyobj = {};

let student = {
  id: 1,
  name: 'Nguyễn Văn A',
  email: 'nva@gmail.com',
  status: false,
  address: {
    city: 'Hà Nội',
    district: 'Thanh Xuân',
  },
  //   goToSchool() {
  //       console.log('Đi học');
  //   }
  goToSchool: function () {
    console.log('Đi học');
  },

  showInfo: function () {
    console.log(
      `Name: ${this.name}, email: ${this.email}, point: ${this.point}`
    );
  },
};

// lấy ra thông tin

console.log(student.email);
console.log(student['name']);
console.log(student.address.city);

// thay đổi thông tin
student.email = 'NVA@gmail.com';
student.address.city = 'Đống Đa';

console.log(student);

// Thêm thuộc tính (thông tin)
student.point = 9;
console.log(student);

// xóa thuộc tính

delete student.status;
console.log(student);

// gọi phương thức
student.goToSchool();
student.showInfo();

// lấy danh sách key
let keys = Object.keys(student); // ['id', 'name', 'email', 'address', 'goToSchool', 'showInfo', 'point']
keys.forEach((key) => {
  console.log(student[key]);
});

// lấy danh sách các value

let values = Object.values(student);

console.log(values); // [1, 'Nguyễn Văn A', 'NVA@gmail.com', {…}, ƒ, ƒ, 9]

// kiểm tra một key có tồn tại hay không  / trả về true false

console.log(student.hasOwnProperty('email'));

// for in duyệt qua key của đối tượng
for (const key in student) {
  console.log(student[key]);
}
