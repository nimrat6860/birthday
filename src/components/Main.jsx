import React from "react";
import { assets } from "../assets/Assets";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-200 to-blue-100 text-center px-4 overflow-hidden">
      <h1 className="text-6xl md:text-7xl font-bold text-pink-600 mt-12 mb-6 animate-bounce drop-shadow-lg">
        🎉 Happy Birthday, Veer ❤️🎂
      </h1>
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 z-10">
        <img
          src={assets.birthdaywish}
          alt="Birthday Wish"
          className="w-80 h-60 md:w-[550px] md:h-[450px] rounded-3xl shadow-xl border-4 border-pink-400 bg-white/40 backdrop-blur-md "
        />
      </div>
      <p className="mt-10 max-w-4xl text-lg md:text-2xl font-medium text-gray-700 leading-relaxed bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-pink-200 shadow-lg">
        You’ve grown into such an amazing person — strong, kind, and full of
        wisdom. You’re officially older, wiser… and still just as annoying 😜
        But honestly, life wouldn’t be half as fun without your random jokes,
        loud advice, and never-ending teasing. Thanks for always having my back
        (even when you pretend not to care)🥹. Wishing you a year filled with
        success, peace, and everything that makes you smile❤️.
      </p>
      <h2 className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6 animate-bounce mt-16 drop-shadow-lg">
        👉 Special Surprise 👈
      </h2>
      <p className="max-w-5xl text-lg md:text-2xl text-gray-700 leading-relaxed font-medium backdrop-blur-sm bg-white/40 p-6 rounded-2xl shadow-lg border border-pink-200">
        On your special day, I want to make it even more memorable by giving you
        a lovely surprise — a walk down memory lane, from the day you were born
        till now, reliving all the beautiful moments that made you who you are
        today.💙🌸
      </p>
      <button
        className="mt-10 px-10 py-5 mb-6 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg font-semibold shadow-md transition-transform transform hover:scale-110 cursor-pointer animate-bounce"
        onClick={() => {
          navigate("/journey");
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }, 100);
        }}
      >
        Explore the Journey 🚀
      </button>
    </div>
  );
};
export default Main;
