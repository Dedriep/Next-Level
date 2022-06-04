import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Home />
        <Signup/>
        <Login />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
