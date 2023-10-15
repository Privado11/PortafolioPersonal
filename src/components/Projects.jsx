import React from 'react';
import Slider from 'react-slick'; // Importa Slider de react-slick
import { ProjectsCards } from './ProjectsCards';
import '../styles/Projects.css';

function Projects() {
  const proyectos = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      titulo: 'Proyecto 3',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      titulo: 'Proyecto 4',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      titulo: 'Proyecto 5',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      titulo: 'Proyecto 6',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
  ];

  const settings = {
    infinite: true,    
    speed: 1000,        
    slidesToShow: 2,   
    slidesToScroll: 1, 
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <main className='main__projects'>
      <div className='projects__content'>
        <h2 className='projects__tittle'>Proyectos</h2>
        <div className='projects__description'>
          <p className='projects__description-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, perspiciatis, rem voluptates tempore totam impedit ea natus sed ipsam dignissimos nisi cum fugit eaque quos nam ullam iusto in praesentium?
          </p>
        </div>
        <div className='projects__container-cards'>
          <Slider {...settings}>
            {proyectos.map((proyecto, index) => (
                <div className='projects-container-cards-list'>
                    <ProjectsCards key={index} titulo={proyecto.titulo} descripcion={proyecto.descripcion} />
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}

export { Projects };
