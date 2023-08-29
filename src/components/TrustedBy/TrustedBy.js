import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-between mb-16 gap-5">
      <Image src="/MCDonalds.png" height={44} width={37} alt="" />
      <div className="h-10 lg:border-l-[1px] border-[#6B7280] opacity-20"></div>
      <Image src="/oppo.png" height={21} width={83} alt="" />{" "}
      <div className="h-10 lg:border-l-[1px] border-[#6B7280] opacity-20"></div>
      <Image
        src="/AirIndia.png"
        height={45}
        width={148}
        alt=""
        className="mix-blend-screen"
      />
      <div className="h-10 lg:border-l-[1px] border-[#6B7280] opacity-20 "></div>
      <Image src="/ooredoo.png" height={26} width={150} alt="" />{" "}
      <div className="h-10 lg:border-l-[1px] border-[#6B7280] opacity-20 "></div>
      <Image src="/Volkswagon.png" height={42} width={40} alt="" />{" "}
      <div className="h-10 lg:border-l-[1px] border-[#6B7280] opacity-20"></div>
      <Image src="/Zomato.png" height={28} width={97} alt="" />{" "}
      <div className="h-10 lg:border-l-[1px] border-[#6B7280] opacity-20"></div>
      <Image src="/Honda.png" height={45} width={68} alt="" />{" "}
      <div className="h-10 lg:border-l-[1px] border-[#6B7280] opacity-20"></div>
      <Image src="/Decathalon.png" height={32} width={120} alt="" />{" "}
      <div className="h-10 lg:border-l-[1px] border-[#6B7280] opacity-20"></div>
    </div>
  );
};

const TrustedBy = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="container max-w-[1200px]">
        <h2 className="text-[#a6b6c4] font-medium text-sm sm:text-base text-center mb-8">
          TRUSTED BY GLOBAL BRANDS
        </h2>
        <div className=" px-10 overflow-hidden w-full">
          <div className="flex animated-loop gap-5 w-[3500px]">
            <Banner />
            <Banner />
          </div>
        </div>

        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-y-10 lg:hidden justify-items-center items-center mb-16">
          <Image src="/MCDonalds.png" height={44} width={37} alt="" />
          <Image src="/oppo.png" height={21} width={83} alt="" />{" "}
          <Image
            src="/AirIndia.png"
            height={45}
            width={148}
            alt=""
            className="mix-blend-screen"
          />
          <Image src="/ooredoo.png" height={26} width={150} alt="" />{" "}
          <Image src="/Volkswagon.png" height={42} width={40} alt="" />{" "}
          <Image src="/Zomato.png" height={28} width={97} alt="" />{" "}
          <Image src="/Honda.png" height={45} width={68} alt="" />{" "}
          <Image src="/Decathalon.png" height={32} width={120} alt="" />{" "}
        </div> */}
      </div>
    </div>
  );
};

export default TrustedBy;
