import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/UseTitle";
const PageNotFound = () => {
  useTitle("page not found!")
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-semibold  text-[#4D4D4D] text-center p-5">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
      <h2 className="text-3xl font-semibold mb-2 animate-moveUpDown">
        Page Not Found
      </h2>
      <p className="text-lg text-[#4D4D4D] mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#45d449] hover:bg-[#4be751]  text-white font-semibold rounded-lg  transition-all duration-300"
      >
        Go Back Home
      </Link>

      <style>
        {`
          @keyframes moveUpDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-moveUpDown {
            animation: moveUpDown 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default PageNotFound;
