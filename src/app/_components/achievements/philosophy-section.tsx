export default function PhilosophySection() {
  return (
    <div className="mt-28 flex flex-col items-start justify-between gap-8 rounded-xl bg-[#0c0e15] p-10 pt-16 md:flex-row md:items-baseline">
      <div className="max-w-md">
        <span className="text-xs font-semibold tracking-widest text-[#8d909f] uppercase md:text-sm">
          Methodology
        </span>
        <h3 className="font-grotesk mt-2 text-2xl font-semibold text-[#e1e2ec] md:text-3xl">
          Continuous Technical Auditing
        </h3>
      </div>
      <p className="max-w-xl text-base leading-[1.7] text-[#c3c6d6]">
        Every award validates our hard work. We participate not just to show up,
        but to prove that a small, disciplined team can build digital products
        that scale globally.
      </p>
    </div>
  );
}
