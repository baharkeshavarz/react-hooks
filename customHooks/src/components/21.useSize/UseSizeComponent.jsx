 import React, { useRef } from 'react'
import useSize from './useSize';
 
 const UseSizeComponent = () => {
   const ref = useRef();
   const size = useSize(ref); 
   return (
     <>
       <div>{JSON.stringify(size)}</div>
       <textarea ref={ref}></textarea>
     </>
   )
 }
 
 export default UseSizeComponent
 