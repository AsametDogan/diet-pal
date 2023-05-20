import React from "react";
import { IconLogo } from "../media";

const Header = () => {
  return (
    <div className="w-full flex px-4 py-3 bg-orange-50 shadow justify-between items-center ">
      <div className="rounded-full bg-gray-200 p-1">
        <img className="h-6 w-6" src={IconLogo} />
      </div>
      <div className="flex gap-1">
        <button className=" py-1 px-2 bg-blue-200 hover:bg-blue-400 rounded-lg transition-all">Kayıt Ol</button>
        <button className=" py-1 px-2 bg-blue-200 hover:bg-blue-400 rounded-lg transition-all">Giriş</button>
      </div>
    </div>
  );
};

export default Header;
