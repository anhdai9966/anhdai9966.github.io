const users = [
  {
    name: "Về tình yêu",
    quote:
      "1. Cuộc đời vốn nhiều đau khổ và thử thách, vậy tại sao chúng ta không yêu nhau nhiều hơn. \n2. Vợ được yêu thương thì vợ thoải mái bộc lộ điểm xấu, chồng được yêu thương thì những điểm xấu mất dần.\n3. Đau khổ là điều không thể thiếu của mọi tình yêu. \n4. Yêu thương chưa bao giờ là sai lầm.\n5. Nên yêu chứ đừng nên yêu mù quáng.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    color: "#ff6b6b",
  },
  {
    name: "Về cuộc sống",
    quote:
      "1. Trong cuộc sống đừng chờ đợi sự may mắn, mà hãy thực hiện và cũng đừng sợ sự thất bại, nếu bạn sợ, bạn sẽ chẳng làm được việc gì nên hồn đâu.\n2. Để cuộc sống tươi đẹp hơn, hãy dậy thật sớm mỗi ngày, để tận hưởng ánh nắng chan hòa của buổi sáng mai.\n3. Cười nhiều lên một chút, với bạn bè, người thân, với những người mỉm cười với ta, và cả những người ta tình cờ gặp mặt, dù chẳng thân nhiều.\n4. Hãy rộng lòng thêm một chút, mạnh dạn bày tỏ tình cảm với mọi người, và đón nhận những tính cảm họ dành cho ta, để biết “cảm giác bình thường tuyệt vời” của tình yêu thương, để sống chan hòa và cởi mở.\n5. Tinh tế hơn một chút, dịu dàng hơn một chút, mạnh mẽ hơn một chút, chú ý đến bản thân hơn một chút, người lớn hơn một chút, tin tưởng hơn một chút, dứt khoát hơn một chút, thay đổi một chút thôi mà! Hãy để cuộc sống trở nên tươi đẹp hơn nhé!",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    color: "#40c057",
  },
  {
    name: "Về phụ nữ",
    quote:
      "1. Hãy trở thành người đàn bà soi gương mà không bao giờ tự ti vì cảm thấy mình xấu.\n2. Phụ nữ hãy đẹp mỗi ngày, đừng chỉ đẹp khi cần.\n3. Không có người phụ nữ xấu, chỉ có người phụ nữ không biết rằng mình đẹp.\n4. Tất cả mọi sự bí ẩn của thế giới này đều không thể sánh nổi với sự bí ẩn của người phụ nữ.\n5. Không phải những người đẹp là những người hạnh phúc, mà những người hạnh phúc là những người đẹp. Người phụ nữ đẹp sẽ biết dùng ngôn ngữ nói lên sự thật, dùng giọng nói miêu tả sự chân thành, dùng đôi tai lắng nghe lòng trắc ẩn, dùng trái tim của mình để dành cho tình yêu thật sự.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    color: "#339af0",
  },
  {
    name: "Về tình bạn",
    quote:
      "1. Hãy đếm tuổi của bạn bằng số bạn bè chứ không phải số năm. Hãy đếm cuộc đời bạn bằng nụ cười chứ không phải bằng nước mắt.\n2. Bạn là người ta cảm thấy thoải mái khi ở cùng, ta sẵn lòng trung thành, đem lại cho ta lời chúc phúc và ta cảm thấy biết ơn vì có họ trong đời.\n3. Ai cũng lắng nghe điều bạn phải nói. Bạn bè lắng nghe điều bạn nói. Bạn thân lắng nghe điều bạn không nói.\n4. Không ai có thể hạnh phúc mà không có bạn bè, hay chắc chắn về bạn bè mình cho tới khi gặp bất hạnh.\n5. Mất đi một người bạn cũng như mất đi một cánh tay. Thời gian có thể chữa lành nỗi đau nhưng sự thiếu hụt không bao giờ được lấp đầy.",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
    color: "#845ef7",
  },
  {
    name: "Về công việc",
    quote:
      "1. Đàn bà khóc bằng mắt, đàn ông khóc bằng tim.\n2. Thước đo một người đàn ông không phải khoảnh khắc anh ta thoải mái và nhàn hạ mà tại thời điểm anh ấy tranh luận và đối mặt với thử thách.\n3. Thất bại lớn nhất của người đàn ông là để cho người khác nhìn thấy bản thân anh ta trong bộ dạng của kẻ thất bại.\n4. Người đàn ông chinh phục cả thế giới để chinh phục đàn bà.\n5. Lúc lớn khôn người đàn ông có ba cái nặng phải gánh vác là: danh vọng, đạo vợ chồng và con cái.\n6. Dù bị ngã 7 lần, đến lần thứ 8 người đàn ông vẫn đứng dậy được.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    color: "#15aabf",
  },
];

// Khi bấm vào mỗi user nào sẽ hiển thị màu, quote, name của user đó,

// Ảnh của user được active to hơn 1 tí (thêm class selected vào user được chọn - xem mã HTML để hiểu rõ hơn)
const testimonials = document.querySelector(".testimonials-container");
const text = document.querySelector(".text");
const nam = document.querySelector(".name");
const authors = document.querySelector(".authors-container");

for (let i = 0; i < users.length; i++) {
  const div = document.createElement("div");
  div.classList.add("author");
  const img = document.createElement("img");
  img.src = users[i].image;
  div.appendChild(img);
  authors.appendChild(div);
  div.addEventListener("click", () => {
    // remove Selected
    const authorsUpdate = document.querySelectorAll(".author");
    Array.from(authorsUpdate).forEach((ele) => {
      if (ele.classList.contains("selected")) {
        ele.classList.toggle("selected");
      }
    });
    // add Selected
    div.classList.add("selected");
    testimonials.style.backgroundColor = users[i].color;
    text.innerText = users[i].quote;
    nam.innerText = users[i].name;
  });
}

// set default
authors.firstElementChild.classList.add("selected");
testimonials.style.backgroundColor = users[0].color;
text.innerText = users[0].quote;
nam.innerText = users[0].name;
