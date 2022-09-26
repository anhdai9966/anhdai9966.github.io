import useRandomColor from './useRandomColor';

export default function ColorBox() {
  const [color, handleChangeColor] = useRandomColor(true);

  return (
    <>
      <div style={{ width: 200, height: 200, background: color }} onClick={handleChangeColor}></div>
    </>
  );
}
