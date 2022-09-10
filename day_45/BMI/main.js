const App = function () {
  const [bmi, setBmi] = React.useState(0);
  const [validateWeight, setValidateWeight] = React.useState('');
  const [validateHeight, setValidateHeight] = React.useState('');

  const submit = function(e) {
    // chặn trình duyệt không load trang
    e.preventDefault();
    // lấy giá trị từ form
    const dataArr = new FormData(e.target);
    // trả về data 1 obj
    const data = Object.fromEntries(dataArr);
    // tính toán mbi
    calcBMI(data.weight, data.height);
  }

  // công thức BMI weight / (height * height)
  const calcBMI = function (weight, height) {
    const validateW = validateMessage(weight);
    setValidateWeight(validateW);
    
    const validateH = validateMessage(height);
    setValidateHeight(validateH);
    // nếu cả 2 là 1 chuỗi có nghĩa là validate hợp lệ thì không tính toán nữa
    if (validateW || validateH) return ; 
    // tính toán
    const resultBmi = (weight / (height * height)).toFixed(2);
    // gán vào bmiState
    setBmi(resultBmi);
  }

  const validateMessage = function (value) {
    if (!value) {
      return 'không được để trống';
    } else if (+value <= 0) {
      return 'phải > 0';
    } else if (isNaN(+value)) {
      return 'không đúng định dạng';
    } else {
      return false;
    };
  }

  return (
    <React.Fragment>
      <form onSubmit={submit}>
        <input type="text" name="weight" placeholder="Enter weight (kg)" />
        <p style={{color: 'red'}}>{validateWeight? `Weight ${validateWeight}` : ''}</p>

        <input type="text" name="height" placeholder="Enter height (m)" />
        <p style={{color: 'red'}}>{validateHeight? `Height ${validateHeight}` : ''}</p>

        <button>Calculate</button>
      </form>

      <h1>BMI: {bmi}</h1>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
