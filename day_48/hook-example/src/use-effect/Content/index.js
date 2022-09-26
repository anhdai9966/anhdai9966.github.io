import { useEffect, useState } from "react"

/**
 * useEffect(callback, [deps])
 * 
 * 1. useEffect(callback) | chạy lại mỗi khi component bị re-render
 * 2. useEffect(callback, []) | chạy 1 lần duy nhất khi mount || giống componentDidMount
 * 2. useEffect(callback, [deps]) | được chạy mỗi khi deps thay đổi
 * 
 * điểm chung: đề được gọi sau lần mount đầu tiên
 * 
 * Clean up:
 * được chạy 1 lần duy nhất trước khi component bị unmount
 * chạy sau mỗi khi component bị re-render và trước khi hàm callback
 */

export default function Content () {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // th1
  // useEffect(() => {
  //   console.log('useEfect');
  // })

  // th2
  // useEffect(() => {
  //   console.log('useEfect []');
  // }, [])

  // th3
  useEffect(() => {
    console.log('useEfect []');
  }, [count])

  const addCount = function () {
    setCount(count + 1);
  }
  const addCount1 = function () {
    setCount1(count1 + 1);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={addCount}>Add</button>

      <h1>Counter 1: {count1}</h1>
      <button onClick={addCount1}>Add</button>

      {console.log('render')}
    </>
  )
}