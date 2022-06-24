// promise lời hứa

// pending Đang chờ thực hiện
let promise = new Promise((resolve, reject) => {});

console.log(promise);

// thành công
// lời hứa cuối tuần nếu có tiền thì đi chơi
// resolve được gọi nếu lời hứa thành công
let hasMoney = true;
let promiseSuccess = new Promise((resolve, reject) => {
  if (hasMoney == true) {
    resolve("Cuối tuần đi chơi");
  }
});

console.log(promiseSuccess);

// thất bại
// lời hứa nếu cuối tháng có tiền thì trả nợ
// hasMoney = false;
// let promiseError = new Promise((resolve, reject) => {
//   if (hasMoney == false) {
//     reject("Không có tiền trả nợ");
//   }
// });

// console.log(promiseError);

// ví dụ 2
// lời hứa 1: cuối năm nếu có trên 30tr thì mua iphone 13 pro max
// Lời hứa 2: sau khi mua iphone nếu còn đủ 5tr thì mua airpod
let money = 40;
const buyIphone = () => {
  return new Promise((resolve, reject) => {
    if (money >= 30) {
      resolve("Đủ tiền mua iphone");
    } else {
      reject("Không đủ tiền mua iphone, kiếm thêm nhiều tiền nữa");
    }
  });
};

const buyAirpod = () => {
  return new Promise((resolve, reject) => {
    if (money - 30 >= 5) {
      resolve("Mua thêm AirPod");
    } else {
      reject("Không đủ tiền mua Airpod, kiếm thêm nhiều tiền nữa");
    }
  });
};

// console.log(buyIphone());
buyIphone()
  // then là thanh công
  .then((res) => {
    console.log(res);
    return buyAirpod();
  })
  .then((res) => console.log(res))
  // catch là thất bại
  .catch((err) => console.log(err))
  // sẽ luôn được chạy dù thành công hay thất bại
  .finally(() => console.log("Về nhà thôi"));
