import React, { useState } from 'react'
import useToggle from '../3.useToggle/useToggle'
import useDebugInformation from './useDebugInformation'

const DebugInformationComponent = () => {
  const [boolean, toggle] = useToggle(false)
  const [count, setCount] = useState(0)

  return (
    <>
      <ChildComponent boolean={boolean} count={count}/>
      <button onClick={toggle}>Toggle</button>
      <button onClick={()  => setCount(prevCount => prevCount + 1)}>Increment</button>
    </>
  )
}

function ChildComponent(props) {
   const info = useDebugInformation("ChildComponent", props);
   return (
     <>
       <div>{props.boolean.toString()}</div>
       <div>{props.count}</div>
       <div>{JSON.stringify(info, null, 2)}</div>
     </>
   )
}
export default DebugInformationComponent
