"use client";

import { Search } from "lucide-react";
import { useEffect } from "react";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTopic: string;
  setActiveTopic: (topic: string) => void;
}

export function HeroSection({
  searchQuery,
  setSearchQuery,
  activeTopic,
  setActiveTopic,
}: HeroSectionProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        document.getElementById("article-search")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const topics = [
    "All Dispatches (3)",
    "Tech & Infrastructure",
    "Game Design",
    "Milestone & Culture",
  ];

  return (
    <div className="mb-20 flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="flex max-w-2xl flex-col gap-2">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest text-[#fac52c] uppercase">
            <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#fac52c]"></span>
            <span>Studio Journal &amp; Dispatches</span>
          </div>
          <h1 className="font-grotesk text-4xl font-bold tracking-tight text-[#e1e2ec] md:text-6xl">
            Articles and Updates
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-[#c3c6d6]">
            Reflections on high-throughput game systems, interactive craft,
            narrative heritage, and technical breakthroughs directly from our
            studio floor.
          </p>
        </div>

        <div className="w-full shrink-0 md:w-80">
          <label className="sr-only" htmlFor="article-search">
            Search studio publications
          </label>
          <div className="relative flex items-center rounded-full bg-[#191b23] px-4 py-2 shadow-inner">
            <Search className="pointer-events-none mr-2 size-5 md:size-6 text-[#8d909f]" />
            <input
              className="w-full border-0 bg-transparent text-sm text-[#e1e2ec] placeholder:text-[#8d909f] focus:outline-none"
              id="article-search"
              placeholder="Search writings, topics..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="hidden rounded bg-[#1d1f27] px-2 py-0.5 text-xs md:text-sm text-[#8d909f] sm:inline-block tracking-widest">
              ⌘K
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1 pt-2 text-xs md:text-sm text-[#c3c6d6]">
        <span className="mr-1 text-xs tracking-wider text-[#8d909f] uppercase">
          Filter by topic:
        </span>
        {topics.map((topic) => {
          const isActive = activeTopic === topic;
          return (
            <button
              key={topic}
              className={`cursor-pointer rounded-full px-4 py-1 transition-colors duration-200 ${
                isActive
                  ? "bg-[#282a31] text-[#e1e2ec] shadow-sm"
                  : "bg-[#191b23] text-[#c3c6d6] hover:text-[#e1e2ec]"
              }`}
              onClick={() => setActiveTopic(topic)}
              type="button"
            >
              {topic}
            </button>
          );
        })}
      </div>
    </div>
  );
}
