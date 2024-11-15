// src/pages/index.tsx
import localFont from "next/font/local";
import Header from "../components/Header";
import HomeComponent from "../components/Home";
import { NextUIProvider } from "@nextui-org/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <NextUIProvider>
      <div
        className={`${geistSans.variable} ${geistMono.variable} w-full flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)] bg-white`}
      >
        <Header />
        <HomeComponent />

        {/* Footer or other components can be added similarly */}
      </div>
    </NextUIProvider>
  );
}
