import React from "react";
import {
  Header,
  Footer,
  Blog,
  Possibility,
  Features,
  Whatgpt,
} from "./container";
import { Cta, Brand, Navbar } from "./components";
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
