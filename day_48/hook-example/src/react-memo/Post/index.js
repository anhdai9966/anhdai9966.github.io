import { useCallback, useMemo, useState } from 'react'
import PostItem from './PostItem'

export default function Post() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {id: 1, name: 'a', price: 1000},
    {id: 2, name: 'b', price: 2000},
    {id: 3, name: 'c', price: 3000},
  ])

  // memo tránh render lại component khi không cần thiết
  // chỉ cần thay đổi về mặt giá trị thì memo sẽ render
  
  // useCallback tránh tạo lại function nếu không cần thiết
  // useCallback: count func = useCallback(callback, [deps])
  
  const handleClick = useCallback(() => {
    console.log('Handle click')
  }, [])
  // useMemo tránh tính toan giá trị
  // useMemo const value = useMemo(callbackFunction, [deps])

  const total = useMemo(() => {
    const rs = products.reduce((t, p) => t + p.price, 0);
    console.log(rs)
    return rs;
  }, [products])

  const addProduct = () => {
    console.log('run')
    setProducts([...products, {
      id: products.length + 1,
      name: 'New pro' + Math.random(),
      price: 5000,
    }])
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={addProduct}>Add pro</button>
      
      <PostItem handleClick={handleClick}/>
    </>
  )
}