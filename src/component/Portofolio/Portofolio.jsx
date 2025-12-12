"use client"
import { websites, desains, freelances } from "./Data";
import Image from "next/image";
import React from "react";

const Card = ({ item, isWeb=false }) => {
  return (
    <div className="
      group 
      rounded-2xl 
      bg-white/10 
      backdrop-blur-md 
      border border-white/10 
      w-64 
      overflow-hidden 
      shadow-xl 
      hover:shadow-2xl 
      transition-all 
      duration-300
      hover:-translate-y-2
    ">
      {/* Image */}
      <div className="w-full h-40 overflow-hidden">
        <Image 
          src={item.src}
          alt={item.name}
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-all duration-500"
        />
      </div>

      {/* Text */}
      <div className="p-4 text-center">
        <p className="font-semibold text-lg mb-2">{item.name}</p>

        {isWeb && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block 
              mt-2 
              px-4 py-1 
              rounded-lg 
              text-sm 
              bg-blue-600 
              hover:bg-blue-700 
              transition-all 
              shadow-md
            "
          >
            Lihat Project
          </a>
        )}
      </div>
    </div>
  );
};

const Portofolio = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12 text-white w-full space-y-20">

      {/* Web Development */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-6 tracking-wide">Web Development</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {websites.map((website, i) => (
            <Card key={i} item={website} isWeb={true} />
          ))}
        </div>
      </div>

      {/* Desain */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-6 tracking-wide">Desain</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {desains.map((desain, i) => (
            <Card key={i} item={desain} />
          ))}
        </div>
      </div>

      {/* Freelance */}
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-6 tracking-wide">Freelance</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {freelances.map((freelance, i) => (
            <Card key={i} item={freelance} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
