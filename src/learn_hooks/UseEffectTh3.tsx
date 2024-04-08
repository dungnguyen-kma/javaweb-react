import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const tabs: string[] = ["posts", "comments", "albums"];

function UseEffectTh3() {
  const [datas, setDatas] = useState<any[]>([]);
  const [type, setType] = useState("posts");
  const [showGoTopBtn, setShowGoTopBtn] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response: any) => {
        return response?.data;
      })
      .then((datas) => {
        setDatas(datas);
      });
  }, [type]);

  useEffect(() =>{
    console.log("using listener....")
    const handleScroll =() =>{
      if(window.scrollY >= 200){
        setShowGoTopBtn(true)
      }else(
        setShowGoTopBtn(false)
      )
    }
    window.addEventListener("scroll", handleScroll)
    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  return (
    <div className="App">
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            style={
              type === tab
                ? {
                    color: "#fff",
                    backgroundColor: "#333",
                  }
                : {}
            }
            className="border-solid border-2 px-6 mx-4 hover:bg-gray-300"
            onClick={() => {
              setType(tab);
            }}
          >
            {tab}
          </button>
        );
      })}
      <ul className="mt-6">
        {datas.map((data) => (
          <li key={data?.id}>{data?.title || data?.name}</li>
        ))}
      </ul>
      {showGoTopBtn && (
        <button
        className="text-black hover:bg-gray-500 focus:outline-none font-medium text-sm px-4 py-2 bg-gray-300 fixed bottom-20 right-20"
        onClick={() =>{window.scrollTo(0,0)}}
      >
        Go to top
      </button>
      )}
    </div>
  );
}

export default UseEffectTh3;
