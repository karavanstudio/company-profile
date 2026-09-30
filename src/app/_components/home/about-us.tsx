import { Box, Cpu } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-5">
          <span className="mb-1 text-[0.75rem] font-medium tracking-widest text-[#b2c5ff] uppercase">
            Studio Profile
          </span>
          <h2 className="font-grotesk mb-4 text-[2rem] font-bold tracking-tight text-[#e1e2ec] md:text-[3rem]">
            Who We Are
          </h2>
          <p className="max-w-lg text-[1.125rem] leading-[1.8] text-[#c3c6d6]">
            Karavan Studio is a versatile development team. We have the skills
            to build high-quality digital products across multiple platforms.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27] md:p-10">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-widest text-[#b2c5ff] uppercase">
                Architecture 01
              </span>
              <Box className="text-[#b2c5ff]" />
            </div>
            <h3 className="font-grotesk mb-1 text-2xl font-semibold text-[#e1e2ec]">
              Roblox Engine Ecosystem
            </h3>
            <p className="mb-4 text-base leading-relaxed text-[#c3c6d6]">
              We build large-scale multiplayer games with secure payment systems
              and engaging live operations for a global audience.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-[#32343c] px-2 py-1 text-xs font-semibold text-[#c3c6d6]">
                Luau Optimization
              </span>
              <span className="rounded bg-[#32343c] px-2 py-1 text-xs font-semibold text-[#c3c6d6]">
                LiveOps Analytics
              </span>
              <span className="rounded bg-[#32343c] px-2 py-1 text-xs font-semibold text-[#c3c6d6]">
                Spatial Audio
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27] md:p-10">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-widest text-[#fac52c] uppercase">
                Architecture 02
              </span>
              <Cpu className="text-[#fac52c]" />
            </div>
            <h3 className="font-grotesk mb-1 text-2xl font-semibold text-[#e1e2ec]">
              Unity Cross-Platform
            </h3>
            <p className="mb-4 text-base leading-relaxed text-[#c3c6d6]">
              We create interactive titles that run smoothly on PC, mobile, and
              custom hardware using Unity and C#.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-[#32343c] px-2 py-1 text-xs font-semibold text-[#c3c6d6]">
                Custom Shaders
              </span>
              <span className="rounded bg-[#32343c] px-2 py-1 text-xs font-semibold text-[#c3c6d6]">
                Hardware I/O
              </span>
              <span className="rounded bg-[#32343c] px-2 py-1 text-xs font-semibold text-[#c3c6d6]">
                Low-Latency Networking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
