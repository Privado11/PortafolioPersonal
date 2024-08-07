import { useEffect, useRef, useState } from "react";
import { Element, scroller } from "react-scroll";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Social } from "./components/Social.jsx";
import "./App.css";

function App() {
  const sections = useRef(["Home", "About", "Projects", "Contact"]);
  const [currentSection, setCurrentSection] = useState(0);

  const selectedSection = (section) => {
    const index = sections.current.indexOf(section);
    setCurrentSection(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowDown":
          setCurrentSection((prevSection) =>
            Math.min(prevSection + 1, sections.current.length - 1)
          );
          break;
        case "ArrowUp":
          setCurrentSection((prevSection) => Math.max(prevSection - 1, 0));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    scrollToSection(sections.current[currentSection]);
  }, [currentSection]);

  return (
    <>
      <Header
        selectedSection={selectedSection}
        section={sections.current[currentSection]}
      />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Social />
    </>
  );
}

export default App;
