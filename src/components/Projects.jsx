import React from "react";
import { ProjectsCards } from "./ProjectsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import toDoLIst from "../assets/toDoList.png";
import encriptador from "../assets/encriptador.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Projects.css";

function Projects() {
  const proyectos = [
    {
      key: 1,
      titulo: "Proyecto 1",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibuss",
      img: toDoLIst,
      linkProject: "https://privado11.github.io/ToDoList/",
      linkRepository: "https://github.com/Privado11/ToDoList",
    },
    {
      key: 2,
      titulo: "Proyecto 2",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus2.",
      img: encriptador,
      linkProject: "https://privado11.github.io/Encriptador-de-textos/",
      linkRepository: "https://github.com/Privado11/Encriptador-de-textos",
    },
    {
      key: 3,
      titulo: "Proyecto 3",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus3.",
      linkProject: "",
      linkRepository: "",
    },
    {
      key: 4,
      titulo: "Proyecto 4",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus4.",
      linkProject: "",
      linkRepository: "",
    },
    {
      key: 5,
      titulo: "Proyecto 5",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus7.",
      linkProject: "",
      linkRepository: "",
    },
    {
      key: 6,
      titulo: "Proyecto 6",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus9.",
      linkProject: "",
      linkRepository: "",
    },
  ];

  const settings = {
    effect: "cube",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Pagination, Navigation],
    speed: 2000,
  };

  return (
    <main>
      <div className="projects__content">
        <h2 className="projects__tittle">Proyectos</h2>
        <div className="projects__description">
          <p className="projects__description-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
            perspiciatis, rem voluptates tempore totam impedit ea natus sed
            ipsam dignissimos nisi cum fugit eaque quos nam ullam iusto in
            praesentium?
          </p>
        </div>
        <div className="projects__container-cards">
          <Swiper {...settings} className="mySwiper">
            {proyectos.map((proyecto) => (
              <div className="projects-container-cards-list">
                <SwiperSlide key={proyecto.key}>
                  <ProjectsCards
                    titulo={proyecto.titulo}
                    descripcion={proyecto.descripcion}
                    img={proyecto.img}
                    linkProject={proyecto.linkProject}
                    linkRepository={proyecto.linkRepository}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}

export { Projects };
