// Giá trị mặc định của counter ban đầu = 0
let counter = document.querySelector("#counter");
let count = 0;

// Bấm vào Cộng tăng counter lên 1

const nextBtn = document.querySelector(".nextBtn");
nextBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
  changeColor();
});

// Bấm vào Trừ giảm counter đi 1
const prevBtn = document.querySelector(".prevBtn");
prevBtn.addEventListener("click", () => {
  count--;
  counter.innerText = count;
  changeColor();
});

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red

const changeColor = () => {
  if (count < 0) {
    counter.style.color = "red";
  } else if (count > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "#333333";
  }
};
