"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@ctrl-z.tv");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-800/50">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Let&apos;s Talk</h3>
            <p className="text-2xl font-bold mb-1">hello@ctrl-z.tv</p>
            <button
              className="text-sm text-zinc-400 hover:text-white"
              onClick={copyEmail}
            >
              {copied ? "Copied!" : "Click to copy"}
            </button>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Job Applications</h3>
            <a
              href="mailto:apply@ctrl-z.tv"
              className="text-lg hover:underline"
            >
              apply@ctrl-z.tv
            </a>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Address</h3>
            <a
              href="https://maps.app.goo.gl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              Los Angeles, CA
            </a>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Phone Number</h3>
            <a
              href="tel:+13234120090"
              className="text-lg hover:underline"
            >
              (323) 412-0090
            </a>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">Join us and Subscribe to our Newsletter!</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-white/50 py-2 px-0 mr-4 focus:outline-none focus:border-white w-full max-w-xs"
            />
            <button
              type="button"
              className="p-2 border border-white/50 rounded-full"
              aria-label="Subscribe"
            >
              →
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-8 mb-16">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase underline-hover"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase underline-hover"
          >
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase underline-hover"
          >
            LinkedIn
          </a>
          <a
            href="https://vimeo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase underline-hover"
          >
            Vimeo
          </a>
        </div>

        {/* Footer bottom - links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-0">
            <Link href="/news" className="underline-hover">
              News
            </Link>
            <Link href="/terms" className="underline-hover">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="underline-hover">
              Cookies
            </Link>
          </div>
          <div>
            <p className="uppercase text-sm">
              © CTRL+Z {currentYear}<br />
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
