"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;
        heroElement.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container-custom pt-24 pb-20" ref={heroRef}>
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-text font-medium tracking-tight mb-8">
            <div className="mb-2">ctrl+z</div>
            <div className="mb-2">
              a film label for <span className="text-outline">indies</span>.
            </div>
            <div className="mb-2">development, production, sales,</div>
            <div className="mb-2">distribution, theatrical and streaming platforms</div>
            <div className="mb-2">
              wrapped in a new
            </div>
            <div className="mb-2">
              business <span className="text-outline">model</span>.
            </div>
          </h1>

          <div className="mt-16">
            <a
              href="#about"
              className="text-xl uppercase tracking-wide underline-hover"
            >
              Scroll
            </a>
          </div>
        </div>
      </div>

      {/* Background dot pattern or texture could be added here */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-gradient-to-b from-zinc-900 to-black"></div>
    </section>
  );
}
