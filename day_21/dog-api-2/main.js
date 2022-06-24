const btn = document.getElementById("btn");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
  // Gọi API để lấy danh sách giống loài
  let res = await axios.get("https://dog.ceo/api/breeds/list/all");
  // console.log(res.data.message);
  // Sau khi có data thì hiển thị kết quả trên giao diện
  renderBreed(res.data.message);
}

function renderBreed(breeds) {
  // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
  // Cách 1: Sử dụng for ... in
  // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
  for (const key in breeds) {
    select.insertAdjacentHTML("beforeend", `<option>${key}</option>`);
  }
}

// hiển thị ảnh
btn.addEventListener("click", async () => {
  try {
    // gọi API
    let res = await axios.get(
      `https://dog.ceo/api/breed/${select.value}/images/random`
    );

    image.src = res.data.message;
    console.log(res.data.message);
  } catch (error) {
    console.log(error);
  }
});

getBreedList();
