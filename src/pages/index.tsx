import localFont from "next/font/local";
import Header from "../components/Header";
import HomeComponent from "../components/Home";
import { NextUIProvider } from "@nextui-org/react";
import Amenities from "@/components/Amenities";
import FAQ from "@/components/FAQ";
import { NextSeo } from "next-seo";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Photos from "@/components/Photos";

export const metadata: Metadata = {
  keywords: "Library, Churu, Rajasthan, Success Zone Library, Books in Churu",
  authors: [{ name: "Arman Khan", url: "https://portfolio.arkarman.xyz/" }],
};

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
      <NextSeo
        title="Success Zone Library - Best Library in Churu, Rajasthan"
        description="Discover Success Zone Library, the best local library in Churu City, Churu District, Rajasthan. Access a wide range of books and resources to enhance your knowledge."
        canonical="https://success-zone.vercel.app/"
        openGraph={{
          url: "https://success-zone.vercel.app/",
          title: "Success Zone Library - Best Library in Churu, Rajasthan",
          description:
            "Looking for a library in Churu? Visit Success Zone Library, your go-to place for books and learning in Churu City, Churu District, Rajasthan.",
          images: [
            {
              url: "https://success-zone.vercel.app/SuccessZoneLogo.jpg",
              width: 662,
              height: 500,
              alt: "Success Zone Library in Churu, Rajasthan",
              type: "image/jpeg",
            },
          ],
          siteName: "Success Zone Library",
        }}
      />
      <div
        className={`${geistSans.variable} ${geistMono.variable} w-full flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)] bg-white scroll-smooth`}
      >
        <Header />
        <HomeComponent />
        <Amenities />
        <Photos />
        <FAQ />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.205246447257!2d74.9641584!3d28.2921061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39149fe027fa0647%3A0x5aca3a78436475e4!2sSUCCESS%20ZONE%20LIBRARY!5e0!3m2!1sen!2sin!4v1731698805649!5m2!1sen!2sin"
          width="100%"
          height="300"
          loading="lazy"
          className="mb-10"
        ></iframe>
        <Footer></Footer>
        {/* Footer or other components can be added similarly */}
      </div>
    </NextUIProvider>
  );
}
