import React from "react";
import {
  Link,
  Button,
  Navbar,
  NavbarContent,
} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200">
      {/* Footer Content */}
      <Navbar maxWidth="lg" className="flex flex-col gap-6">
        {/* Branding Section */}

        {/* Links Section */}

        {/* Contact Section */}
        <NavbarContent justify="center" className="gap-2 sm:flex hidden">
          <Button
            color="primary"
            href="tel:+919166990566"
            startContent={<FiPhone size={18} />}
            radius="sm"
            as={Link}
            className="text-sm"
          >
            Call: 9166990566
          </Button>
          <Button
            color="success"
            href="https://wa.me/+919166990566"
            startContent={<FaWhatsapp size={18} />}
            radius="sm"
            as={Link}
            className="text-sm"
            target="_blank"
          >
            WhatsApp
          </Button>
        </NavbarContent>

        {/* Footer Bottom Text */}
        <NavbarContent justify="center" className="text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Success Zone Library. All rights
            reserved.
          </p>
        </NavbarContent>
      </Navbar>
    </footer>
  );
};

export default Footer;
