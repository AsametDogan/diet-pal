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
  const [text, setText] = useState();
  const [chat, setChat] = useState([]);
  const users = [
    { id: 1, img: IconPSM, name: "Zeynep Arslan", percent: 75 },
    { id: 2, img: IconHDUser, name: "Anonim Ördek", percent: 55 },
    { id: 3, img: IconPSM2, name: "Mehmet Tundra", percent: 87 },
    { id: 4, img: IconPSM3, name: "Ferhat Gündüz", percent: 67 },
  ];

  const handleChat = () => {
    console.log(chat);
    setChat([...chat, { text, time: new Date() }]);
    setText("");
  };
  return (
    <div
      className={`overflow-y-scroll scrollbar-hide flex flex-col ${
        pair ? "h-full" : ""
      } `}
    >
      {pair ? (
        <div className="bg-gray-100 h-full justify-between flex flex-col">
          <div className="flex items-center gap-2 border-b p-1 shadow">
            <img className="h-8 w-8 rounded-full" src={pair.Img} />
            <label>{pair.name}</label>
          </div>
          <div className="flex overflow-y-scroll scrollbar-hide h-full flex-col gap-2 p-2 ">
            {chat.map((msg, index) => (
              <div className="self-end max-w-[80%] bg-purple-200 px-3 py-1.5 rounded-l-xl rounded-br-xl flex flex-col">
                <label className="break-all">{msg.text}</label>
                <label className="text-xs text-gray-300 self-end">
                  {msg.time.getHours() + ":" + msg.time.getMinutes()}
                </label>
              </div>
            ))}
          </div>
          <div className="border-t flex">
            {" "}
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full rounded-l outline-none px-2 py-0.5 text-gray-700"
            />{" "}
            <button
              onClick={() => {
                text ? handleChat() : console.log("");
              }}
              className="p-1 bg-white rounded-r"
            >
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
