// detail.html?id=1 ==> querystring
// detail.html?id=1&name=product&...
// lấy ra id trên url

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

// truy cập các thành phần
const breadcrumbItemActive = document.querySelector(".breadcrumb-item.active");
const nameEl = document.querySelector(".product-name");
const priceEl = document.querySelector(".product-price");
const sizeEl = document.querySelector(".product-size");
const descriptionEl = document.querySelector(".product-description");
const mainImage = document.querySelector("#mainCarousel");
const thumbImage = document.querySelector("#thumbCarousel");

// biến để lưu thông tin sản phẩm theo id
let product;

// kiểm tra xem id có tồn tại trên url hay không
// nếu không có thì 404
if (id) {
  product = products.find((p) => p.id == id);
  if (!product) {
    window.location.href = "./404.html";
  }
  document.title = product.name;
  breadcrumbItemActive.innerHTML = product.name;
} else {
  window.location.href = "./404.html";
}
// format tiền - VNĐ
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
// chọn size
const choseSize = (ele) => {
  // cách 1
  // const selectedEl = document.querySelector(".selected");
  // if (selectedEl) {
  //   selectedEl.classList.remove("selected", "bg-dark", "text-white");
  // }
  // Cách 2
  const sizeEls = document.querySelectorAll(".product-size span");
  Array.from(sizeEls).map((size) =>
    size.classList.remove("selected", "bg-dark", "text-white")
  );

  ele.classList.add("selected", "bg-dark", "text-white");
};
// hiển thị thông tin sản phẩm
const renderProduct = (obj) => {
  nameEl.innerText = obj.name;
  priceEl.innerText = formatMoney(obj.price);
  descriptionEl.innerText = obj.description;
  // hiển thị size
  sizeEl.innerHTML = "";
  // có thể sử dụng map
  obj.size.forEach((s) => {
    sizeEl.innerHTML += `
    <span class="border py-2 px-3 border-dark me-2" onclick="choseSize(this)">${s}</span>
    `; // tham chiếu đến phần tử kích hoạt sự kiện
  });

  // hiển thị hình ảnh
  mainImage.innerHTML = "";

  obj.image.forEach((img) => {
    mainImage.innerHTML += `
  <div class="carousel__slide" data-src="${img}"
  data-fancybox="gallery">
  <img src="${img}" />
  </div>`;
  });

  thumbImage.innerHTML = "";

  obj.image.forEach((img) => {
    thumbImage.innerHTML += `
    <div class="carousel__slide">
    <img class="panzoom__content" src="${img}" />
    </div>`;
  });
};

renderProduct(product);

// thêm giảm số lượng
const btnPlusCount = document.querySelector(".btn-plus-count");
const btnMinusCount = document.querySelector(".btn-minus-count");
const countEl = document.querySelector(".count");
let count = 1;

// tăng số lượng
btnPlusCount.addEventListener("mousedown", () => {
  count += 1;
  countEl.innerText = count;
});

// giảm số lượng
btnMinusCount.addEventListener("mousedown", () => {
  count -= 1;
  if (count < 1) {
    count = 1;
  }
  countEl.innerText = count;
});

// thêm vào giỏ hàng
const btnAddToCart = document.querySelector(".btn-add-to-cart");

btnAddToCart.addEventListener("click", () => {
  // kiểm tra xem đã chọn size hay chưa
  const sizeSelectedEl = document.querySelector(".product-size .selected");
  if (!sizeSelectedEl) {
    alert("Vui lòng chọn size trước khi thêm vào giỏ hàng");
    return;
  }

  // thêm vào giỏ hàng
  let item = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image[0],
    count: count,
    size: sizeSelectedEl.innerText,
  };
  addItemToAdd(item);
  alert("Thêm vào giỏ hàng thành công");
});

//
// updateTotalCart();

// Initialise Carousel ********************************
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});
