import React from "react";
import Button from "../UI/Button";

const CustomInput = (props) => {
  return (
    <div>
      <p className="text-[#9CA5AD] mb-1 text-base">{props.label}</p>
      <input
        placeholder={props.placeholder}
        className="bg-[#163A59] rounded-[10px] px-5 pt-4 pb-3 w-full"
      />
    </div>
  );
};

const Hero = (props) => {
  return (
    <div className="flex items-center justify-center text-white">
      <div className="container pt-36 pb-14 flex-col lg:flex-row flex items-center justify-between gap-y-10">
        {props.children}
        <form className="bg-[#09243C] border-2 border-[#163A59] rounded-[10px] py-11 px-10 max-w-[420px] w-full flex flex-col gap-y-3">
          <CustomInput label="Full Name" placeholder="Gautam" />
          <CustomInput label="Email" placeholder="yourid@mail.com" />
          <CustomInput label="Mobile" placeholder="000-000-0000" />
          <CustomInput label="Company Name" placeholder="Alpha" />
          <div className="flex justify-end mt-5">
            <div className="flex flex-col items-center">
              <Button />
              <p className="mt-2 text-sm text-[#EDCD54]">No CC Required</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
