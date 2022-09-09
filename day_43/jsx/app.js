const Greeting = ({ name, status }) => {
  if (status) {
    return (
      <div className="greeting" style={ {color: 'red', textTransform: 'uppercase'} }>
        <h1>Hello { name }</h1>
        <p>Bạn có khỏe không? vậy</p>
      </div>
    )
  }
  return <h1>Good bye {name}</h1>
}

const names = ["Bùi Hiên", "Thu Hằng", "Minh Duy"];

const ListName = ({names}) => {
  return (
    <ul className='name'>
      {names.map((name, index) => <li key={index}>{name}</li>)}
    </ul>
  )
}

const App = () => {
  return (
    <React.Fragment>
      <Greeting name="Dai" status={false} />
      <Greeting name="DaiLai" status={true} />
      <Greeting name="dailc" status={false} />
      
      <ListName names={names}/>
      <ListName names={[...names, ...names]}/>
    </React.Fragment>
  )
}

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render
root.render(<App />);