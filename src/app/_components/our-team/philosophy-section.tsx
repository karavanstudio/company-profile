import { CheckCircle, MapPin } from "lucide-react";

export function PhilosophySection() {
  return (
    <div className="mt-24 p-8 md:p-12 rounded-xl bg-[#0c0e15] flex flex-col lg:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex flex-col gap-2 max-w-xl">
        <span className="text-xs text-[#fac52c] uppercase tracking-widest font-medium">
          Culture &amp; Philosophy
        </span>
        <h2 className="font-grotesk text-2xl md:text-3xl text-[#e1e2ec] font-semibold">
          Crafted in Karawang, Experienced Everywhere
        </h2>
        <p className="text-base text-[#c3c6d6] leading-relaxed">
          We operate as an agile creative union that fosters autonomy, cross-disciplinary experimentation, and rigorous production standards on every release.
        </p>
      </div>
      <div className="flex gap-4 w-full max-w-xl lg:max-w-none lg:justify-end">
        <div className="flex flex-1 lg:flex-none items-center gap-2 px-4 py-2 rounded-lg bg-[#1d1f27]">
          <CheckCircle className="text-[#b2c5ff] size-5" />
          <span className="text-xs md:text-sm text-[#e1e2ec] font-medium">100% In-House</span>
        </div>
        <div className="flex flex-1 lg:flex-none items-center gap-2 px-4 py-2 rounded-lg bg-[#1d1f27]">
          <MapPin className="text-[#fac52c] size-5" />
          <span className="text-xs md:text-sm text-[#e1e2ec] font-medium">West Java, ID</span>
        </div>
      </div>
    </div>
  );
}
