import type React from "react";
import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";

export default function UserLayout({
  children
}: {children: React.ReactNode}) {
  return (
    <div className="relative min-h-screen bg-[#11131a] text-[#e1e2ec] text-base selection:bg-[#b2c5ff] selection:text-[#002b73]">
      <Header />
      <main className="w-full pt-20 bg-[#11131a] min-h-[calc(100vh-22rem)]">
        <div className="mx-auto px-8 max-w-7xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
