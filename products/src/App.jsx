import "./global.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products";
import React from "react";
import View from "./Components/View";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/view" element={<View/>}/>
    |</Routes>
    </BrowserRouter>
  )
}

export default App