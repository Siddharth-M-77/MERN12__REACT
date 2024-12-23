import React, { useContext } from "react";
import { dataContext } from "./components/DataContext";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Product from "./components/Product";

const App = () => {
  // const [data] = useContext(dataContext)

  return (
    <div className="w-screen h-screen mx-auto bg-gray-700 p-4 ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Product />} />

      </Routes>
    </div>
  );
};

export default App;
