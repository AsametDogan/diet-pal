import React from "react";
import { setLoggedIn } from "../stores/User";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  
  const dispatch = useDispatch(); // to using react redux
  return (
    <div className="bg-white w-full p-10 flex items-center justify-center  border-gray-200">
      <div className="w-full lg:w-2/3 overflow-y-scroll scrollbar-hide">
        <h1 className="text-3xl font-semibold"> Kayıt Ol</h1>
        <div className="mt-8">
          <div>
            <label className=" text-base font-medium">Ad Soyad </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              placeholder=""
            />
          </div>
          <div>
            <label className="text-base font-medium">Email </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              placeholder=""
            />
          </div>
          <div>
            <label className="text-base font-medium">Telefon Numarası </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              placeholder=""
            />
          </div>
          <div>
            <label className="text-base font-medium">Şifre </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              placeholder=""
              type="password"
            />
          </div>
          <div>
            <label className="text-base font-medium">
              Şifreyi tekrar girin{" "}
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              placeholder=""
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
            <button className="font-medium text-base text-indigo-300 ">
              Şifremi unuttum{" "}
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button onClick={()=>{
              dispatch(setLoggedIn())
            }} className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl  bg-indigo-300 text-white text-base font-bold">
              {" "}
              Kayıt Ol{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
