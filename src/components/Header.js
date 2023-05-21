import React from "react";
import { IconLogo, IconLogoDP } from "../media";
import { setLoggedIn } from "../stores/User";
import { useDispatch } from "react-redux";

const Header = ({ page, setPage }) => {
    
  const dispatch = useDispatch(); // to using react redux
  return (
    
    <div className="w-full flex px-4 py-3 bg-orange-50 shadow justify-between items-center gap-1">
      <div className="flex gap-1 items-center">
        <div
          onClick={() => {
            setPage("");
            
          dispatch(setLoggedIn());
          }}
          className="rounded-full cursor-pointer bg-gray-200 p-1"
        >
          <img className="h-8 w-8 rounded-full" src={IconLogoDP} />
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
