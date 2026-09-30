import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TypewriterHero } from "./typewriter-hero";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center py-24">
      <div className="flex max-w-3xl flex-col items-start">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#fac52c]"></span>
          <span className="text-xs md:text-sm leading-4 font-medium tracking-widest text-[#c3c6d6] uppercase">
            Karawang to Global
          </span>
        </div>

        <TypewriterHero />

        <p className="mt-4 mb-10 max-w-2xl text-base leading-[1.78] text-[#c3c6d6] md:text-xl">
          We are a local development studio from Karawang focused on creating
          interactive experiences. We design video games, web based solutions,
          and Internet of Things integrations.
        </p>

        <div className="mb-10 flex flex-wrap items-center gap-6">
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-[#5b8cff] px-10 py-4 text-sm leading-5 font-medium tracking-[0.02em] text-[#002b73] shadow-sm transition-all duration-300 hover:brightness-110 md:text-base"
            href="#featured"
          >
            Explore Portfolio
          </Link>
          <Link
            className="group inline-flex items-center gap-1 text-sm leading-5 font-medium tracking-[0.02em] text-[#c3c6d6] transition-colors duration-200 hover:text-[#e1e2ec] md:text-base"
            href="#disciplines"
          >
            <span>Our Disciplines</span>
            <ArrowRight className="size-5 transition-all duration-300 group-hover:translate-x-0.5 md:size-6" />
          </Link>
        </div>
      </div>

      {/* metrics section */}
      <div className="mt-10 rounded-xl bg-[#0c0e15]/40 p-6 pt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col">
            <span className="font-grotesk text-[3rem] leading-14 font-bold tracking-[-0.02em] text-[#e1e2ec]">
              100K<span className="font-light text-[#fac52c]">+</span>
            </span>
            <span className="mt-1 text-[0.875rem] font-normal text-[#c3c6d6]">
              Active Players Reached
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-grotesk text-[3rem] leading-14 font-bold tracking-[-0.02em] text-[#e1e2ec]">
              10<span className="font-light text-[#b2c5ff]">+</span>
            </span>
            <span className="mt-1 text-[0.875rem] font-normal text-[#c3c6d6]">
              Core Interactive Titles
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-grotesk text-[3rem] leading-14 font-bold tracking-[-0.02em] text-[#e1e2ec]">
              4<span className="font-light text-[#fac52c]">x</span>
            </span>
            <span className="mt-1 text-[0.875rem] font-normal text-[#c3c6d6]">
              National Awards Won
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
