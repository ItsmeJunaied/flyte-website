"use client";
import { useAddJobApplicationFormMutation, useGetCareerDetailsQuery } from "@/redux/api/careerApi";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type ParamProps = {
  params: string;
};

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  residential_address: string;
  notice_period: string;
  cover_letter: string;
  resume: File[];
  career_id: number;
};

const JobApplicationForm: React.FC<ParamProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addJobApplicationForm] = useAddJobApplicationFormMutation();
  const { data: career, isLoading: isLoadingCareer } = useGetCareerDetailsQuery(params);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  if (isLoadingCareer) {
    return "loading...";
  }

  console.log("career", career?.data);
  const { id, title } = career?.data || {};

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("residential_address", data.residential_address);
    formData.append("notice_period", data.notice_period);
    formData.append("cover_letter", data.cover_letter);

    // Append career_id
    if (id) {
      formData.append("career_id", id.toString());
    }

    // Append resume file to the form data
    if (data.resume && data.resume[0]) {
      const file = data.resume[0];
      formData.append("resume", file);
    }

    try {
      const response = await addJobApplicationForm(formData);

      if (response?.error) {
        toast.error(`Error: ${JSON.stringify(response.error)}`);
      } else {
        toast.success("Your application was successfully submitted!");
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
    console.log("formData", formData);
  };

  return (
    <div>
      <h4 className="text-lg mb-4 font-semibold">Position: {title}</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid md:grid-cols-2 gap-8 space-y-3 md:space-y-0">
          {/* First Name */}
          <div>
            <label className="text-[#666666] text-xs font-semibold mb-2">First Name</label>
            <input
              id="first_name"
              {...register("first_name", { required: true })}
              placeholder="Enter your first name"
              className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
                errors.first_name ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {errors.first_name && <p className="text-red-500 text-xs">This field is required</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-[#666666] text-xs font-semibold mb-2">Last Name</label>
            <input
              id="last_name"
              {...register("last_name", { required: true })}
              placeholder="Enter your first last name"
              className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
                errors.last_name ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {errors.last_name && <p className="text-red-500 text-xs">This field is required</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-[#666666] text-xs font-semibold mb-2">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
                errors.email ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs">This field is required</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-[#666666] text-xs font-semibold mb-2">Phone</label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { required: true })}
              placeholder="+880 0000-000000"
              className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
                errors.phone ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs">This field is required</p>}
          </div>

          {/* Residential Address */}
          <div>
            <label className="text-[#666666] text-xs font-semibold mb-2">Residential Address</label>
            <textarea
              id="residential_address"
              {...register("residential_address", { required: true })}
              placeholder="Enter your residential address"
              className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
                errors.residential_address ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {errors.residential_address && <p className="text-red-500 text-xs">This field is required</p>}
          </div>

          {/* Notice Period */}
          <div>
            <label className="text-[#666666] text-xs font-semibold mb-2">Notice Period</label>
            <select
              {...register("notice_period", { required: true })}
              defaultValue=""
              className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] px-3 py-3.5 bg-white outline-none ${
                errors.notice_period ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            >
              <option value="" disabled>
                Select your notice period
              </option>
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
              <option value="45">45 days</option>
              <option value="60">60 days</option>
            </select>
            {errors.notice_period && <p className="text-red-500 text-xs">This field is required</p>}
          </div>

          {/* Cover letter */}
          <div className="col-span-2">
            <label className="text-[#666666] text-xs font-semibold mb-2">Cover Letter</label>
            <textarea
              id="cover_letter"
              rows={8}
              {...register("cover_letter", { required: true })}
              placeholder="write here..."
              className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
                errors.cover_letter ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {errors.cover_letter && <p className="text-red-500 text-xs">This field is required</p>}
          </div>

          {/* Upload Resume */}
          <div className="col-span-2">
            <label className="text-[#666666] text-xs font-semibold mb-2">Upload Resume (PDF)</label>
            <input
              id="resume"
              type="file"
              {...register("resume", { required: true })}
              accept=".pdf"
              className="w-full border rounded-[5px] p-3 border-gray-300"
            />
            {errors.resume && <p className="text-red-500 text-xs">This field is required</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2.5 w-fit text-white rounded-[5px] font-semibold ${
                isLoading ? "cursor-not-allowed bg-gray-400" : "bgGradientNevyBlue"
              }`}
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
