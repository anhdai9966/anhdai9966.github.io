import { useState } from 'react'

const useToggle = function (initValue) {
  const [isShow, setIsShow] = useState(true);

  const handleToggle = () => {
    setIsShow(!isShow);
  }

  return [isShow, handleToggle];
}

export default useToggle;