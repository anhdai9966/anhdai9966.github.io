import './App.css';
// import Counter from './components/Counter';
import UseEffect from './components/UseEffect';

// function App() {
//   const [user2, setUser2] = useState({
//     name: 'cd',
//     age: 30,
//     address: 'nd',
//   });

//   const [isShow, setIsShow] = useState(true);

//   const changeName = () => {
//     setUser2({...user2, name: 'Hello'})
//   };

//   const handleToggle = function () {
//     setIsShow(!isShow);
//   }

//   return (
//     <div className="App">
//       <h2>Name: {user2.name}</h2>
//       <button onClick={changeName}>Change name</button>

//       <button onClick={handleToggle}>Toggle</button>
//       {isShow && <Counter color={'red'}/>}
//     </div>
//   );
// }
function App() {
  return (
    <UseEffect />
  );
}

export default App;
