const btn = document.querySelector(".menu-icon");
const menuEL = document.querySelector(".menu ul");

// btn.addEventListener("click", () => {
//   menuEL.classList.toggle("show");
// });

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 768) {
//     menuEL.classList.remove("show");
//   }
// });

let isShow = false;
$(".menu-icon").click((e) => {
  isShow = !isShow;
  $(".menu ul").slideToggle("fast", () => {
    if (isShow) {
      $(".menu ul").css("display", "flex");
    } else {
      $(".menu ul").css("display", "none");
    }
  });
});

$(window).resize(() => {
  if ($(window).innerWidth() > 768) {
    isShow = false;
    $(".menu ul").css("display", "flex");
  } else {
    // $(".menu ul").css("display", "none");
  }
});
