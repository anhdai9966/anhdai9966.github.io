// Bài 1
function print1(str, row, col) {
  for (let i = 0; i < row; i++) {
    let content = '';
    for (let j = 0; j < col; j++) {
      content += str;
    }
    document.write(`<pre>${content}</pre>`);
  }
}

print1('* ', 9, 9);

// Bài 2
function print2(str, row, col) {
  for (let i = 1; i <= row; i++) {
    let content = '';
    for (let j = 1; j <= col; j++) {
      if (i == 1 || j == 1 || i == row || j == col) {
        content += str;
      } else {
        content += `  `;
      }
    }

    document.write(`<pre>${content}</pre>`);
  }
}

print2('* ', 8, 8);

// Bài 3
function print3(str, side) {
  for (let i = 1; i <= side; i++) {
    let content = '';

    for (let j = 1; j <= side; j++) {
      if (i == j || i == side - j + 1) {
        content += str;
      } else {
        content += `  `;
      }
    }

    document.write(`<pre>${content}</pre>`);
  }
}

print3('* ', 11);

// Bài 4
function print4(str, row, col) {
  for (let i = 1; i <= row; i++) {
    let content = '';

    for (let j = 1; j <= col; j++) {
      // if (i >= j)
      if (j >= i) {
        content += str;
      } else {
        content += `  `;
      }
    }

    document.write(`<pre>${content}</pre>`);
  }
}

print4('* ', 11, 11);

// Bài 5
function print5(str, row, col) {
  for (let i = 1; i <= row; i++) {
    let content = '';

    for (let j = 1; j <= col; j++) {
      content += str;
    }
    col--;

    document.write(`<pre>${content}</pre>`);
  }
}

print5('* ', 11, 11);

// Bài 6
function print6(str, row, col) {
  let c = col;
  for (let i = 1; i <= row; i++) {
    let content = '';
    for (let j = 1; j <= col; j++) {
      if (j < c) {
        content += `  `;
      } else {
        content += str;
      }
    }
    c--;

    document.write(`<pre>${content}</pre>`);
  }
}

print6('* ', 11, 11);
