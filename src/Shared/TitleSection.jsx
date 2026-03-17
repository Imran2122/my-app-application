import React from "react";

const TitleSection = ({ heading, title }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-8 px-4">
      <h2 className="text-4xl md:text-4xl font-bold text-gray-900">{heading}</h2>
      <p className="mt-2 text-xl text-gray-600 max-w-xl">{title}</p>
    </div>
  );
};

export default TitleSection;
