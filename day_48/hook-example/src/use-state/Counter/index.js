import { useState } from "react"

let number = [1, 2, 3, 4, 5];

export default function Counter () {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(() => {
    // để khởi tạo giá trị ban đầu thì sử dụng callback trong state
    const rs = number.reduce((a, b) => a + b, 0);
    return rs;
  });

  const [user, setUser] = useState({
    id: 1,
    name: 'cd',
    email: 'cd@gmail.com',
  })

  const [products, setProducts] = useState([
    {id: 1, name: 'a', price: 1000},
    {id: 2, name: 'b', price: 2000},
    {id: 3, name: 'c', price: 3000},
  ])

  // mỗi lần thay đổi state thì sẽ render lại 1 lần
  const addCount = function () {
    setCount(count + 1);
  }
  
  // setState nhiều lần thì sẽ gom lại thì chỉ render 1 lần
  const addMutil = function () {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // cập nhật state dựa trên state cũ để có thể + 3 chỉ render 1 lần
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  const changName = function () {
    // state sẽ thay thế toàn bộ biến ban đầu
    // setUser({name: 'abc'});
    // để dữ lại các giá trị khác thì
    setUser({...user, name: 'abc'})
  }

  const changePrice = function () {
    let id = 1;
    let newPrice = 5000;

    let newProducts = products.map(product => {
      if (product.id === id) {
        return {...product, price : newPrice}
      }
      return product;
    })

    setProducts(newProducts);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={addCount}>Add</button>

      <button onClick={addMutil}>add Mutil</button>

      <h1>User: {JSON.stringify(user)}</h1>

      <button onClick={changName}>Change name</button>

      <h1>Product</h1>
      <ul>
        {products.map(product => <li key={product.id}>{product.name} - {product.price}</li>)}
      </ul>
      <button onClick={changePrice}>Change price</button>

      <h1>Counter: {total}</h1>
      {console.log('render')}
    </>
  )
}