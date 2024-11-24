import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { FC } from "react";

// Define the type for props
interface AmenitiesCardProps {
  Icon: React.ComponentType<{ size: number; className?: string }>; // Icon component type
  heading: string; // Heading text
  subheading: string; // Subheading text
}

// Functional Component with TypeScript
const AmenitiesCard: FC<AmenitiesCardProps> = ({
  Icon,
  heading,
  subheading,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Card
      className="py-1 px-4 sm:max-w-[300px] w-full sm:h-[300px] h-fit"
      radius="sm"
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      <CardHeader className="flex-col items-center gap-1">
        <Icon size={60} className="text-primary w-full text-center" />
        <h4 className="w-full font-bold text-xl text-center text-black">
          {heading}
        </h4>
      </CardHeader>
      <CardBody
        className={`overflow-visible py-0 transition-all duration-500 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } flex sm:opacity-100`}
      >
        <p className="text-md sm:flex text-center text-opacity-60 text-black font-medium">
          {subheading}
        </p>
      </CardBody>
    </Card>
  );
};

export default AmenitiesCard;
