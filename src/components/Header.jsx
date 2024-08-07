import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header({ selectedSection, section }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handledSelected = (item) => {
    setSelectedItem(item);
    setMenuOpen(!menuOpen);
    selectedSection(item);
  };

  useEffect(() => {
    setSelectedItem(section);
  }, [section]);

  return (
    <header>
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img className="header__logo-img" src={logo} alt="logo" />
          </div>
          <span className="header__logo-text">Walter Jiménez</span>
        </div>
        <div className="header__navbar">
          <button className="header__navbar-btn" onClick={() => toggleMenu()}>
            <span>{menuOpen ? <AiOutlineClose /> : <FiMenu />}</span>
          </button>
          <ul className={`header__navbar-menu ${menuOpen ? "open" : ""}`}>
            <li>
              <a
                onClick={() => handledSelected("Home")}
                className={selectedItem == "Home" ? "selected" : ""}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                onClick={() => handledSelected("About")}
                className={selectedItem == "About" ? "selected" : ""}
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                onClick={() => handledSelected("Projects")}
                className={selectedItem == "Projects" ? "selected" : ""}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                onClick={() => handledSelected("Contact")}
                className={selectedItem == "Contact" ? "selected" : ""}
              >
                Contáctame
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export { Header };
