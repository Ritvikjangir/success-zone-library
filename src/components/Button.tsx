// src/components/Button.tsx
import Image from "next/image";

interface ButtonProps {
  href: string;
  label: string;
  iconSrc?: string;
  altText?: string;
}

const Button: React.FC<ButtonProps> = ({ href, label, iconSrc, altText }) => (
  <a
    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {iconSrc && (
      <Image src={iconSrc} alt={altText || "icon"} width={20} height={20} />
    )}
    {label}
  </a>
);

export default Button;
