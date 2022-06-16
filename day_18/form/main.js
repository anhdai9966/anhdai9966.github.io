// Thêm label cho các trường username, password, confirm password (sử dụng thẻ label để thêm các tiêu đề tương ứng cho các ô input)
// Kiểm tra xem password và confirm pass có trùng nhau hay không
// Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào.
// Sau khi nhập đầy đủ thì ‘Đăng ký’ được enable.
// Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const labelUN = document.createElement("label");
labelUN.for = "username";
labelUN.innerHTML = "Username";
username.insertAdjacentElement("beforebegin", labelUN);

const labelP = document.createElement("label");
labelP.for = "password";
labelP.innerHTML = "Password";
password.insertAdjacentElement("beforebegin", labelP);

const labelCP = document.createElement("label");
labelCP.for = "confirmPassword";
labelCP.innerHTML = "Confirm Password";
confirmPassword.insertAdjacentElement("beforebegin", labelCP);

const btn = document.querySelector("#btn");
btn.disabled = true;
btn.style.backgroundColor = "#333";

confirmPassword.addEventListener("keyup", () => {
  if (username.value) {
    if (password.value == confirmPassword.value) {
      confirmPassword.style.borderColor = "#3171E5";
      btn.disabled = false;
      btn.style.backgroundColor = "#3171E5";
    } else {
      confirmPassword.style.borderColor = "#fa5252";
      btn.disabled = true;
      btn.style.backgroundColor = "#333";
    }
  } else {
    alert("Bạn phải nhập user trước");
    confirmPassword.value = "";
  }
});

btn.addEventListener("click", () => {
  // đúng mọi thông tin thì mới enabled
  alert("Bạn đăng ký thành công");
});
