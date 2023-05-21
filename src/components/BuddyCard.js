import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { IconPSM } from "../media";
const BuddyCard = ({ setPair, id, name, percent, Img }) => {
  return (
    <div className="p-2 rounded-lg shadow-lg flex flex-col justify-center items-center bg-gray-200 gap-2">
      <div>
        <img className="h-40 w-40 rounded-lg" src={Img} />
      </div>
      <div className="text-xs flex flex-col justify-center items-center">
        <p className="font-semibold text-sm">{name}</p>%{percent} eşleşme
      </div>
      <div className="flex gap-10">
        <button className="bg-red-600 text-white px-2 py-1 rounded">X</button>
        <button
          onClick={() => {
            setPair({ name, percent, Img });
          }}
          className="bg-green-600 text-white px-2 py-1 rounded"
        >
          ✓
        </button>
      </div>
    </div>
  );
};

export default BuddyCard;
