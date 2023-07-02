import Image from "next/image";
import React from "react";

const BlueBackground = (props) => {
  return (
    <div className="dark-blue-background relative">
      <Image
        src="/background.png"
        fill
        alt=""
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <Image
        src="/screen.png"
        fill
        alt=""
        className="absolute top-0 left-0 w-full h-full opacity-25 -z-10"
      />
      {props.children}
    </div>
  );
};

export default BlueBackground;
