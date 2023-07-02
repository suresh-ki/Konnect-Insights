import React from "react";
import Button from "../UI/Button";

const Why = () => {
  const data = [
    "Create rules to automate pushing tickets",
    "Seamlessly sync status in both systems",
    "Achieve field/object mapping",
    "Respond to social media tickets from salesforce",
    "Send social media tickets & contacts to Salesforce",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="container pt-28 pb-16">
        <div className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          Why Konnect Insights is the{" "}
          <span className="blue-gradient">Best Social Studio Alternative?</span>
        </div>
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 lg:divide-x-2 mt-16 gap-y-5 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start flex-col"
            >
              <img src={`/Why${index + 1}.svg`} className="h-16" />
              <p className="opacity-75 text-center w-4/5 mt-5 leading-tight">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center flex-col mt-10">
          <Button />
          <p className="mt-2 text-sm font-medium mb-9">No CC Required</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
