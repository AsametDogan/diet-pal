import React, { useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IconFoot } from "../media";
const HomePage = () => {
  const [water, setWater] = useState(0);
  const [waterPercent, setWaterPercent] = useState(0);

  function yuvarla(sayi, basamak) {
    basamak = Math.pow(10, basamak);
    return Math.round(sayi * basamak) / basamak;
  }
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`flex items-center justify-between p-2 shadow rounded-lg gap-3   ${
          water === 100 ? "bg-green-300" : "bg-cyan-50"
        }`}
      >
        <div className="h-16 w-16 ">
          <CircularProgressbar value={waterPercent} text={`${water} L`} />
        </div>
        <div className="font-semibold">
          Su İçmeyi Unutma!
          <br />
          <p className="font-normal text-xs">
            Sağlık için günde en az 2 litre su için
          </p>
        </div>

        <div>
          <button
            onClick={() => {
              setWater(water < 2.4 ? yuvarla(water + 0.2, 1) : 2.5);
              setWaterPercent(waterPercent + 8);
            }}
            className="px-2.5 py-1.5 rounded-lg bg-blue-300 "
          >
            Su İç
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div
          className={`flex flex-col items-center justify-between p-4 border bg-indigo-100 rounded-lg gap-3 shadow-lg  `}
        >
          <div className=" w-full flex justify-between">
            <p className="">Adım</p> <img className="h-6 w-6" src={IconFoot} />
          </div>
          <div className="h-20 w-20 ">
            <CircularProgressbarWithChildren value={66}>
              <div className="text-xs items-center flex flex-col">
                <p>6688</p> steps
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
