// Vòng lặp
// Biết chính xác
// for
// không biết chính xác
// while, do/while, forEach,...

// for
// day++, day += 1, day = day + 1;
// thực hiện công việc thức dậy lúc 5h
// for (let day = 1; day <= 30; day++) {
//   console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// thực hiện công việc thức dậy lúc 5h vào các ngày lẻ
// for (let day = 1; day <= 30; day++) {
//   if (day % 2 != 0) {
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
//   }
// }
// for (let day = 1; day <= 30; day += 2) {
//   console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// // break: thoát khỏi vòng lặp
// for (let day = 1; day <= 30; day++) {
//   if (day == 20) {
//     console.log('Chán quá. Nghỉ');
//     break;
//   }
//   console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// // continue: bỏ qua các câu lệnh sau nó, sang vòng lặp tiếp theo
// for (let day = 1; day <= 30; day++) {
//   if (day % 7 == 0) {
//     console.log('Nghỉ cuối tuần');
//     continue;
//   }
//   console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// tiết kiệm tiền. tiếp kiệm trong 10 ngày, mỗi ngày 100.000
// sau 10 ngày có 1.000.000
// thời điểm chứa bắt đầu là 0
let money = 0; // Pi

// for (let day = 1; day <= 10; day++) {
//   money += 100000;
// }

// console.log('Tổng tiền sau 10 ngày tiết kiệm: ' + money);

// Ngày lẻ tiết kiệm 100k, ngày chẵn tiết kiệm 200k
// for (let day = 1; day <= 10; day++) {
//   if (day % 2 == 0) {
//     // day % 2 == 1
//     money += 200000;
//   } else {
//     money += 100000;
//   }
// }

// console.log('Tổng tiền sau 10 ngày tiết kiệm: ' + money);

// Đến ngày số 8 hết tiền ko tiêt kiệm nữa
// for (let day = 1; day <= 10; day++) {
//   if (day == 8) {
//     console.log('Hết tiền');
//     break;
//   }
//   money += 100000;
// }

// console.log('Tổng tiền tiết kiệm: ' + money);

// Ngày cuối tuần đi nhậu, ko tiết kiệm ngày hôm đó
// for (let day = 1; day <= 10; day++) {
//   if (day == 7) {
//     console.log('Đi nhậu');
//     continue;
//   }
//   money += 100000;
// }

// console.log('Tổng tiền tiết kiệm: ' + money);

// Trường hợp khác của for
let day = 1;
for (;;) {
  if (day > 30) {
    break;
  }
  console.log(`Ngày ${day} thức dậy lúc 5:00`);
  day++;
}
