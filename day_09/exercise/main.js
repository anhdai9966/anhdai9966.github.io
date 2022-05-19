//
// Bài tập trên lớp Condition
// Bài 1
function getMark(mark) {
  if (mark >= 0 && mark <= 100) {
    if (mark >= 85) {
      console.log('A');
    } else if (mark >= 70 && mark < 85) {
      console.log('B');
    } else if (mark >= 40 && mark < 70) {
      console.log('C');
    } else {
      console.log('D');
    }
  }
}

// Kiểm tra function
console.log(getMark(99));

// Bài 2
function max(a, b) {
  if (a == b) {
    console.log('Hai số bằng nhau');
  } else if (a > b) {
    console.log(`${a} là số lớn nhất`);
  } else {
    console.log(`${b} là số lớn nhất`);
  }
}

console.log(max(3, 5));

// Bài 3
function checkNumber1(x) {
  if (x == 0) {
    console.log('Là số 0');
  } else if (x > 0) {
    console.log(`${x} là số dương`);
  } else {
    console.log(`${x} là số âm`);
  }
}

console.log(checkNumber1(-3));

// Bài 4
function checkNumber2(number) {
  if (number % 2 == 0) {
    console.log(`${number} là số chẵn`);
  } else {
    console.log(`${number} là số lẻ`);
  }
}

console.log(checkNumber2(0));

// Bài 5
function checkNumber3(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log(`${number} Chia hết cho 3 và 5`);
  } else {
    console.log(`${number} Không hết cho 3 và 5`);
  }
}

console.log(checkNumber3(15));

// Bài 6
function checkEqual(a, b, c) {
  if (c == a + b) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEqual(2, 3, 5));

//
// Bài tập về nhà Function
// Bài 1
function getNumber(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log('FizzBuzz');
  } else if (number % 3 == 0) {
    console.log('Fizz');
  } else if (number % 5 == 0) {
    console.log('Buzz');
  }
}
// kiểm tra function
console.log(getNumber(15));

// Bài 2
function equation(a, b) {
  if (a == 0) {
    console.log('Phương trình vô nghiệm');
  } else {
    let x = -b / a;
    console.log(`Phương trình có nghiệm x = ${x}`);
  }
}

console.log(equation(4, -8));

// Bài 3
function quadratic(a, b, c) {
  if (a == 0 && b == 0) {
    console.log('Phương trình vô nghiệm');
  } else if (a == 0) {
    let x = -c / b;
    console.log(`Phương trình có 1 nghiệm x = ${x}`);
  } else {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
      console.log('Phương trình vô nghiệm');
    } else if (delta == 0) {
      let x = -b / (2 * a);

      console.log(`Phương trình có nghiệm x = ${x}`);
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);

      console.log(`Phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2}`);
    }
  }
}

console.log(quadratic(2, 4, -6));

// Bài 4
function checkYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    console.log('Là năm nhuận');
  } else {
    console.log('Không là năm nhuận');
  }
}

console.log(checkYear(2022));

// Bài 5
function checkBMI(weight, height) {
  let bmi = weight / (height * 2);
  return bmi;
}

console.log(checkBMI(55, 1.6)); // kg, mét

// Bài 6
function convertionF(celsius) {
  let fahrenheit = 1.8 * celsius + 32;
  return fahrenheit;
}

console.log(convertionF(36));
