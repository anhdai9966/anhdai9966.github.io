// import { useState } from 'react';
import './App.css';
import Blog from './use-context/Blog';
// import Content from './custom-hook/Content';
// import ColorBox from './custom-hook/Content/ColorBox';
// import CounterR from './use-reducer/Counter';
// import TodoList from './use-reducer/TodoList';
// import Post from './react-memo/Post';
// import Content2 from './use-ref/Content';
// import Clock from './use-effect/Clock';
// import Api from './use-effect/Api';
// import Content from './use-effect/Content';
// import Counter from './use-state/Counter';

/**
 * useState
 * useEffect
 * useRef
 * HOC : react.memo
 * useMemo
 * useCallback
 * useContext
 * useReducer
 * global state
 */


function App() {
  // const [isShowClock, setIsShowClock] = useState(true);

  return (
    // <div className="App" style={{height: 3000}}>
    <div className="App">
      {/* <Counter/> */}
      {/* <Content /> */}
      {/* <Api/> */}
      {/* <button onClick={() => setIsShowClock(!isShowClock)}>Toggle</button>
      {isShowClock && <Clock />} */}
      {/* <Content2/> */}
      {/* <Post/> */}
      {/* <Content/> */}
      {/* <ColorBox/> */}
      {/* <CounterR/> */}
      {/* <TodoList/> */}
      <Blog />
    </div>
  );
}

export default App;
