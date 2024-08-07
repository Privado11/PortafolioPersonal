import React from "react";
import { ProjectsCards } from "./ProjectsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";
import toDoLIst from "../assets/ToDoList.png";
import encriptador from "../assets/Encriptador.png";
import todoListCel from "../assets/ToDoListCel.png";
import encriptadorCel from "../assets/EncriptadorCel.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Projects.css";

function Projects() {
  const isCel = useMediaQuery("(max-width: 600px)");
  const proyectos = [
    {
      key: 1,
      titulo: "ToDo List",
      descripcion:
        "Todo List en React: Simplifica tu vida con esta aplicación minimalista. Añade, marca como completadas y borra tareas con facilidad. Una solución eficiente para mantener tus pendientes bajo control, sin complicaciones.",
      img: toDoLIst,
      imgCel: todoListCel,
      linkProject: "https://privado11.github.io/ToDoList/",
      linkRepository: "https://github.com/Privado11/ToDoList",
    },
    {
      key: 2,
      titulo: "Encriptador de texto",
      descripcion:
        "Mi primer proyecto de encriptador de texto: Como parte de mi práctica, desarrollé este sencillo pero funcional encriptador de texto. Una manera divertida de explorar el mundo de la seguridad informática mientras aprendo nuevas habilidades. ¡Dale un vistazo y descubre lo que puedo hacer!",
      img: encriptador,
      imgCel: encriptadorCel,
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

  const settingsCel = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: true,
    modules: [Navigation],
    speed: 1000,
  };

  return (
    <main>
      <div className="projects__content">
        <h2 className="projects__tittle">Proyectos</h2>
        <div className="projects__description">
          <p className="projects__description-text">
            Descubre mis proyectos simples pero impactantes. Desde el boceto
            hasta la realidad, cada uno tiene su propia historia. ¡Échales un
            vistazo y encuentra inspiración en la simplicidad!
          </p>
        </div>
        <div className="projects__container-cards">
          <Swiper {...(isCel ? settingsCel : settings)} className="mySwiper">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="projects-container-cards-list">
                <SwiperSlide
                  key={proyecto.key}
                  className="projects-container-cards-list"
                >
                  <ProjectsCards
                    titulo={proyecto.titulo}
                    descripcion={proyecto.descripcion}
                    img={isCel ? proyecto.imgCel : proyecto.img}
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
