import React, { useEffect, useState } from "react";
import "../App.css"

function UseEffectTh1(){
    const [title, setTitle] =  useState('')

    useEffect(()=>{
        document.title = title
        console.log("using useEffect.....")
    })

    return(
        <div className="App">
            <input
            type="text"
            className="block mt-24 w-lg px-4 py-2 text-sm text-gray-900 border border-black focus:text-black focus:outline-none focus:ring-0 "
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
    )
}

export default UseEffectTh1
