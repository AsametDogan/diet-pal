import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import {
  IconHDUser,
  IconPSM,
  IconPSM2,
  IconPSM3,
  IconSend,
  IconUser,
} from "../media";
import BuddyCard from "../components/BuddyCard";
const BuddyPage = () => {
  const [pair, setPair] = useState();
  const users = [
    { id: 1, img: IconPSM, name: "Zeynep Arslan", percent: 75 },
    { id: 2, img: IconHDUser, name: "Anonim Ördek", percent: 55 },
    { id: 3, img: IconPSM2, name: "Mehmet Tundra", percent: 87 },
    { id: 4, img: IconPSM3, name: "Ferhat Gündüz", percent: 67 },
  ];
  console.log(pair);
  return (
    <div
      className={`overflow-y-scroll scrollbar-hide flex flex-col ${
        pair ? "h-full" : ""
      } `}
    >
      {pair ? (
        <div className="bg-gray-100 h-full justify-between flex flex-col">
          <div className=""></div>
          <div></div>
          <div className="border-t flex">
            {" "}
            <input className="w-full outline-none px-2 py-0.5 text-gray-700" />{" "}
            <button className="p-1 bg-white">
              <img className="w-6 h-6" src={IconSend} />
            </button>
          </div>
        </div>
      ) : (
        <Carousel className="pb-8">
          {users.map((user, index) => (
            <BuddyCard
              key={index}
              setPair={setPair}
              Img={user.img}
              name={user.name}
              percent={user.percent}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default BuddyPage;
