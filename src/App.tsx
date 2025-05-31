import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
