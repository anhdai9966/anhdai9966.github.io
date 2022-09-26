import { useReducer } from "react"

/**
 * initial state
 * action type
 * reducer
 * @returns 
 */

// 1. initial state
const initialState = 0;

// 2. action type
const ADD_COUNT = 'ADD_COUNT';
const SUBTRACT_COUNT = 'SUBTRACT_COUNT';

// 3. tạo reducer
/**
 * 
 * @param {*} state hiện tại
 * @param {object} action chứa thông tin thay đổi state 
 * - type: kiểu hành động
 * - payload: dữ liệu gửi lên để xử lý state
 */
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return state + action.value;
    case SUBTRACT_COUNT:
      return state - action.value;
    default:
      throw new Error('Acction invalid')
  }
}

export default function CounterR () {
  // count : state hiện tại
  // dispatch: là fn gửi thông tin action {object} cho reducer để thay đổi state
  const [count, dispatch] = useReducer(reducer, initialState);

  const handAdd = function () {
    dispatch({type: "ADD_COUNT", value: 5})
  }
  const handSubtract = function () {
    dispatch({type: "SUBTRACT_COUNT", value: 3})
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handAdd}>Công</button>
      <button onClick={handSubtract}>Trừ</button>
    </>
  )
}