import React, { useState } from "react";
import Header from "../components/Header";

const StartPage = () => {
  const [page, setPage] = useState("");
  return (
    <div className="flex-col">
      <Header page={page} setPage={setPage} />
      <div className="p-1 overflow-y-scroll scrollbar-hide">
        {page === "login" ? (
          <div>loginpage</div>
        ) : page === "register" ? (
          <div>registerpage</div>
        ) : (
          <div>asndkljasdk</div>
        )}
      </div>
    </div>
  );
};

export default StartPage;
