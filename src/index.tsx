import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Todo from "./Todo";
import reportWebVitals from "./reportWebVitals";
import UseEffectTh2 from "./learn_hooks/UseEffectTh2";
import UseEffectTh3 from "./learn_hooks/UseEffectTh3";
import UseEffectTh1 from "./learn_hooks/UseEffectTh1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Todo /> */}
    <App />
    {/* <UseEffectTh1/> */}
    {/* <UseEffectTh2/> */}
    {/* <UseEffectTh3/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
