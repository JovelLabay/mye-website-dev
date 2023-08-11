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
  feedback: boolean;
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
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRed, setIsRed] = useState(false);
  const [fileError, setfileError] = useState(true);

  const onSubmit = (data: JoinOurTeamForm) => {
    console.log("Form data:", data);
    console.log("TEST", selectedFile);
    if (selectedFile === null) {
      setfileError(true);
      setIsRed(true);
      setErrorMessage("Please select a valid PDF file.");
      return null;
    }
    setIsRed(false);
    setCurrentStatus((prev) => ({ ...prev, buttonStatus: true }));
    setTimeout(() => {
      console.log("Form data:", data);
      setCurrentStatus((prev) => ({ ...prev, buttonStatus: false }));
      setCurrentStatus((prev) => ({ ...prev, feedback: true, modal: false }));
      reset();
    }, 2000);

    // You can do further processing or API calls here
  };

  const handleFileChange = (event: any) => {
    const selected = event.target.files[0];

    if (selected && selected.type === "application/pdf") {
      setSelectedFile(selected);
      setIsRed(false);
      setErrorMessage("");
    } else {
      setSelectedFile(null);
      setIsRed(true);
      setErrorMessage("Please select a valid PDF file.");
    }
  };

  return (
    <>
      <Dialog
        open={currentStatus.modal}
        onClose={() => setCurrentStatus((prev) => ({ ...prev, modal: false }))}
      >
        <div className="fixed inset-0 bg-black/30 rounded" aria-hidden="true" />

        <div className="fixed right-0 left-0 bottom-0 top-[80px] items-center justify-center p-4 overflow-y-auto h-auto z-10">
          <Dialog.Panel className="mx-auto max-w-lg rounded bg-white p-4 z-10 overflow-y-auto">
            <div
              className="text-black relative"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="the-container py-3">
                <div className="mx-3 sm:mx-5 md:mx-10 lg:mx-15 ">
                  <h1 className="animate text-center text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold text-customViolet">
                    Application Form
                  </h1>

                  <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4 max-w-[600px] mx-auto mb-10">
                      <label htmlFor="file" className="mb-2">
                        Upload File <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="file"
                        id="file"
                        accept="application/pdf"
                        className="rounded-lg p-2 bg-gray-100 text-black outline-none w-[220px] md:w-[350px] lg:w-fit"
                        onChange={handleFileChange}
                      />
                      {fileError && isRed && (
                        <p className="bg-red-300 rounded font-light py-1 px-2 mt-2 text-white">
                          {errorMessage}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[600px] mx-auto">
                      <div className="flex flex-col">
                        <label htmlFor="FirstName" className="mb-2">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="rounded-lg p-2 placeholder:text-gray-300 bg-gray-100 text-black outline-none"
                          {...register("firstName")}
                        />
                        {errors.firstName?.message && (
                          <p className="bg-red-300 rounded font-light py-1 px-2 mt-2 text-white">
                            {errors.firstName?.message}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="LastName" className="mb-2">
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="rounded-lg p-2 placeholder:text-gray-300 bg-gray-100 text-black outline-none"
                          {...register("lastName")}
                        />
                        {errors.lastName?.message && (
                          <p className="bg-red-300 rounded font-light py-1 px-2 mt-2 text-white">
                            {errors.lastName?.message}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="Email Address" className="mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="rounded-lg p-2 placeholder:text-gray-300 bg-gray-100 text-black outline-none lg:w-[430px]"
                          {...register("email")}
                        />
                        {errors.email?.message && (
                          <p className="bg-red-300 rounded font-light py-1 px-2 mt-2 text-white lg:w-[430px]">
                            {errors.email?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 max-w-[600px] mx-auto">
                      <label htmlFor="Message" className="mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        placeholder="Message"
                        className="w-full rounded-lg min-h-[200px] p-2 placeholder:text-gray-300 bg-gray-100 text-black outline-none"
                        {...register("message")}
                      />
                      {errors.message?.message && (
                        <p className="bg-red-300 rounded font-light py-1 px-2 mt-1 text-white">
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

      {/* MESSAGE AFTER SUBMIT */}
      <Dialog
        open={currentStatus.feedback}
        onClose={() =>
          setCurrentStatus((prev) => ({
            ...prev,
            modal: false,
            feedback: false,
          }))
        }
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4 z-20">
          <Dialog.Panel className="mx-auto max-w-lg rounded bg-white p-4">
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-center flex justify-center items-center gap-3 my-3 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold text-customViolet">
                Message Sent
              </h3>

              <p>Thank you for your application. We&apos;ll get back to you!</p>

              <button
                onClick={() =>
                  setCurrentStatus((prev) => ({
                    ...prev,
                    modal: false,
                    feedback: false,
                  }))
                }
                type="button"
                className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default JoinOurTeamForm;
