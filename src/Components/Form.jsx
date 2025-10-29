"use client";
import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
const Form = () => {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim() === "") {
      alert("please fill in the blank ");
    } else ('submitted')
  };

  return (
    <>
      <div className="  flex   justify-center w-full h-screen bg-green-300 items-center ">
        <div className=" text-center mx-2 md:mx-2 lg:mx-10 bg-gray-100 p-2 rounded-2xl ">
          <h1 className="text-2xl  pb-2  font-bold">Send Us A Message</h1>
          <h2 className="text-xl m-2">
            Please fill in the form Below to get in touch with us{" "}
          </h2>
          <form action="" className="mx-10" onSubmit={handleSubmit}>
            <div className=" grid grid-cols-2 gap-6 w-full">
              <Input
                ref={inputRef}
                className=" w-full p-4 "
                type="text"
              ></Input>
              <Input className="w-full" type="text"></Input>
              <Input type="text"></Input>
              <Input type="text"></Input>
              <div className="col-span-2">
                <Input
                
                  className="text-start items-start text-black p-2 h-30 w-full"
                  type="Message"
                  placeholder="Message"
                ></Input>
              </div>

              <div className="flex gap-2 min-w-56 max-90 justify-center items-center">
                <Input type="checkbox" />
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
