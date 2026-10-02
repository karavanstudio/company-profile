import { Users } from "lucide-react";

export function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16">
      <div className="max-w-2xl flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#b2c5ff]"></span>
          <span className="text-xs md:text-sm uppercase tracking-widest text-[#b2c5ff] font-medium">
            Collective Intelligence
          </span>
        </div>
        <h1 className="font-grotesk text-4xl md:text-6xl text-[#e1e2ec] font-bold tracking-tight">
          Karavan Studio Team
        </h1>
        <p className="text-base md:text-lg text-[#c3c6d6] pt-1 leading-relaxed">
          Honoring the creators, engineers, artists, and storytellers behind Karawang’s premier interactive studio. We unite technical fidelity with kinetic artistry.
        </p>
      </div>
      <div className="flex items-center gap-2 text-[#c3c6d6] text-sm md:text-base font-medium">
        <Users className="text-[#b2c5ff] size-4.5 md:size-5" />
        <span>10 Core Contributors</span>
      </div>
    </div>
  );
}
