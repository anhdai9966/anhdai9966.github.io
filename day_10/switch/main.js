// switch case

let money = 10000;

switch (money) {
  case 12000:
  case 15000:
  case 20000:
    console.log('Cà phê sữa');
    break;
  case 10000:
    console.log('Cà phê đá');
    break;
  case 8000:
    console.log('Sting dâu');
    break;
  case 2000:
    console.log('Trà đá');
    break;

  default:
    console.log('Không có đồ uống nào phù hợp');
    break;
}

// Bài tập
// bài 1
let day = 6;

switch (day) {
  case 0:
    console.log('Hôm nay là chủ nhật');
    break;
  case 1:
    console.log('Hôm nay là thứ hai');
    break;
  case 2:
    console.log('Hôm nay là thứ ba');
    break;
  case 3:
    console.log('Hôm nay là thứ tư');
    break;
  case 4:
    console.log('Hôm nay là thứ năm');
    break;
  case 5:
    console.log('Hôm nay là thứ sáu');
    break;
  case 6:
    console.log('Hôm nay là thứ bảy');
    break;

  default:
    console.log('Số này sai phạm vi yêu cầu');
    break;
}

// Bài 2
let month = 10;

switch (month) {
  case 1:
  case 2:
  case 3:
    console.log('Mùa Xuân');
    break;
  case 4:
  case 5:
  case 6:
    console.log('Mùa Hạ');
    break;
  case 7:
  case 8:
  case 9:
    console.log('Mùa Thu');
    break;
  case 10:
  case 11:
  case 12:
    console.log('Mùa Đông');
    break;

  default:
    console.log('Số này sai phạm vi yêu cầu');
    break;
}
