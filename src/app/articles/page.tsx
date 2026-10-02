import type { Metadata } from "next";
import { HydrateClient } from "@/trpc/server";
import UserLayout from "@/layouts/user-layout";
import ArticlesIndex from "@/app/_components/articles/articles-index";

export const metadata: Metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  return (
    <HydrateClient>
      <UserLayout>
        <div className="flex w-full flex-col">
          <ArticlesIndex />
        </div>
      </UserLayout>
    </HydrateClient>
  )
}