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
  const [phoneValue, setPhoneValue] = useState<string | undefined>("");
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
      toast.error("Phone number is required");
      return;
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
        setPhoneValue(""); // reset phone input
        setIsSubmitted(false);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error:", error);
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
      className="w-full h-full flex-col justify-start items-start gap-4 inline-flex"
    >
      {/* Name and Company */}
      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
        {/* Name */}
        <div className="w-full flex-col gap-2 inline-flex">
          <label className="text-[#666666] text-sm lg:text-base font-semibold">Name</label>
          <input
            type="text"
            className="self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border border-[#cccccc] text-sm outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your name"
            {...register("name", { required: "Name is required" })}
            autoComplete="off"
          />
          {errors.name && <span className="text-red-600 text-xs">{errors.name.message}</span>}
        </div>

        {/* Company */}
        <div className="w-full flex-col gap-2 inline-flex">
          <label className="text-[#666666] text-sm lg:text-base font-semibold">Company</label>
          <input
            type="text"
            className="self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border border-[#cccccc] text-sm outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your company name"
            {...register("company_name", { required: "Company name is required" })}
          />
          {errors.company_name && <span className="text-red-600 text-xs">{errors.company_name.message}</span>}
        </div>
      </div>

      {/* Email and Phone */}
      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
        {/* Email */}
        <div className="w-full flex-col gap-2 inline-flex">
          <label className="text-[#666666] text-sm lg:text-base font-semibold">Email</label>
          <input
            type="email"
            className="self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border border-[#cccccc] text-sm outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
        </div>

        {/* Phone */}
        <div className="w-full flex-col gap-2 inline-flex">
          <label className="text-[#666666] text-sm lg:text-base font-semibold">Phone</label>
          <PhoneInput
            value={phoneValue}
            onChange={(phone) => {
              setPhoneValue(phone);
              setValue("phone", phone || "", { shouldValidate: true });
            }}
            defaultCountry="BD"
            placeholder="Enter phone number"
            className={`self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border ${
              isSubmitted && !phoneValue ? "border-red-600" : "border-[#cccccc]"
            } text-sm outline-none hover:border-btnColor focus:border-btnColor`}
          />
          {isSubmitted && !phoneValue && <span className="text-red-600 text-xs">Phone is required</span>}
        </div>
      </div>

      {/* Message */}
      <div className="w-full flex-col gap-2 flex">
        <label className="text-[#666666] text-sm lg:text-base font-semibold">How can we help you?</label>
        <textarea
          className="w-full min-h-[100px] p-4 bg-white rounded-lg border border-[#cccccc] text-sm outline-none hover:border-btnColor focus:border-btnColor resize-none"
          placeholder="Type here"
          rows={4}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <span className="text-red-600 text-xs">{errors.message.message}</span>}
      </div>

      {/* File Upload */}
      <div className="flex flex-col gap-2">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".jpg,.png,.pdf,.docx"
          {...register("attachment", { onChange: handleFileChange })}
        />
        <label
          htmlFor="file-upload"
          className="flex items-center gap-2 cursor-pointer text-[#5856d6] text-xs font-bold"
        >
          <GrAttachment />
          Attach files
        </label>
        <ul className="text-[10px] text-[#5856d6]">
          <li>Max Size: 25MB per file</li>
          <li>Supported Formats: .jpg, .png, .pdf, .docx</li>
        </ul>

        {files.length > 0 && (
          <>
            <ul className="mt-2 text-sm list-disc list-inside text-[#666666] flex flex-wrap gap-3">
              {files.map((file, index) => (
                <li
                  key={index}
                  className={`font-medium flex flex-row justify-start items-center gap-1 ${
                    totalSize >= 25 * 1024 * 1024 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {file.name}
                  <button
                    type="button"
                    onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                  >
                    <i className="fa-solid fa-circle-xmark fa-lg hover:text-[#df3a4a]"></i>
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#666666] font-medium mt-1">Total Size: {formatBytes(totalSize)}</p>
          </>
        )}
      </div>

      {/* NDA Checkbox */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          {...register("ndaCheckbox", { required: "You must agree to the NDA" })}
          className="toggle toggle-primary [--tglbg:white]"
        />
        <p className="text-xs text-[#666666]">
          I agree to the Non-Disclosure Agreement (NDA) and confirm that all shared information will remain
          confidential.
        </p>
      </div>
      {errors.ndaCheckbox && <span className="text-red-600 text-xs">{errors.ndaCheckbox.message}</span>}

      {/* Submit */}
      <div className="mt-4">
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading ? "cursor-not-allowed bg-gray-400" : "cursor-pointer bgGradientNevyBlue"
          } w-[180px] h-10 px-8 py-3 rounded-md text-white text-sm font-semibold`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactUsFormComp;
