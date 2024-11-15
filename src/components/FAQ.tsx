import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const faqList = [
  {
    title: "What are the library timings, and are they flexible?",
    answer:
      "We have a flexible time schedule. Members can visit the library any time and any number of times.",
  },
  {
    title: "What are the timings of the library?",
    answer: "Morning 8AM to Evening 8 PM",
  },
  {
    title: "What is the fee structure of the library?",
    answer: "Monthly package Rs 900 per month",
  },
  {
    title: "How safe is the library's environment for girls?",
    answer:
      "We provide 24/7 security at the library, along with a dedicated seating row exclusively for girls, ensuring their safety and comfort at all times.",
  },
  {
    title: "Is this library has AC facilities?",
    answer: "Yes, our libraries has a fully air conditioned environment.",
  },
  {
    title: "Do you have separate space for lunch?",
    answer:
      "We have a very big open space where members can have lunch , do their work and relax.",
  },
  {
    title: "Do you provide a demo for library?",
    answer: "Yes, we have demo facility.",
  },
];

const FAQ = () => {
  return (
    <div className="py-16 max-w-5xl px-6 w-full" id="faq">
      <div className="flex flex-col">
        <h2 className="text-2xl md:text-3xl w-full text-center text-black font-semibold">
          Frequently Asked Questions About Our Library
        </h2>
      </div>
      <div className="my-7 flex w-full items-center">
        <Accordion variant="splitted">
          {faqList.map(({ title, answer }, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion-${index}`}
              title={title}
              className="text-black"
            >
              {answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
