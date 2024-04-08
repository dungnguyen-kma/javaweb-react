import React, { useEffect, useState } from "react";

function UseEffectWithTimer () {
    const [countdown, setCountDown] = useState(100)

    useEffect(()=>{
        const interval = setInterval(() =>{
            setCountDown(prevState => prevState - 1)
        },1000)
        return () => {
            clearInterval(interval)
        }
    },[])

 return(
    <div className=" text-center flex flex-col items-center">
        <div className="text-4xl">{countdown}</div>
    </div>
 )
}

export default UseEffectWithTimer