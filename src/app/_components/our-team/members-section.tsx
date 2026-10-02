"use client";

import { useState } from "react";
import {
  ExternalLink,
  Terminal,
  Mail,
  Globe,
  Palette,
  Box,
  Image as ImageIcon,
  Code,
  Layout,
  Mic,
  PenTool,
  AtSign,
  Smartphone,
  Cpu,
  Film,
  Layers,
  BarChart2,
} from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  categoryTag: string;
  categoryTagColor: string; // tailwind class, example "text-[#fac52c]"
  categories: string[]; // for filtering function
  links: {
    icon: React.ReactNode;
    url: string;
    label: string;
  }[];
}

const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: "gunawan",
    name: "Gunawan Busyaeri",
    role: "Founder & Lead Designer",
    description:
      "Leading design, game development, and digital brand strategy.",
    image: "/team/gunawan.jpg",
    imageAlt: "Portrait of Gunawan",
    categoryTag: "Leadership",
    categoryTagColor: "text-[#fac52c]",
    categories: ["leadership"],
    links: [
      {
        icon: <ExternalLink className="size-4.5" />,
        url: "#",
        label: "Portfolio link",
      },
      {
        icon: <Terminal className="size-4.5" />,
        url: "#",
        label: "Work profile",
      },
      {
        icon: <Mail className="size-4.5" />,
        url: "#",
        label: "Direct message",
      },
    ],
  },
  {
    id: "nayif",
    name: "Nayif Aditya",
    role: "Co-Founder & CTO",
    description:
      "Building reliable web systems, backend infrastructure, and game engine logic.",
    image: "/team/nayif.jpg",
    imageAlt: "Portrait of Nayif Aditya",
    categoryTag: "Tech Lead",
    categoryTagColor: "text-[#b2c5ff]",
    categories: ["leadership", "engineering"],
    links: [
      {
        icon: <Terminal className="size-4.5" />,
        url: "#",
        label: "GitHub Repository",
      },
      {
        icon: <Globe className="size-4.5" />,
        url: "#",
        label: "Public website",
      },
    ],
  },
  {
    id: "midori",
    name: "Midori Harahap",
    role: "Co-Founder & Game Artist",
    description:
      "Leading visual world-building, concept realization, stylistic consistency, and environmental art.",
    image: "/team/midori.jpg",
    imageAlt: "Portrait of Midori Harahap",
    categoryTag: "Game Art",
    categoryTagColor: "text-[#ffb3ad]",
    categories: ["leadership", "art"],
    links: [
      {
        icon: <Palette className="size-4.5" />,
        url: "#",
        label: "ArtStation profile",
      },
      {
        icon: <ExternalLink className="size-4.5" />,
        url: "#",
        label: "Showcase portfolio",
      },
    ],
  },
  {
    id: "abiyyu",
    name: "Abiyyu Pandu A.",
    role: "3D Artist",
    description:
      "Crafting hard-surface assets, organic character models, and procedural spatial textures.",
    image: "/team/biyyu.jpg",
    imageAlt: "Headshot of Abiyyu",
    categoryTag: "3D Craft",
    categoryTagColor: "text-[#c3c6d6]",
    categories: ["art"],
    links: [
      { icon: <Box className="size-4.5" />, url: "#", label: "Model view" },
      {
        icon: <ImageIcon className="size-4.5" />,
        url: "#",
        label: "Render archive",
      },
    ],
  },
  {
    id: "rafi",
    name: "Rafi Islami Pasha",
    role: "Web Developer",
    description:
      "Constructing performant modern web ecosystems, WebGL canvas integrations, and fluid client experiences.",
    image: "/team/rafi.png",
    imageAlt: "Portrait of Rafi",
    categoryTag: "Engineering",
    categoryTagColor: "text-[#c3c6d6]",
    categories: ["engineering"],
    links: [
      {
        icon: <Code className="size-4.5" />,
        url: "https://github.com/rafidhp",
        label: "Code repository",
      },
      {
        icon: <Layout className="size-4.5" />,
        url: "https://rafidhp-portfolio.vercel.app",
        label: "Interactive Demo",
      },
    ],
  },
  {
    id: "abdan",
    name: "Abdan Syakura",
    role: "Finance and Public Relations & 3D Artist",
    description:
      "Managing client partnerships, asset production, and community engagement.",
    image: "/team/abdan.jpg",
    imageAlt: "Headshot of Abdan Syakura",
    categoryTag: "PR & 3D",
    categoryTagColor: "text-[#c3c6d6]",
    categories: ["strategy", "art"],
    links: [
      { icon: <Mic className="size-4.5" />, url: "#", label: "PR Contact" },
      { icon: <Box className="size-4.5" />, url: "#", label: "3D Work" },
    ],
  },
  {
    id: "syahrul",
    name: "Syahrul Ghofar",
    role: "Public Relations & Graphic Designer",
    description:
      "Synthesizing visual communications, print media, key brand iconography, and ecosystem outreach.",
    image: "/team/syahrul.jpg",
    imageAlt: "Portrait of Syahrul",
    categoryTag: "PR & Graphic",
    categoryTagColor: "text-[#c3c6d6]",
    categories: ["strategy", "art"],
    links: [
      {
        icon: <PenTool className="size-4.5" />,
        url: "#",
        label: "Graphics archive",
      },
      {
        icon: <AtSign className="size-4.5" />,
        url: "#",
        label: "Communications channel",
      },
    ],
  },
  {
    id: "nazam",
    name: "Nazam Ahmad",
    role: "UI/UX & Web Developer",
    description: "Designing intuitive and responsive user interfaces.",
    image: "/team/nazam.jpg",
    imageAlt: "Studio portrait of Nazam",
    categoryTag: "UI/UX & Web",
    categoryTagColor: "text-[#b2c5ff]",
    categories: ["engineering"],
    links: [
      {
        icon: <Smartphone className="size-4.5" />,
        url: "#",
        label: "Interface case studies",
      },
      {
        icon: <Cpu className="size-4.5" />,
        url: "#",
        label: "Web prototypes",
      },
    ],
  },
  {
    id: "fajril",
    name: "Fajri Yusin S.",
    role: "Video Editor & UI/UX Designer",
    description:
      "Balancing timeline rhythm, kinetic typography, post-production showreels, and user design tokens.",
    image: "/team/fajril.jpg",
    imageAlt: "Profile of Fajril",
    categoryTag: "Motion & UI",
    categoryTagColor: "text-[#fac52c]",
    categories: ["art", "engineering"],
    links: [
      {
        icon: <Film className="size-4.5" />,
        url: "#",
        label: "Video showreel",
      },
      {
        icon: <Layers className="size-4.5" />,
        url: "#",
        label: "Interface design",
      },
    ],
  },
  {
    id: "raeynal",
    name: "Raeynal Afghani A.",
    role: "Branding & Marketing",
    description:
      "Positioning Karavan’s creations globally, spearheading studio narrative, and driving community reach.",
    image: "/team/raeynal.png",
    imageAlt: "Portrait of Raeynal",
    categoryTag: "Marketing",
    categoryTagColor: "text-[#c3c6d6]",
    categories: ["strategy"],
    links: [
      {
        icon: <BarChart2 className="size-4.5" />,
        url: "#",
        label: "Campaign portfolio",
      },
      {
        icon: <Globe className="size-4.5" />,
        url: "#",
        label: "Brand channel",
      },
    ],
  },
];

export function MembersSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { label: "All Disciplines", value: "all" },
    { label: "Leadership", value: "leadership" },
    { label: "3D & Art", value: "art" },
    { label: "Engineering & UI", value: "engineering" },
    { label: "Strategy & PR", value: "strategy" },
  ];

  const filteredMembers = TEAM_MEMBERS_DATA.filter((member) => {
    if (activeFilter === "all") return true;
    return member.categories.includes(activeFilter);
  });

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 pb-16">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.value;

          return (
            <button
              key={option.value}
              className={`cursor-pointer rounded-full px-4 py-1 text-xs md:text-sm transition-all duration-200 ${
                isActive
                  ? "bg-[#32343c] text-[#e1e2ec]"
                  : "bg-[#191b23] text-[#c3c6d6] hover:bg-[#1d1f27] hover:text-[#e1e2ec]"
              }`}
              onClick={() => setActiveFilter(option.value)}
              type="button"
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col justify-between rounded-xl bg-[#191b23] p-8 transition-colors duration-200 hover:bg-[#1d1f27]"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#32343c]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-full w-full object-cover"
                    data-alt={member.imageAlt}
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <span
                  className={`rounded-full bg-[#32343c] px-3 py-1 text-xs md:text-sm font-medium ${member.categoryTagColor}`}
                >
                  {member.categoryTag}
                </span>
              </div>
              <div>
                <h3 className="font-grotesk text-xl md:text-2xl font-semibold tracking-tight text-[#e1e2ec]">
                  {member.name}
                </h3>
                <p className="pt-1 text-base leading-relaxed text-[#c3c6d6]">
                  {member.role}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[#8d909f]">
                {member.description}
              </p>
            </div>
            <div className="flex items-center gap-4 pt-6">
              {member.links.map((link, idx) => (
                <a
                  key={idx}
                  aria-label={link.label}
                  className="text-[#c3c6d6] transition-colors hover:text-[#b2c5ff]"
                  href={link.url}
                  target={link.url === '#'
                    ? '_self' : '_blank'
                  }
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
