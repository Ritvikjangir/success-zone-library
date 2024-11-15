import { Button, DatePicker, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";

const images = [
  "https://www.k3library.com/wp-content/uploads/2023/03/k3library-for-self-study-indore-logo.webp",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    visitDate: "",
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Handle form inputs
  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function formatDate(dateObject: { year: any; month: any; day: any }) {
    const { year, month, day } = dateObject;

    // Pad single-digit day and month with leading zeros
    const formattedDay = String(day).padStart(2, "0");
    const formattedMonth = String(month).padStart(2, "0");

    // Construct the formatted date
    return `${formattedDay}-${formattedMonth}-${year}`;
  }

  const handleDateChange = (date: any) => {
    setFormData((prevData) => ({
      ...prevData,
      visitDate: formatDate(date), // Format to DD-MM-YYYY ({"calendar":{"identifier":"gregory"},"era":"AD","year":2003,"month":11,"day":12})
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      const response = await fetch("https://sheetdb.io/api/v1/3pjz50xh3qdzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          mobileNumber: "",
          email: "",
          visitDate: "",
        });
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-4 lg:px-16 gap-8">
        {/* Left Section */}
        <div className="text-white text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Churu&apos;s Ultimate <br /> Self-Study Spot
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover the perfect environment for focus and growth, where
            productivity meets serenity.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Library Visit Forms
          </h2>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <Input
              type="text"
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
              label="Mobile Number"
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
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <DatePicker
              label="Visit date"
              variant="underlined"
              isRequired
              name="visitDate"
              onChange={handleDateChange}
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
