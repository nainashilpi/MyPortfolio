import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Contact from "./Components/Contact";

import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";

import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader
            color="#9067C6"
            size={100}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop />
          <Lottie className="bgtwo" animationData={nightsky} loop />
          <Lottie className="bgtemp" animationData={nightsky} loop />

          <Nav />
          <MoveToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;