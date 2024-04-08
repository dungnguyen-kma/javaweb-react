import React, { useEffect, useState } from "react";
import "./App.css";
import UseEffectTh3 from "./learn_hooks/UseEffectTh3";

function App() {
  const [showUseEffectTH3, setShowUseEffectTH3] = useState(false);

  return (
    <div className=" text-center flex flex-col items-center">
      <button
        className="text-black hover:bg-gray-500 focus:outline-none font-medium text-sm px-4 py-2 bg-gray-300"
        onClick={() => setShowUseEffectTH3(!showUseEffectTH3)}
      >
        Toggle
      </button>
      {/* mount/unmount component */}
      {showUseEffectTH3 && <UseEffectTh3 />}
    </div>
  );
}

export default App;
