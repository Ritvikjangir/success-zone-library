// pages/index.js
import { useEffect, useState } from "react";

const images = [
  "https://www.k3library.com/wp-content/uploads/2023/03/k3library-for-self-study-indore-logo.webp",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Change image every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div
      className="h-screen w-full flex items-center justify-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay with constant text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 h-full">
        <div className="flex justify-between max-w-[1200px] mx-auto h-full p-12 px-0">
          <div className="w-full">
            <h1 className="text-6xl font-bold">
              Churu&apos;s Ultimate <br /> Self-Study Spot
            </h1>
            <p></p>
          </div>
          <div className="w-1/2">
            <div className="p-7 bg-white w-full h-full rounded-lg">
              <h1 className="text-4xl font-semibold text-black w-full text-center mb-6">
                Library Visit Forms
              </h1>
              <div className="flex flex-col w-full gap-2">
                <div className="w-full flex flex-col">
                  <label htmlFor="visitDate" className="text-black text-md">
                    Visit Date
                  </label>
                  <input
                    type="date"
                    id="visitDate"
                    className="text-black  border-b px-3 py-1 focus:border-0 selection:border-0"
                  />
                </div>
                <input
                  type="date"
                  className="text-black border-spacing-2 border px-3 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
