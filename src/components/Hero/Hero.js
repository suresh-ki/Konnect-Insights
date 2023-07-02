"use client";
import React, { forwardRef, useRef } from "react";
import Button from "../UI/Button";

const CI = (props, ref) => {
  return (
    <div>
      <p className="text-[#9CA5AD] mb-1 text-base">{props.label}</p>
      <input
        placeholder={props.placeholder}
        className="bg-[#163A59] rounded-[10px] px-5 pt-4 pb-3 w-full"
        type={props.type}
        ref={ref}
      />
    </div>
  );
};

const CustomInput = forwardRef(CI);

const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const companyRef = useRef(null);

  const SubmitHandler = (event) => {
    event.preventDefault();

    let formData = new FormData();

    // Iterate through the entries and display each element
    formData.append("firstname", nameRef.current.value.split(" ")[0]);
    formData.append("lastname", nameRef.current.value.split(" ")[0]);
    formData.append("mobilephone", mobileRef.current.value);
    formData.append("company", companyRef.current.value);

    fetch(
      "https://forms.hubspot.com/uploads/form/v2/21984071/e823e9ee-2a2d-437c-b69c-82c3357cf209",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          console.log("success");
        } else {
          F;
          console.log("error");
        }
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <form
      className="bg-[#09243C] border-2 border-[#163A59] rounded-[10px] py-11 px-10 max-w-[420px] w-full flex flex-col gap-y-3"
      onSubmit={SubmitHandler}
    >
      <CustomInput
        label="Full Name"
        placeholder="Gautam"
        type="text"
        ref={nameRef}
        name="full_name"
      />
      <CustomInput
        label="Email"
        placeholder="yourid@mail.com"
        type="email"
        ref={emailRef}
        name="email"
      />
      <CustomInput
        label="Mobile"
        placeholder="000-000-0000"
        type="tel"
        ref={mobileRef}
        name="mobilephone"
      />
      <CustomInput
        label="Company Name"
        placeholder="Alpha"
        type="text"
        ref={companyRef}
        name="company"
      />
      <div className="flex justify-end mt-5">
        <div className="flex flex-col items-center">
          <Button onClick={() => {}} type="submit" />
          <p className="mt-2 text-sm text-[#EDCD54]">No CC Required</p>
        </div>
      </div>
    </form>
  );
};

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
