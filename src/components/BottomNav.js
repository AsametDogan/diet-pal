import React from "react";
import {
  IconBuddy,
  IconCalori,
  IconHome,
  IconRecipe,
  IconUser,
} from "../media";
import { setPage } from "../stores/page";
import { useDispatch, useSelector } from "react-redux";

const BottomNav = () => {
  const dispatch = useDispatch(); // to using react redux
  const page = useSelector((state) => state.page.page);
  console.log(page);
  return (
    <div className="w-full p-1 flex flex-row gap-2 justify-evenly shadow bg-gray-50">
      <button
        onClick={() => {
          dispatch(setPage("home"));
        }}
        className={`p-2 ${page === "home" ? "bg-indigo-100" : ""}`}
        id="home"
      >
        <img className="h-6 w-6" src={IconHome} />  
      </button>
      <button
        onClick={() => {
          dispatch(setPage("buddy"));
        }}
        className={`p-2 ${page === "buddy" ? "bg-indigo-100" : ""}`}
        id="buddy">
        <img className="h-6 w-6" src={IconBuddy} />
      </button>
      <button
        onClick={() => {
          dispatch(setPage("recipe"));
        }}
        className={`p-2 ${page === "recipe" ? "bg-indigo-100" : ""}`}
        id="recipe">
        <img className="h-6 w-6" src={IconRecipe} />
      </button>
      <button
        onClick={() => {
          dispatch(setPage("calori"));
        }}
        className={`p-2 ${page === "calori" ? "bg-indigo-100" : ""}`}
        id="calori">
        <img className="h-6 w-6" src={IconCalori} />
      </button>
      <button   onClick={() => {
          dispatch(setPage("profile"));
        }}
        className={`p-2 ${page === "profile" ? "bg-indigo-100" : ""}`}
        id="profile">
        <img className="h-6 w-6" src={IconUser} />
      </button>
    </div>
  );
};

export default BottomNav;
