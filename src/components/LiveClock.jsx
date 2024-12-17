import { useEffect, useState } from "react";
// import './LiveClock.css'
import css from "./LiveClock.module.css"

const LiveClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  // internal css
  const headcss = {
    backgroundColor: "red",
    color: "white",
    fontSize: "72px",
    fontWeight: "bold",
    textShadow: "2px 2px black"
  }

  return (
    <div className="bg-black flex items-center justify-center flex-col w-screen h-screen">
      {/* inline-css */}
      <h1 style={{ backgroundColor: "transparent" }} className="text-9xl font-bold">Live Clock</h1>
      {/* here i am using external  css with clock class */}
      {/* <h1 className="clock text-9xl font-bold">Live Clock</h1> */}

      <h1 className="text-8xl font-semibold mt-12">{time}</h1>
      <h1 className={css.clock2}>{time}</h1>
    </div>
  );
};

export default LiveClock;
