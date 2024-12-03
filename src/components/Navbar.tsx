"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi"; // Sun and Moon icons for theme toggle
import Link from "next/link"; // Next.js Link

// Navbar links configuration
const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({
  toggleTheme,
  currentTheme,
}: {
  toggleTheme: () => void;
  currentTheme: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Menu toggle for mobile
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Rendering Navbar Links
  const renderLinks = (isMobile = false) => {
    return navLinks.map(({ href, label }) => (
      <Link key={label} href={href}>
        <span
          onClick={isMobile ? () => setIsOpen(false) : undefined}
          className="block text-lg text-foreground transition-colors mb-2 hover:text-accent"
        >
          {label}
        </span>
      </Link>
    ));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-6 transition-colors duration-300 z-50 navbar">
      {/* Logo or Home Link */}
      <div className="text-lg sm:text-2xl">
        <Link href="/" className="font-bold">
          <span className="relative">
            <sup className="absolute -top-3 -left-3 text-xs sm:text-sm font-light">The</sup>
            Code Artisan
          </span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex space-x-6">{renderLinks()}</div>

      {/* Theme Toggle and Mobile Menu Button */}
      <div className="flex items-center">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2"
          aria-label="Toggle theme"
        >
          {/* Conditional icon rendering based on the theme */}
          {currentTheme === "light" ? (
            <FiMoon size={24} /> // Show moon icon for light mode
          ) : (
            <FiSun size={24} /> // Show sun icon for dark mode
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden focus:outline-none bg-transparent hover:bg-transparent ml-4"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="text-foreground" size={24} /> // Close icon
          ) : (
            <FaBars className="text-foreground" size={24} /> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className={`sm:hidden absolute top-14 right-6 rounded-md shadow-lg p-4 ${
            currentTheme === "dark"
              ? "bg-gray-800 bg-opacity-95 text-foreground"
              : "bg-white text-foreground"
          }`}
        >
          {renderLinks(true)}
        </div>
      )}
    </nav>
  );
}
