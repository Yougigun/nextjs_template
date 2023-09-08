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
      code something here
    </>
  )
}
