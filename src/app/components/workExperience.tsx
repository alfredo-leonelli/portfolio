import { WorkItem } from "./workItem";
import "../styles/workExperience.css";

export default function WorkExperience() {
  return (
    <div className="work-experience-container">
      <WorkItem
        imageSrc="/images/logoEsmax.png"
        companyName="Esmax"
        position="Desarrollador Power Apps JR"
        date="Agosto 2023 - Diciembre 2023"
        description="Parte del equipo Gobernanza de datos, prestando servicios a Esmax como trabajador externo (ACL). Encargado de desarrollar un sistema que centralizara la información de la empresa usando las herramientas del ecosistema Power Platform."
        additionalInfo="Tecnologías: Dynamics 365, Power Apps, Power Automate, Microsoft Dataverse, JavaScript, Azure DevOps"
      />
      <WorkItem
        imageSrc="/images/logoACL.png"
        companyName="ACL"
        position="Desarrollador Trainee PPJ"
        date="Abril 2023 - Julio 2023"
        description="Parte del equipo del Programa de Profesionales Jóvenes, en el cual se me enfocó un plan de estudio del stack MERN. Desarrollé un proyecto personal llamado PoGOAPI usando este stack, mientras realizaba presentaciones semanales al equipo mostrando avances del proyecto y del estudio. Además, me uní al equipo que desarrollaba un proyecto personal del PPJ, que constaba en una página que permitia hacer un seguimiento del plan de estudios."
        additionalInfo="Tecnologías: MongoDB, Mongoose, Express, React, NodeJS, GitHub, Scrum"
      />
      <WorkItem
        imageSrc="/images/logoACL.png"
        companyName="ACL"
        position="Práctica Profesional PPJ"
        date="Enero 2023 - Marzo 2023"
        description="Parte del equipo del Programa de Profesionales Jóvenes, en el cual se me enfocó un plan de estudio especializado en lenguajes de programación orientadas a objetos, junto con Scrum y Git. Además de esto, realicé presentaciones semanales al equipo mostrando avances del estudio y proyectos. Finalmente, participé en cursos para desarrollar habilidades blandas, competencias laborales y manejo de conflictos."
        additionalInfo="Tecnologías: Java, Spring Boot, Angular, MySQL, GitHub"
      />
    </div>
  );
}
