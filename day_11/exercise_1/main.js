// Bai 1 Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
function giaiThua(number) {
  for (let i = number - 1; i > 0; i--) {
    number *= i;
  }
  return number;
}

console.log(giaiThua(5));

// Bai 2 Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
function reverseString(str) {
  let restr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    restr += str[i];
  }
  return restr;
}

console.log(reverseString('Hello'));

//Bai 3 Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
function translate(code) {
  switch (code) {
    case 'VN':
      return 'Xin Chào';
      break;
    case 'EN':
      return 'Hello';
      break;
    case 'JAP':
      return 'Halo';
      break;
    case 'CN':
      return 'Nǐ hǎo';
      break;

    default:
      return 'Mã nhập không đúng';
      break;
  }
}

// Bài 4 Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
function subString(str) {
  str = str.slice(1, 10) + '...';

  return str;
}

console.log(subString('djaoidjewiofnewfdsonceiro'));

// Bài 5 Viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.
function print() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      document.write(`<span style="color: blue;">${i} </span>`);
    } else {
      document.write(`<span style="color: red;">${i} </span>`);
    }
  }
}

print();
