import React from "react";
import Button from "../UI/Button";

const Experience = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container pt-16">
        <div className="text-[#404040] text-center font-bold text-xl md:text-2xl lg:text-3xl">
          4 Pillars of Customer Experience Management.
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-2.5 sm:gap-5 mt-10 lg:mt-14 pt-10">
          <div className="bg-[#FDF7F2] rounded-3xl ">
            <div className="flex items-center justify-center -mt-11">
              <div className="flex items-center justify-center w-[88px] h-[88px] p-4 border-[#FFE5DD] border-2 bg-white rounded-full">
                <img src="./pillar1.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="pt-2.5 pb-6 px-5 flex flex-col gap-2">
              <div className="font-medium lg:text-lg rounded-lg border-[#FFE5DD] border-2 bg-white text-center py-3 flex items-center justify-center px-2.5 h-[72px]">
                Social Media
              </div>
              <div className="font-medium lg:text-lg rounded-lg border-[#FFE5DD] border-2 bg-white text-center py-3 flex items-center justify-center px-2.5  h-[72px]">
                Online Web
              </div>
              <div className="font-medium lg:text-lg rounded-lg border-[#FFE5DD] border-2 bg-white text-center py-3 flex items-center justify-center px-2.5  h-[72px]">
                Emails
              </div>
              <div className="font-medium lg:text-lg rounded-lg border-[#FFE5DD] border-2 bg-white text-center py-3 flex items-center justify-center px-2.5  h-[72px]">
                Offline Touchpoints
              </div>
            </div>
          </div>
          <div className="bg-[#FFFDEB] rounded-3xl flex flex-col">
            <div className="flex items-center justify-center -mt-11">
              <div className="flex items-center justify-center w-[88px] h-[88px] p-4 border-[#FFEAC0] border-2 bg-white rounded-full">
                <img
                  src="./pillar2.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="pt-2.5 pb-6 px-5 flex flex-col gap-2 flex-1">
              <div className="font-medium lg:text-lg rounded-lg border-[#FFEAC0] border-2 bg-white text-center py-3 flex-1 flex items-center justify-center px-2.5 sm:max-h-[100%] max-h-[72px]">
                Calling
              </div>
              <div className="font-medium lg:text-lg rounded-lg border-[#FFEAC0] border-2 bg-white text-center py-3 flex-1 flex items-center justify-center px-2.5 sm:max-h-[100%] max-h-[72px]">
                Chats
              </div>
            </div>
          </div>
          <div className="bg-[#E1FDF2] rounded-3xl flex flex-col">
            <div className="flex items-center justify-center -mt-11">
              <div className="flex items-center justify-center w-[88px] h-[88px] p-4 border-[#C3FFEA] border-2 bg-white rounded-full">
                <img src="./pillar3.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="pt-2.5 pb-6 px-5 flex flex-col gap-2 flex-1">
              <div className="font-medium lg:text-lg rounded-lg border-[#C3FFEA] border-2 bg-white text-center py-3 flex-1 flex items-center justify-center px-2.5 min-h-[72px]">
                Analytics
              </div>
              <div className="font-medium lg:text-lg rounded-lg border-[#C3FFEA] border-2 bg-white text-center py-3 flex-1 flex items-center justify-center px-2.5 min-h-[72px]">
                CRM
              </div>
            </div>
          </div>
          <div className="bg-[#E8F4FC] rounded-3xl flex flex-col">
            <div className="flex items-center justify-center -mt-11">
              <div className="flex items-center justify-center w-[88px] h-[88px] p-4 border-[#5BBCF5] border-2 bg-white rounded-full">
                <img src="./pillar4.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="pt-2.5 pb-6 px-5 flex flex-col gap-2 flex-1">
              <div className="font-medium lg:text-lg rounded-lg border-[#5BBCF5] border-2 bg-white text-center py-3 flex-1 flex items-center justify-center px-2.5 min-h-[72px]">
                Publishing
              </div>
              <div className="font-medium lg:text-lg rounded-lg border-[#5BBCF5] border-2 bg-white text-center py-3 flex-1 flex items-center justify-center px-2.5 min-h-[72px]">
                Marketing Automation
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-10 lg:mt-14">
          <Button />
          <p className="mt-2 text-sm font-medium mb-9 text-center">
            No CC Required
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
