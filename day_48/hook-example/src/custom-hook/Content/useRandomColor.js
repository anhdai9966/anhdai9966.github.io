import { useState, useRef } from 'react'


const colors = ['red', 'blue', 'yellow', 'green'];

const randomColor = currentColor => {
  let newColor = currentColor;
  while (newColor === currentColor) {
    let index = Math.floor(Math.random() * colors.length);
    newColor = colors[index];
  }
  return newColor;
};

const useRandomColor = function (initValue) {

  const [color, setColor] = useState('red');
  const colorRef = useRef();

  const handleChangeColor = () => {
    let newColor = randomColor(colorRef.current);
    colorRef.current = newColor;
    setColor(newColor);
  };

  return [color, handleChangeColor];
}

export default useRandomColor;