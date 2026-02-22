import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import Logo from "../images/LogoImage.png"

const Nav = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);

  // handle navbar blur on scroll
  useEffect(() => {
    const scrollHandler = () => {
      setNavbarBlur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const showMenu = () => {
    const bars = document.getElementsByClassName("bar");
    const menu = document.getElementsByClassName("NavbarLinks");

    bars[0].classList.toggle("barOne");
    bars[1].classList.toggle("barTwo");
    bars[2].classList.toggle("barThree");
    menu[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    const bars = document.getElementsByClassName("bar");
    const menu = document.getElementsByClassName("NavbarLinks");

    bars[0].classList.remove("barOne");
    bars[1].classList.remove("barTwo");
    bars[2].classList.remove("barThree");
    menu[0].classList.remove("showNavbar");
  };

  return (
    <nav className={navbarBlur ? "Navbar blur" : "Navbar"}>
      <h1
         title="Reload"
         onClick={() => window.location.reload()}
         className="Logo"
      >
         <img src={Logo} alt="Logo" className="LogoImage" />
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/about">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/project">
            <BsCodeSlash /> Project
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/resume">
            <CgFileDocument /> Resume
          </Link>
        </li>

        <li 
        className="HireMebtn"
        onClick={hideMenu}
        
        >
          <Link to="/contact">
           HireMe
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Nav;