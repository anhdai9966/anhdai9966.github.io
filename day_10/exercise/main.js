// Bài tập về nhà
// Bài 1
function repeatString(str) {
  let str10 = '';
  for (let i = 0; i < 10; i++) {
    str10 += str;
  }
  console.log(str10);
}

repeatString('a');

// Bài 2
function repeatStringWithDash(str) {
  let str10 = '';
  for (let i = 0; i < 10; i++) {
    str10 += str;
    if (i < 9) {
      str10 += '-';
    }
  }
  console.log(str10);
}

repeatStringWithDash('a');

// Bài 3
function repeatStringWithCount(str, n) {
  if (n > 1) {
    let strn = '';
    for (let i = 0; i < n; i++) {
      strn += str;
      if (i < n - 1) {
        strn += '-';
      }
    }
    console.log(strn);
  } else {
    console.log('Bạn phải nhập n > 1');
  }
}

repeatStringWithCount('a', 5);

// Bài 4
let sum = 0;
for (let number = 0; number <= 100; number++) {
  if (number % 5 == 0) {
    sum += number;
  }
}

console.log(sum);

// Bài 5
function theTichHinhCau(radius) {
  if (radius >= 0) {
    let v = (4 * Math.PI * Math.pow(radius, 3)) / 3;
    return v;
  }
}

console.log(theTichHinhCau(5));

// Bài 6
function tinhTongGiua2So(x1, x2) {
  let sum = 0;
  if (x1 < x2) {
    for (let number = x1 + 1; number < x2; number++) {
      sum += number;
    }
  } else {
    for (let number = x2 + 1; number < x1; number++) {
      sum += number;
    }
  }

  console.log(sum);
}

tinhTongGiua2So(3, 8);
tinhTongGiua2So(8, 3);
tinhTongGiua2So(3, 3);

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

console.log(laSoNguyenTo(9));

// Bài 8
function sumSoNguyenTo(n) {
  if (n > 1) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
      if (laSoNguyenTo(i)) {
        sum += i;
      }
    }
    console.log(sum);
  } else {
    console.log('Bạn phải nhập một số nguyên dương');
  }
}

sumSoNguyenTo(2);

// Bài 9
function sumUocSo(n) {
  if (n > 1) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        sum += i;
      }
    }
    console.log(sum);
  } else {
    console.log('Bạn phải nhập một số nguyên dương');
  }
}

sumUocSo(8);
