"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#beranda");

  const menuItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Portofolio", href: "#portofolio" },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/40 backdrop-blur-lg
        border-b border-white/10
        shadow-xl
      "
    >
      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
          My Portofolio
        </h1>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300
                ${
                  active === item.href
                    ? "bg-gradient-to-r from-green-500 to-blue-500 shadow-lg shadow-green-500/40 text-white"
                    : "hover:bg-white/10"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-40" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col space-y-2 p-4 font-medium bg-black/60 backdrop-blur-xl border-t border-white/10">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setActive(item.href);
                setMenuOpen(false);
              }}
              className={`
                px-4 py-2 rounded-lg transition-all
                ${
                  active === item.href
                    ? "bg-gradient-to-r from-green-500 to-blue-500 shadow-lg shadow-green-500/40 text-white"
                    : "hover:bg-white/10"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
