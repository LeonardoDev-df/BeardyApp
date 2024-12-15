import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Features />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
