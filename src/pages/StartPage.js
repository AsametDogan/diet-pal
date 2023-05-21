import React, { useState } from "react";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import Login from "../components/Login";
import { GifStart } from "../media";

const StartPage = () => {
  const [page, setPage] = useState("");
  return (
    <div className="flex-col">
      <Header page={page} setPage={setPage} />
      <div className="p-1 overflow-y-scroll scrollbar-hide">
        {page === "login" ? (
          <div className="grid md:grid-cols-2  bg-[#f1f1f1]">
            <Login />

            <div className="hidden md:flex h-full items-center justify-center bg-white">
              <img alt="Diyet Gifi" className="h-96 w-96" src={GifStart} />
            </div>
          </div>
        ) : page === "register" ? (
          <div className="grid md:grid-cols-2  bg-[#f1f1f1]">
            <RegisterForm />

            <div className="hidden md:flex h-full items-center justify-center bg-white">
              <img alt="Diyet Gifi" className="h-96 w-96" src={GifStart} />
            </div>
          </div>
        ) : (
          <div>asndkljasdk</div>
        )}
      </div>
    </div>
  );
};

export default StartPage;
