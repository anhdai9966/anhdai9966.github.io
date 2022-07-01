$("#heading").html("Xin Chào các bạn");

// $("#heading").css("color", "red");
// $("#heading").css("backgroundColor", "black");

$("#heading").css({
  color: "red",
  backgroundColor: "black",
});

// lắng nghe sự kiện
$("#heading").click(() => {
  alert("Xin chào");
});

// sử dụng vòng lặp
$("p").each((index, element) => {
  $(element).html(`Thẻ para ${index + 1} đã được thay đổi nội dung`);
  $(element).css("color", "blue");
});

// truy cập vào 1 thẻ thông qua chỉ số
$("p").eq(1).html("thẻ này được update");

$("p").first().css("color", "pink");

// thêm
$("p").last().after("<button>Click me</button>");

// Xóa
$(".box ul").children().first().remove();

// thay thế
$("p").first().replaceWith(`<input type="text" placeholder="Nhập nội dung">`);

// copy
$("#heading").clone().appendTo("body");

// ẩn hiện
$("ul").last().css({
  "background-color": "gray",
  color: "while",
});

$("button").click(() => {
  $("ul").last().slideToggle();
});
