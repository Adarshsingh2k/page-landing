import React, { useContext, useEffect, useState } from "react";
import OfferDataContext from "../State/OfferDataContext";

const Header = () => {
  const { offerData } = useContext(OfferDataContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageUrl = isMobile
    ? offerData["Home Landing Web"]?.[0]?.mobile_image
    : offerData["Home Landing Web"]?.[0]?.image;

  return (
    <div>
      <div>
        <img src={imageUrl} className="h-[80vh]" />
      </div>
    </div>
  );
};

export default Header;
