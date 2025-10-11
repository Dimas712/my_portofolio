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
      duration: 800, // durasi animasi default
      once: true,    // animasi hanya dijalankan sekali
    });
  }, []);

  return (
    <main className="pt-8 px-6 md:px-12 text-white overflow-x-hidden max-w-full min-h-screen bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {/* ===== Beranda ===== */}
      <section id="beranda" className="py-10">

        <div data-aos="fade-up" data-aos-duration="800" className="mb-10">
          <DataDiri />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="mb-10"
        >
          <Tentang />
        </div>
      </section>

      {/* ===== Portofolio ===== */}
      <section id="portofolio" className="py-10 border-t border-gray-700">
        <h1
          className="text-3xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Portofolio
        </h1>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Portofolio />
        </div>
      </section>
    </main>
  );
}
