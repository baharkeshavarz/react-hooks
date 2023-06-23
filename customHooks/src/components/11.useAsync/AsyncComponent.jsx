import React from 'react'
import useAsync from './useAsync'

const AsyncComponent = () => {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
            success ? resolve("hi"): reject("Error")
        }, 1000)
    });  
  });  

  return (
    <>
      <div>Loading: {loading.toString()} </div>
      <div>{error}</div>
      <div>{value}</div>
    </>
  )
}

export default AsyncComponent