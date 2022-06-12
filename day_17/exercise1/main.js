const users = [
  {
    username: "abc",
    password: "123",
  },
  {
    username: "edf",
    password: "456",
  },
];

// Khi người dùng bấm vào nút “Login” thì thực hiện các chức năng sau:
// Kiểm tra xem có trường nào được để trống hay không, nếu có thì thông báo (sử dụng alert)
// Nếu người dùng đã điền đầy đủ thông tin thì kiểm tra với thông tin đó, có trùng với user nào không?
// Nếu có thông báo “Đăng nhập thành công”
// Nếu không thông báo “Tài khoản hoặc mật khẩu không chính xác”

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btnLogin = document.querySelector("#btn-login");

const checkUsers = () => {
  if (username.value == "" || password.value == "") {
    alert("Bạn phải điền thông tin vào");
  } else {
    if (
      users.some(
        (e) => e.username == username.value && e.password == password.value
      )
    ) {
      alert("Đăng nhập thành công");
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  }
};

btnLogin.addEventListener("click", checkUsers);

// thêm trải nghiệm nếu bấm enter thì chuyển sang nhập password
username.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    password.focus();
  }
});

// thêm trải nghiệm nếu bấm enter tại password thì kiểm tra luôn
password.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    checkUsers();
  }
});
