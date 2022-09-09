const randomColor = function () {
  const x = Math.round(0xffffff * Math.random()).toString(16);
  const y = 6 - x.length;
  const z = '000000';
  const z1 = z.substring(0, y);
  const color = '#' + z1 + x;
  return color;
};

const persistColors = function (colors) {
  localStorage.setItem('colors', JSON.stringify(colors));
};

const App = function () {
  let colors = [];
  const [color, setColor] = React.useState('blue');

  const colorsStorage = localStorage.getItem('colors');
  if (colorsStorage) colors = JSON.parse(colorsStorage);

  const changeColor = function() {
    const color = randomColor();

    setColor(color);
    colors.push(color);

    persistColors(colors);
  }

  return (
    <React.Fragment>
      <div className="box" onClick={changeColor} style={{background: color}}></div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
