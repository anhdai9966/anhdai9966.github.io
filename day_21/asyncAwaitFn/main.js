let money = 31;
const buyIphone = () => {
  return new Promise((resolve, reject) => {
    if (money >= 30) {
      resolve("Đủ tiền mua iphone");
    } else {
      reject("Không đủ tiền mua iphone, kiếm thêm nhiều tiền nữa");
    }
  });
};

const buyAirpod = () => {
  return new Promise((resolve, reject) => {
    if (money - 30 >= 5) {
      resolve("Mua thêm AirPod");
    } else {
      reject("Không đủ tiền mua Airpod, kiếm thêm nhiều tiền nữa");
    }
  });
};

// async function methodName () {}

const buy = async () => {
  try {
    let res = await buyIphone();
    console.log(res);

    let res1 = await buyAirpod();
    console.log(res1);
  } catch (error) {
    console.log(error);
  }
  return "Về nhà";
};

const data = buy();
console.log(data);

data.then((res) => {
  console.log(res);
});
