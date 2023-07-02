"use client";
import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Image from "next/image";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 w-full top-0 flex items-center justify-center border-b-2 border-b-[#163A59] ${
        scrolled && "dark-blue-background"
      }`}
    >
      <div className="flex justify-between items-center container max-w-[1200px] py-4">
        <Image
          src="./Logo.svg"
          width={214}
          height={43}
          alt="Konnect Insights Logo"
          className="h-8 w-auto md:h-[43px]"
        />
        <Button />
      </div>
    </div>
  );
};

export default NavBar;
