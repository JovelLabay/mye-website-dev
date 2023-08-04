import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  getInTouchFormSchema,
  joinourTeamFormSchema,
} from "@/lib/types/validators";
import { Dialog } from "@headlessui/react";

import axios from "axios";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

interface StatusState {
  modal: boolean;
  status: boolean;
  buttonStatus: boolean;
}

interface JoinOurTeamFormProps {
  currentStatus: StatusState;
  setCurrentStatus: React.Dispatch<React.SetStateAction<StatusState>>;
}

type JoinOurTeamFormData = Omit<JoinOurTeamForm, "file">;

function JoinOurTeamForm({
  currentStatus,
  setCurrentStatus,
}: JoinOurTeamFormProps) {
  // Initialize the state with useState

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JoinOurTeamForm>({
    mode: "onBlur",
    resolver: yupResolver(joinourTeamFormSchema),
  });

  const onSubmit = (data: JoinOurTeamForm) => {
    console.log("Form data:", data);
    setCurrentStatus((prev) => ({ ...prev, modal: false }));
    // You can do further processing or API calls here
  };

  return (
    <Dialog
      open={currentStatus.modal}
      onClose={() => setCurrentStatus((prev) => ({ ...prev, modal: false }))}
    >
      <div className="fixed bg-black/30" aria-hidden="true" />

      <div className="fixed right-0 left-0 bottom-0 top-[100px] flex items-center justify-center p-4 overflow-y-auto h-auto">
        <Dialog.Panel className="mx-auto max-w-lg rounded bg-white p-4 z-10 overflow-y-auto">
          <div
            className="text-black relative"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="the-container py-8 sm:py-10 md:py-15 lg:py-20">
              <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15 mt-[190px] sm:mt-[100px] md:mt-0 lg:mt-0">
                <h1 className="animate text-center text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold text-customViolet">
                  Application Form
                </h1>

                <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-4 max-w-[600px] mx-auto mb-10">
                    <label htmlFor="file" className="mb-2">
                      Upload File
                    </label>
                    <input
                      type="file"
                      id="file"
                      className="rounded-lg p-2 bg-gray-100 text-black outline-none w-[250px] md:w-[350px] lg:w-fit"
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[600px] mx-auto">
                    <div className="flex flex-col">
                      <label htmlFor="FirstName" className="mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="rounded-lg p-2 placeholder:text-gray-300 bg-gray-100 text-black outline-none"
                        {...register("firstName")}
                      />
                      {errors.firstName?.message && (
                        <p className="bg-red-300 rounded font-light py-1 px-2 mt-2">
                          {errors.firstName?.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="LastName" className="mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="rounded-lg p-2 placeholder:text-gray-300 bg-gray-100 text-black outline-none"
                        {...register("lastName")}
                      />
                      {errors.lastName?.message && (
                        <p className="bg-red-300 rounded font-light py-1 px-2 mt-2">
                          {errors.lastName?.message}
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
                        className="rounded-lg p-2 placeholder:text-gray-300 bg-gray-100 text-black outline-none"
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
                      className="w-full rounded-lg min-h-[200px] p-2 placeholder:text-gray-300 bg-gray-100 text-black outline-none"
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
                      className="py-[5px] md:py-[8px] lg:py-[10px] px-[20px] sm:px-[33px] md:px-[40px] lg:px-[60px] rounded-full bg-gradient-to-r from-customBlue via-customDarkViolet to-customPink text-white font-medium md:font-semibold
                hover:bg-gradient-to-r hover:from-customPink hover:to-customPink"
                    >
                      {currentStatus.buttonStatus ? "Sending..." : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default JoinOurTeamForm;
