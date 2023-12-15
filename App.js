
import React from "react";
import Navbar from "./Navbar";
import Card from "./Card"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
     
      
    </div>

  );
}

export default App;
