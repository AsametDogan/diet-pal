import React from "react";
import { IconHDUser, IconPSM, IconUser } from "../media";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center justify-around">
        <div>
          <img className="rounded-full h-20 w-20" src={IconPSM} />
        </div>
        <div className="flex flex-col  ">
          <label className="flex">
            İsim:{" "}
            <p className="text-gray-700">
              {"  " + user.name + " " + user.surname}
            </p>
          </label>
          <label className="flex">
            Mail: <p className="text-gray-700">{user.email}</p>
          </label>
          <label className="flex">
            Telefon: <p className="text-gray-700">{user.phone}</p>
          </label>
        </div>
      </div>
      <div>asd</div>
    </div>
  );
};

export default ProfilePage;
