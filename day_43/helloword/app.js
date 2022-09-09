// Tạo React Element
const h1 = React.createElement('h1', null, 'Hello world');
const h2 = React.createElement('h2', { class: 'heading' }, 'Hello H2');

// component, props, state
const HelloName = (props) => {
  const {name} = props;

  return React.createElement(
    'h1',
    {className: 'heading'},
    `Hello ${name}`
  )
  
}

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render
root.render(h1);
root.render(HelloName({name: 'dai'}));