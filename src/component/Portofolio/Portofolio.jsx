"use client"
import { websites, desains, freelances } from "./Data";
import Image from "next/image";
import React from "react";

const Portofolio = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-8 bg-black text-white w-full space-y-12">
      {/* Web Development */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-lg mb-4 text-center">Web Development</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {websites.map((website, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-60 h-60 rounded-lg bg-gray-500 shadow-md hover:scale-105 transition-transform overflow-hidden p-4"
            >
              <Image
                src={website.src}
                alt={website.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              <p className="mt-3 text-sm text-center">{website.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desain */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-lg mb-4 text-center">Desain</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {desains.map((desain, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-60 h-60 rounded-lg bg-gray-500 shadow-md hover:scale-105 transition-transform overflow-hidden"
            >
              <Image
                src={desain.src}
                alt={desain.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              <p className="mt-3 text-sm text-center">{desain.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Freelance */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-lg mb-4 text-center">Freelance</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {freelances.map((freelance, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-60 h-60 rounded-lg bg-gray-500 shadow-md hover:scale-105 transition-transform overflow-hidden"
            >
              <Image
                src={freelance.src}
                alt={freelance.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              <p className="mt-3 text-sm text-center">{freelance.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
