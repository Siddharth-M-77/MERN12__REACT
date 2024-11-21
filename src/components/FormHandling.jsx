import React, { useState } from "react";

const formHandling = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      fullname,
      email,
    };
    console.log(data);
  };
  return (
    <div className="w-screen h-screen   bg-indigo-600 flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="flex items-center bg-gray-700 opacity-90 min-h-[400px] shadow-md min-w-[400px]  rounded-lg p-10 justify-around gap-5 flex-col"
      >
        <input
          type="text"
          className="px-6 py-2 rounded-lg w-full bg-white"
          placeholder="Fullname"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          type="text"
          className="px-6 py-2 rounded-lg bg-white w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input className="px-6 py-2 rounded-lg bg-red-500" type="submit" />
      </form>
    </div>
  );
};

export default formHandling;
