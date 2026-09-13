import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ProjectDetails from "./Components/ProjectDetails";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import MoveToTop from "./Components/MoveToTop";

import HashLoader from "react-spinners/HashLoader";

// Single Page Container: Saare Sections Ek Sath Continuous Scroll Honge
const MainPortfolio = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader
            color="#a855f7"
            size={70}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
        <div className="app">
          <Nav />
          <MoveToTop />

          <main className="page-content">
            <Routes>
              {/* Main Landing Page (Sare sections continuous scroll honge) */}
              <Route path="/" element={<MainPortfolio />} />

              {/* Dynamic Route (Project details open karne ke liye) */}
              <Route
                path="/projects/:projectId"
                element={<ProjectDetails />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;