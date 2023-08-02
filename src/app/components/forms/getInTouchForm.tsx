"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getInTouchFormSchema } from "@/lib/types/validators";
import { Dialog } from "@headlessui/react";

import axios from "axios";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function GetInTouchForm({
  getInTouch,
}: {
  getInTouch: {
    headerGetInTouch: string;
    getInTouchBackgroundImage: {
      sourceUrl: string;
    };
  };
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GetInTouchForm>({
    mode: "onBlur",
    resolver: yupResolver(getInTouchFormSchema),
  });

  const [status, setStatus] = useState({
    modal: false,
    status: true,
    buttonStatus: false,
  });

  return (
    <div
      className="text-white relative"
      style={{
        backgroundImage: `url(${getInTouch.getInTouchBackgroundImage.sourceUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
        <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15">
          <h1 className="animate text-center text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold">
            {getInTouch.headerGetInTouch}
          </h1>

          <form className="mt-5" onSubmit={(e) => submitForm({ e })}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[600px] mx-auto">
              <div className="flex flex-col">
                <label htmlFor="Name" className="mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-lg p-2 placeholder:text-white text-black outline-none"
                  {...register("name")}
                />
                {errors.name?.message && (
                  <p className="bg-red-300 rounded font-light py-1 px-2 mt-2">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="Email Address" className="mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-lg p-2 placeholder:text-white text-black outline-none"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="bg-red-300 rounded font-light py-1 px-2 mt-2">
                    {errors.email?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4 max-w-[600px] mx-auto">
              <label htmlFor="Message" className="mb-2">
                Message
              </label>
              <textarea
                placeholder="Message"
                className="w-full rounded-lg min-h-[200px] p-2 placeholder:text-white text-black outline-none"
                {...register("message")}
              />
              {errors.message?.message && (
                <p className="bg-red-300 rounded font-light py-1 px-2 mt-1">
                  {errors.message?.message}
                </p>
              )}
            </div>
            <div className="mt-4 max-w-[600px] mx-auto">
              <button
                type="submit"
                id="get-in-touch-send-btn"
                className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[24px] md:px-[30px] lg:px-[40px] rounded-full bg-white text-customMainBlue font-medium md:font-semibold"
              >
                {status.buttonStatus ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* MODAL */}
      <Dialog
        open={status.modal}
        onClose={() => setStatus((prev) => ({ ...prev, modal: false }))}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded bg-white p-4">
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-center flex justify-center items-center gap-3 my-3 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold text-customViolet">
                {status.status ? "Mesage Sent!" : "Message Failed!"}
                {status.status ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
              </h3>

              <p>
                {status.status
                  ? "Your message has been sent successfully"
                  : "Your message has encountered an error. Try again."}
              </p>

              <button
                onClick={() => setStatus((prev) => ({ ...prev, modal: false }))}
                type="button"
                className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );

  function submitForm({ e }: { e: React.FormEvent<HTMLFormElement> }) {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, buttonStatus: true }));

    handleSubmit((data) => {
      axios
        .request({
          method: "POST",
          url: "/api/email",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            name: data.name,
            emailAddress: data.email,
            message: data.message,
          },
        })
        .then((res) => {
          if (res.status === 200 && res.statusText === "OK") {
            setStatus((prev) => ({
              ...prev,
              modal: true,
              status: true,
              buttonStatus: false,
            }));
          } else {
            setStatus((prev) => ({
              ...prev,
              modal: true,
              status: false,
              buttonStatus: false,
            }));
          }

          console.log(res);
          reset();
        })
        .catch((err) => {
          alert("Something went wrong. Please try again.");
          setStatus((prev) => ({ ...prev, buttonStatus: false }));

          console.log(err);
        });
    })();
  }
}

export default GetInTouchForm;
