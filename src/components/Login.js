import React from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../stores/User";

const Login = () => {
  
  const dispatch = useDispatch(); // to using react redux
  return (
    <div className="bg-white w-full p-10 flex items-center justify-center  border-gray-200">
      <div className="w-full lg:w-2/3 overflow-y-scroll scrollbar-hide">
        <h1 className="text-5xl font-semibold"> Giriş Yap</h1>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Email </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Şifre </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Şifre"
              type="password"
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" for="remember">
                {" "}
                Beni hatırla{" "}
              </label>
            </div>
            <button className="font-medium text-base text-indigo-400 ">
              Şifremi unuttum{" "}
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button onClick={()=>{
              dispatch(setLoggedIn())
            }}  className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl  bg-indigo-400 text-white text-lg font-bold">
              {" "}
              Giriş yap{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
