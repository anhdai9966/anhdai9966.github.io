// Bài 1: Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

function checkStringExist(str, subStr) {
  return str.includes(subStr);
}

function checkStringExist1(str, subStr) {
  if (str.indexOf(subStr) == -1) {
    return false;
  }

  return true;

  // return str.indexOf(subStr) == -1
}

console.log(checkStringExist('Javascript is Awesome', 'is'));
console.log(checkStringExist1('Javascript is Awesome', 'is'));

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

function shortenString(str) {
  if (str.length <= 8) {
    return str.substring(0, 8) + '...';
  }

  return str;
}

console.log(shortenString('Xin chào các bạn'));

// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

function checkStrDX(str) {
  let string = str.toLocaleLowerCase();

  for (let i = 0; i < str.length / 2 - 1; i++) {
    let char = string.substring(i, i + 1);

    if (!string.endsWith(char, str.length - i)) {
      return false;
    }
  }

  return true;
}

console.log(checkStrDX('Race car'));
console.log(checkStrDX('hello world'));

// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

function sortOneNumber(num) {
  let strNum = num.toString().split(''),
    temp = '',
    i = 0;
  nevagite = 1;

  if (strNum[0] == '-') {
    strNum.shift();
    nevagite = -1;
  }

  for (let i = 0; i < strNum.length - 1; i++) {
    for (let j = 0; j < strNum.length; j++) {
      if (strNum[i] < strNum[j]) {
        temp = strNum[i];
        strNum[i] = strNum[j];
        strNum[j] = temp;
      }
    }
  }

  return Number(strNum.join('')) * nevagite;
}

// đảo ngược mảng reverse()

console.log(sortOneNumber(21341258));

// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

function convertString(str) {
  return str.toLocaleLowerCase().replaceAll(' ', '_');
}

console.log(convertString('Xin Chao Cac Ban'));
