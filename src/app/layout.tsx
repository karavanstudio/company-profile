import "@/styles/globals.css";

import { type Metadata } from "next";
import { Work_Sans, Space_Grotesk } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Karavan Studio",
  description: "Karavan Studio - Interactive Experiences",
  icons: [{ rel: "icon", url: "/Logogram_Karavan.png" }],
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${workSans.variable} ${spaceGrotesk.variable}`}>
      <body className={workSans.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
