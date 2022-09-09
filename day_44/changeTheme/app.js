// Danh sách theme
const themes = [
  {
      colorHeading: "#2C3639", // light theme
      colorText: "#3F4E4F",
      bg: "#F9F5EB",
  },
  {
      colorHeading: "#EAE3D2", // dark theme
      colorText: "#F9F5EB",
      bg: "#100720",
  },
];

const App = function () {
  const [theme, setThem] = React.useState(themes[0]);

  const changeSelect = function(select) {
    setThem(themes[+select.target.value]);
  }
  
  return (
    <div style={{background: theme.bg}}>
      <select onChange={e => changeSelect(e)}>
       <option value='0'>Light Theme</option>
       <option value='1'>Dark Theme</option>
      </select>

      <h2 style={{color: theme.colorHeading}}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h2>

      <p style={{color: theme.colorText}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          placeat necessitatibus, vitae laboriosam in quos, nesciunt modi
          error sit porro, reprehenderit voluptatem dolore libero
          incidunt. Illo mollitia fugit quam inventore?
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);