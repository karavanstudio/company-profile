import { BuildingComplex, GraduationCap, SquareTerminal, CloudCog, VectorPolygon } from "lucide-react";

export default function PartnersSection() {
  return (
    <section className="border-y border-[#434654]/30 py-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
          <span className="text-[0.75rem] font-medium tracking-widest text-[#8d909f] uppercase">
            Our Partners
          </span>
          <span className="font-mono text-[0.75rem] text-[#434654]">
            Karawang &amp; Beyond
          </span>
        </div>

        <div className="grid grid-cols-2 items-center justify-between gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <div className="group flex cursor-default items-center gap-2 rounded-lg border border-[#434654]/30 bg-[#191b23]/40 px-2 py-4 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27]">
            <BuildingComplex className="text-[#8d909f] transition-colors group-hover:text-[#b2c5ff]" />
            <div className="flex flex-col">
              <span className="font-grotesk text-[15px] leading-tight font-semibold tracking-tight text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]">
                Smartplus
              </span>
              <span className="text-[10px] tracking-wider text-[#8d909f] uppercase">
                Indonesia
              </span>
            </div>
          </div>

          <div className="group flex cursor-default items-center gap-2 rounded-lg border border-[#434654]/30 bg-[#191b23]/40 px-2 py-4 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27]">
            <GraduationCap className="text-[#8d909f] transition-colors group-hover:text-[#fac52c]" />
            <div className="flex flex-col">
              <span className="font-grotesk text-[15px] leading-tight font-semibold tracking-tight text-[#e1e2ec] transition-colors group-hover:text-[#fac52c]">
                SMKN 1
              </span>
              <span className="text-[10px] tracking-wider text-[#8d909f] uppercase">
                Karawang
              </span>
            </div>
          </div>

          <div className="group flex cursor-default items-center gap-2 rounded-lg border border-[#434654]/30 bg-[#191b23]/40 px-2 py-4 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27]">
            <SquareTerminal className="text-[#8d909f] transition-colors group-hover:text-[#b2c5ff]" />
            <div className="flex flex-col">
              <span className="font-grotesk text-[15px] leading-tight font-semibold tracking-tight text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]">
                PPLG
              </span>
              <span className="text-[10px] tracking-wider text-[#8d909f] uppercase">
                Neskar
              </span>
            </div>
          </div>

          <div className="group flex cursor-default items-center gap-2 rounded-lg border border-[#434654]/30 bg-[#191b23]/40 px-2 py-4 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27]">
            <CloudCog className="text-[#8d909f] transition-colors group-hover:text-[#fac52c]" />
            <div className="flex flex-col">
              <span className="font-grotesk text-[15px] leading-tight font-semibold tracking-tight text-[#e1e2ec] transition-colors group-hover:text-[#fac52c]">
                AWS
              </span>
              <span className="text-[10px] tracking-wider text-[#8d909f] uppercase">
                Cloud Infrastructure
              </span>
            </div>
          </div>

          <div className="group col-span-2 flex cursor-default items-center gap-2 rounded-lg border border-[#434654]/30 bg-[#191b23]/40 px-2 py-4 transition-all duration-300 hover:border-[#8d909f] hover:bg-[#1d1f27] sm:col-span-1">
            <VectorPolygon className="text-[#8d909f] transition-colors group-hover:text-[#b2c5ff]" />
            <div className="flex flex-col">
              <span className="font-grotesk text-[15px] leading-tight font-semibold tracking-tight text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]">
                infokrw
              </span>
              <span className="text-[10px] tracking-wider text-[#8d909f] uppercase">
                Media Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
