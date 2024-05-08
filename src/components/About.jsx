import React from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import "../styles/About.css";

function About() {
  const skills = [
    { name: "Next.js", icon: <TbBrandNextjs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "GIT", icon: <AiFillGithub /> },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
  };

  return (
    <main>
      <div className="about__content">
        <h2 className="about__title">Sobre mí</h2>
        <div className="about__description">
          <p className="about__description-text">
            Desarrollador Frontend apasionado y estudiante de Ingeniería de
            Sistemas. Me encanta la tecnología y disfruto creando interfaces
            atractivas y eficientes que mejoren la experiencia de los usuarios.
            Estoy disponible para trabajar en proyectos emocionantes y
            desafiantes, así que no dudes en ponerse en contacto conmigo si
            tienes alguna pregunta o si estás interesado en trabajar juntos.
            ¡Gracias por visitar mi sitio web!
          </p>
        </div>
        <div className="about__btn-container">
          <Link className="about__btn" to="Contact" smooth={true}>
            ¡Contáctame!
          </Link>
        </div>
        <h3 className="about__skills-title">Habilidades</h3>
        <div className="about__skills">
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div key={index} className="about__skills-slide">
                <div className="about__skills-container-icon">
                  <span className="about__skills-icon">{skill.icon}</span>
                </div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}

export { About };
