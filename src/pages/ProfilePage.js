import React from "react";
import { IconHDUser, IconPSM, IconUser } from "../media";
import { useSelector } from "react-redux";
import { Input } from "@material-tailwind/react";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center ">
        <div>
          <img className="rounded-full h-20 w-20" src={IconPSM} />
        </div>
        <div className="flex flex-col  ">
          <label className="flex">
            {" "}
            <p className="text-gray-700">
              {"  " + user.name + " " + user.surname}
            </p>
          </label>
        </div>
      </div>
      <div className="gap-3 flex flex-col">
        {" "}
        <Input
          color="blue"
          label=" Mail"
          value={"ebruebg@hotmail.com"}
          disabled
        />
        <Input color="blue" label="Telefon" value={"05070268105"} disabled />
        <Input color="blue" label="Yaş" value={"27"} disabled />
        <Input color="blue" label="Kilo" value={"60"} disabled />
        <Input color="blue" label="Boy" value={"170"} disabled />
        <Input color="blue" label="Diyet Tipi" value={"Zayıflama"} disabled />
        <Input color="blue" label="Abonelik Süresi" value={"6 Ay"} disabled />
      </div>
    </div>
  );
};

export default ProfilePage;
