"use client";
import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import { GrAttachment } from "react-icons/gr";
import { SubmitHandler, useForm } from "react-hook-form";
import { submitContactForm } from "@/api/useContactUsForm";

type Inputs = {
  name: string;
  company_name: string;
  email: string;
  phone: string;
  message: string;
  attachment: File[];
};

const ContactUsFormComp: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneValue, setPhoneValue] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitted(true); 

    if (!data.phone) {
      setPhoneValue(false);
      return;
    } else {
      setPhoneValue(true);
    }
    if (!isChecked) {
      toast.error("Please agree to the NDA to proceed.");
      return;
    }

    try {
      const postData = new FormData();
      postData.append("name", data.name);
      postData.append("company_name", data.company_name);
      postData.append("phone", data.phone);
      postData.append("email", data.email);
      postData.append("message", data.message);

      if (data.attachment && data.attachment[0]) {
        postData.append("attachment", data.attachment[0]);
      }

      const result = await submitContactForm(postData);

      toast.success("Your message has been sent successfully!");
      reset();
      setFiles([]);
      setIsChecked(false);
      setIsSubmitted(false);
    } catch (error) {
      toast.error("something went wrong");
      console.log("Your message has been sent successfully!");
    }
  };

  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
      ? Array.from(event.target.files)
      : [];
    setFiles((prevFiles) => [...prevFiles, ...(selectedFiles as File[])]);
  };
  const [isChecked, setIsChecked] = useState(false);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full h-full flex-col justify-start items-start gap-4 inline-flex px-0 lg:px-0 pb-10 lg:pb-0"
    >
      <div className=" w-full flex flex-col lg:flex-row justify-start items-start gap-8 ">
        <div className=" w-full   flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
            Name
          </label>
          <input
            type="text"
            className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your name"
            {...register("name", { required: true })}
            autoComplete="off"
          />
          {errors.name && (
            <span className=" text-red-600">Name is required</span>
          )}
        </div>
        <div className="w-full   flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
            Company
          </label>
          <input
            type="text"
            className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your company name"
            {...register("company_name", { required: true })}
          />
          {errors.company_name && (
            <span className=" text-red-600">Comapny Name is required</span>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8">
        <div className="w-full   flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
            Email
          </label>
          <input
            type="email"
            className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor"
            placeholder="Type your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className=" text-red-600">Email is required</span>
          )}
        </div>
        <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
            Phone
          </label>
          <PhoneInput
            className={`self-stretch h-14 p-4 bg-white rounded-lg border ${
              errors.phone ? "border-red-600" : "border-[#cccccc]"
            } text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor`}
            placeholder="Enter phone number"
            defaultCountry="BD"
            onChange={(phone) =>
              setValue("phone", phone || "", { shouldValidate: true })
            } 
          />
          {isSubmitted && !phoneValue && (
            <span className="text-red-600 text-xs">Phone is required</span>
          )}
        </div>
        
      </div>

      {/* <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 ">
        <div className="w-full   flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
            Service
          </label>
          <Select>
            <SelectTrigger className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor">
              <SelectValue placeholder="Choose from our range of services" />
            </SelectTrigger>
            <SelectContent className="max-w-full overflow-x-hidden">
              <SelectItem value="webDevelopment">Web Development</SelectItem>
              <SelectItem value="mobileDevelopment">
                Mobile App Development
              </SelectItem>
              <SelectItem value="uiUxDesign">UI/UX Design</SelectItem>
              <SelectItem value="qaTesting">QA Testing</SelectItem>
              <SelectItem value="cloudServices">Cloud Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full   flex-col justify-start items-start gap-2 inline-flex">
          <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
            Product
          </label>
          <Select>
            <SelectTrigger className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal outline-none hover:border-btnColor focus:border-btnColor">
              <SelectValue placeholder="Choose from our range of products" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="crmSoftware">CRM Software</SelectItem>
              <SelectItem value="ecommercePlatform">
                E-commerce Platform
              </SelectItem>
              <SelectItem value="projectManagementTool">
                Project Management Tool
              </SelectItem>
              <SelectItem value="erpSystem">ERP System</SelectItem>
              <SelectItem value="customSolutions">Custom Solutions</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div> */}

      <div className="self-stretch h-[329px] flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch h-[265px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-[159px] flex-col justify-start items-start gap-2 flex">
            <label className="self-stretch text-[#666666] text-xs font-semibold font-['Noto Sans'] leading-[18px]">
              How can we help you?
            </label>
            <textarea
              className="self-stretch grow shrink basis-0 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal  leading-normal outline-none hover:border-btnColor focus:border-btnColor"
              placeholder="Type here"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className=" text-red-600">Message is required</span>
            )}
          </div>

          <div className="justify-start items-start gap-2.5 inline-flex flex-col">
            {/* Hidden file input */}
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".jpg,.png,.pdf,.docx"
              {...register("attachment", { onChange: handleFileChange })}
            />
            {errors.attachment && (
              <span className=" text-red-600">This field is required</span>
            )}
            {/* Clickable label */}
            <div className=" flex flex-row justify-center items-center gap-2">
              <label
                htmlFor="file-upload"
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="flex items-center gap-1 text-[#5856d6]">
                  <GrAttachment />
                  <span className="text-[#5856d6] text-xs font-bold font-['DM Sans']">
                    Attach files
                  </span>
                </div>
              </label>

              {/* Additional info */}
              <div className="text-[#5856d6] text-[10px] font-medium font-['DM Sans']">
                Max Size: 25MB per file
                <br />
                Supported Formats: .jpg, .png, .pdf, .docx
              </div>
            </div>

            {/* Display list of uploaded files */}
            {files.length > 0 && (
              <ul className="mt-2 text-[#666666] text-sm font-normal font-['DM Sans'] list-disc list-inside">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="font-medium flex flex-row justify-start text-red-600 items-center gap-2"
                  >
                    {file.name}

                    <button
                      onClick={() => {
                        setFiles((prevFiles) =>
                          prevFiles.filter((_, i) => i !== index)
                        );
                      }}
                    >
                      <i
                        className="fa-solid fa-circle-xmark fa-lg"
                        style={{ color: "#df3a4a" }}
                      ></i>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="self-stretch py-3 justify-start items-center gap-2.5 inline-flex">
            <div className="flex gap-4">
              <input
                type="checkbox"
                className="toggle toggle-primary [--tglbg:white]"
                id="nda-checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
              />{" "}
              <div className="text-[#666666] text-xs font-normal font-['DM Sans'] leading-normal">
                I agree to the Non-Disclosure Agreement (NDA) and confirm that
                all shared information will remain confidential.
              </div>
            </div>
          </div>
          {isSubmitted && !isChecked && (
            <div className="text-red-600 text-xs font-normal font-['DM Sans'] leading-normal">
              You must agree to the NDA to submit the form.
            </div>
          )}
        </div>

        <div className="self-stretch h-10 flex-col justify-start items-center gap-2 flex">
          <input
            type="submit"
            value={"Send Message"}
            className="w-[180px] h-10 px-8 py-3 bg-[#5856d6] rounded-md text-white text-sm font-semibold"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactUsFormComp;
