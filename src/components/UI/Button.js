"use client";
import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-[#EDCD54] rounded-[30px] py-2 px-5 md:py-3 md:px-7 font-semibold text-sm sm:text-base text-black ${props.className}`}
      onClick={
        props.onClick
          ? props.onClick
          : () => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }

        // var inputElement = document.getElementById('fullname');
        // inputElement.focus();
      }
      type={props.type}
    >
      {props.children ? props.children : "Get a Free Trial"}
    </button>
  );
};

export default Button;
