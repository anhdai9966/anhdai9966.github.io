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

const imageEl = document.querySelector("#image");
const btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
  try {
    // gọi API -> https://dog.ceo/api/breeds/image/random
    let res = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(res.data.message);
    imageEl.src = res.data.message;
  } catch (error) {
    console.log(error);
  }
});
