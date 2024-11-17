import React from "react";
import AmenitiesCard from "./AmenitiesCard";
import {
  LuAirVent,
  LuArmchair,
  LuBookOpen,
  LuBus,
  LuClock,
  LuGlassWater,
  // LuIndianRupee,
  LuMap,
  LuNewspaper,
  LuParkingCircle,
  LuPlug2,
  LuWebhook,
  LuWifi,
} from "react-icons/lu";

// Card List for Amenities
const cardList = [
  {
    icon: LuParkingCircle,
    heading: "2 & 4 Wheeler Parking",
    subHeading:
      "We provide ample parking space which is safe and secure for both 2-wheelers and 4-wheelers so you can focus on your studies without worrying about your vehicle.",
  },
  {
    icon: LuWifi,
    heading: "High-speed Wi-Fi",
    subHeading:
      "High-speed Wi-Fi at all Success Zone Library branches, ensuring seamless access to online resources for academic research and study.",
  },
  {
    icon: LuClock,
    heading: "Flexible Study Hours",
    subHeading:
      "Our library is open from 8 am to 10 pm, allowing members access at any time and as often as they need, providing the flexibility to create their own study schedule.",
  },
  {
    icon: LuAirVent,
    heading: "Fully Air Conditioned",
    subHeading:
      "Our library is fully air-conditioned, ensuring a comfortable and optimal room temperature, creating a conducive environment for focused study, regardless of the weather outside.",
  },
  {
    icon: LuGlassWater,
    heading: "Drinking Water",
    subHeading:
      "Our library provides clean and safe drinking water with RO + UV filter systems installed for the health and well-being of our patrons.",
  },
  {
    icon: LuWebhook,
    heading: "Safety & Security",
    subHeading:
      "The safety of our members is our top priority. We ensure a secure environment for late-night studying, particularly for female students, with 24/7 CCTV surveillance and trained staff.",
  },
  {
    icon: LuMap,
    heading: "Huge Open Space",
    subHeading:
      "We provide the biggest open space among libraries, where members can have their lunch, study, work, or relax, making it a versatile and conducive environment for any task.",
  },
  // {
  //   icon: LuIndianRupee,
  //   heading: "Flexible Packages",
  //   subHeading:
  //     "We offer flexible membership packages, including monthly options starting at Rs. 1000 and discounted rates for three-month memberships with part payment facilities.",
  // },
  {
    icon: LuArmchair,
    heading: "Comfortable Seating",
    subHeading:
      "Experience comfortable long sitting sessions with Success Zone Library's cozy chairs, designed to provide support and ease while studying.",
  },
  {
    icon: LuPlug2,
    heading: "Charging Sockets",
    subHeading:
      "Our study centre offers convenient charging sockets in cabins to ensure that students can power up their electronic devices while studying at Success Zone Library.",
  },
  {
    icon: LuBus,
    heading: "Good Transport Connectivity",
    subHeading:
      "Success Zone Library and Study Zone is conveniently situated in Churu, easily accessible via local transport, making it stress-free for students to reach us.",
  },
  {
    icon: LuBookOpen,
    heading: "Limited Seats",
    subHeading:
      "Success Zone Library is committed to providing a peaceful and distraction-free environment for students to study. To ensure this, the library has limited seating available, allowing maximum focus and productivity.",
  },
  {
    icon: LuNewspaper,
    heading: "Daily Newspaper",
    subHeading:
      "Success Zone Library offers daily newspapers in both Hindi and English, catering to students preparing for various exams that require knowledge of current affairs. It helps them stay informed.",
  },
];

const Amenities = () => {
  return (
    <div className="pt-16 max-w-5xl px-6 w-full" id="our-facilities">
      <div className="flex flex-col">
        <h2 className="text-2xl md:text-3xl w-full text-center text-black font-semibold">
          Amenities at Success Zone Library
        </h2>
        <h4 className="text-md md:text-lg w-full text-center text-primary font-medium">
          Top Facilities that Set Us Apart as the Best Library in Churu
        </h4>
      </div>
      <div className="my-7 flex flex-1 flex-wrap w-full gap-4 items-center justify-between">
        {cardList.map(({ icon, heading, subHeading }, index) => (
          <AmenitiesCard
            key={index + heading}
            Icon={icon}
            heading={heading}
            subheading={subHeading}
          />
        ))}
      </div>
    </div>
  );
};

export default Amenities;
