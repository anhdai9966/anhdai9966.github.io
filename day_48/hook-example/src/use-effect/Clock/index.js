import { useEffect, useState } from "react"

export default function Clock() {
  const [time, setTime]  = useState(() => {
    let now = new Date().toLocaleTimeString();
    return now;
  });

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     console.log('inside interval')
  //     let now = new Date().toLocaleTimeString();
  //     setTime(now);
  //   }, 1000);

  //   // clear up
  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [])

  useEffect(() => {
    const handleScoll = () => {
      console.log('scroll');
    }

    window.addEventListener('scroll', handleScoll);

    // clear up
    return () => {
      window.removeEventListener('scroll', handleScoll);
    }
  }, [])

  return (
    <div>
      <h1>Clock: {time}</h1>
      {console.log('render')}
    </div>
  )
};
