import React from "react";
import Button from "../UI/Button";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center border-b-2 border-b-[#163A59]">
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
