// Khai báo kiểu boolean
let a = true;
let b = false;

console.log(a);
console.log(b);
console.log(!a); // false (phủ định)
console.log(!b); // true

// hàm boolean
console.log(Boolean(10));
console.log(Boolean(1 > 2));
console.log(Boolean(1 < 2));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(false));

// 1 số toán tử : !, || , &&

console.log('toán tử &&');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('toán tử ||');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// câu lênh điều kiện Nếu(đúng)...thì(làm gì)
console.log('câu lệnh if');
let hour = 6;
if (hour < 10) {
  console.log('good morning');
}

// câu lênh if else Nếu(đúng)...thì(làm gì), còn nếu(sai)...thì(làm gì)
let trodep = true;

if (trodep == true) {
  console.log('Đi chơi');
} else {
  console.log('Ở nhà');
}

// nếu có 30tr mua iphone 14 ngược lại samsung s21
let money = 40;
if (money >= 30) {
  console.log('Mua iphone 14');
} else {
  console.log('Mua samsung s21');
}

// câu lệnh if..else if...else
money = 17;
if (money >= 30) {
  console.log('Mua iphone');
} else if (money >= 20 && money < 30) {
  console.log('Mua samsung');
} else if (money >= 15 && money < 20) {
  console.log('Mua oppo');
} else {
  console.log('Mua xiaomi');
}

// if..else lồng nhau
let number = 9;

if (number > 0) {
  console.log('Số nguyên dương');

  if (number % 2 == 0) {
    console.log('Số chẵn');
  } else {
    console.log('Số lẻ');
  }
} else if (number < 0) {
  console.log('Số nguyên âm');
} else {
  console.log('Số 0');
}

// Toán tử 3 ngôi

// condition? nếu đúng : nếu sai

hour = 6;
if (hour < 12) {
  console.log('good morning');
} else {
  console.log('good afternoon');
}

hour < 12 ? console.log('good morning') : console.log('good afternoon');
