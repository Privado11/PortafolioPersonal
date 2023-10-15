import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../styles/ProjectsCards.css';
import logo from '../assets/logo.png';

function ProjectsCards({ titulo, descripcion, link }) {


  return (
    <Card
        className="projects__card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <CardContent className='projects__card-content'>
            <div className='projects__card-content-img'>
                <img className='projects__card-img' src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Imagen del proyecto" />
            </div>
            <div className='project__card-content-info'>
                <Typography component="div" className='projects__card-content-tittle'>
                    {titulo}
                </Typography>
                <Typography className='projects__card-content-description'>
                    {descripcion}
                </Typography>
                <div className='projects__card-content-btn'>
                    <a href={link}>Ver proyecto</a>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}

export { ProjectsCards };
