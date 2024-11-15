import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg w-full">
      <div className="container mx-auto flex items-center justify-between py-4 ps-6 pe-2 max-w-[1200px]">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-xl text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/SuccessZoneLogo.jpg"
            alt="success zone logo"
            width={150}
            height={100}
            priority
            className="mr-2"
          />
        </Link>

        {/* Desktop Nav Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="#our-facilities"
            className="text-primary font-bold hover:underline hover:underline-primary"
          >
            Our Facilities
          </Link>
          <Link
            href="#about-us"
            className="text-primary font-bold hover:underline hover:underline-primary"
          >
            About Us
          </Link>

          <Link
            target="_blank"
            href="https://maps.app.goo.gl/CUNqSdxNJX2fh31Y7"
            className="block text-primary font-bold hover:underline hover:underline-primary"
          >
            Location
          </Link>

          <Link
            href="#faq"
            className="text-primary font-bold hover:underline hover:underline-primary"
          >
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className="text-primary font-bold hover:underline hover:underline-primary"
          >
            Contact Us
          </Link>
          <Link
            href="tel:+919166990566"
            className="text-white flex item-center justify-center hover:scale-105 h-[42px] hover:text-black border-red-600 border p-2 rounded bg-red-600 transition-all hover:bg-white font-bold"
          >
            <span className="p-1">
              <IoCall />
            </span>
            9166990566
          </Link>

          <Link
            href="https://wa.me/+919166990566"
            target="_blank"
            className="flex item-center justify-center p-2 bg-[#25D366] hover:bg-white border hover:scale-120 transition-all hover:border-[#25D366] hover:text-[#25D366] rounded h-[42px] font-bold text-[24px] border-white"
          >
            <FaWhatsapp />
          </Link>
        </nav>
        <div className="flex items-center justify-center md:hidden gap-1.5 flex-wrap h-8">
          <Link
            href="tel:+919166990566"
            className="text-white flex items-center justify-center p-1 rounded bg-red-600 transition-all hover:bg-white text-[24px]"
          >
            <IoCall />
          </Link>
          <Link
            href="https://wa.me/+919166990566"
            target="_blank"
            className=" text-white flex items-center justify-center p-1 bg-[#25D366] hover:bg-white border hover:scale-120 transition-all hover:border-[#25D366] hover:text-[#25D366] rounded font-bold text-[24px] border-white"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="px-6 py-4 space-y-4">
            <Link
              href="/our-facilities"
              className="block text-primary font-bold hover:underline hover:underline-primary"
            >
              Our Facilities
            </Link>
            <Link
              href="/about-us"
              className="block text-primary font-bold hover:underline hover:underline-primary"
            >
              About Us
            </Link>
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/CUNqSdxNJX2fh31Y7"
              className="block text-primary font-bold hover:underline hover:underline-primary"
            >
              Location
            </Link>

            <Link
              href="/faq-upsc-mppsc-exam"
              className="block text-primary font-bold hover:underline hover:underline-primary"
            >
              FAQ
            </Link>
            <Link
              href="/contact-us"
              className="block text-primary font-bold hover:underline hover:underline-primary"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
