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
      duration: 800, // durasi default
      once: true,    // animasi hanya jalan sekali
    });
  }, []);

  return (
    <main className="md:ml-64 px-8 bg-black text-white">
      <section id="beranda" className="py-5">
        <h1
          className="text-2xl font-bold"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Beranda
        </h1>
        <div data-aos="fade-up" data-aos-duration="800">
          <DataDiri />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <Tentang />
        </div>
      </section>

      <section id="portofolio" className="py-5">
        <h1
          className="text-2xl font-bold"
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
