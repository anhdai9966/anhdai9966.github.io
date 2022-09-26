import Shop from './Shop';
import useToggle from './useTogle';

export default function Content() {
  const [isShow, handleToggle] = useToggle(true);

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow && <p>ban abn ban</p>}

      <Shop/>
    </div>
  )
}
