import { forwardRef, useEffect, useRef, useState } from "react";
import HubspotForm from "react-hubspot-form";

const { default: Button } = require("../UI/Button");

// const CI = (props, ref) => {
//   return (
//     <div>
//       <p className="text-[#9CA5AD] mb-1 text-base">{props.label}</p>
//       <input
//         placeholder={props.placeholder}
//         className="bg-[#163A59] rounded-[10px] px-5 pt-4 pb-3 w-full"
//         type={props.type}
//         ref={ref}
//         required
//       />
//     </div>
//   );
// };

// const CustomInput = forwardRef(CI);

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  // const firstnameRef = useRef(null);
  // const lastnameRef = useRef(null);
  // const emailRef = useRef(null);
  // const mobileRef = useRef(null);
  // const companyRef = useRef(null);

  // Function to handle the scroll event and focus on the input field
  // const handleScrollToTop = () => {
  //   if (window.scrollY === 0 && firstnameRef.current) {
  //     nameRef.current.focus();
  //   }
  // };

  // // Add scroll event listener when the component mounts
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollToTop);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScrollToTop);
  //   };
  // }, []);

  // const SubmitHandler = (event) => {
  //   event.preventDefault();

  //   let formData = new FormData();

  //   // Iterate through the entries and display each element
  //   formData.append("firstname", firstnameRef.current.value);
  //   formData.append("lastname", lastnameRef.current.value);
  //   formData.append("email", emailRef.current.value);
  //   // formData.append("mobilephone", mobileRef.current.value);
  //   // formData.append("company", companyRef.current.value);

  //   fetch(
  //     "https://forms.hubspot.com/uploads/form/v2/6325797/593785f8-0f14-442c-9232-6214d6ebe767",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   )
  //     .then((response) => {
  //       if (response.status >= 200 && response.status < 300) {
  //         console.log("success");
  //         // window.location.href = `https://app.konnectinsights.com/Signup?firstname=${firstnameRef.current.value}&lastname=${lastnameRef.current.value}&email=${emailRef.current.value}&mobilephone=${mobileRef.current.value}&company=${companyRef.current.value}`;
  //         window.location.href = `https://app.konnectinsights.com/Signup?firstname=${firstnameRef.current.value}&lastname=${lastnameRef.current.value}&email=${emailRef.current.value}`;

  //         setSuccess(true);
  //       } else {
  //         setFailure(true);
  //         console.log("error");
  //       }
  //     })
  //     .catch((error) => {
  //       setFailure(true);
  //       console.log("error");
  //     });
  // };

  return (
    <>
      {success && (
        <div className="flex items-center justify-center flex-col gap-10">
          <Button
            onClick={() =>
              (window.location.href = "https://app.konnectinsights.com/Signup")
            }
            className="w-56"
          >
            Explore the product
          </Button>
          <Button
            onClick={() =>
              (window.location.href = "https://konnectinsights.com/")
            }
            className="w-56"
          >
            Book a demo
          </Button>
        </div>
      )}
      {failure && (
        <div className="flex items-center justify-center">
          <p className="text-red-400 mb-1 text-base text-center">
            Oops something went Wrong, please try again later!
          </p>
        </div>
      )}
      {!success && !failure && (
        <div className="max-w-[420px] w-full">
          <HubspotForm
            portalId="6325797"
            formId="593785f8-0f14-442c-9232-6214d6ebe767"
            region="na1"
            onFormSubmitted={() => {
              console.log(success);
              setSuccess(true);
            }}
            onReady={(form) => console.log("Form ready!")}
            loading={
              <div className="flex items-center justify-center w-full">
                <p className="text-center">Loading...</p>
              </div>
            }
          />
        </div>
      )}
    </>
  );
};

export default Form;
