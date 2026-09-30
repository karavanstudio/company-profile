import type { Metadata } from "next";
import Link from "next/link";
import { HydrateClient } from "@/trpc/server";
import UserLayout from "@/layouts/user-layout";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements",
};

export default async function AchievementsPage() {
  return (
    <HydrateClient>
      <UserLayout>
        <div className="flex w-full flex-col py-24">
          {/* hero section */}
          <div className="mb-20 flex max-w-4xl flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#fac52c]"></span>
              <span className="text-xs md:text-sm leading-4 font-medium tracking-widest text-[#c3c6d6] uppercase">
                Awards &amp; Recognition
              </span>
            </div>
            <h1 className="font-grotesk font-display-xl text-on-surface mb-space-lg text-4xl md:text-5xl leading-[1.08] font-bold tracking-tight text-[#e1e2ec]">
              Track Record of Achievements
            </h1>
            <p className="max-w-2xl text-sm leading-[1.78] text-[#c3c6d6] md:text-lg">
              We strive for technical excellence and great interactive
              world-building. We join competitions to test our skills against
              international standards.
            </p>
          </div>

          {/* metrics section */}
          <div className="mb-24 grid grid-cols-2 gap-x-8 gap-y-12 rounded-xl bg-[#0c0e15]/40 p-8 pb-16 md:grid-cols-4 shadow-sm">
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

          {/* Structured 2-Column Achievement Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {/* Achievement 01: Karawang Voice */}
            <article className="group flex flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27] md:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-[13px] font-semibold tracking-widest text-[#fac52c] uppercase">
                    01 — Viral Interactive Experience
                  </span>
                  <span className="text-xs md:text-[12.5px] text-[#8d909f]">2023 – Present</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-grotesk text-2xl font-semibold tracking-tight text-[#e1e2ec] md:text-3xl">
                    Creator of Karawang Voice
                  </h2>
                  <p className="text-base leading-[1.7] text-[#c3c6d6]">
                    An immersive Roblox recreation of West Java that united over
                    100,000 players through authentic regional landscapes and
                    realistic audio.
                  </p>
                </div>
                <div className="relative mt-2 h-56 w-full overflow-hidden rounded-lg bg-[#0c0e15]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                    alt="Minimalist architectural screenshot of a digital city environment in Roblox showing atmospheric night lighting, neon road outlines, volumetric fog, and precise 3D spatial geometry rendered with deep navy and amber accents"
                    src="/Achievements/Karawang_Voice.png"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-[#0c0e15]/80 px-3 py-1 text-[#e1e2ec] backdrop-blur-md">
                    <span className="text-xs tracking-wide text-[#c3c6d6]">
                      Top-Tier Spatial Simulation
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between bg-transparent pt-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b2c5ff]"></span>
                  <span className="text-xs md:text-[12.5px] text-[#c3c6d6]">
                    Engine: Lua / Roblox Core
                  </span>
                </div>
                <Link
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]"
                  href="https://www.roblox.com/login?returnUrl=https%3A%2F%2Fwww.roblox.com%2Fshare-links%3Fcode%3D7c6a39a544ce50419985a12d98f39763%26type%3DExperienceDetails%26deep_link_value%3Droblox%253A%252F%252Fnavigation%252Fshare_links%253Fcode%253D7c6a39a544ce50419985a12d98f39763%2526type%253DExperienceDetails%26pid%3DExperienceDetails%26is_retargeting%3Dfalse%26af_dp%3Droblox%253A%252F%252Fnavigation%252Fshare_links%253Fcode%253D7c6a39a544ce50419985a12d98f39763%2526type%253DExperienceDetails"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>

            {/* Achievement 02: Compfest 16 */}
            <article className="group flex flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27] md:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-[13px] font-semibold tracking-widest text-[#b2c5ff] uppercase">
                    02 — Software Engineering
                  </span>
                  <span className="text-xs md:text-[12.5px] text-[#8d909f]">Jakarta / 2024</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-grotesk text-2xl font-semibold tracking-tight text-[#e1e2ec] md:text-3xl">
                    Finalist Compfest 16
                  </h2>
                  <p className="text-base leading-[1.7] text-[#c3c6d6]">
                    Beat 171 engineering teams to reach the national finals by
                    solving multi-tenant scalability limits with distributed
                    event streaming and optimized relational schemas.
                  </p>
                </div>
                {/* Micro Visual Spec / Snapshot */}
                <div className="relative mt-2 h-56 w-full overflow-hidden rounded-lg bg-[#0c0e15]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                    alt="Compfest 16 Achievement"
                    src="/Achievements/Compfest16.jpeg"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between bg-transparent pt-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b2c5ff]"></span>
                  <span className="text-xs md:text-[12.5px] text-[#c3c6d6]">
                    Host: Universitas Indonesia
                  </span>
                </div>
                <Link
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]"
                  href="https://karavan-studios.itch.io/seblak-cihuyy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Project Pitch</span>
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>

            {/* Achievement 03: Regional Research & Innovation Week */}
            <article className="group flex flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27] md:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-[13px] font-semibold tracking-widest text-[#fac52c] uppercase">
                    03 — Civic Digital Interface
                  </span>
                  <span className="text-xs md:text-[12.5px] text-[#8d909f]">BRIDA / 2024</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-grotesk text-2xl font-semibold tracking-tight text-[#e1e2ec] md:text-3xl">
                    Pekan Riset Inovasi Daerah
                  </h2>
                  <p className="text-base leading-[1.7] text-[#c3c6d6]">
                    Awarded top honors by regional government bodies for
                    building Kangru, an AI-powered career mapping application
                    tailored to MBTI personality profiles.
                  </p>
                </div>
                {/* Micro Visual Spec / Snapshot */}
                <div className="relative mt-2 h-56 w-full overflow-hidden rounded-lg bg-[#0c0e15]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                    alt="Pekan Riset Inovasi Daerah Achievement"
                    src="/Achievements/sertifikat.jpeg"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between bg-transparent pt-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#fac52c]"></span>
                  <span className="text-xs md:text-[12.5px] text-[#c3c6d6]">
                    Domain: Civic Informatics
                  </span>
                </div>
                <Link
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#e1e2ec] transition-colors group-hover:text-[#b2c5ff]"
                  href="https://www.instagram.com/p/DNGHO04hh--/?img_index=1&stkn=MTBla29yNXdsa3Q5dw=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Documentation</span>
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>

            {/* Achievement 04: AIdeas Global Hackathon */}
            <article className="group flex flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-all duration-300 hover:bg-[#1d1f27] md:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-[13px] font-semibold tracking-widest text-[#b2c5ff] uppercase">
                    04 — Artificial Intelligence
                  </span>
                  <span className="text-xs md:text-[12.5px] text-[#8d909f]">
                    AWS Global / 2024
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-grotesk text-2xl font-semibold tracking-tight text-[#e1e2ec] md:text-3xl">
                    Kangru Advances to the Top 300 Semi-Finals in the AWS 10,000
                    AIdeas Competition
                  </h2>
                  <p className="text-base leading-[1.7] text-[#c3c6d6]">
                    Reached the global semifinal round out of over 10,000
                    international participants using Amazon Bedrock and
                    Anthropic models. We built an AI agent capable of generating
                    images and retrieving multi-modal data.
                  </p>
                </div>
                {/* Micro Visual Spec / Snapshot */}
                <div className="relative mt-2 h-56 w-full overflow-hidden rounded-lg bg-[#0c0e15]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                    alt="AWS AIdeas Achievement"
                    src="/Achievements/AIdeas.webp"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between bg-transparent pt-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b2c5ff]"></span>
                  <span className="text-xs md:text-[12.5px] text-[#c3c6d6]">
                    Host: Amazon Web Services
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#e1e2ec] transition-colors hover:text-[#b2c5ff]"
                    href="https://builder.aws.com/content/3AANk3Y5HgxDNdo0Gm3aZRSbetl/aideas-kangru-ai-mentorship-for-every-student-everywhere"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Article</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#e1e2ec] transition-colors hover:text-[#b2c5ff]"
                    href="https://builder.aws.com/content/3BEgQfoDlTFgf6mEH53H9KPrAXR/aideas-top-300-moving-to-the-judging-round"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Semifinalist</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Editorial Philosophy Statement */}
          <div className="mt-28 flex flex-col items-start justify-between gap-8 rounded-xl bg-[#0c0e15] p-10 pt-16 md:flex-row md:items-baseline">
            <div className="max-w-md">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#8d909f] uppercase">
                Methodology
              </span>
              <h3 className="font-grotesk mt-2 text-2xl md:text-3xl font-semibold text-[#e1e2ec]">
                Continuous Technical Auditing
              </h3>
            </div>
            <p className="max-w-xl text-base leading-[1.7] text-[#c3c6d6]">
              Every award validates our hard work. We participate not just to
              show up, but to prove that a small, disciplined team can build
              digital products that scale globally.
            </p>
          </div>
        </div>
      </UserLayout>
    </HydrateClient>
  );
}
