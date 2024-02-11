import React from "react";

const OfferCard = ({ item }) => {
  return (
    <div>
      {item.image && (
        <div className=" w-[250px] relative h-[300px] border border-solid rounded-xl shadow-lg">
          <img
            src={item.image}
            className="absolute rounded-xl w-full h-full object-cover"
          ></img>
          {item.exclusive_price && (
            <span className="bg-red-500 text-white opacity-[0.8] rounded text-2xl p-2 absolute top-0 left-0">
              Rs.{item.exclusive_price}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default OfferCard;
