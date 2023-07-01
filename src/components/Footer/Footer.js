import Image from "next/image";
import React from "react";
import Button from "../UI/Button";

const Footer = (props) => {
  return (
    <div
      className={`flex items-center justify-center blue-border relative overflow-hidden ${props.className}`}
    >
      <div className="container flex items-center flex-col">
        <h2 className="text-[#062A49] font-bold text-xl md:text-2xl lg:text-3xl text-center mb-4">
          Transform your Community Engagement and
          <br />
          <span className="blue-gradient">
            Switch to Konnect Insights Today!
          </span>
        </h2>
        <Button />
        <p className="mt-2 text-sm font-medium mb-9">No CC Required</p>
        <Image
          src="/FooterImageHome.png"
          width={1084}
          height={503}
          className="-mb-1/3 lg:-mb-24"
          alt=""
        />
      </div>
      <div className="blue-gradient h-9 absolute bottom-0 left-0 w-full -z-10"></div>
    </div>
  );
};

export default Footer;
