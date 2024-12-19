import React, { useState } from "react";

const formHandling = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setcity] = useState("Bhopal");
  const [gender, setgender] = useState("male");
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      fullname: fullname,
      email: email,
      city: city,
      gender: gender,
    };

  };
  return (
    <div className="w-screen h-screen   bg-indigo-600 flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="flex items-center bg-gray-700 opacity-90 text-black min-h-[400px] shadow-md min-w-[400px]  rounded-lg p-10 justify-around gap-5 flex-col"
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
        <div className="flex gap-5">
          <input
            onChange={(e) => setgender(e.target.value)}
            type="radio"
            value="male"
          />
          Male
          <input
            type="radio"
            onChange={(e) => setgender(e.target.value)}
            value="female"
          />{" "}
          female
        </div>
        <select
          onChange={(e) => setcity(e.target.value)}
          className="p-4 w-full bg-white my-6"
        >
          <option value="">City</option>
          <option value="bhopal">Bhopal</option>
          <option value="Gwalior">Gwalior</option>
          <option value="Noida">Noida</option>
          <option value="Pune">Pune</option>
        </select>
        <input className="px-6 py-2 rounded-lg bg-red-500" type="submit" />
      </form>
    </div>
  );
};

export default formHandling;
