import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const tabs: string[] = ["posts", "comments", "albums"];

function UseEffectTh3() {
  const [datas, setDatas] = useState<any[]>([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response: any) => {
        return response?.data;
      })
      .then((datas) => {
        setDatas(datas);
      });
    console.log("calling API....")
  }, [type]);

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
    </div>
  );
}

export default UseEffectTh3;
