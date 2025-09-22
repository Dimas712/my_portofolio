"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#beranda");

  // Daftar menu (pakai #id untuk scroll)
  const menuItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Portofolio", href: "#portofolio" },
  ];

  return (
    <>
      {/* Tombol Toggle untuk Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg border-r border-gray-500 transform transition-transform duration-300 ease-in-out z-40
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold mb-8">My Portofolio</h1>

          {/* Menu */}
          <nav className="flex flex-col space-y-4 font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                setActive(item.href);
                setMenuOpen(false)
              }}
                className={`rounded-md px-3 py-2 transition 
                  ${
                    active === item.href
                      ? "bg-green-600 text-white"
                      : "hover:bg-green-500"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay Mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
  