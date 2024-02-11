import React, { useState, useEffect, useContext } from "react";
import OfferDataContext from "../State/OfferDataContext";

const Carousel = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { offerData } = useContext(OfferDataContext);

  const banners = offerData["Home Screen Web"]?.[type] ?? [];

  useEffect(() => {
    // Using a callback inside setCurrentIndex to get the current state directly
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [banners.length - 2]); // Depend on banners.length so interval resets when banner count changes

  if (banners.length === 0) {
    return null; // or some placeholder
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.mobile_image}
            alt=""
            className="w-full object-cover block"
            style={{ width: "100%", flex: "none" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
