"use client";
import Form from "./Form";

const Hero = (props) => {
  return (
    <div className="flex items-center justify-center text-white">
      <div className="container pt-36 pb-14 flex-col lg:flex-row flex items-center justify-between gap-y-10">
        {props.children}
        <Form />
      </div>
    </div>
  );
};

export default Hero;
