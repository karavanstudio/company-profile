"use client";

import { useState } from "react";
import { HeroSection } from "@/app/_components/articles/hero-section";
import { ArticlesSection } from "@/app/_components/articles/articles-section";

export default function ArticlesIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState("All Dispatches (3)");

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute top-12 left-1/2 -z-10 h-85 w-180 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#b2c5ff]/10 via-[#b2c5ff]/0 to-transparent blur-3xl"></div>

      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
      />

      <ArticlesSection searchQuery={searchQuery} />
    </section>
  );
}
