import React from "react";

export const Frame = (): React.JSX.Element => {
  // Define image sections data for easier mapping
  const imageSections = [
    { id: 1, src: "/images/1.png" },
    { id: 2, src: "/images/2.png" },
    { id: 3, src: "/images/3.png" },
    { id: 4, src: "/images/4.png" },
    { id: 5, src: "/images/5.png" },
    { id: 6, src: "/images/6.png" },
    { id: 7, src: "/images/7.png" },
  ];

  return (
    <div className="w-full min-h-screen">
      {imageSections.map((section) => (
        <img
          key={`section-${section.id}`}
          src={section.src}
          className="w-full h-auto block"
          alt={`Section ${section.id}`}
        />
      ))}
    </div>
  );
};
