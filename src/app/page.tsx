import Link from "next/link";
import { HydrateClient } from "@/trpc/server";
import UserLayout from "@/layouts/user-layout";
import { TypewriterHero } from "@/app/_components/home/typewriter-hero";
import { 
  ArrowRight, 
  CloudCog, 
  VectorPolygon, 
  SquareTerminal, 
  GraduationCap, 
  BuildingComplex, 
  MoveUpRight, 
  Box, 
  Cpu 
} from 'lucide-react';

export default async function Home() {
  return (
    <HydrateClient>
      <UserLayout>
        <div className="flex flex-col w-full">
          {/* Hero & Metrics Section */}
          <section className="py-24 flex flex-col justify-center">
            <div className="flex flex-col items-start max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#fac52c]"></span>
                <span className="text-sm leading-4 tracking-widest uppercase text-[#c3c6d6] font-medium">
                  Karawang to Global
                </span>
              </div>

              <TypewriterHero />

              <p className="text-base md:text-xl leading-[1.78] text-[#c3c6d6] max-w-2xl mb-10 mt-4">
                We are a local development studio from Karawang focused on creating interactive experiences. We design video games, web based solutions, and Internet of Things integrations.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-10">
                <Link
                  className="inline-flex items-center justify-center text-sm md:text-base font-medium leading-5 tracking-[0.02em] bg-[#5b8cff] text-[#002b73] px-10 py-4 rounded-lg shadow-sm hover:brightness-110 transition-all duration-300"
                  href="#featured"
                >
                  Explore Portfolio
                </Link>
                <Link
                  className="group inline-flex items-center gap-1 text-sm md:text-base font-medium leading-5 tracking-[0.02em] text-[#c3c6d6] hover:text-[#e1e2ec] transition-colors duration-200"
                  href="#disciplines"
                >
                  <span>Our Disciplines</span>
                  <ArrowRight className="size-5 md:size-6 group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="mt-10 pt-10 bg-[#0c0e15]/40 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <span className="font-grotesk text-[3rem] leading-14 tracking-[-0.02em] text-[#e1e2ec] font-bold">
                    100K<span className="text-[#fac52c] font-light">+</span>
                  </span>
                  <span className="text-[0.875rem] text-[#c3c6d6] mt-1 font-normal">
                    Active Players Reached
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-grotesk text-[3rem] leading-14 tracking-[-0.02em] text-[#e1e2ec] font-bold">
                    10<span className="text-[#b2c5ff] font-light">+</span>
                  </span>
                  <span className="text-[0.875rem] text-[#c3c6d6] mt-1 font-normal">
                    Core Interactive Titles
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-grotesk text-[3rem] leading-14 tracking-[-0.02em] text-[#e1e2ec] font-bold">
                    4<span className="text-[#fac52c] font-light">x</span>
                  </span>
                  <span className="text-[0.875rem] text-[#c3c6d6] mt-1 font-normal">
                    National Awards Won
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className="py-16 border-y border-[#434654]/30">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-[0.75rem] uppercase tracking-widest text-[#8d909f] font-medium">
                  Our Partners
                </span>
                <span className="text-[0.75rem] text-[#434654] font-mono">
                  Karawang &amp; Beyond
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-between">
                <div className="flex items-center gap-2 py-4 px-2 rounded-lg bg-[#191b23]/40 border border-[#434654]/30 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27] group cursor-default">
                  <BuildingComplex className="text-[#8d909f] group-hover:text-[#b2c5ff] transition-colors" />
                  <div className="flex flex-col">
                    <span className="font-grotesk text-[15px] font-semibold text-[#e1e2ec] tracking-tight leading-tight group-hover:text-[#b2c5ff] transition-colors">
                      Smartplus
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8d909f]">
                      Indonesia
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 py-4 px-2 rounded-lg bg-[#191b23]/40 border border-[#434654]/30 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27] group cursor-default">
                  <GraduationCap className="text-[#8d909f] group-hover:text-[#fac52c] transition-colors" />
                  <div className="flex flex-col">
                    <span className="font-grotesk text-[15px] font-semibold text-[#e1e2ec] tracking-tight leading-tight group-hover:text-[#fac52c] transition-colors">
                      SMKN 1
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8d909f]">
                      Karawang
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 py-4 px-2 rounded-lg bg-[#191b23]/40 border border-[#434654]/30 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27] group cursor-default">
                  <SquareTerminal className="text-[#8d909f] group-hover:text-[#b2c5ff] transition-colors" />
                  <div className="flex flex-col">
                    <span className="font-grotesk text-[15px] font-semibold text-[#e1e2ec] tracking-tight leading-tight group-hover:text-[#b2c5ff] transition-colors">
                      PPLG
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8d909f]">
                      Neskar
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 py-4 px-2 rounded-lg bg-[#191b23]/40 border border-[#434654]/30 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27] group cursor-default">
                  <CloudCog className="text-[#8d909f] group-hover:text-[#fac52c] transition-colors" />
                  <div className="flex flex-col">
                    <span className="font-grotesk text-[15px] font-semibold text-[#e1e2ec] tracking-tight leading-tight group-hover:text-[#fac52c] transition-colors">
                      AWS
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8d909f]">
                      Cloud Infrastructure
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 py-4 px-2 rounded-lg bg-[#191b23]/40 border border-[#434654]/30 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27] group cursor-default col-span-2 sm:col-span-1">
                  <VectorPolygon className="text-[#8d909f] group-hover:text-[#b2c5ff] transition-colors" />
                  <div className="flex flex-col">
                    <span className="font-grotesk text-[15px] font-semibold text-[#e1e2ec] tracking-tight leading-tight group-hover:text-[#b2c5ff] transition-colors">
                      infokrw
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8d909f]">
                      Media Network
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Section */}
          <section className="py-20 md:py-28" id="featured">
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[0.75rem] uppercase tracking-widest text-[#b2c5ff] font-medium">
                    Selected Case Study
                  </span>
                  <h2 className="font-grotesk text-[2rem] md:text-[3rem] leading-10 md:leading-14 text-[#e1e2ec] font-bold tracking-tight">
                    Project Spotlight
                  </h2>
                </div>
                <span className="hidden md:inline-block text-[0.75rem] text-[#c3c6d6]">
                  01 / 04
                </span>
              </div>
            </div>

            <div className="bg-[#191b23] rounded-xl overflow-hidden group shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-115">
                <div className="lg:col-span-7 relative min-h-75 lg:min-h-full overflow-hidden bg-[#0c0e15]">
                  {/* eslint-disable-next-line */}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    alt="Karawang Voice CMS interface mockup"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAX2PrYolAuaos_sqLpL2JLzNx5GF8lqlaGtNnUBTS0-cm0Hj9aDodnYk1PNbhx_HjNYd79e1d6MRx-kyWS0HmMPOWehLBTlSINP67wk0rtCdMq6JVKcl8hJ55Cxk5j-UFrK2zSo_ibe2ySO_x5otVeCFuNYPcOQhhH3fMdzbImqAz-pOx9BJxScFie4iYCjDEnAzvp9K5Sxxi0zViBRKlvL_IT1VnbPaxL-VsPhBGLJkc2Bo8yUvYHw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191b23] via-transparent to-transparent lg:hidden"></div>
                </div>

                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-[#191b23]">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[0.75rem] bg-[#1d1f27] text-[#fac52c] px-2 py-1 rounded-full">
                        Civic Tech // News CMS
                      </span>
                      <span className="text-[0.75rem] text-[#c3c6d6]">
                        Web &amp; Mobile Platform
                      </span>
                    </div>
                    <h3 className="font-grotesk text-[2rem] leading-10 text-[#e1e2ec] font-semibold tracking-tight mb-1">
                      Karawang Voice
                    </h3>
                    <p className="text-[1rem] text-[#c3c6d6] leading-relaxed mb-6">
                      An independent local news platform powered by a lightweight CMS, delivering fast updates to over 100,000 readers monthly.
                    </p>
                    <div className="flex flex-col gap-2 py-4">
                      <div className="flex justify-between items-center py-1">
                        <span className="text-[0.75rem] text-[#c3c6d6]">
                          Architecture
                        </span>
                        <span className="text-[0.75rem] text-[#e1e2ec] font-medium">
                          Edge-Rendered CMS / Next.js
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-[0.75rem] text-[#c3c6d6]">
                          Monthly Readers
                        </span>
                        <span className="text-[0.75rem] text-[#e1e2ec] font-medium">
                          100,000+ Citizens
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-[0.75rem] text-[#c3c6d6]">
                          Recognition
                        </span>
                        <span className="text-[0.75rem] text-[#e1e2ec] font-medium">
                          Civic Impact Award 2024
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link
                      className="inline-flex items-center gap-2 text-base font-medium text-[#b2c5ff] hover:text-[#dae2ff] transition-colors duration-200"
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

          {/* About Us Section */}
          <section className="py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-[0.75rem] uppercase tracking-widest text-[#b2c5ff] font-medium mb-1">
                  Studio Profile
                </span>
                <h2 className="font-grotesk text-[2rem] md:text-[3rem] text-[#e1e2ec] font-bold tracking-tight mb-4">
                  Who We Are
                </h2>
                <p className="text-[1.125rem] text-[#c3c6d6] leading-[1.8] max-w-lg">
                  Karavan Studio is a versatile development team. We have the skills to build high-quality digital products across multiple platforms.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="p-8 md:p-10 rounded-xl bg-[#191b23] transition-all duration-300 hover:bg-[#1d1f27]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm uppercase tracking-widest text-[#b2c5ff] font-semibold">
                      Architecture 01
                    </span>
                    <Box className="text-[#b2c5ff]" />
                  </div>
                  <h3 className="font-grotesk text-2xl text-[#e1e2ec] font-semibold mb-1">
                    Roblox Engine Ecosystem
                  </h3>
                  <p className="text-base text-[#c3c6d6] leading-relaxed mb-4">
                    We build large-scale multiplayer games with secure payment systems and engaging live operations for a global audience.
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#32343c] text-[#c3c6d6]">
                      Luau Optimization
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#32343c] text-[#c3c6d6]">
                      LiveOps Analytics
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#32343c] text-[#c3c6d6]">
                      Spatial Audio
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-10 rounded-xl bg-[#191b23] transition-all duration-300 hover:bg-[#1d1f27]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm uppercase tracking-widest text-[#fac52c] font-semibold">
                      Architecture 02
                    </span>
                    <Cpu className="text-[#fac52c]" />
                  </div>
                  <h3 className="font-grotesk text-2xl text-[#e1e2ec] font-semibold mb-1">
                    Unity Cross-Platform
                  </h3>
                  <p className="text-base text-[#c3c6d6] leading-relaxed mb-4">
                    We create interactive titles that run smoothly on PC, mobile, and custom hardware using Unity and C#.
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#32343c] text-[#c3c6d6]">
                      Custom Shaders
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#32343c] text-[#c3c6d6]">
                      Hardware I/O
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-[#32343c] text-[#c3c6d6]">
                      Low-Latency Networking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Genres Section */}
          <section className="py-20 md:py-28" id="disciplines">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-[#fac52c] font-medium">
                  Methodology
                </span>
                <h2 className="font-grotesk text-4xl md:text-6xl text-[#e1e2ec] font-bold tracking-tight">
                  Core Genres
                </h2>
              </div>
              <p className="text-base text-[#c3c6d6] max-w-md">
                Games and experiences crafted through years of testing, refining mechanics, and focusing on localized storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-8 rounded-xl bg-[#191b23] hover:bg-[#1d1f27] transition-all duration-300 flex flex-col justify-between min-h-65 group">
                <div>
                  <span className="text-[0.75rem] text-[#c3c6d6] font-mono">01</span>
                  <h3 className="font-grotesk text-[1.375rem] text-[#e1e2ec] font-semibold mt-4 mb-1 group-hover:text-[#b2c5ff] transition-colors">
                    Simulation
                  </h3>
                  <p className="text-[0.875rem] text-[#c3c6d6] leading-relaxed">
                    Creating realistic physics and systems that feel responsive and lifelike.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[0.75rem] text-[#c3c6d6]">Physics &amp; Worldbuilding</span>
                  <ArrowRight className="text-[#8d909f] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="p-8 rounded-xl bg-[#191b23] hover:bg-[#1d1f27] transition-all duration-300 flex flex-col justify-between min-h-65 group">
                <div>
                  <span className="text-[0.75rem] text-[#c3c6d6] font-mono">02</span>
                  <h3 className="font-grotesk text-[1.375rem] text-[#e1e2ec] font-semibold mt-4 mb-1 group-hover:text-[#b2c5ff] transition-colors">
                    Management
                  </h3>
                  <p className="text-[0.875rem] text-[#c3c6d6] leading-relaxed">
                    Designing balanced economies and satisfying problem-solving mechanics.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[0.75rem] text-[#c3c6d6]">Dynamic Economy</span>
                  <ArrowRight className="text-[#8d909f] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="p-8 rounded-xl bg-[#191b23] hover:bg-[#1d1f27] transition-all duration-300 flex flex-col justify-between min-h-65 group">
                <div>
                  <span className="text-[0.75rem] text-[#c3c6d6] font-mono">03</span>
                  <h3 className="font-grotesk text-[1.375rem] text-[#e1e2ec] font-semibold mt-4 mb-1 group-hover:text-[#b2c5ff] transition-colors">
                    Education
                  </h3>
                  <p className="text-[0.875rem] text-[#c3c6d6] leading-relaxed">
                    Interactive learning experiences that help build real-world understanding.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[0.75rem] text-[#c3c6d6]">Pedagogical UX</span>
                  <ArrowRight className="text-[#8d909f] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="p-8 rounded-xl bg-[#191b23] hover:bg-[#1d1f27] transition-all duration-300 flex flex-col justify-between min-h-65 group">
                <div>
                  <span className="text-[0.75rem] text-[#c3c6d6] font-mono">04</span>
                  <h3 className="font-grotesk text-[1.375rem] text-[#e1e2ec] font-semibold mt-4 mb-1 group-hover:text-[#b2c5ff] transition-colors">
                    Horror Urban Legend
                  </h3>
                  <p className="text-[0.875rem] text-[#c3c6d6] leading-relaxed">
                    Using sound design and regional Indonesian folklore to build tension and atmosphere.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[0.75rem] text-[#c3c6d6]">Sensory Immersion</span>
                  <ArrowRight className="text-[#8d909f] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </UserLayout>
    </HydrateClient>
  );
}