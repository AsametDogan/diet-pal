import React from "react";
import { IconLogo } from "../media";

const Header = ({ page, setPage }) => {
  return (
    <div className="w-full flex px-4 py-3 bg-orange-50 shadow justify-between items-center gap-1">
      <div className="flex gap-1 items-center">
        <div
          onClick={() => {
            setPage("");
          }}
          className="rounded-full cursor-pointer bg-gray-200 p-1"
        >
          <img className="h-7 w-7" src={IconLogo} />
        </div>
        <p className="font-semibold">Diet Pal</p>
      </div>
      <div className="flex gap-1">
        <button
          onClick={() => {
            setPage("register");
          }}
          className={` ${
            page === "register"
              ? "bg-blue-600 text-indigo-50"
              : " bg-blue-200 hover:bg-blue-400"
          } py-1 px-2 rounded-lg transition-all`}
        >
          Kayıt Ol
        </button>
        <button
          onClick={() => {
            setPage("login");
          }}
          className={` ${
            page === "login"
              ? "bg-blue-600 text-indigo-50"
              : " bg-blue-200 hover:bg-blue-400"
          } py-1 px-2 rounded-lg transition-all`}
        >
          Giriş
        </button>
      </div>
    </div>
  );
};

export default Header;
