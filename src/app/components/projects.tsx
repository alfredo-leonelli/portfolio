import { ProjectItem } from "./projectItem";
import "../styles/projects.css";

export default function Projects() {
  return (
    <div className="projects-container">
      <ProjectItem
        imageSrc="/images/logoPoGOAPI.png"
        projectName="PoGOAPI"
        description="Proyecto personal realizado dentro de mi periodo de Trainee en ACL. Decidí hacer este proyecto porque me di cuenta que no había una API que tuviera información relevante del juego Pokémon GO, como los mejores ataques para cada pokémon o cuál es el mejor pokémon dependiendo de su tipo. Además de realizar la API, decidí hacer una página web para mostrar la información de una manera más amigable."
        stack="Tecnologías: NodeJS, Express, React, MongoDB, Mongoose, TypeScript, GitHub"
      ></ProjectItem>
      <ProjectItem
        imageSrc="/images/logoHRoute.png"
        projectName="HRoute"
        description="Proyecto realizado durante mi último semestre de universidad. HRoute es una aplicación web enfocada a los distintos servicios de camilleros que existen en clínicas y hospitales. Haciendo uso de un sistema hojas de ruta, la app permite a los camilleros verificar de manera fácil y rápida los distintos traslados que deben realizar y que hayan realizado. Además, permite a un administrador gestionar a los camilleros y a los traslados."
        stack="Tecnologías: PHP, MySQL, Bootstrap, HTML, GitHub"
      ></ProjectItem>
      <ProjectItem
        imageSrc="/images/logoTeleAntena.png"
        projectName="TeleAntena"
        description="Proyecto realizado en conjunto a un profesor de universidad, tratando de solucionar una problemática real. TeleAntena es una página web que muestra información relevante, como tutoriales, especificaciones y manuales, sobre productos y servicios relacionados a las telecomunicaciones y la ciberseguridad, además de permitir contratar dichos servicios. Este proyecto fue realizado en conjunto con 2 compañeros más, y mis tareas fueron el desarrollo del backend y la base de datos."
        stack="Tecnologías: C#, Entity Framework, MySQL, Bootstrap, HTML, GitHub"
      ></ProjectItem>
    </div>
  );
}
