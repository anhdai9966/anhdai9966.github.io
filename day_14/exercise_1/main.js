// Danh sách các sản phẩm có trong giỏ hàng
let products = [
  {
    name: 'Iphone 13 Pro Max', // Tên sản phẩm
    price: 30000000, // Giá mỗi sản phẩm
    brand: 'Apple', // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
  },
  {
    name: 'Samsung Galaxy Z Fold3',
    price: 41000000,
    brand: 'Samsung',
    count: 1,
  },
  {
    name: 'IPhone 11 Samsung',
    price: 15500000,
    brand: 'Apple',
    count: 1,
  },
  {
    name: 'OPPO Find X3 Pro',
    price: 19500000,
    brand: 'OPPO',
    count: 3,
  },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

const showInfoProduct = (arr) => {
  arr.forEach((product) => {
    console.log(
      `${product.name} - ${product.price} - ${product.brand} - ${product.count}`
    );
  });
};

// showInfoProduct(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

const getTotalMoney = (arr) => {
  return arr.reduce(
    (total, product) => total + product.price * product.count,
    0
  );
};

// console.log(getTotalMoney(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

const findProductByBrand = (arr, brand) => {
  return arr.filter((product) => product.brand == brand);
};

// console.log(findProductByBrand(products, 'Apple'));

// 4. Tìm các sản phẩm có giá > 20000000

const findProductByPrice = (arr, money) => {
  return arr.filter((product) => product.price > money);
};

// console.log(findProductByPrice(products, 20000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

const findProductByName = (arr, name) => {
  return arr.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
};

// console.log(findProductByName(products, 'Pro'));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

const addProduct = (arr, obj) => arr.push(obj);

const ob = {
  name: 'Nokia 1280 Huyền Thoại',
  price: 15000,
  brand: 'Nokia',
  count: 100,
};
addProduct(products, ob);
// console.log(showInfoProduct(products));

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

const deleteProductByName = (arr = [], name) => {
  // return arr.filter((e) => e.name.includes(name) == false);
  let i = 0,
    j = 0;

  while (i == j) {
    j++;

    arr.splice(
      arr.findIndex((e) => {
        let fi = e.name.includes(name);

        fi ? i++ : i;

        return fi;
      }),
      1
    );
  }

  return arr;
};

// console.log(deleteProductByName(products, 'Samsung'));

// 8. Sắp xếp giỏ hàng theo price tăng dần

const sortProductTang = (arr) => {
  return arr.sort((a1, a2) => {
    return a1.price - a2.price;
  });
};

// console.log(sortProductTang(products));

// 9. Sắp xếp giỏ hàng theo count giảm dần

const sortProductGiam = (arr) => {
  return arr.sort((a1, a2) => {
    return a2.price - a1.price;
  });
};

// console.log(sortProductGiam(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

const get2Product = (arr) => {
  let subArr = [],
    i = 0;

  while (true) {
    let rdn = Math.floor(Math.random() * arr.length);

    if (subArr[0] == arr[rdn]) {
      continue;
    }

    subArr.push(arr[rdn]);
    i++;

    if (i == 2) {
      break;
    }
  }
  return subArr;
};

// console.log(get2Product(products));
