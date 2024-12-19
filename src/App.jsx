import React, { useContext } from "react";
import { dataContext } from "./components/InformationContext";

const App = () => {
  const [data] = useContext(dataContext)
  console.log(data)
  return (
    <div className="w-screen h-screen mx-auto bg-gray-700 p-4 flex items-center justify-center">
      <h1 className="text-8xl font-extrabold text-white ">{data}</h1>
    </div>
  );
};

export default App;
