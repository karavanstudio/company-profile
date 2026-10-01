export default function StatsSection() {
  return (
    <section className="mb-24 rounded-xl bg-[#0c0e15] p-8 md:p-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <span className="font-grotesk text-4xl font-bold text-[#b2c5ff] md:text-6xl">
            14+
          </span>
          <span className="text-xs font-semibold tracking-wider text-[#c3c6d6] uppercase">
            Digital Builds
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-grotesk text-4xl font-bold text-[#e1e2ec] md:text-6xl">
            99.8%
          </span>
          <span className="text-xs font-semibold tracking-wider text-[#c3c6d6] uppercase">
            Uptime Reliability
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-grotesk text-4xl font-bold text-[#fac52c] md:text-6xl">
            3
          </span>
          <span className="text-xs font-semibold tracking-wider text-[#c3c6d6] uppercase">
            Live Prototypes
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-grotesk text-4xl font-bold text-[#e1e2ec] md:text-6xl">
            100%
          </span>
          <span className="text-xs font-semibold tracking-wider text-[#c3c6d6] uppercase">
            Karawang Craft
          </span>
        </div>
      </div>
    </section>
  );
}
