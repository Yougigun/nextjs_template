'use client'
import { ServerComponent } from "@/components";
import { useState } from "react";

export default function About() {
  let [count, setCount] = useState(0);
  return (
    <>
      <ServerComponent></ServerComponent>
    </>
  )
}
