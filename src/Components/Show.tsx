import React, { useEffect, useState } from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const Show: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TITLE */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Find the Flavor You Love
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Crafted with bold ingredients and unforgettable taste.
          </p>
        </div>

        {/* SLIDESHOW */}
        <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-2xl shadow-xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Show;
