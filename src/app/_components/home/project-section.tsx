import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function ProjectSection() {
  return (
    <section className="py-20 md:py-28" id="featured">
      <div className="mb-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium tracking-widest text-[#b2c5ff] uppercase">
              Selected Case Study
            </span>
            <h2 className="font-grotesk text-[2rem] leading-10 font-bold tracking-tight text-[#e1e2ec] md:text-[3rem] md:leading-14">
              Project Spotlight
            </h2>
          </div>
          <span className="hidden text-xs text-[#c3c6d6] md:inline-block">
            01 / 04
          </span>
        </div>
      </div>

      <div className="group overflow-hidden rounded-xl bg-[#191b23] shadow-lg">
        <div className="grid min-h-115 grid-cols-1 lg:grid-cols-12">
          <div className="relative min-h-75 overflow-hidden bg-[#0c0e15] lg:col-span-7 lg:min-h-full">
            {/* eslint-disable-next-line */}
            <img
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              alt="Karawang Voice CMS interface mockup"
              src="/Projects/spotlight.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191b23] via-transparent to-transparent lg:hidden"></div>
          </div>

          <div className="flex flex-col justify-between bg-[#191b23] p-8 md:p-12 lg:col-span-5">
            <div className="flex flex-col">
              <div className="mb-4 flex flex-row lg:flex-col xl:flex-row items-center gap-2">
                <span className="rounded-full bg-[#1d1f27] px-2 py-1 text-sm font-semibold text-[#fac52c]">
                  Virtual Communities // Metaverse
                </span>
                <span className="text-sm font-semibold text-[#c3c6d6]">
                  Roblox Platform
                </span>
              </div>
              <h3 className="font-grotesk mb-1 text-4xl leading-10 font-semibold tracking-tight text-[#e1e2ec]">
                Karawang Voice
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-[#c3c6d6]">
                Explore a virtual recreation of Karawang&apos;s iconic landmarks in Roblox, built specifically as a gathering space for our city&apos;s youth to connect and hang out.
              </p>
              <div className="flex flex-col gap-2 py-4">
                <div className="flex items-center justify-between py-1">
                  <span className="text-sm text-[#c3c6d6] font-medium">
                    Architecture
                  </span>
                  <span className="text-sm font-semibold text-[#e1e2ec]">
                    Lua & Roblox Studio
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-sm text-[#c3c6d6] font-medium">
                    Monthly Readers
                  </span>
                  <span className="text-sm font-semibold text-[#e1e2ec]">
                    100,000+ Unique Players
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-sm text-[#c3c6d6] font-medium">
                    Recognition
                  </span>
                  <span className="text-sm font-semibold text-[#e1e2ec]">
                    Regional Viral Hit 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                className="inline-flex items-center gap-2 text-base font-medium text-[#b2c5ff] transition-colors duration-200 hover:text-[#dae2ff]"
                href="#"
              >
                <span>View Case Breakdown</span>
                <MoveUpRight className="size-5 stroke-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
