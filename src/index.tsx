import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Todo from "./Todo";
import reportWebVitals from "./reportWebVitals";
import UseEffectWithTimer from "./learn_hooks/UseEffectWithTimer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Todo /> */}
    {/* <App/> */}
    {/* <UseEffectWithTimer/> */}
  </React.StrictMode>
);

reportWebVitals();
