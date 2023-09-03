'use client'
import { useEffect, useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount!!")
    return () => { console.log("unmount!!") }
  }, [count])
  return (
    <>
      <div className="flex flex-row justify-around">
        <div className=' flex justify-center w-[30%] bg-red-500'>count: {count}</div>
        <div className=' flex justify-center w-[30%] bg-red-400'>02</div>
        <div className=' flex justify-center w-[30%] bg-red-500'>03</div>
      </div>
      <div className="flex justify-center">
        <button className=
          " bg-blue-500 active:bg-green-500 mx-[100px] px-[10px] w-[300px] active:w-[290px] "
          onClick={() => setCount((p) => p + 1)}>Hey I am button</button>
      </div>
    </>
  )
}
