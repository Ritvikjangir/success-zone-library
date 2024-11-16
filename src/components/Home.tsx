/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  DatePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { FiCheckCircle } from "react-icons/fi";

const images = [
  // "/library1.jpg",
  // "/library2.jpg",
  // "/library3.jpg",
  // "/library4.jpg",
  "/library5.jpg",
  // "/library6.jpg",
  // "/library7.jpg",
  "/library8.jpg",
  "/library9.jpg",
  // "/library10.jpg",
];

// Define the structure of the form data
interface FormData {
  name: string;
  mobileNumber: string;
  email: string;
  visitDate: null | string; // Null if not selected
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobileNumber: "",
    email: "",
    visitDate: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Image slideshow effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle date changes
  const handleDateChange = (date: {
    year: number;
    month: number;
    day: number;
  }) => {
    const formattedDate = new Date(
      date?.year,
      date?.month - 1,
      date?.day
    ).toDateString();

    setFormData((prevData) => ({
      ...prevData,
      visitDate: formattedDate,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form behavior
    setIsLoading(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/3pjz50xh3qdzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onOpen();
        setFormData({
          name: "",
          mobileNumber: "",
          email: "",
          visitDate: null,
        });
      } else {
        alert("Failed to submit the form.");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <Modal
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          base: "m-auto",
          closeButton: "text-black",
          header: "h-10",
        }}
      >
        <ModalContent className="text-primary">
          {() => (
            <>
              <ModalHeader className="bg-green-600 px-4 py-2">
                <FiCheckCircle size={24} />
              </ModalHeader>
              <ModalBody>
                <p className="font-bold text-md py-6">
                  Visit Form Submitted Successfully.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div
        className="relative w-full h-screen overflow-hidden bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-6 gap-8 max-w-5xl mx-auto">
          {/* Left Section */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Churu&apos;s Ultimate <br /> Self-Study Spot
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Discover the perfect environment for focus and growth, where
              productivity meets serenity.
            </p>

            <p className="text-lg md:text-xl text-gray-300 pt-2">
              We cater to students preparing for UPSC, MPPSC, IAS, LAW CAT,
              MEDICAL NEET, IIT JEE, CA, or any other exam, we are here to help
              you ace your goals. Our library is also a safe and secure space
              for girls to study till late. Join us today and take the first
              step towards academic success!
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full bg-opacity-80">
            <h2 className="text-2xl font-semibold text-primary text-center mb-6">
              Library Visit Forms
            </h2>
            <form
              className="flex flex-col gap-4 w-full "
              onSubmit={handleSubmit}
            >
              <Input
                type="text"
                color="primary"
                classNames={{ input: "text-black" }}
                variant="underlined"
                label="Name"
                isRequired
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                type="number"
                variant="underlined"
                color="primary"
                label="Mobile Number"
                classNames={{ input: "text-black" }}
                required
                isRequired
                name="mobileNumber"
                max={9999999999}
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                variant="underlined"
                classNames={{ input: "text-black" }}
                color="primary"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <DatePicker
                label="Visit date"
                color="primary"
                variant="underlined"
                classNames={{ input: "text-black" }}
                isRequired
                onChange={handleDateChange}
              />
              <Button type="submit" color="primary" isLoading={isLoading}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
