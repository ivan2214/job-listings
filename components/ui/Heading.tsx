import React from "react";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center truncate">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-neutralDark">{description}</p>
    </div>
  );
};

export default Heading;
