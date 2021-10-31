import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner lg:py-36 md:py-28 py-24 h-full">
      <div className="lg:w-4/5 w-11/12 mx-auto">
        <h1 className="md:text-4xl text-2xl text-white font-bold md:w-3/5">
          Discover Your Favourite Place With Us & Enjoy the Wonders of nature!
        </h1>
        <p className="text-xl font-medium text-blue-200 md:w-3/5 my-5">
          Travel to any corner of the World,without going around in circles
          because the World is yours to explore.
        </p>
        <button className="py-2 px-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-blue-900">
          Book a Plan
        </button>
      </div>
    </div>
  );
};

export default Banner;
