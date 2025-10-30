"use client";
import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
const Form = () => {

  // create refrence for each input
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const checkBoxRef = useRef();

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // value get from ref
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const agreed = checkBoxRef.current.checked;

    // empty box fill
    if (!firstName || !lastName || !phone || !email || !agreed) {
      alert("please fill the box");
    } else {
     alert ("submitted");
    }

    const formData = {
      firstName,
      lastName,
      phone,
      email,
      agreed,
    };
    console.log("form submitted data", formData);
    console.log("datatypes");
    console.log("name", typeof name);
    console.log("lastName", typeof lastName);
  };
  return (
    <>
      <div className="  flex   justify-center w-full h-screen bg-green-300 items-center ">
        <div className=" text-center mx-2 md:mx-2 lg:mx-10 bg-gray-100 p-2 rounded-2xl ">
          <h1 className="text-2xl  pb-2  font-bold">Send Us A Message</h1>
          <h2 className="text-xl m-2">
            Please fill in the form Below to get in touch with us{" "}
          </h2>
          <form action="" onSubmit={handleSubmitForm} className="mx-10">
            <div className=" grid grid-cols-2 gap-6 w-full">
              <Input
                ref={firstNameRef}
                className=" w-full p-4 "
                type="text"
              ></Input>
              <Input ref={lastNameRef} className="w-full" type="text"></Input>
              <Input ref={phoneRef} type="text"></Input>
              <Input type="email" ref={emailRef}></Input>
              <div className="col-span-2">
                <Input
                  className=" text-black p-2 h-30 w-full"
                  type="Message"
                  placeholder="Message"
                ></Input>
              </div>

              <div className="flex gap-2 min-w-56 max-90 justify-center items-center">
                <Input type="checkbox" ref={checkBoxRef} />
                <p className="text-sm">
                  I have read and agree with the terms of service policy and
                  privacy
                </p>
              </div>
            </div>
            <Button
              type="submit"
              className=" mt-2 items-start text-start bg-black p-2 text-white rounded"
            >
              submitted
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
