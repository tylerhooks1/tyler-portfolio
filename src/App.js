import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
function App() {
  return (
    <main className="p-6 text-black dark:text-white body-font">
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
