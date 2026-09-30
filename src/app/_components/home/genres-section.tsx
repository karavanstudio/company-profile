import { ArrowRight } from "lucide-react";

export default function GenresSection() {
  return (
    <section className="py-20 md:py-28" id="disciplines">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium tracking-widest text-[#fac52c] uppercase">
            Methodology
          </span>
          <h2 className="font-grotesk text-4xl font-bold tracking-tight text-[#e1e2ec] md:text-6xl">
            Core Genres
          </h2>
        </div>
        <p className="max-w-md text-base text-[#c3c6d6]">
          Games and experiences crafted through years of testing, refining
          mechanics, and focusing on localized storytelling.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="group flex min-h-65 flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27]">
          <div>
            <span className="font-mono text-[0.75rem] text-[#c3c6d6]">01</span>
            <h3 className="font-grotesk mt-4 mb-1 text-[1.375rem] font-semibold text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]">
              Simulation
            </h3>
            <p className="text-[0.875rem] leading-relaxed text-[#c3c6d6]">
              Creating realistic physics and systems that feel responsive and
              lifelike.
            </p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-[0.75rem] text-[#c3c6d6]">
              Physics &amp; Worldbuilding
            </span>
            <ArrowRight className="text-[#8d909f] opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>

        <div className="group flex min-h-65 flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27]">
          <div>
            <span className="font-mono text-[0.75rem] text-[#c3c6d6]">02</span>
            <h3 className="font-grotesk mt-4 mb-1 text-[1.375rem] font-semibold text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]">
              Management
            </h3>
            <p className="text-[0.875rem] leading-relaxed text-[#c3c6d6]">
              Designing balanced economies and satisfying problem-solving
              mechanics.
            </p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-[0.75rem] text-[#c3c6d6]">
              Dynamic Economy
            </span>
            <ArrowRight className="text-[#8d909f] opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>

        <div className="group flex min-h-65 flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27]">
          <div>
            <span className="font-mono text-[0.75rem] text-[#c3c6d6]">03</span>
            <h3 className="font-grotesk mt-4 mb-1 text-[1.375rem] font-semibold text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]">
              Education
            </h3>
            <p className="text-[0.875rem] leading-relaxed text-[#c3c6d6]">
              Interactive learning experiences that help build real-world
              understanding.
            </p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-[0.75rem] text-[#c3c6d6]">
              Pedagogical UX
            </span>
            <ArrowRight className="text-[#8d909f] opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>

        <div className="group flex min-h-65 flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27]">
          <div>
            <span className="font-mono text-[0.75rem] text-[#c3c6d6]">04</span>
            <h3 className="font-grotesk mt-4 mb-1 text-[1.375rem] font-semibold text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]">
              Horror Urban Legend
            </h3>
            <p className="text-[0.875rem] leading-relaxed text-[#c3c6d6]">
              Using sound design and regional Indonesian folklore to build
              tension and atmosphere.
            </p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-[0.75rem] text-[#c3c6d6]">
              Sensory Immersion
            </span>
            <ArrowRight className="text-[#8d909f] opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
