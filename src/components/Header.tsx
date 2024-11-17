import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "./Logo";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar maxWidth="lg" isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      {/* Mobile Menu Toggle Button */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="text-primary" />
      </NavbarContent>

      {/* Mobile Navbar Brand */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Logo />
            {/* Library Branding */}
            <div className="flex flex-col leading-[0.85] stylish-bold text-primary font-bold text-xl uppercase">
              <span className="text-inherit">Success</span>
              <span className="text-inherit">Zone</span>
              <span className="text-inherit">Library</span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navbar Brand */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Logo />
            {/* Library Branding */}
            <div className="flex flex-col leading-[0.85] stylish-bold text-primary font-bold text-xl uppercase">
              <span className="text-inherit">Success</span>
              <span className="text-inherit">Zone</span>
              <span className="text-inherit">Library</span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navbar Links */}
      <NavbarContent className="hidden sm:flex" justify="end">
        {/* Navigation Links */}
        <NavbarItem>
          <Link
            color="foreground"
            className="text-primary font-bold"
            href="#our-facilities"
          >
            Facilities
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            color="foreground"
            className="text-primary font-bold"
            href="#about-us"
          >
            About Us
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link
            color="foreground"
            className="text-primary font-bold"
            target="_blank"
            href="https://maps.app.goo.gl/CUNqSdxNJX2fh31Y7"
          >
            Location
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-primary font-bold"
            href="#faq"
          >
            FAQ
          </Link>
        </NavbarItem>
        <NavbarMenuItem>
          <Link
            className="text-primary font-bold"
            href="#360-view"
            color="primary"
          >
            360 View
          </Link>
        </NavbarMenuItem>
        {/* <NavbarItem>
          <Link
            color="foreground"
            className="text-primary font-bold"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </NavbarItem> */}

        {/* Contact Buttons */}
        <NavbarItem>
          <Button
            color="primary"
            href="tel:+919166990566"
            startContent={<FiPhone size={16} />}
            radius="sm"
            as={Link}
            target="_blank"
          >
            9166990566
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="success"
            as={Link}
            target="_blank"
            href="https://wa.me/+919166990566"
            className="text-white"
            isIconOnly
            radius="sm"
            aria-label="Contact Us On Whatsapp"
          >
            <FaWhatsapp size={24} />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Contact Buttons */}
      <NavbarContent justify="end" className="sm:hidden">
        <NavbarItem>
          <Button
            color="primary"
            href="tel:+919166990566"
            radius="sm"
            as={Link}
            target="_blank"
            isIconOnly
          >
            <FiPhone size={24} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="success"
            as={Link}
            target="_blank"
            href="https://wa.me/+919166990566"
            className="text-white"
            isIconOnly
            radius="sm"
            aria-label="Contact Us On Whatsapp"
          >
            <FaWhatsapp size={24} />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navbar Menu */}
      <NavbarMenu className="gap-4 bg-transparent" >
        <NavbarMenuItem>
          <Link
            className="w-full text-xl"
            href="#our-facilities"
            size="lg"
            color="primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Facilities
          </Link>
        </NavbarMenuItem>
        {/* <NavbarMenuItem>
          <Link
            className="w-full text-xl"
            href="#about-us"
            size="lg"
            color="primary"
          >
            About Us
          </Link>
        </NavbarMenuItem> */}
        <NavbarMenuItem>
          <Link
            className="w-full text-xl"
            target="_blank"
            href="https://maps.app.goo.gl/CUNqSdxNJX2fh31Y7"
            size="lg"
            color="primary"
          >
            Location
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-xl"
            href="#faq"
            size="lg"
            color="primary"
            onClick={() => setIsMenuOpen(false)}

          >
            FAQ
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-xl"
            href="#360-view"
            size="lg"
            color="primary"
            onClick={() => setIsMenuOpen(false)}
          >
            360 View
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
