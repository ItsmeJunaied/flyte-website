"use client";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import { GrAttachment } from "react-icons/gr";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddContactMutation } from "@/redux/api/contactApi";

type Inputs = {
  name: string;
  company_name: string;
  email: string;
  phone: string;
  message: string;
  attachment: File[];
  ndaCheckbox: string;
};

const ContactUsFormComp: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState(true);
  const [files, setFiles] = useState<File[]>([]);
  const [addContact] = useAddContactMutation();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitted(true);

    if (!data.phone) {
      setPhoneValue(false);
      return;
    } else {
      setPhoneValue(true);
    }

    const maxTotalSize = 25 * 1024 * 1024; // 25MB
    if (totalSize > maxTotalSize) {
      toast.error("Total attachment size exceeds 25MB. Please remove some files.");
      return;
    }

    try {
      setIsLoading(true);
      const postData = new FormData();
      postData.append("name", data.name);
      postData.append("company_name", data.company_name);
      postData.append("phone", data.phone);
      postData.append("email", data.email);
      postData.append("message", data.message);

      if (data.attachment && data.attachment[0]) {
        const file = data.attachment[0];
        const allowedTypes = [
          "image/jpeg",
          "image/png",
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        const maxSize = 25 * 1024 * 1024;

        if (!allowedTypes.includes(file.type)) {
          toast.error("Invalid file type. Please upload a .jpg, .png, .pdf, or .docx file.");
          return;
        }

        if (file.size > maxSize) {
          toast.error("File size is too large. Maximum allowed size is 25MB.");
          return;
        }

        postData.append("attachment", file);
      }

      const response = await addContact(postData);
      if (response?.error) {
        toast.error(`Error: ${response.error}`);
      } else {
        toast.success("Your message has been sent successfully!");
        reset();
        setFiles([]);
        setIsSubmitted(false);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error:", error);
      setIsSubmitted(false);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full h-full flex-col justify-start items-start gap-4 inline-flex"
    >
      <div className=" w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8 ">
        <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-sm lg:text-base font-semibold font-['DM Sans'] leading-[18px]">
            Name
          </label>
          <input
            type="text"
            className="self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your name"
            {...register("name", { required: true })}
            autoComplete="off"
          />
          {errors.name && <span className=" text-red-600 text-xs lg:text-sm">Name is required</span>}
        </div>
        <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-sm lg:text-base font-semibold font-['DM Sans'] leading-[18px]">
            Company
          </label>
          <input
            type="text"
            className="self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your company name"
            {...register("company_name", { required: true })}
          />
          {errors.company_name && <span className=" text-red-600 text-xs lg:text-sm">Comapny Name is required</span>}
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
        <div className="w-full   flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-sm lg:text-base font-semibold font-['DM Sans'] leading-[18px]">
            Email
          </label>
          <input
            type="email"
            className="self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className=" text-red-600 text-xs lg:text-sm">Email is required</span>}
        </div>
        <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-sm lg:text-base font-semibold font-['DM Sans'] leading-[18px]">
            Phone
          </label>
          <PhoneInput
            className={`self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border ${
              errors.phone ? "border-red-600 text-xs lg:text-sm" : "border-[#cccccc]"
            } text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor`}
            placeholder="Enter phone number"
            defaultCountry="BD"
            onChange={(phone) => setValue("phone", phone || "", { shouldValidate: true })}
          />
          {isSubmitted && !phoneValue && <span className="text-red-600 text-xs">Phone is required</span>}
        </div>
      </div>

      <div className="self-stretch flex-col justify-start items-start gap-2 lg:gap-6 flex">
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="w-full min-h-[100px] flex flex-col justify-start items-start gap-2">
            <label className="self-stretch text-[#666666] text-sm lg:text-base font-semibold font-['Noto Sans'] leading-[18px]">
              How can we help you?
            </label>
            <textarea
              className="w-full min-h-[100px] p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal leading-normal outline-none hover:border-btnColor focus:border-btnColor resize-none"
              placeholder="Type here"
              rows={4}
              {...register("message", { required: true })}
            />
            {errors.message && <span className="text-red-600 text-xs lg:text-sm">Message is required</span>}
          </div>

          <div className="justify-start items-start gap-2.5 inline-flex flex-col">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".jpg,.png,.pdf,.docx"
              {...register("attachment", { onChange: handleFileChange })}
            />
            {errors.attachment && <span className=" text-red-600">This field is required</span>}
            <div className=" flex flex-row justify-center items-start lg:items-center gap-4 lg:gap-2.5">
              <label htmlFor="file-upload" className="flex items-center gap-2 cursor-pointer">
                <div className="flex lg:items-center gap-1 text-[#5856d6]">
                  <GrAttachment />
                  <span className="text-[#5856d6] text-xs text-nowrap font-bold font-['DM Sans']">
                    Attach files
                  </span>
                </div>
              </label>

              <div className="text-[#5856d6] text-[10px] font-medium font-['DM Sans']">
                <li>Max Size: 25MB per file</li>
                <li>Supported Formats: .jpg, .png, .pdf, .docx</li>
              </div>
            </div>

            {files.length > 0 && (
              <>
                <ul className="mt-2 text-[#666666] text-sm font-normal font-['DM Sans'] list-disc list-inside flex flex-wrap gap-3">
                  {files.map((file, index) => (
                    <li
                      key={index}
                      className={`font-medium flex flex-row justify-start items-center gap-1 ${
                        totalSize >= 25 * 1024 * 1024 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {file.name}
                      <button
                        onClick={() => {
                          setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
                        }}
                      >
                        <i className="fa-solid fa-circle-xmark fa-lg hover:text-[#df3a4a]"></i>
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#666666] font-medium mt-1">
                  Total Size: {formatBytes(totalSize)}
                </p>
              </>
            )}
          </div>

          <div className="self-stretch py-3 justify-start items-center gap-2.5 inline-flex">
            <div className="flex gap-4">
              <input
                {...register("ndaCheckbox", { required: "You must agree to the NDA" })}
                type="checkbox"
                className="toggle toggle-primary [--tglbg:white]"
                id="nda-checkbox"
              />
              <div className="text-[#666666] text-xs font-normal font-['DM Sans'] leading-normal">
                I agree to the Non-Disclosure Agreement (NDA) and confirm that all shared information will
                remain confidential.
              </div>
            </div>
          </div>

          {errors.ndaCheckbox && (
            <div className="text-red-500 text-xs lg:text-sm -mt-4">{errors.ndaCheckbox.message}</div>
          )}
        </div>

        <div className="self-stretch h-10 flex-col justify-start items-center gap-2 flex">
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "cursor-not-allowed bg-gray-400" : "cursor-pointer bgGradientNevyBlue"
            } w-[180px] h-10 px-8 py-3  rounded-md text-white text-sm font-semibold `}
          >
            {isLoading ? "Sending..." : " Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsFormComp;
