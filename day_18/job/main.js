// Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.

const jobs = document.querySelector(".jobs");
const jobCard = document.querySelector(".job-card");

const job1 = jobCard.cloneNode(true);
const job2 = jobCard.cloneNode(true);
const job3 = jobCard.cloneNode(true);

jobs.appendChild(job1);
jobs.appendChild(job2);
jobs.appendChild(job3);

// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer

job1.querySelector("h3").innerText = "JavaScript Developer";
job2.querySelector("h3").innerText = "Java Developer";
job3.querySelector("h3").innerText = "Python Developer";

// Cập nhật Jobs listed thành tổng số công việc hiện có trong trang

const jobsListed = document.querySelector("#jobs-listed > span");
const count = document.querySelectorAll(".job-card");
jobsListed.innerHTML = count.length;

// Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi

const searchInput = document.querySelector("#search");
const titles = document.querySelectorAll(".job-card h3");
let arrTitle = Array.from(titles);

searchInput.addEventListener("keyup", (event) => {
  if (event.code == "Enter") {
    arrTitle.forEach((title) => {
      if (
        !title.innerText.toLowerCase().includes(searchInput.value.toLowerCase())
      ) {
        title.parentNode.parentNode.style.display = "none";
      } else {
        title.parentNode.parentNode.style.display = "block";
      }
    });
  }
});

// Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc

const showAll = document.querySelector("#show-all");

showAll.addEventListener("click", () => {
  searchInput.value = "";
  count.forEach((job) => {
    job.style.display = "block";
  });
});
