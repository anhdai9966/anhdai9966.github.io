// hiện thị danh sách
const productListEl = document.querySelector(".product-list");
let items = getDataToLocalStorage();
// hiển thị danh sách sản phẩm
const rederProduct = (arr) => {
  productListEl.innerHTML = "";

  // kiểm tra xem có sản phẩm không
  if (arr.length == 0) {
    const message = document.querySelector(".message");
    message.style.display = "block";
    return;
  }

  let html = "";
  arr.forEach((p) => {
    html += `
    <div class="product-item d-flex border mb-4">
        <div class="image">
            <img src="${p.image}" alt="${p.name}" />
        </div>
        <div class="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <h2 class="text-dark fs-5 fw-normal">
                    ${p.name} (${p.size})
                    </h2>
                    <h2 class="text-danger fs-5 fw-normal">
                    ${formatMoney(p.price)}
                    </h2>
                </div>
                <p class="text-black-50">
                    <span class="border d-inline-block me-3">
                        <span class="py-2 px-3 d-inline-block fw-bold btn-minus-count" onclick="minusCount(${
                          p.id
                        }, '${p.size}')">-</span>
                        <span class="py-2 px-3 d-inline-block fw-bold">
                        ${p.count}</span>
                        <span class="py-2 px-3 d-inline-block fw-bold btn-plus-count" onclick="plusCount(${
                          p.id
                        }, '${p.size}')">+</span>
                    </span>
                </p>
            </div>
            <div>
                <button class="text-primary border-0 bg-transparent fw-light" onclick="deleteProduct(${
                  p.id
                }, '${p.size}')">
                    <span><i class="fa-solid fa-trash-can"></i></span>
                    Xóa
                </button>
            </div>
        </div>
    </div>
          `;
  });
  productListEl.innerHTML = html;
};

// format tiền - VNĐ
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

const deleteProduct = (id, size) => {
  //xác nhận muốn xóa
  let isConfir = confirm("Bạn có muốn xóa không?");

  if (isConfir) {
    // tìm kiếm sản phẩm trùng id và size
    items = items.filter((p) => p.id != id || p.size != size);

    //  lưu vào trong
    setDataToLocalStorage(items);
    // cập nhật lại
    updateTotalCart();
    // hiển thị lại
    rederProduct(items);
    calcMoney();
  }
};

// giảm
const minusCount = (id, size) => {
  // lấy ra sản phẩm tương ứng
  let product = items.find((p) => p.id == id && p.size == size);
  product.count--;
  if (product.count < 1) {
    product.count = 1;
  }
  // lưu lại
  setDataToLocalStorage(items);
  // hiển thị lại
  rederProduct(items);
  calcMoney();
};
// tăng
const plusCount = (id, size) => {
  // lấy ra sản phẩm tương ứng
  let product = items.find((p) => p.id == id && p.size == size);
  product.count++;
  // lưu lại
  setDataToLocalStorage(items);
  // hiển thị lại
  rederProduct(items);
  calcMoney();
};

// thành tiền

const subTotalMoney = document.querySelector("#sub-total-money");
const totalMoney = document.querySelector("#total-money");
const discountFormInput = document.querySelector("#discount-form-input");
const btnApply = document.querySelector("#btn-apply");

let money;
let discount = 0;

btnApply.addEventListener("click", () => {
  // nếu không nhập mã không đúng thì giảm giá bằng 0
  discount = 0;
  if (money == 0) {
    alert("Hãy chọn sản phẩm để được áp dụng mã giảm giá");
    return;
  }
  switch (discountFormInput.value) {
    case "10PER":
      discount = money * 0.1;
      alert("Bạn được giảm 10% vào giá mua");
      break;
    case "20PER":
      discount = money * 0.2;
      alert("Bạn được giảm 20% vào giá mua");
      break;
  }
  discountFormInput.value = "";
  totalMoney.innerText = formatMoney(money - discount);
});

const calcMoney = () => {
  money = 0;
  items.forEach((item) => {
    money += item.price * item.count;
  });
  subTotalMoney.innerText = formatMoney(money);
  totalMoney.innerText = formatMoney(money - discount);
};

calcMoney();

rederProduct(items);
