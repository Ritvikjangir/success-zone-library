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
  return (
    <Card className="py-1 px-4 sm:max-w-[300px] w-full sm:h-[300px]" radius="sm">
      <CardHeader className="flex-col items-center gap-1">
        <Icon size={60} className="text-primary w-full text-center" />
        <h4 className="w-full font-bold text-xl text-center text-black">
          {heading}
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-md hidden sm:flex text-center text-opacity-60 text-black font-medium">
          {subheading}
        </p>
      </CardBody>
    </Card>
  );
};

export default AmenitiesCard;
