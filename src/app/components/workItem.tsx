import React from "react";
import Image from "next/image";
import "../styles/workItem.css";

interface WorkItemProps {
  imageSrc: string;
  companyName: string;
  position: string;
  date: string;
  description: string;
  additionalInfo: string;
}

export const WorkItem: React.FC<WorkItemProps> = ({
  imageSrc,
  companyName,
  position,
  date,
  description,
  additionalInfo,
}) => {
  return (
    <div className="work-item-container">
      <div className="work-item-image-container">
        <Image
          src={imageSrc}
          alt={companyName}
          className="work-item-image"
          width={500}
          height={300}
        />
      </div>
      <div className="work-item-text-container">
        <p className="work-item-company-name">{companyName}</p>
        <div className="work-item-divider"></div>
        <p className="work-item-position">{position}</p>
        <div className="work-item-divider"></div>
        <p className="work-item-date">{date}</p>
        <div className="work-item-divider"></div>
        <p className="work-item-description">{description}</p>
        <div className="work-item-divider"></div>
        <p className="work-item-additional-info">{additionalInfo}</p>
      </div>
    </div>
  );
};
