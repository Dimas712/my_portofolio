"use client";
import React from "react";
import Image from "next/image";

const skills = [
  { name: "React.js", src: "/react.png" },
  { name: "Tailwind CSS", src: "/tailwind.png" },
  { name: "HTML", src: "/html.png" },
  { name: "CSS", src: "/css.png" },
  { name: "Next.js", src: "/next.png" },
  { name: "Figma", src: "/figma.png" },
  { name: "Ms. Office", src: "/office.png" },
  { name: "Canva", src: "/canva.png" },
  { name: "Capcut", src: "/capcut.png" },
];

const Keahlian = () => {
  return (
    <section className="flex flex-col items-start justify-start bg-black text-white px-2 py-6">
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gray-500 shadow-md hover:scale-105 transition-transform"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keahlian;
