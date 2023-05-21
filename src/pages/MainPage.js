import React from "react";
import BottomNav from "../components/BottomNav";
import { IconLogo, IconLogoDP } from "../media";
import { useSelector } from "react-redux";
import HomePage from "./HomePage";
import BuddyPage from "./BuddyPage";
import RecipePage from "./RecipePage";
import KcalPage from "./KcalPage";
import ProfilePage from "./ProfilePage";

const MainPage = () => {
  const user = useSelector((state) => state.user.user);
  const page = useSelector((state) => state.page.page);

  const Menus = () => {
    if (page === "home") {
      return <HomePage />;
    } else if (page === "buddy") {
      return <BuddyPage />;
    } else if (page === "recipe") {
      return <RecipePage />;
    } else if (page === "calori") {
      return <KcalPage />;
    } else {
      return <ProfilePage />;
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex p-2.5 items-center gap-2 bg-indigo-300">
        <div className=" border rounded-full">
          <img className="h-8 w-8 rounded-full" src={IconLogoDP} />
        </div>
        <p className="text-white">{user.name}</p>
      </div>
      <div className="p-2 h-full bg-gray-100 ">
        <Menus />
      </div>
      <BottomNav />
    </div>
  );
};

export default MainPage;
