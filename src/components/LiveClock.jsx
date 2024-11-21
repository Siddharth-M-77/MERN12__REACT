import React, { useEffect, useState } from 'react'

const LiveClock = () => {
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    //using setinterval

  // setInterval(() => {
  //   setTime(new Date());
  // }, 1000);

  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center min-h-screen bg-black">
    <h1 className="text-8xl font-bold mb-4">Live Clock</h1>
    <div className="text-9xl font-mono text-blue-600">
      {time.toLocaleTimeString()}
    </div>
  </div>
  )
}

export default LiveClock
