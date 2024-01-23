import Image from "next/image";
import "../styles/projectItem.css";

interface ProjectItemProps {
  imageSrc: string;
  projectName: string;
  description: string;
  stack: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  imageSrc,
  projectName,
  description,
  stack,
}) => {
  return (
    <div className="project-item-container">
      <div className="project-item-image-container">
        <Image
          src={imageSrc}
          alt={projectName}
          className="project-item-image"
          width={500}
          height={300}
        />
      </div>
      <div className="project-item-text-container">
        <p className="project-item-name">{projectName}</p>
        <div className="project-item-divider"></div>
        <p className="project-item-description">{description}</p>
        <div className="project-item-divider"></div>
        <p className="project-item-stack">{stack}</p>
      </div>
    </div>
  );
};
