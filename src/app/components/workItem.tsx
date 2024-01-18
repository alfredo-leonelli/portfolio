import React from "react";
import Image from "next/image";
import "../styles/workItem.css";

interface WorkItemProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WorkItem: React.FC<WorkItemProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="work-item-container">
      <div className="work-item-image-container">
        <Image
          src={imageSrc}
          alt={title}
          className="work-item-image"
          width={500}
          height={300}
        />
      </div>
      <div className="text-container">
        <h2 className="work-item-title">{title}</h2>
        <h3 className="work-item-subtitle">{subtitle}</h3>
        <p className="work-item-description">{description}</p>
      </div>
    </div>
  );
};
