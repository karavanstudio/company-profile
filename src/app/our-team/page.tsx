import type { Metadata } from "next";
import { HydrateClient } from "@/trpc/server";
import UserLayout from "@/layouts/user-layout";
import { HeroSection } from "@/app/_components/our-team/hero-section";
import { MembersSection } from "@/app/_components/our-team/members-section";
import { PhilosophySection } from "@/app/_components/our-team/philosophy-section";

export const metadata: Metadata = {
  title: "Karavan Team",
};

export default function OurTeamPage() {
  return (
    <HydrateClient>
      <UserLayout>
        <div className="flex w-full flex-col py-24">
          <HeroSection />
          <MembersSection />
          <PhilosophySection />
        </div>
      </UserLayout>
    </HydrateClient>
  )
}