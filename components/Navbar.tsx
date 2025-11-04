"use client";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menus = [
  {
    name: "Caractéristiques",
    href: "#caracteristics",
  },
  {
    name: "Avantages",
    href: "#benefits",
  },
  {
    name: "Temoignages",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full  text-white z-50 absolute">
      <div className="max-w-7xl mx-auto max-md:px-4 max-xl:px-10 max-2xl:px-16 py-6">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="text-xl font-bold text-primary">
            COSMOSORA
          </Link>
          {/* Desktop Menu */}
          <ul className="max-md:hidden flex space-x-2 lg:space-x-8">
            {menus.map((menu) => (
              <li key={menu.href}>
                <Link
                  href={menu.href}
                  className="lg:text-lg border-b py-2 border-transparent hover:border-primary transition-all duration-200 hover:font-medium hover:text-primary"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <MenuIcon className="text-primary" />
          </button>
          {/* Mobile Menu */}
          <div
            className={`${open ? "flex" : "hidden"} fixed inset-0 md:hidden`}
          >
            <ul className="relative min-h-screen w-full bg-linear-to-br from-primary to-secondary p-6 flex flex-col items-center justify-center space-y-6">
              <button
                className="z-10 absolute top-5 right-5"
                onClick={() => setOpen(false)}
              >
                <X className="text-white" />
              </button>
              {menus.map((menu) => (
                <li key={menu.href} onClick={() => setOpen(false)}>
                  <Link
                    href={menu.href}
                    className="text-white font-medium text-xl shadow-2xl"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
