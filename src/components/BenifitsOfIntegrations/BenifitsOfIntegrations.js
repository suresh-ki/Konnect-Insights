import React from "react";
import Button from "../UI/Button";

const BenifitsOfIntegrations = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container pt-16 max-w-[1200px]">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          <span className="blue-gradient">Benefits of the Integration</span>
        </h2>
        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between divide-x-2 mt-10 lg:mt-16 gap-y-5 gap-x-10">
          <div className="bg-[#F4F4F4] px-10 py-8 flex items-center gap-x-4 rounded-xl w-full">
            <img src="BOF1.png" className="h-14 w-14" />
            <div className="w-[1px] bg-[#D9D9D9] h-full"></div>
            <p className="text-lg opacity-75 leading-tight">
              <span className="font-bold">One-View</span> of the customer in{" "}
              <span className="font-bold">Salesforce</span>
            </p>
          </div>
          <div className="bg-[#F4F4F4] px-10 py-8 flex items-center gap-x-4 rounded-xl w-full">
            <img src="BOF2.png" className="h-14 w-14" />
            <div className="w-[1px] bg-[#D9D9D9] h-full"></div>
            <p className="text-lg opacity-75 leading-tight">
              Empowers agents with <span className="font-bold">real-time</span>{" "}
              access to{" "}
              <span className="font-bold">social media conversations</span>
            </p>
          </div>
          <div className="bg-[#F4F4F4] px-10 py-8 flex items-center gap-x-4 rounded-xl w-full">
            <img src="BOF3.png" className="h-14 w-14" />
            <div className="w-[1px] bg-[#D9D9D9] h-full"></div>
            <p className="text-lg opacity-75 leading-tight">
              <span className="font-bold">Lead generation</span> from social
              media created as opportunities in{" "}
              <span className="font-bold">SFDC</span>
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col mt-10">
          <Button />
          <p className="mt-2 text-sm font-medium mb-9">No CC Required</p>
        </div>
      </div>
    </div>
  );
};

export default BenifitsOfIntegrations;
