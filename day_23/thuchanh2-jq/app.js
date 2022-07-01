// Nối tiếp vào bài tập buổi 1 - Bài số 3: ul-li
// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
$("#list").before('<input type="text" placeholder="Nhập text" autofocus>');

$("#list").before("<button>Add</button>");

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
const addLi = () => {
  if ($("input").val()) {
    $("#list").append(`<li>${$("input").val()}</li>`);
    $("input").val("");
  } else {
    alert("Bạn phải nhập một cái gì đó");
  }
};
$("button")
  .first()
  .click(() => {
    addLi();
  });

$("input").keydown((e) => {
  if (e.key == "Enter") {
    addLi();
  }
});

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
$("#list").before("<button>Remove</button>");
$("button")
  .eq(1)
  .click(() => {
    if ($("#list li").length) {
      $("#list li").last().remove();
    } else {
      alert("Không có gì để xóa");
    }
  });

// Thêm 1 nút Hide trên đầu của danh sách ul
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
$("#list").before("<br><br><button>Hide</button>");
const btnHide = $("button").last();
btnHide.click(() => {
  if (btnHide.text() == "Hide") {
    $("#list").hide();
    btnHide.text("Show");
  } else {
    $("#list").show();
    btnHide.text("Hide");
  }
});
