let colors = [
  '#3498db',
  '#9b59b6',
  '#e74c3c',
  '#2c3e50',
  '#d35400',
]

const App = function () {
  const [colorList, setColorList] = React.useState(colors);
  const [count, setCount] = React.useState(colorList.length);

  const removeBox = function (index) {
    colorList.splice(index, 1);
    setColorList(colorList);
    setCount(colorList.length);
  }

  const moreBox = function () {
    setColorList([...colorList, ...colors]);
  }

  const Box = function ({color, index}) {
    return <div className="box" onClick={() => removeBox(index)} style={{background: color}}></div>;
  };

  return (
    <React.Fragment>
      <div className="wrap">
        <h1> JS DOM</h1>
        <button id="btn" onClick={moreBox}>More boxes</button>
        <h4 id="score"> Total box:<span className="points">{count}</span></h4>

        <div className="boxes">
        {colorList.map((color, index) => <Box key={index} index={index} color={color}></Box>)}
        </div>
      </div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
