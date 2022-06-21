// truy cập vào các thành phần
const productListEl = document.querySelector(".product-list");
const seachFormInputEL = document.querySelector(".seach-form-input");
const btnSearch = document.querySelector(".seach-form-button");

// tìm kiếm sản phẩm

seachFormInputEL.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    searchProduct();
  }
});

const searchProduct = () => {
  let value = seachFormInputEL.value;
  if (value == "") {
    alert("Từ khóa không được để trống");
    return;
  }
  let productFilter = products.filter((p) =>
    p.name.toLowerCase().includes(value.toLowerCase())
  );

  rederProduct(productFilter);
};

btnSearch.addEventListener("click", () => {
  searchProduct();
});

// hiển thị danh sách sản phẩm
const rederProduct = (arr) => {
  productListEl.innerHTML = "";

  // kiểm tra xem có sản phẩm không

  let html = "";
  arr.forEach((p) => {
    html += `
    <div class="col-md-3">
        <a href="./detail.html?id=${p.id}">
            <div class="product-item shadow-sm rounded mb-4">
                <div class="product-item-image">
                    <img src="${p.image[0]}"
                        alt="${p.name}">
                </div>
                <div class="product-item-info p-3">
                    <h2 class="fs-5 mb-4 text-dark">${p.name}</h2>
                    <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                        <p class="type fs-5 text-danger fw-normal">${formatMoney(
                          p.price
                        )}</p>
                        <p class="rating">
                            ${
                              p.rating
                            } <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
        `;
  });
  productListEl.innerHTML = html;
};

// format tiền - VNĐ
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

rederProduct(products);
