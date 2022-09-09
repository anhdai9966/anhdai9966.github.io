/*
khái niệp API là gì
Application Programming Interface (giao diện lập trình ứng dụng)
tập hợp các quy tắc mà qua đó cho phép các thành phần, hoặc các ứng kết tương tác như thế nào

ví dụ thực tế
đi ăn nhà hàng
khách hàng client (front end)
nhà bếp: server (back end)
khác hàng --> gọi món --> nhà bếp
nhà bếp --> nấu món ăn --> khách hàng
nhân viên lấy thực đơn từ khách hàng --> gửi cho nhà bếp
nhà bếp nấu ăn xong --> nhân viên bưng món ăn lên khách hàng

cấu trúc như thế nào
API = HTTP method + URL

http method
GET: lấy thông tin (Lấy thông tin từ menu)
POST : tạo (Đặt món)
PUT: cập nhật (Thay đổi món ăn)
DELETE: Xóa (Hủy món ăn)

URL (danh từ - resouce) users
GET /users --> lấy danh sách tất cả users
GET /users/1 --> lấy thông tin của user có id là 1
GET /users/1/blogs --> lấy danh sách tất cả blog của user có id là 1
GET /users/1/blogs/2 --> lấy danh sách tất cả blog có id = 2 của user có id là 1

// đây là theo chuẩn resful API
POST /users --> tạo user mới 
{
    name: 
    email:
}
POST /users/1/blogs --> tạo blog mới cho user có id = 1
{
    title:
    content:
    ...
}
PUT /users/1 --> cập nhật thông tin cho user có id = 1
{
    name: 
    email:
}

DELETE /users/1 --> xóa user có id = 1

thực hiện API như thế nào
- axios (thư viện bên thứ 3, cần phải nối link vào để thực hiện) (khuyên dùng)
- fetch API (có săn trong javascript)
- AJAX (có trong jQuery, nối link để sử dụng)

Test API như thế nào
- Postman
- Extension VSCode : Rest client
- Test trực tiếp trên browser (chỉ sử dụng với API GET)
*/

// axios
const imageEl = document.querySelector("#image");
// const btn = document.querySelector("#btn-axios");
// btn.addEventListener("click", async () => {
//   try {
//     // gọi API -> https://dog.ceo/api/breeds/image/random
//     let res = await axios.get("https://dog.ceo/api/breeds/image/random");
//     console.log(res.data.message);
//     imageEl.src = res.data.message;
//   } catch (error) {
//     console.log(error);
//   }
// });

// api sử dùng ajax
// $("#btn-jquery").click(() => {
//   $.ajax({
//     type: "GET",
//     url: "https://dog.ceo/api/breeds/image/random",
//     success: function (response) {
//       console.log(response);
//       $("#image").attr("src", response.message);
//     },
//     error: function (err) {
//       console.log(err);
//     },
//   });
// });

// gọi api dùng fetch
const btnFetch = document.querySelector("#btn-fetch");
btnFetch.addEventListener("click", async () => {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await res.json();
    imageEl.src = data.message;
  } catch (err) {
    console.log(err);
  }
});

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "0e0185d095msh8703ca88257ca0fp13814ejsne770d54b18b4",
//     "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
//   },
// };

// fetch("https://movies-app1.p.rapidapi.com/api/movies", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response.results))
//   .catch((err) => console.error(err));

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "0e0185d095msh8703ca88257ca0fp13814ejsne770d54b18b4",
//     "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "0e0185d095msh8703ca88257ca0fp13814ejsne770d54b18b4",
//     "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
//   },
// };
// fetch("https://www.googleapis.com/youtube/v3",options)
// .then(response => response.json())
// .then(res=>console.log(res))
// .catch(err => console.log(err))
