export default function HeroSection() {
  return (
    <section>
      <div className="mb-20 flex max-w-4xl flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#fac52c] md:h-2 md:w-2"></span>
          <span className="text-xs leading-4 font-medium tracking-widest text-[#c3c6d6] uppercase md:text-sm">
            Awards &amp; Recognition
          </span>
        </div>
        <h1 className="font-grotesk font-display-xl text-on-surface mb-space-lg text-4xl leading-[1.08] font-bold tracking-tight text-[#e1e2ec] md:text-5xl">
          Track Record of Achievements
        </h1>
        <p className="max-w-2xl text-sm leading-[1.78] text-[#c3c6d6] md:text-lg">
          We strive for technical excellence and great interactive
          world-building. We join competitions to test our skills against
          international standards.
        </p>
      </div>

      {/* metrics section */}
      <div className="mb-24 grid grid-cols-2 gap-x-8 gap-y-12 rounded-xl bg-[#0c0e15]/40 p-8 pb-16 shadow-sm md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="font-grotesk text-3xl font-bold tracking-tight text-[#e1e2ec] md:text-4xl">
            171+
          </div>
          <div className="text-xs font-medium tracking-widest text-[#8d909f] uppercase">
            Competitors Bested
          </div>
          <div className="text-sm leading-normal text-[#c3c6d6]/70">
            Compfest 16 National Scope
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-grotesk text-3xl font-bold tracking-tight text-[#b2c5ff] md:text-4xl">
            10k+
          </div>
          <div className="text-xs font-medium tracking-widest text-[#8d909f] uppercase">
            Global AI Teams
          </div>
          <div className="text-sm leading-normal text-[#c3c6d6]/70">
            AWS AIdeas Hackathon
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-grotesk text-3xl font-bold tracking-tight text-[#e1e2ec] md:text-4xl">
            100k+
          </div>
          <div className="text-xs font-medium tracking-widest text-[#8d909f] uppercase">
            Player Sessions
          </div>
          <div className="text-sm leading-normal text-[#c3c6d6]/70">
            Karawang Voice Simulation
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-grotesk text-3xl font-bold tracking-tight text-[#fac52c] md:text-4xl">
            #1
          </div>
          <div className="text-xs font-medium tracking-widest text-[#8d909f] uppercase">
            Viral Sensation
          </div>
          <div className="text-sm leading-normal text-[#c3c6d6]/70">
            Regional Virtual Culture
          </div>
        </div>
      </div>
    </section>
  );
}
