import React from "react";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";

import "./App.css";
import LandingPage from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
