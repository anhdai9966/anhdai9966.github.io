const btn = document.getElementById("btn");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");
const lists = document.querySelector(".sub-breed-list");

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
  try {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    // console.log(res.data.message);
    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message);
  } catch (err) {
    console.log(err);
  }
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
    // gọi API -> https://dog.ceo/api/breed/bulldog/list
    let res = await axios.get(`https://dog.ceo/api/breed/${select.value}/list`);
    // console.log(res.data.message);
    renderSubBreed(res.data.message);
  } catch (error) {
    console.log(error);
  }
});

const renderSubBreed = (subBreed) => {
  if (subBreed.length !== 0) {
    lists.innerHTML = "";
    subBreed.forEach((list) => {
      lists.insertAdjacentHTML(
        "beforeend",
        `<li><a href="#" onclick="renderImage('${list}')">${list}</a></li>`
      );
    });
  } else {
    lists.innerHTML = `<li>Không có sub breed</li>`;
  }
};

const renderImage = async (nameList) => {
  try {
    // gọi API
    let res = await axios.get(
      `https://dog.ceo/api/breed/${select.value}/${nameList}/images/random`
    );

    image.src = res.data.message;
  } catch (error) {
    console.log(error);
  }
};

getBreedList();
