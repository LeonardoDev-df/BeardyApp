import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
