import React from "react"; 
import About from "./components/About"; 
import Contact from "./components/Contact"; 
import Navbar from "./components/Navbar"; 
import Projects from "./components/Projects";
import Skills from "./components/Skills"; 
import Experience from "./components/Experience"; 


function App() {
  return (
    <main className="bg-cream text-gray-400 body-font">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
