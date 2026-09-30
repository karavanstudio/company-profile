import { Video, SquareTerminal, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0c0e15]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-10 border-b border-[#434654]/30 pb-16 md:pb-20 lg:flex-row lg:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#b2c5ff] uppercase md:text-sm">
              Start a Project
            </span>
            <h2 className="font-grotesk py-2 text-4xl font-bold tracking-tight text-[#e1e2ec] md:text-5xl">
              Let Us Collaborate
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[#c3c6d6] md:text-lg">
              We partner with teams to build interactive experiences and digital
              products that make a lasting impact.
            </p>
          </div>
          <div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#ff544f] px-10 py-4 text-[0.875rem] font-medium text-[#e1e2ec] shadow-[0_0_24px_rgba(237,59,59,0.3)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(237,59,59,0.45)] hover:brightness-110"
              href="https://www.instagram.com/karavanstudios/"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-xs text-[#c3c6d6] md:text-sm">
              Karawang, Indonesia
            </span>
            <span className="hidden text-lg text-[#434654] sm:inline-block">
              /
            </span>
            <span className="text-xs text-[#c3c6d6] md:text-sm">
              © 2026 Karavan Studio. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              aria-label="Vimeo and Showreels"
              className="text-[#c3c6d6] transition-colors duration-200 hover:text-[#e1e2ec]"
              href="#"
            >
              <Video className="size-5" />
            </a>
            <a
              aria-label="Developer Repositories"
              className="text-[#c3c6d6] transition-colors duration-200 hover:text-[#e1e2ec]"
              href="#"
            >
              <SquareTerminal className="size-5" />
            </a>
            <a
              aria-label="Global Network"
              className="text-[#c3c6d6] transition-colors duration-200 hover:text-[#e1e2ec]"
              href="#"
            >
              <Globe className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
