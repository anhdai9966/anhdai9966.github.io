let [htmlNav, htmlCard] = ["", ""];

$(".header .container .nav a").remove();

$.ajax({
  type: "GET",
  url: "./db.json",
  success: (response) => {
    console.log(response);
    response.navigators.forEach((a) => {
      htmlNav += `<a href="#" class="${a.status ? "active" : ""}">${
        a.name
      }</a>`;
    });
    $(".header .container .nav").append(htmlNav);

    response.cards.forEach((card) => {
      htmlCard += `
        <div class="card-item">
            <div class="category">${card.category}</div>
            <div class="image">
                <img src="${card.image}" alt="">
            </div>
            <div class="overview">
                <h3 class="title">${card.name}</h3>
                <p class="description">${card.description}</p>
                <a href="${card.link}" class="btn-detail">Read more</a>
            </div>
        </div>`;
    });
    $(".section-2 .container").html(htmlCard);
  },
  error: (error) => {
    console.log(error);
  },
});

$(".header .container .nav .btn-nav-close").click(() => {
  $(".header .container .nav").css("left", "-300px");
  $(".header .overlay-color, .header .container .nav .btn-nav-close").addClass(
    "hide"
  );
});

$(".header .container .btn-nav-open").click(() => {
  $(".header .container .nav").css("left", "0");
  $(
    ".header .overlay-color, .header .container .nav .btn-nav-close"
  ).removeClass("hide");
});

$(".header .overlay-color").click(() => {
  $(".header .container .nav").css("left", "-300px");
  $(".header .overlay-color, .header .container .nav .btn-nav-close").addClass(
    "hide"
  );
});

$(window).resize(() => {
  if ($(window).innerWidth() < 992 - getScrollBarWidth()) {
    $(".header .container .btn-nav-open").removeClass("hide");
    // $(".header .container .nav").addClass("hide");
  } else {
    $(".header .container .btn-nav-open").addClass("hide");
    $(".header .container .nav").removeClass("hide");
  }
});

function getScrollBarWidth() {
  var $outer = $("<div>")
      .css({ visibility: "hidden", width: 100, overflow: "scroll" })
      .appendTo("body"),
    widthWithScroll = $("<div>")
      .css({ width: "100%" })
      .appendTo($outer)
      .outerWidth();
  $outer.remove();
  return 100 - widthWithScroll;
}
