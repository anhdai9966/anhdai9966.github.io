// Sử dụng Javascript để thực hiện các công việc sau

// Một tính năng mới vào gói Pro: ‘24/7 Phone support’

const proPlanList = document.querySelector("#pro-plan .list-unstyled");

const liItemList = document.createElement("li");
liItemList.innerText = "24/7 Phone support";

proPlanList.appendChild(liItemList);

// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

const arrPlan = document.querySelectorAll(".col-md-4");

const contain = document.querySelector(".justify-content-center");

contain.append(arrPlan[1]);
contain.append(arrPlan[0]);

// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.style.backgroundColor = "#0984e3";
  btn.style.color = "#fff";
  btn.innerText = "Buy Now";
});

// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
const proPlan = document.querySelector("#pro-plan");
const storageAmount1 = proPlan.querySelector(".storage-amount");
const basicPlan = document.querySelector("#basic-plan");
const storageAmount2 = basicPlan.querySelector(".storage-amount");

let result1 = +storageAmount1.innerText + storageAmount1.innerText * 0.25;
let result2 = +storageAmount2.innerText + storageAmount2.innerText * 0.5;

storageAmount1.innerText = result1;

storageAmount2.innerText = result2;
