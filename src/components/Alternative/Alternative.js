import React from "react";
import Button from "../UI/Button";
import Image from "next/image";

const Grid = () => {
  const data = [
    [
      "Social Listening",
      "Get social listening across the internet!",
      "Basic with heavy focus only on Twitter",
    ],
    [
      "ORM or CommunityEngagement",
      "The best in the industry with AI workflows and rich user experience",
      "Basic with heavy focus only on Twitter",
    ],
    ["Robust Ticketing and Workflows", "Excellent!", "Limited capabilites"],
    ["Automated Workflows and Generative AI", "Best in the segment!", "NA"],
    [
      "Social Media Platform Analytics",
      "Offers smart suggestions!",
      "Does not offer smart suggestions",
    ],
    ["Surveys", "Excellent! also offers QR code solutions for surveys.", "NA"],
    ["BI Tools", "Best in class BI tools", "NA"],
    [
      "Integrations (CRMs, Calls, Chats, Marketing Automation, Collaboration Tools)",
      "Offers one view of the customer across all channels - (all Social, Calls, Emails and Chats)",
      "NA",
    ],
  ];

  return (
    <div className="grid grid-cols-3 gap-0 mt-10 md:mt-16">
      <div className="p-5 flex items-center justify-center">
        <h3 className="text-sm md:text-lg lg:text-2xl font-semibold">
          Feature
        </h3>
      </div>
      <div className="bg-[#F3FFF2] p-2.5 lg:p-5 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-2 border-b-0 flex items-center justify-center rounded-t-lg">
        <Image
          src="/Logo_blue.png"
          width={245}
          height={45}
          alt="Konnect Insights Logo"
          className=""
        />
      </div>
      <div className="p-5 flex items-center justify-center">
        <h3 className="text-sm md:text-lg lg:text-2xl font-semibold">
          Other Siloed Platforms
        </h3>
      </div>
      <div className="bg-[#F7F7F7]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-2 border-r-0 rounded-tl-xl">
        {data[0][0]}
      </div>
      <div className="bg-[#F3FFF2]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-2 border-t-0">
        {data[0][1]}
      </div>
      <div className="bg-[#FDE7E7]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-2 border-l-0 rounded-tr-xl">
        {data[0][2]}
      </div>
      {data.slice(1, -1).map((item, index) => {
        return (
          <>
            <div className="bg-[#F7F7F7]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-b-2 border-l-2">
              <p className="max-w-[300px]">{item[0]}</p>
            </div>
            <div className="bg-[#F3FFF2]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-2 border-t-0">
              <p className="max-w-[300px]">{item[1]}</p>
            </div>
            <div className="bg-[#FDE7E7]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-b-2 border-r-2">
              <p className="max-w-[300px]">{item[2]}</p>
            </div>
          </>
        );
      })}
      <div className="bg-[#F7F7F7]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-b-2 border-l-2 rounded-bl-xl">
        <p className="max-w-[300px]">{data[data.length - 1][0]}</p>
      </div>
      <div className="bg-[#F3FFF2]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-2 border-y-0">
        <p className="max-w-[300px]">{data[data.length - 1][1]}</p>
      </div>
      <div className="bg-[#FDE7E7]  px-7 py-8 text-[#404040] text-xs md:text-sm lg:text-base leading-tight border-b-2 border-r-2 rounded-br-xl">
        <p className="max-w-[300px]">{data[data.length - 1][2]}</p>
      </div>
      <div></div>
      <div className="bg-[#F3FFF2] h-10 border-2 border-t-0 rounded-b-xl"></div>
      <div></div>
    </div>
  );
};
const Alternative = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container pt-20 pb-16">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          Why Konnect Insights is the{" "}
          <span className="blue-gradient">Best Alternative</span>
        </h2>
        <Grid />
        <div className="flex items-center flex-col mt-10">
          <Button />
          <p className="mt-2 text-sm font-medium mb-9">No CC Required</p>
        </div>
      </div>
    </div>
  );
};

export default Alternative;
