const Count = function () {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState('#333');

  // setState là những hàm bất đồng bộ
  const minusCount = function () {
    setCount(count - 1);
  }
  const plusCount = function () {
    setCount(count + 1)
  }

  // cách 1
  // khi count thay đổi thì chạy lại funtion
  React.useEffect(() => {
    changeColor();
  }, [count]) // nếu không có thì chạy lần đầu

  const changeColor = () => {
    if (count > 0) setColor('green')
    else if (count == 0) setColor('#333')
    else setColor('red')
  }

  return (
    <div className="main-container">
        <h1 className="title">Đếm số</h1>
        <h1 id="counter" style={{color: color}}>{count}</h1>
        <div className="btn-container">
            <button className="btn counterBtn prevBtn" onClick={minusCount}>Trừ</button>
            <button className="btn counterBtn nextBtn" onClick={plusCount}>Cộng</button>
        </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Count />);