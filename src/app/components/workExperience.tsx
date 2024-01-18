import { WorkItem } from "./workItem";
import "../styles/workExperience.css";

export default function WorkExperience() {
  return (
    <div className="work-experience-container">
      <WorkItem
        imageSrc="/logoEsmax.png"
        title="Esmax - Desarrollador Power Apps JR"
        subtitle="Agosto 2023 - Diciembre 2023"
        description="Descripción 1"
      />
      <WorkItem
        imageSrc="/logoACL.png"
        title="ACL - Desarrollador Trainee PPJ"
        subtitle="Abril 2023 - Julio 2023"
        description="Descripción 2"
      />
      <WorkItem
        imageSrc="/logoACL.png"
        title="ACL - Práctica Profesional PPJ"
        subtitle="Enero 2023 - Marzo 2023"
        description="Descripción 3"
      />
    </div>
  );
}
