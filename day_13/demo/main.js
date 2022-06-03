// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false

function checkElementExist(arr, val) {
    if (Array.isArray(arr) && typeof val == 'number') {
        return arr.includes(val);
    } else {
        return 'Bạn phải nhập đúng tham số đầu là mảng, tham số thứ 2 là giá trị cần tìm';
    }
}

console.log(checkElementExist([1, 2, 3, 4, 5], 5));
console.log(checkElementExist([1, 2, 3, 4, 5], 6));

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []

function getElementGreater(arr, val) {
    let i = arr.indexOf(val),
        subArr = [];

    if (i != -1) {
        for (; i < arr.length - 1; i++) {
            subArr.push(arr[i + 1]);
        }
    }
    return subArr;
}

console.log(getElementGreater([1, 2, 3, 4, 5], 3));
console.log(getElementGreater([1, 2, 3, 4, 5], 5));

// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.

// randomHexCode() => #728a98
// randomHexCode() => #a72938

function randomHexCode() {
    // tạo thư viện cho key Hex
    let hexKey = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        hexCode = ['#'];

    // một mã hex có 7 ký tự với # đầu tiên nên còn 6 nên length = 6
    for (let i = 0; i < 6; i++) {
        // Tạo key ngẫu nhiên từ thư viện
        let rdomNum = Math.floor(Math.random() * 16);
        hexCode.push(hexKey[rdomNum]);
    }
    return hexCode.join('').toUpperCase();
}

console.log(randomHexCode());

// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.

// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)

function randomRgbCode() {
    let rgbCode = [];

    for (let i = 0; i < 3; i++) {
        // TODO: tạo số ngẫu nhiên trong phạm vi bảng màu rgb
        let rdomNum = Math.floor(Math.random() * 256);
        rgbCode.push(rdomNum);
    }
    return `rgb(${rgbCode.toString()})`;
}

console.log(randomRgbCode());

