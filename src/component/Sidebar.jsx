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
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">My Portofolio</h1>

        {/* Tombol menu (mobile) */}
        <button
          className="md:hidden p-2 rounded bg-green-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`transition px-3 py-2 rounded-md ${
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

      {/* Menu mobile (dropdown) */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col space-y-2 p-4 font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                  setMenuOpen(false);
                }}
                className={`rounded-md px-3 py-2 transition ${
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
      )}
    </header>
  );
}
