import React from "react";
import { IconKCal, IconSwim, IconWOrk, IconWalk } from "../media";

const KcalPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col overflow-y-scroll scrollbar-hide gap-2">
        <img className=" rounded-lg shadow" src={IconKCal} />
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="p-2 px-2.5 bg-white rounded-lg shadow text-gray-600">
            <img className="h-16 w-16" src={IconWOrk} />
            Antrenman
          </button>
          <button className="p-2 px-2.5 bg-white rounded-lg shadow text-gray-600">
            <img className="h-16 w-16" src={IconWalk} />
            Yürüyüş
          </button>
          <button className="p-2 px-2.5 bg-white rounded-lg shadow text-gray-600">
            <img className="h-16 w-16" src={IconSwim} />
            Yüzme
          </button>
        </div>
      </div>
    </div>
  );
};

export default KcalPage;
