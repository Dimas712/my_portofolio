"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Tentang from "../component/Tentang";
import DataDiri from "../component/DataDiri";
import Portofolio from "../component/Portofolio/Portofolio";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main
      className="
        min-h-screen 
        text-white 
        px-6 md:px-16 
        pt-16 
        overflow-x-hidden 
        bg-fixed bg-cover bg-center relative
      "
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay agar teks lebih terbaca */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10">
        {/* ===== Beranda ===== */}
        <section id="beranda" className="py-14">
          <div
            data-aos="fade-up"
            className="mb-12 flex flex-col items-center md:items-start"
          >
            <DataDiri />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-16 max-w-3xl mx-auto"
          >
            <Tentang />
          </div>
        </section>

        {/* ===== Portofolio ===== */}
        <section
          id="portofolio"
          className="py-14 mt-10 border-t border-white/10"
        >
          <h1
            data-aos="fade-down"
            className="
              text-4xl 
              font-extrabold 
              tracking-wide 
              mb-10 
              text-center md:text-left
              drop-shadow-lg
            "
          >
            Portofolio
          </h1>

          <div
            data-aos="fade-up"
            className="p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-xl"
          >
            <Portofolio />
          </div>
        </section>
      </div>
    </main>
  );
}
