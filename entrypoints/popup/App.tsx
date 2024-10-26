import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import wxtLogo from "/wxt.svg";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-32 w-64 flex justify-center items-center bg-sky-100">
        <div className="flex flex-col items-center">
        <p className="text-xl font-semibold ">Linkedin AI Extension </p>
        <span className="text-l font-semibold text-blue-500">v1.0</span>
        <span className="text-l font-semibold ">By: <a href="https://github.com/adgamerx/">Aman Sharma</a></span>
        </div>
      </div>
    </>
  );
}

export default App;
