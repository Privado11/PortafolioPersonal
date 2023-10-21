import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/ProjectsCards.css";
import logo from "../assets/logo.png";

function ProjectsCards({
  titulo,
  descripcion,
  img,
  linkProject,
  linkRepository,
}) {
  return (
    <Card className="projects__card">
      <CardContent className="projects__card-content">
        <div className="projects__card-content-img">
          <img
            className="projects__card-img"
            src={img}
            alt="Imagen del proyecto"
          />
        </div>
        <div className="project__card-content-info">
          <Typography component="div" className="projects__card-content-tittle">
            {titulo}
          </Typography>
          <Typography className="projects__card-content-description">
            {descripcion}
          </Typography>
          <div className="projects__card-content-btn">
            <a href={linkProject} target="_blank">
              Ver proyecto
            </a>
            <a href={linkRepository} target="_blank">
              Ir al repositorio
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { ProjectsCards };
