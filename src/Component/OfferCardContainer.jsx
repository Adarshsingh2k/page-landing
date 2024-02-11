import React, { useContext, useEffect, useRef, useState } from "react";
import OfferCard from "./OfferCard";
import OfferDataContext from "../State/OfferDataContext";

const OfferCardContainer = ({ type }) => {
  const { offerData } = useContext(OfferDataContext);
  const containerRef = useRef(null);
  const [opacity, setOpacity] = useState(0); // Start with invisible

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      if (containerRef.current) {
        const windowHeight = window.innerHeight;
        const elementTop = containerRef.current.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust based on when you want the effect to start

        let newOpacity = 1;
        if (elementTop < windowHeight - elementVisible) {
          newOpacity = 1; // Fully visible
        } else {
          newOpacity = 0; // Start fading out
        }
        setOpacity(newOpacity);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = offerData?.["Home Screen Web"]?.[type];

  return (
    <div
      ref={containerRef}
      style={{ opacity: opacity, transition: "opacity 0.5s ease-in-out" }}
      className="text-center"
    >
      <h2 className="font-bold text-5xl text-center p-5 pb-[10px]">{type}</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8 p-[60px]">
        {data?.map((item, key) => (
          <OfferCard item={item} type={type} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default OfferCardContainer;
