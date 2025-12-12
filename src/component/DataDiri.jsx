"use client";

import React from 'react';
import Keahlian from './Keahlian';
import Image from 'next/image';

const DataDiri = () => {
  return (
    <section className="w-full flex flex-col items-center text-white px-4 py-10">

      {/* Foto Center */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/Dimas.jpg"
          alt="Foto Profil"
          width={240}
          height={240}
          className="
            object-cover 
            rounded-xl 
            shadow-2xl 
            border-4 
            border-green-600
          "
        />
      </div>

      {/* Keterangan */}
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Dimas Alip Faturrohim</h2>

        <ul className="space-y-2 text-lg mb-6 leading-relaxed">
          <li><span className="font-semibold">No. Telepon:</span> 0857-1604-1690</li>
          <li>
            <span className="font-semibold">Tempat, Tanggal Lahir:</span>
            Bogor, 08 Juni 2003
          </li>
          <li>
            <span className="font-semibold">Keahlian: </span>
            Web Development, UI/UX Design, Digital Marketing
          </li>
        </ul>

        {/* Agar icon keahlian tidak melebar */}
        <div className="flex justify-center">
          <div className="max-w-lg">
            <Keahlian />
          </div>
        </div>
      </div>

    </section>
  );
};

export default DataDiri;
