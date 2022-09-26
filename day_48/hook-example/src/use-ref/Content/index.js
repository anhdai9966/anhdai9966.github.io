import { useEffect, useRef, useState } from "react"
import videoTiktok from './tiktok.mp4';

const colors = ['red', 'blue', 'yellow', 'green'];

const randomColor = (currentColor) => {
  let newColor = currentColor;
  while(newColor === currentColor) {
    let index = Math.floor(Math.random() * colors.length);
    newColor = colors[index];
  }
  return newColor;
}

export default function Content2() {
  const [value, setValue]  = useState('');
  const [time, setTime] = useState(100);
  const [color, setColor] = useState('red');

  const inputRef = useRef();
  const countRef = useRef(0);
  const videoRef = useRef();
  const timeRef = useRef();
  const colorRef = useRef();

  countRef.current++;
  
  useEffect(() => {
    inputRef.current.focus();
  })

  const handlePlay = () => {
    videoRef.current.play();
  }
  
  const handlePause = () => {
    videoRef.current.pause();
  }

  const handleStart = () => {
    if (timeRef.current) return ;
    timeRef.current = setInterval(() => {
      setTime(time => time - 1)
    }, 1000);
  }
  
  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = 0;
  }

  const handleChangeColor = () => {
    let newColor = randomColor(colorRef.current);
    colorRef.current = newColor;
    setColor(newColor);
  }

  return (
    <div>
      <div style={{width: 200, height: 200, background: color}} onClick={handleChangeColor}></div>
      <h1>Đồng hồ bấm giờ: {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <h1>{countRef.current}</h1>
      <input placeholder="Name" value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef}/>
      {console.log('render')}
      <hr/>

      <video ref={videoRef} src={videoTiktok} width={300}/>
      <hr/>

      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
};
