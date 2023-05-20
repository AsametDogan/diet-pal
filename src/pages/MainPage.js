import React from "react";
import BottomNav from "../components/BottomNav";
import { IconLogo } from "../media";
import { useSelector } from "react-redux";

const MainPage = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex p-2.5 items-center gap-2 bg-indigo-300">
        <div className="bg-gray-200 border p-1 rounded-full">
          <img className="h-6 w-6" src={IconLogo} />
        </div>
        <p>{user.name}</p>  
      </div>
      <div className="p-2 h-full bg-gray-50">a</div>
      <BottomNav />
    </div>
  );
};

export default MainPage;
