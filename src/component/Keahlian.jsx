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

const CarouselRow = ({items, reverse = false }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-8 w-max animate-scroll ${
          reverse ? "animate-scroll-reverse" : ""
        }`}
      >
        {/* duplikasi supaya loop mulus */}
        {[...items, ...items].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gray-500 shadow-md"
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
    </div>
  );
};

const Keahlian = () => {
  return (
    <section className="flex flex-col items-start justify-start bg-black text-white px-2 py-6">
      <CarouselRow items={skills} />
      <CarouselRow items={skills} reverse />
    </section>
  );
};

export default Keahlian;
