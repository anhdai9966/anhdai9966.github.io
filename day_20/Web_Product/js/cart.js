// key ='cart'
// value = array
// thêm vào localStorage
const setDataToLocalStorage = (arr) => {
  localStorage.setItem("cart", JSON.stringify(arr));
};

// lấy ra từ localStorage
const getDataToLocalStorage = () => {
  const localStorageValue = localStorage.getItem("cart");
  if (localStorageValue) {
    return JSON.parse(localStorageValue);
  } else {
    return [];
  }
};

// cấu trúc của giỏ hàng
// const cart = [
//     {
//         id:
//         name:
//         price:
//         image:
//         count:
//         size:
//     }
// ]

const addItemToAdd = (item) => {
  // th1 id chưa có trong giỏ hàng thì thêm mới
  // tr2 id có tồn tại mà size chưa tồn tại thì thêm mới
  // th3 id và size tồn tại thì thêm số lượng

  // lấy danh sách cart từ localStorage
  let cart = getDataToLocalStorage();
  // nếu tồn tại thì tạo mới
  if (cart.length == 0) {
    cart.push(item);
  } else {
    // tìm kiếm sản phẩm đã tồn tại trong giỏ hàng hay chưa
    let product = cart.find((p) => p.id == item.id && p.size == item.size);
    // nếu chưa tồn tại thêm vào
    // nếu tồn tại thì cập nhật số lượng
    if (!product) {
      cart.push(item);
    } else {
      product.count += item.count;
    }
  }
  //   lưu dữ liệu
  setDataToLocalStorage(cart);

  // cập nhật lại số lượng trên giao diện
  updateTotalCart();
};

// update cart
const updateTotalCart = () => {
  // lấy cart từ localstorage
  let cart = getDataToLocalStorage();
  document.querySelector(".cart-count").innerText = cart.length;
};
updateTotalCart();
