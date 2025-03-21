"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-40 border-b border-zinc-800/50">
        <div className="container-custom flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-medium">
              ctrl+z
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="underline-hover">
              About
            </Link>
            <Link href="/work" className="underline-hover">
              Work
            </Link>
            <Link href="/news" className="underline-hover">
              News
            </Link>
            <Link href="/contact" className="underline-hover">
              Contact
            </Link>
          </nav>
          <Button
            onClick={toggleMenu}
            variant="ghost"
            className="text-white p-2 md:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </Button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <Button
          onClick={toggleMenu}
          variant="ghost"
          className="absolute top-6 right-8 text-white p-2"
          aria-label="Close menu"
        >
          Close
        </Button>
        <nav className="flex flex-col items-center space-y-8 text-2xl">
          <Link
            href="/"
            className="underline-hover"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="underline-hover"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/work"
            className="underline-hover"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/news"
            className="underline-hover"
            onClick={() => setIsMenuOpen(false)}
          >
            News
          </Link>
          <Link
            href="/contact"
            className="underline-hover"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
