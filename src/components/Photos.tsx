import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Image } from "@nextui-org/react";

const images = [
  "/library2.jpg",
  "/library3.jpg",
  "/library4.jpg",
  "/library6.jpg",
  "/library7.jpg",
  "/library1.jpg",
  "/library8.jpg",
  "/library12.jpg",
  "/library11.jpg",
];

const Photos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1, // Show 1 slide for devices with width <= 768px
          spacing: 10, // Adjust spacing for smaller devices
        },
      },
    },
    loop: true, // Enable looping
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Auto-play functionality
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next(); // Move to the next slide
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slider]);

  return (
    <div className="pt-5 w-full max-w-5xl px-6 scroll-m-20" id="360-view">
      <h2 className="text-2xl md:text-3xl capitalize w-full text-center text-black font-semibold pb-5">
        View our library virtually
      </h2>
      <div className="navigation-wrapper w-full mx-auto">
        <div ref={sliderRef} className="keen-slider w-full mx-auto max-w-5xl">
          {images.map((image, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center items-center"
            >
              <Image
                className="rounded-lg"
                alt={`Slide ${index + 1}`}
                src={image}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      {loaded && slider.current && (
        <div className="dots flex justify-center mt-4">
          {[...Array(slider.current.track.details.slides.length).keys()].map(
            (idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`dot${currentSlide === idx ? " active bg-black" : " bg-gray-300"
                  } w-2.5 h-2.5 mx-1 rounded-full`}
              ></button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Photos;


