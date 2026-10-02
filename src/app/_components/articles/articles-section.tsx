"use client";

import { ArrowRight } from "lucide-react";

export interface Article {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  readTime: string;
  category: string;
  topicBadge: string;
  date: string;
  datetime: string;
  link: string;
  linkText: string;
}

const ARTICLES_DATA: Article[] = [
  {
    id: "gwr-amazon",
    number: "01",
    title: "Guinness World Records: Generative AI with Amazon",
    description:
      "Karavan Studio proudly participated in Amazon's historic Guinness World Records achievement in West Java. We collaborated with local students and educators to successfully build over 10,800 unique Gen AI applications in a single day.",
    image: "/Articles/gwr.jpeg",
    imageAlt:
      "Abstract nocturnal 3D rendering of complex networked data nodes, geometric glowing pipelines, cold blue luminescence...",
    readTime: "12 min read",
    category: "SysOps / Netcode",
    topicBadge: "Global Recognition & AI",
    date: "October 15, 2025",
    datetime: "2025-10-15",
    link: "https://press.aboutamazon.com/sg/community/2025/10/amazon-sets-new-guinness-world-records-for-gen-ai-apps-with-schools-in-west-java",
    linkText: "Read Article",
  },
  {
    id: "aws-think-big",
    number: "02",
    title:
      'AWS Launches First "Think Big Space" Education Lab in Southeast Asia',
    description:
      "Amazon Web Services (AWS) has inaugurated its first educational laboratory in Southeast Asia at SMKN 1 Karawang. The space provides a dedicated, hands-on environment for students and educators to explore interactive projects in STEAM, artificial intelligence, and cloud computing.",
    image: "/Articles/tbs.jpeg",
    imageAlt:
      "Atmospheric documentary photography of a youthful game development team presenting on a dimly lit main festival stage...",
    readTime: "3 min read",
    category: "Tech & Education",
    topicBadge: "Cloud Computing & STEAM",
    date: "October 25, 2024",
    datetime: "2024-10-25",
    link: "https://www.antaranews.com/berita/4421177/aws-bangun-lab-edukasi-think-big-space-pertama-di-asia-tenggara",
    linkText: "Read Article",
  },
  {
    id: "rpl-prestasi",
    number: "03",
    title:
      "Jurusan RPL SMKN 1 Karawang Borong Prestasi: Dari Lomba Metaverse Sampai Game Development",
    description:
      "Mulai dari tingkat kabupaten, provinsi, hingga nasional, jurusan Rekayasa Perangkat Lunak (RPL) SMKN 1 Karawang konsisten menorehkan prestasi gemilang di berbagai ajang kompetisi teknologi dan pengembangan gim.",
    image: "/Articles/rpl.jpg",
    imageAlt:
      "Moody cinematic game concept art featuring a mist-drenched tropical forest path illuminated by a faint kerosene lamp...",
    readTime: "5 min read",
    category: "Vocational Education",
    topicBadge: "Achievement & Tech",
    date: "March 30, 2023",
    datetime: "2023-03-30",
    link: "https://www.faktajabar.co.id/2023/03/30/jurusan-rpl-smkn-1-karawang-borong-prestasi/",
    linkText: "Baca Berita",
  },
];

interface ArticlesSectionProps {
  searchQuery: string;
}

export function ArticlesSection({
  searchQuery,
}: ArticlesSectionProps) {
  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.topicBadge.toLowerCase().includes(query);

    return matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredArticles.map((article) => (
        <article
          key={article.id}
          className="group flex flex-col justify-between rounded-xl bg-[#191b23]/70 p-7 shadow-md backdrop-blur-xl transition-all duration-300 hover:bg-[#191b23] md:p-8"
        >
          <div className="flex flex-col gap-4">
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-[#1d1f27]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt={article.imageAlt}
                src={article.image}
                alt={article.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15]/80 via-transparent to-transparent"></div>
              <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between">
                <span className="rounded-full bg-[#32343c]/80 px-2 py-0.5 text-xs font-medium text-[#dae2ff] backdrop-blur-md">
                  {article.readTime}
                </span>
                <span className="text-xs font-medium text-[#c3c6d6]">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-1">
              <span className="rounded-full bg-[#fac52c]/10 px-2 py-0.5 text-xs font-semibold tracking-wide text-[#fac52c] uppercase">
                {article.topicBadge}
              </span>
              <time
                className="text-xs font-medium text-[#8d909f]"
                dateTime={article.datetime}
              >
                {article.date}
              </time>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-grotesk text-xl leading-snug font-semibold text-[#e1e2ec] transition-colors duration-200 group-hover:text-[#b2c5ff]">
                {article.title}
              </h2>
              <p className="line-clamp-3 text-base leading-[1.7] text-[#c3c6d6]">
                {article.description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between pt-6">
            <a
              className="inline-flex items-center gap-1 text-sm font-medium text-[#b2c5ff] transition-colors duration-200 group-hover:text-[#dae2ff]"
              href={article.link}
              target="_blank"
              rel="noreferrer"
            >
              <span>{article.linkText}</span>
              <ArrowRight className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <span className="text-xs font-medium text-[#8d909f]">
              {article.number}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
