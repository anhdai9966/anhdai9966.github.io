// Bài tập về nhà
// Bài 1
function repeatString(str) {
  let str10 = '';
  for (let i = 0; i < 10; i++) {
    str10 += str;
  }
  return str10;
  // return str.repeat(10);
}

console.log(repeatString('a'));

// Bài 2
function repeatStringWithDash(str) {
  let str10 = str;
  for (let i = 1; i < 10; i++) {
    str10 += `-${str}`;
  }
  return str10;
}

function repeatStringWithDash2(str) {
  let str10 = str;
  for (let i = 1; i < 10; i++) {
    if (i == 9) {
      str10 += str;
    } else {
      str10 += `${str}-`;
    }
    return str;
  }
  return str10;
}

console.log(repeatStringWithDash('a'));

// Bài 3
function repeatStringWithCount(str, count) {
  if (count > 1) {
    let strn = str;
    for (let i = 0; i < count; i++) {
      strn += `-${str}`;
    }
    return strn;
  } else {
    console.log('Bạn phải nhập n > 1');
  }
}

console.log(repeatStringWithCount('a', 5));

// Bài 4
function sum0To100() {
  let sum = 0;
  for (let number = 0; number <= 100; number++) {
    if (number % 5 == 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(sum0To100());

// Bài 5
function theTichHinhCau(radius) {
  if (radius >= 0) {
    // let v = (4 * Math.PI * Math.pow(radius, 3)) / 3;
    let v = (4 * Math.PI * radius ** 3) / 3;
    return v;
  }
}

console.log(theTichHinhCau(5));

// Bài 6
function tinhTongGiua2So(x1, x2) {
  // let sum = 0;
  // if (x1 < x2) {
  //   for (let number = x1 + 1; number < x2; number++) {
  //     sum += number;
  //   }
  // } else {
  //   for (let number = x2 + 1; number < x1; number++) {
  //     sum += number;
  //   }
  // }

  let min = Math.min(x1, x2);
  let max = Math.max(x1, x2);

  let total = 0;
  for (let number = min + 1; number < max; number++) {
    total += number;
  }

  return total;
}

console.log(tinhTongGiua2So(3, 8));
console.log(tinhTongGiua2So(8, 3));
console.log(tinhTongGiua2So(3, 3));

// Bài 7
function laSoNguyenTo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(laSoNguyenTo(2));

// Bài 8
function sumSoNguyenTo(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (laSoNguyenTo(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumSoNguyenTo(8));

// Bài 9
function sumUocSo(n) {
  if (n > 1) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        sum += i;
      }
    }
    return sum;
  } else {
    console.log('Bạn phải nhập một số nguyên dương');
  }
}

console.log(sumUocSo(8));
