import useToggle from './useTogle'

export default function Shop() {
  const [isShow, handleToggle] = useToggle(true);
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow && <h1>ban abn ban</h1>}
    </div>
  )
}
