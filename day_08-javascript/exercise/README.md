# Javascript Basic

## Giới thiệu về Javascript

### Javascript là gì?

- Javascript (JS) là một ngôn ngữ kịch bản phía client
- Javascript được sử dụng rộng rãi trong việc kết hợp với HTML/CSS để thiết kế web động.

### Javascript dùng để làm gì?

- Sửa đổi nội dung của một trang web.
- Thay đổi style và vị trí của các thành phần trên trang web.
- Phản hồi với các sự kiện từ người dùng.
- Thực hiện và kiểm soát việc chuyển tiếp các hình ảnh động.
- Thông báo cho người dùng.
- Thao tác với dữ liệu đầu vào và hiển thị kết quả sau khi xử lý.
- Xác thực dữ liệu đầu vào của người dùng trước khi gửi nó đến máy chủ.
- …

---

## Viết chương trình javascript đầu tiên

### Cách 1: Viết trực tiếp mã Javascript trong file HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Viết mã Javascript trong cặp thẻ script -->
    <script>
      console.log('Hello world');
    </script>
  </body>
</html>
```

> Lưu ý : Mã javascript nên đặt ở phần cuối cùng của body

### Cách 2 : Tạo file có đuôi là .js để viết mã Javascript (nên sử dụng)

```js
// file main.js
console.log('Hello world'); // hiển thị giá trị lên màn hình console
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Link sang 1 file javascript -->
    <script src="./main.js"></script>
  </body>
</html>
```

---

## Biến trong Javsscript

### Biến là gì?

Biến là một định danh dùng để lưu trữ dữ liệu, thông qua biến chúng ta có thể thực hiện các thao tác với dữ liệu.

Mỗi biến có một kiểu dữ liệu riêng, dựa vào kiểu dữ liệu của biến có các thao tác khác nhau với biến.

### Khai báo biến

Để khai báo biến sử dụng từ khóa : let / const

Sử dụng 2 cách sau để khai báo biến:

```js
// Khai báo biến và không gán giá trị cho biến
let age;
// gán giá trị cho biến
age = 26;
// gán giá trị khác cho biến
age = 10;

// Khai báo biến và gán giá trị cho biến
let email = 'dailai9966@gmail.com';

// Khai báo hằng số
const PI = 3.14; // phải khởi tạo giá trị ngay lập tức - và không thể thay đổi
```

_*Chú ý:*_

- Với biến: Không thể khai báo 2 biến cùng một tên,
- Với biến hằng: Phải khởi tạo giá trị ngay khi khai báo và không thể gán lại giá trị khác

### Quy tắc đặt tên biến

- Chứa các ký tự chữ, số, \_ và $
- Ký tự đầu tiên không được là số (nên là chữ)
- Có phân biệt hoa thường
- Không trùng với các từ khóa của Javascript như: for, while, this, …
- Nên đặt tên theo kiểu camelCase nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví dụ binhphuong thì nên đặt là binhPhuong.

### Kiểm tra kiểu dữ liệu của biến

Để kiểm tra kiểu dữ kiệu của 1 biến, chúng ta sử dụng toán tử `typeof`

```js
let number = 10;
console.log(typeof number); // "number"

let name = 'Dai Lai';
console.log(typeof name); // "string"
```

Các kiểu dữ liệu nguyên thủy: undefined, string, number, boolean, null

## Kiểu dữ liệu String

### Kiểu dữ liệu String

String (chuỗi) là một đoạn text có thể có một hoặc nhiều ký tự.

Các chuỗi đều phải được bao quanh bằng cặp dấu nháy đơn ’ hoặc nháy kép ".

```js
let name = 'Nguyễn Văn A';
let email = 'abc@gmail.com';
```

### Một số lưu ý

Trường hợp trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó. Hoặc nếu muốn có nháy kép thì bao quanh chuỗi là cặp dấu nháy đơn và ngượi lại, muốn có nháy đơn thì bao quanh chuỗi là nháy kép

```js
let message2 = 'Xin chào các bạn, mình tên là "Dai". Mình sinh năm 1996';
```

Khi bạn muốn Enter xuống hàng một chuỗi thì bắt buộc phải sử dụng dấu + để nối chuỗi.

```js
let message =
  'Xin chào các bạn, ' + 'mình tên là "Dai". ' + 'Mình sinh năm 1996';
```

### Nối chuỗi trong Javascript

Để nối chuỗi chúng ta sử dụng dấu + để ghép hai chuỗi (hoặc biến) lại với nhau.

```js
let firstName = 'Lai';
let lastName = 'Dai';
let fullName = firstName + ' ' + lastName;
```

---

## Template strings – ES6

Khai báo chuỗi sử dụng ký tự back-tick `` thay cho ký tự nháy đơn hoặc nháy kép.

Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu nháy đơn hoặc nháy kép thoải mái mà không cần dùng escape character.

Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau:

```
`string_text ${expression} string_text`
```

Ví dụ như:

```js
let name = 'Dai Lai';
let year = 1996;

console.log(
  `Xin chào các bạn, mình tên là ${name}. Năm nay ${2022 - year} tuổi`
);
```

_Chú ý:_ Những gì hiển thị trong back-tick sẽ hiện thị đúng như cách nó trình bày

## Kiểu dự liệu Number

Number (số) là một tập hợp của các con số (0 – 9) không chứa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm

```js
let age = 25;
let num = 5.1;
```

---

## Math object trong Javascript

Đối tượng Math trong Javascript sẽ giúp bạn thực hiện các biểu thức đặc biệt trong toán học.

Một số phương thức hay được sử dụng

```js
Math.PI; // 3.141592653589793

// làm tròn thông thường
Math.round(1.5); // 2

// làm tròn xuống
Math.floor(1.5); // 1

// làm tròn lên
Math.ceil(1.4); // 2

// ngẫu nhiên
Math.random(); // từ 0 - 1

// ngẫu nhiên từ 1 đến 100
Math.floor(Math.random() * 100 + 1);

// ngẫu nhiên từ 50 - 100
Math.floor(Math.random() * (100 - 50 + 1) + 50);

// giá trị nhỏ nhất
Math.min(1, 2, 3, 4, 5); // 1

// giá trị lớn nhất
Math.max(1, 2, 3, 4, 5); // 5

// Số mũ
Math.pow(3, 4); // 3^4 or 3**4

// Căn bậc 2
Math.sqrt(25); // 5
```

---

## Một số lưu ý cần biết khi dùng với các phép toán `+, -, *, /,`

TH1: _string_ là các ký tự, _number_ là các số\
string + string = string\
string + number = string (vị trí ngược lại tương tự)\
string - string = NaN (tương tự `*, /`)\
string - number = NaN (tương tự `*, /`) (vị trí ngược lại tương tự)\
undefined + string = string\
undefined + number = NaN (tương tự `-, *, /`)

TH2: _string_ là số, _number_ là số\
string + string = string\
string + number = string (vị trí ngược lại tương tự)\
string - string = number (tương tự `*, /`)\
string - number = number (tương tự `*, /`) (vị trí ngược lại tương tự)\
string - number = number (tương tự `*, /`) (vị trí ngược lại tương tự)

Với: phép chia cho 0 = infinity, Null = 0, typeof(value) = string

Với kiểu _boolean_ tương ứng: true = 1, false = 0

**Độ ưu tiên khi thực hiện:** Nhân chia trước cộng trừ sau, trong ngoặc trước ngoài ngoặc sau,..
