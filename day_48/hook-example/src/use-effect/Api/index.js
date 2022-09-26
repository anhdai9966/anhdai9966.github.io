import { useEffect, useState } from "react"

const options = ['posts', 'comments', "albums"]

export default function Api() {
  const [data, setData]  = useState([]);
  const [type, setType] = useState('posts');

  useEffect(() => {
    console.log('effect api')
    // apc c1
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    // api c2
    // const fetchData = async () => {
    //   try {
    //     let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     let data = await res.json();
    //     setData(data);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // fetchData();

    // api c3
    // (async function() {
    //   try {
    //     let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     let data = await res.json();
    //     setData(data);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // })();
  }, [type])

  return (
    <div>
        {options.map(options => <button key={options} onClick={() => setType(options)}>{options}</button>)}
        <h1>{type}</h1>
      <ul>
        {data.length && data.map(item => <li key={item.id}>{item.title || item.name}</li>)}
      </ul>
      {console.log('render')}
    </div>
  )
};
