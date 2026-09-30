import type { Metadata } from "next";
import { HydrateClient } from "@/trpc/server";
import UserLayout from "@/layouts/user-layout";
import HeroSection from "@/app/_components/achievements/hero-section";
import AchievementsSection from "@/app/_components/achievements/achievements-section";
import PhilosophySection from "@/app/_components/achievements/philosophy-section";

export const metadata: Metadata = {
  title: "Achievements",
};

export default async function AchievementsPage() {
  return (
    <HydrateClient>
      <UserLayout>
        <div className="flex w-full flex-col py-24">
          <HeroSection />
          <AchievementsSection />
          <PhilosophySection />
        </div>
      </UserLayout>
    </HydrateClient>
  );
}
