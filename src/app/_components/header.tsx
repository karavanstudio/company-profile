"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#11131a]/75 backdrop-blur-md transition-all duration-300">
      <div className="h-20 max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link className="flex items-center gap-2 group" href="/">
          <Image
            alt="Karavan Studio Logo"
            width={40}
            height={40}
            className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="/Logogram_Karavan.png"
          />
          <span className="font-grotesk text-2xl text-[#e1e2ec] tracking-tight font-semibold">
            Karavan Studio
          </span>
        </Link>

        <nav
          className={`${
            isOpen
              ? "flex flex-col absolute top-20 left-0 w-full bg-[#11131a] p-6 shadow-lg border-b border-[#434654]/30"
              : "hidden lg:flex"
          } items-center gap-6`}
        >
          <Link
            aria-current="page"
            className="text-md transition-colors duration-200 tracking-wide text-[#e1e2ec] font-semibold"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-md text-[#c3c6d6] hover:text-[#e1e2ec] transition-colors duration-200 tracking-wide font-medium"
            href="/achievements"
          >
            Achievements
          </Link>
          <Link
            className="text-md text-[#c3c6d6] hover:text-[#e1e2ec] transition-colors duration-200 tracking-wide font-medium"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-md text-[#c3c6d6] hover:text-[#e1e2ec] transition-colors duration-200 tracking-wide font-medium"
            href="/articles"
          >
            Articles
          </Link>
          <Link
            className="text-md text-[#c3c6d6] hover:text-[#e1e2ec] transition-colors duration-200 tracking-wide font-medium"
            href="/our-team"
          >
            Our Team
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="hidden sm:inline-flex items-center justify-center text-sm font-medium text-[#e1e2ec] px-5 py-2 rounded-full border border-[#434654]/50 hover:border-[#8d909f] hover:text-[#b2c5ff] transition-all duration-200"
            href="https://www.instagram.com/karavanstudios/"
            target="_blank"
            rel="noreferrer"
          >
            Get in touch
          </a>

          <button
            aria-label="Toggle Navigation Menu"
            className="lg:hidden flex items-center justify-center text-[#e1e2ec] p-1 hover:text-[#b2c5ff] transition-colors cursor-pointer"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}