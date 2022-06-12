// scroll
const btnTop = document.querySelector('.btn-top');

window.addEventListener('scroll', function (e) {
  console.log(e);
  // tạo mốc để hiển thị 200
  if (document.documentElement.scrollTop > 200) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
