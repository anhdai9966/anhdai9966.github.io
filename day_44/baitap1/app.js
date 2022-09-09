const arr = ['Item 1', 'Item 2', 'Item 3'];

const App = function () {
  const [items, setItems] = React.useState(arr);
  const [value, setValue] = React.useState('');
  const [hide, setHide] = React.useState(true);
  const [toggle, setToggle] = React.useState('block');

  const addItem = function () {
    if (!value) return;
    setItems([...items, value]);
    setValue('');
  };

  const removeItem = function () {
    if (!items.length) return;

    setItems(items.slice(0, items.length - 1));
  };

  const hiddenList = function () {
    setHide(!hide);
  };

  React.useEffect(() => {
    toggleList();
  }, [hide]);

  const toggleList = function () {
    hide ? setToggle('block') : setToggle('none');
  };

  return (
    <React.Fragment>
      <input type="text" name="add" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={addItem}>Add</button>

      <button onClick={removeItem}>Remove</button>

      <button onClick={hiddenList}>Hide</button>

      <ul className="list" style={{ display: toggle }}>
        {items.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))}
      </ul>
    </React.Fragment>
  );
};

const Item = function ({ item }) {
  return <li>{item}</li>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
