import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import OfferDataContext from "../State/OfferDataContext";

const ResponsiveCarousel = () => {
  const { offerData } = useContext(OfferDataContext);
  const banners = offerData["Home Screen Web"]?.["Top Banner"] ?? [];

  // Determine if the device is mobile
  const isMobile = window.innerWidth < 768;

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {banners
        .filter((banner) => banner.mobile_image || banner.desktop_image)
        ?.map((banner, index) => (
          <div key={index}>
            <img
              src={isMobile ? banner.mobile_image : banner.image}
              alt={`Banner ${index + 1}`}
            />
          </div>
        ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
