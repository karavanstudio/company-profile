'use client';

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface SecondaryLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  status: "completed" | "in-progress";
  statusText: string;
  description: string;
  image: string;
  imageAlt?: string;
  tag: string;
  primaryLink?: {
    label: string;
    url: string;
  };
  secondaryLink?: SecondaryLink;
  isFullWidth?: boolean;
  specs?: {
    performanceScore?: string;
    architecture?: string;
  };
}

interface HeroSectionProps {
  projects: Project[];
}

export default function HeroSection({ projects }: HeroSectionProps) {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.status === filter;
  });

  const completedCount = projects.filter((p) => p.status === "completed").length;
  const inProgressCount = projects.filter((p) => p.status === "in-progress").length;

  return (
    <>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#b2c5ff]/5 blur-[120px] pointer-events-none"></div>
        <div className="flex flex-col max-w-4xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#b2c5ff]"></span>
            <span className="text-xs uppercase tracking-widest text-[#b2c5ff] font-medium">
              Selected Works &amp; Archive
            </span>
          </div>
          <h1 className="font-grotesk text-3xl md:text-6xl text-[#e1e2ec] tracking-tight mb-4 font-bold">
            Our Works &amp; Portfolio
          </h1>
          <p className="text-lg text-[#c3c6d6] max-w-2xl leading-relaxed">
            Building digital realities, interactive platforms, and user interfaces in Karawang for clients worldwide.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <button
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === "all"
                ? "bg-[#282a31] text-[#e1e2ec] shadow-sm"
                : "bg-[#191b23] text-[#c3c6d6] hover:text-[#e1e2ec] hover:bg-[#282a31]"
            }`}
            onClick={() => setFilter("all")}
            type="button"
          >
            All Projects <span className="ml-1 text-[#c3c6d6] font-normal">{projects.length}</span>
          </button>

          <button
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === "completed"
                ? "bg-[#282a31] text-[#e1e2ec] shadow-sm"
                : "bg-[#191b23] text-[#c3c6d6] hover:text-[#e1e2ec] hover:bg-[#282a31]"
            }`}
            onClick={() => setFilter("completed")}
            type="button"
          >
            Completed <span className="ml-1 text-[#c3c6d6] font-normal">{completedCount}</span>
          </button>

          <button
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === "in-progress"
                ? "bg-[#282a31] text-[#e1e2ec] shadow-sm"
                : "bg-[#191b23] text-[#c3c6d6] hover:text-[#e1e2ec] hover:bg-[#282a31]"
            }`}
            onClick={() => setFilter("in-progress")}
            type="button"
          >
            In Progress <span className="ml-1 text-[#c3c6d6] font-normal">{inProgressCount}</span>
          </button>
        </div>
      </section>

      <section className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10" id="projectGrid">
          {filteredProjects.map((project) => {
            const isCompleted = project.status === "completed";

            if (project.isFullWidth) {
              return (
                <article
                  key={project.id}
                  className="project-card group flex flex-col md:col-span-2 bg-[#191b23] rounded-xl p-6 md:p-10 transition-all duration-300 hover:bg-[#1d1f27]"
                  data-status={project.status}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 relative w-full aspect-16/10 overflow-hidden rounded-lg bg-[#0c0e15]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15]/80 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#b2c5ff]/10 text-[#b2c5ff] backdrop-blur-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b2c5ff]"></span>
                          {project.statusText}
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                      <div>
                        <div className="flex items-center justify-between text-[#c3c6d6] text-xs mb-3">
                          <span>{project.category}</span>
                          <span>{project.year}</span>
                        </div>
                        <h2 className="font-grotesk text-2xl md:text-3xl text-[#e1e2ec] group-hover:text-[#b2c5ff] transition-colors duration-200 mb-4 font-semibold">
                          {project.title}
                        </h2>
                        <p className="text-base text-[#c3c6d6] leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {project.specs && (
                          <div className="space-y-3 mb-8">
                            {project.specs.performanceScore && (
                              <div className="flex items-center justify-between py-2 text-xs text-[#c3c6d6]">
                                <span>Performance Score</span>
                                <span className="text-[#e1e2ec] font-mono">
                                  {project.specs.performanceScore}
                                </span>
                              </div>
                            )}
                            {project.specs.architecture && (
                              <div className="flex items-center justify-between py-2 text-xs text-[#c3c6d6]">
                                <span>Architecture</span>
                                <span className="text-[#e1e2ec]">{project.specs.architecture}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        {project.primaryLink && (
                          <a
                            className="text-sm text-[#b2c5ff] group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1.5 font-medium"
                            href={project.primaryLink.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.primaryLink.label}
                            <ArrowRight className="size-4.5" />
                          </a>
                        )}
                        <span className="text-xs text-[#8d909f]">{project.tag}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={project.id}
                className="project-card group flex flex-col bg-[#191b23] rounded-xl p-6 md:p-8 transition-all duration-300 hover:bg-[#1d1f27]"
                data-status={project.status}
              >
                <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg bg-[#0c0e15] mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15]/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs backdrop-blur-md ${
                        isCompleted
                          ? "bg-[#b2c5ff]/10 text-[#b2c5ff]"
                          : "bg-[#fac52c]/10 text-[#fac52c]"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isCompleted ? "bg-[#b2c5ff]" : "bg-[#fac52c] animate-pulse"
                        }`}
                      ></span>
                      {project.statusText}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[#c3c6d6] text-xs mb-2">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                        </div>
                    <h2
                      className={`font-grotesk text-xl md:text-2xl text-[#e1e2ec] transition-colors duration-200 mb-3 font-semibold ${
                        isCompleted ? "group-hover:text-[#b2c5ff]" : "group-hover:text-[#fac52c]"
                      }`}
                    >
                      {project.title}
                    </h2>
                    <p className="text-base text-[#c3c6d6] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                      {project.primaryLink && (
                        <a
                          className={`text-sm md:text-base group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1.5 font-medium hover:underline ${
                            isCompleted ? "text-[#b2c5ff]" : "text-[#fac52c]"
                          }`}
                          href={project.primaryLink.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.primaryLink.label}
                          <ArrowRight className="size-4.5" />
                        </a>
                      )}

                      {project.secondaryLink && (
                        <a
                          className={`text-sm md:text-base group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1.5 font-medium hover:underline ${
                            isCompleted ? "text-[#b2c5ff]" : "text-[#fac52c]"
                          }`}
                          href={project.secondaryLink.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.secondaryLink.label}
                          <ArrowRight className="size-4.5" />
                        </a>
                      )}
                    </div>

                    <span className="text-xs text-[#8d909f] pb-1">{project.tag}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}