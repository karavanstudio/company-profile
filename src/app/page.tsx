import { HydrateClient } from "@/trpc/server";
import UserLayout from "@/layouts/user-layout";
import HeroSection from "@/app/_components/home/hero-section";
import PartnersSection from "@/app/_components/home/partners-section";
import ProjectSection from "@/app/_components/home/project-section";
import AboutUs from "@/app/_components/home/about-us";
import GenresSection from "@/app/_components/home/genres-section";

export default async function Home() {
  return (
    <HydrateClient>
      <UserLayout>
        <div className="flex flex-col w-full">
          <HeroSection />
          <PartnersSection />
          <ProjectSection />
          <AboutUs />
          <GenresSection />
        </div>
      </UserLayout>
    </HydrateClient>
  );
}