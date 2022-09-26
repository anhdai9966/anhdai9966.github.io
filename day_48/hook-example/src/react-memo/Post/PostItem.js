import { memo } from 'react'

function PostItem() {
  console.log('render item')
  return (
    <h1>PostItem</h1>
  )
}

export default memo(PostItem);