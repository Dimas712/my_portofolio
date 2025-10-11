"use client";

import React from 'react'
import Keahlian from './Keahlian';
import Image from 'next/image';

const DataDiri = () => {
  return (
     <section
      className="flex flex-col md:flex-row items-start justify-start text-white px-1 py-6"
    >
      {/* Foto di kiri */}
      <div className="md:w-1/3 flex justify-start mb-2 md:mb-0">
        <Image
          src="/Dimas.jpg" 
          alt="Foto Profil"
          width={256}   // 64 * 4 (karena Tailwind w-64 = 16rem = 256px)
          height={256}
          className="object-cover rounded-md shadow-lg border-4 border-green-600"
        />
      </div>

      {/* Keterangan di kanan */}
      <div className="md:w-2/3 md:pl-2">
        <h2 className="text-3xl font-bold mb-4">Dimas Alip Faturrohim</h2>
        <ul className="space-y-2 text-lg">
          <li>
            <span className="font-semibold">No. Telepon:</span> 0857-1604-1690
          </li>
          <li>
            <span className="font-semibold">Tempat, Tanggal Lahir:</span>{" "}
            Bogor, 08 Juni 2003
          </li>
          <li>
            <span className="font-semibold">Keahlian:</span> Web Development,
            UI/UX Design, Digital Marketing
          </li>
        </ul>
        <Keahlian/>
      </div>
    </section>
  )
}

export default DataDiri