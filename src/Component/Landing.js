import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import OfferCard from "./OfferCard";
import Header from "./Header";
import OfferDataContext from "../State/OfferDataContext";
import OfferCardContainer from "./OfferCardContainer";
import Carousel from "./Carousel";
import ResponsiveCarousel from "./ResponsiveCarousel";

const Landing = () => {
  const [offerData, setOfferData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://mapi.thesouledstore.com/api/v2/homescreenweb/v3"
    );
    const response = await data.json();
    setOfferData(response);

    console.log(response);
  };

  return (
    <div>
      <Nav />

      <OfferDataContext.Provider value={{ offerData }}>
        <Header />

        <OfferCardContainer type={"Top Selling"} />
        <ResponsiveCarousel />

        <OfferCardContainer type={"Categories"} />
        <OfferCardContainer type={"New Arrivals"} />
        <OfferCardContainer type={"LATEST COLLECTIONS"} />
        <OfferCardContainer type={"SHOP BY FANDOM"} />
      </OfferDataContext.Provider>
    </div>
  );
};

export default Landing;
