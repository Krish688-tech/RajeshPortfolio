import useSmoothScroll from "./hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";

function App() {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}

export default App;