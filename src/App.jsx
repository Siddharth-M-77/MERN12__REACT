import React, { useContext } from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

const App = () => {

  return (
    <div className="w-screen h-screen mx-auto bg-gray-700 p-4 ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Product />} >
        <Route path="/products/:category" element={<ProductDetails />} />
        </Route>
        
      </Routes>
    </div>
  );
};

export default App;
