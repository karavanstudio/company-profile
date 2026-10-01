import type { Metadata } from "next";
import { HydrateClient } from "@/trpc/server";
import UserLayout from "@/layouts/user-layout";
import type { Project } from "@/app/_components/projects/hero-section";
import HeroSection from "@/app/_components/projects/hero-section";
import StatsSection from "@/app/_components/projects/stats-section";

export const metadata: Metadata = {
  title: "Achievements",
};

const PROJECTS_DATA: Project[] = [
  {
    id: "rusunawa",
    title: "Rusunawa: Mimpi Edition",
    category: "Game Development & Interactive Media",
    year: "2023",
    status: "completed",
    statusText: "Completed",
    description:
      "An atmospheric horror and puzzle game where players are trapped in a nightmare controlled by a child spirit. Navigate a tense, labyrinthine haunted apartment complex in the dark to find the single door that leads to survival.",
    image: "/Projects/rusunawa.jpeg",
    imageAlt: "Rusunawa: Mimpi Edition",
    tag: "Horror Game / Puzzle Design",
    primaryLink: {
      label: "Explore Case",
      url: "https://drive.google.com/file/d/1Txet3m15Sc3_zd5ZeZUDmLxJGFepeSn0/view?usp=sharing",
    },
  },
  {
    id: "karaventure",
    title: "Karaventure",
    category: "Cultural Heritage & EdTech",
    year: "2026",
    status: "in-progress",
    statusText: "In Progress",
    description:
      "An immersive platform driving Karawang Adventure & Virtual Education. By integrating Roblox technology and AI, the project transforms local cultural heritage into engaging, interactive learning experiences for digital natives.",
    image: "/Projects/karaventure.jpeg",
    imageAlt: "Karaventure",
    tag: "AI / Roblox Studio",
    primaryLink: {
      label: "Karaventure Website",
      url: "https://senior-robina-himarpl-f0a49bc9.koyeb.app/",
    },
    secondaryLink: {
      label: "Karaventure Roblox",
      url: "https://www.roblox.com/games/81561987422403/ek",
    },
  },
  {
    id: "semprong-ceria",
    title: "Semprong Ceria",
    category: "Game Development & Simulation",
    year: "2023",
    status: "completed",
    statusText: "Completed",
    description:
      "A heartwarming slice-of-life business simulator. Guide Asep, an ambitious high school graduate from a humble family, as he manages a roadside shop to achieve his dream of becoming a master semprong entrepreneur.",
    image: "/Projects/semprong.png",
    imageAlt: "Semprong Ceria",
    tag: "Business Sim / Narrative Design",
    primaryLink: {
      label: "Explore Case",
      url: "#",
    },
  },
  {
    id: "leumpang",
    title: "Leumpang",
    category: "Sports Tech & Metaverse",
    year: "2026 (In Development)",
    status: "in-progress",
    statusText: "In Progress",
    description:
      "An innovative Roblox experience recreating Karawang's Singaperbangsa Stadium. This ongoing project bridges physical fitness and the metaverse by seamlessly integrating real-world sports tracking with virtual gameplay.",
    image: "/Projects/leumpang.jpeg",
    imageAlt: "Leumpang",
    tag: "FitTech / Roblox Studio",
    primaryLink: {
      label: "View Project",
      url: "#",
    },
  },
  {
    id: "seblak-cihuyy",
    title: "Seblak Cihuyy",
    category: "Game Development // Cooking Simulator",
    year: "2024",
    status: "completed",
    statusText: "Completed",
    description:
      "A fast-paced time-management game celebrating Indonesian street food culture. Players are challenged to run a bustling Seblak stall, mastering complex customer orders and extreme spice levels under pressure.",
    image: "/Projects/seblak.png",
    imageAlt: "Seblak Cihuyy",
    tag: "Cooking Simulator",
    primaryLink: {
      label: "Explore Case",
      url: "https://karavan-studios.itch.io/seblak-cihuyy",
    },
  },
  {
    id: "sorai",
    title: "Sorai",
    category: "Interactive Storytelling & Visual Novel",
    year: "2027 (In Development)",
    status: "in-progress",
    statusText: "In Progress",
    description:
      "Inspired by titles like Coffee Talk, Sorai is a cozy visual novel that celebrates local Indonesian culture. Players step into the role of a traditional stall owner, conversing with patrons and influencing their personal storylines exclusively through the art of customizing and cooking the perfect surabi.",
    image: "/Projects/sorai.jpg",
    imageAlt: "Sorai",
    tag: "Visual Novel / Cultural Heritage",
    primaryLink: {
      label: "View Project",
      url: "#",
    },
  },
  {
    id: "brewek",
    title: "Brewek",
    category: "Game Development & Simulation",
    year: "Beta 2026",
    status: "completed",
    statusText: "Completed",
    description:
      "A digital simulator that brings a beloved local card game to the virtual space. Engineered with realistic card physics, real-time matchmaking, and authentic mechanics to preserve the traditional tabletop experience online.",
    image: "/Projects/brewek.png",
    imageAlt: "Brewek",
    tag: "Local Card Game / Simulator",
    primaryLink: {
      label: "View Project",
      url: "https://www.roblox.com/games/90229198050659/Brewek",
    },
  },
  {
    id: "kangru",
    title: "Kangru (Akang Guru)",
    category: "Vocational EdTech & Career Mapping",
    year: "2025",
    status: "completed",
    statusText: "Completed",
    description:
      "An AI-powered career mapping application tailored to MBTI personality profiles. The platform empowers students and fresh graduates by aligning their unique psychological traits with optimized industry pathways and personalized mentorship.",
    image: "/Projects/kangru.jpeg",
    imageAlt: "Kangru (Akang Guru)",
    tag: "AI / Personality Analytics",
    primaryLink: {
      label: "Explore Case",
      url: "https://drive.google.com/file/d/1KFvhZbRXuNoBE9SKnDDDKj_veoVbbcnY/view?usp=sharing",
    },
  },
  {
    id: "karawang-voice",
    title: "Karawang Voice",
    category: "Virtual Communities & Metaverse",
    year: "2024",
    status: "completed",
    statusText: "Completed",
    description:
      "An immersive interactive map on Roblox that became a massive hit across West Java. Featuring authentic regional landscapes and realistic audio, this virtual gathering space successfully engaged over 100,000 unique players.",
    image: "/Projects/spotlight.png",
    imageAlt: "Karawang Voice",
    tag: "Game Development / Level Design",
    isFullWidth: true,
    specs: {
      performanceScore: "92%",
      architecture: "Lua & Roblox Studio",
    },
    primaryLink: {
      label: "Explore Case",
      url: "https://www.roblox.com/login?returnUrl=https%3A%2F%2Fwww.roblox.com%2Fshare-links%3Fcode%3D7c6a39a544ce50419985a12d98f39763%26type%3DExperienceDetails%26deep_link_value%3Droblox%253A%252F%252Fnavigation%252Fshare_links%253Fcode%253D7c6a39a544ce50419985a12d98f39763%2526type%253DExperienceDetails%26pid%3DExperienceDetails%26is_retargeting%3Dfalse%26af_dp%3Droblox%253A%252F%252Fnavigation%252Fshare_links%253Fcode%253D7c6a39a544ce50419985a12d98f39763%2526type%253DExperienceDetails",
    },
  },
];

export default function ProjectsPage() {
  return (
    <HydrateClient>
      <UserLayout>
        <div className="flex flex-col w-full">
          <HeroSection projects={PROJECTS_DATA} />
          <StatsSection />
        </div>
      </UserLayout>
    </HydrateClient>
  );
}