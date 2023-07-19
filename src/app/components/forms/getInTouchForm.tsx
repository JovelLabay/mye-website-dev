"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getInTouchFormSchema } from "@/lib/types/validators";

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

  return (
    <div
      className="text-white mt-8 sm:mt-10 md:mt-15 lg:mt-20"
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
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  function submitForm({ e }: { e: React.FormEvent<HTMLFormElement> }) {
    e.preventDefault();

    handleSubmit((data) => {
      alert(JSON.stringify(data));

      reset();
    })();
  }
}

export default GetInTouchForm;
