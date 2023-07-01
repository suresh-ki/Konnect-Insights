import Image from "next/image";
import React from "react";

const BlueBackground = (props) => {
  return (
    <div className="dark-blue-background relative -z-20">
      <div className="bg-[url('/background.png')] bg-cover -z-20">
        <Image
          src="/screen.png"
          fill
          alt=""
          className="absolute top-0 left-0 w-full h-full opacity-25 -z-10"
        />
        {props.children}
      </div>
    </div>
  );
};

export default BlueBackground;
