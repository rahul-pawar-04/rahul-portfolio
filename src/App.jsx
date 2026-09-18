import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ThreeBackground from "./components/ThreeBackground";
import Loader from "./components/Loader";
import MouseGlow from "./components/MouseGlow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MouseGlow />

      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>

      <ThreeBackground />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;