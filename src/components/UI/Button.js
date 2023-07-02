"use client";
import React from "react";

const Button = () => {
  return (
    <button
      className="bg-[#EDCD54] rounded-[30px] py-2 px-5 md:py-3 md:px-7 font-semibold text-sm sm:text-base text-black"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      Get a Free Trial
    </button>
  );
};

export default Button;
