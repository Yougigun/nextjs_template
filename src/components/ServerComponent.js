import { useEffect, useState } from "react";

export function ServerComponent() {
    let [Count, setCount] = useState(0)
    return (
        <>
            <div className="flex flex-row justify-around">
                <div className=' flex justify-center w-[30%] bg-red-500'>count: {Count} </div>
                <div className=' flex justify-center w-[30%] bg-red-400'>02</div>
                <div className=' flex justify-center w-[30%] bg-red-500'>03</div>
            </div>
            <button onClick={() => { setCount(prev => prev + 1) }}>button here</button>
        </>
    )
}
