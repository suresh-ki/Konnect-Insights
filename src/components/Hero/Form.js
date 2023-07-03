import { forwardRef, useRef, useState } from "react";

const { default: Button } = require("../UI/Button");

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
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const companyRef = useRef(null);

  const SubmitHandler = (event) => {
    event.preventDefault();

    let formData = new FormData();

    // Iterate through the entries and display each element
    formData.append("firstname", nameRef.current.value.split(" ")[0]);
    formData.append("lastname", nameRef.current.value.split(" ")[1]);
    formData.append("email", emailRef.current.value);
    formData.append("mobilephone", mobileRef.current.value);
    formData.append("company", companyRef.current.value);

    fetch(
      "https://forms.hubspot.com/uploads/form/v2/6325797/593785f8-0f14-442c-9232-6214d6ebe767",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          console.log("success");
          setSuccess(true);
        } else {
          setFailure(true);
          console.log("error");
        }
      })
      .catch((error) => {
        setFailure(true);
        console.log("error");
      });
  };

  return (
    <>
      {success && (
        <div className="flex items-center justify-center">
          <p className="text-green-400 mb-1 text-base text-center">
            Form submitted successfully!
          </p>
        </div>
      )}
      {failure && (
        <div className="flex items-center justify-center">
          <p className="text-red-400 mb-1 text-base text-center">
            Opps something wrong happened, please try again later!
          </p>
        </div>
      )}
      {!success && !failure && (
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
      )}
    </>
  );
};

export default Form;
