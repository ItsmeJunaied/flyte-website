import React from "react";
import { useFormContext } from "react-hook-form";

type OverviewStepProps = {
  agreeToggle: boolean;
  onToggle: () => void;
};

const OverviewStep: React.FC<OverviewStepProps> = ({ agreeToggle, onToggle }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <p className="text-[#4a4a4a] text-center text-base font-semibold mb-10">
        Provide your basic details and project requirements.
      </p>

      <div className="grid grid-cols-2 gap-8">
        {/* name  */}
        <div>
          <label className="text-[#666666] text-xs font-semibold mb-2">Name</label>
          <input
            id="userName"
            {...register("userName", { required: true })}
            placeholder="Enter your name"
            className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
              errors.userName ? "border-red-500" : "border-[#E5E5E5]"
            }`}
          />
        </div>

        {/* company  */}
        <div>
          <label className="text-[#666666] text-xs font-semibold mb-2">Company</label>
          <input
            id="company"
            {...register("company", { required: true })}
            placeholder="Enter your company name"
            className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
              errors.company ? "border-red-500" : "border-[#E5E5E5]"
            }`}
          />
        </div>

        {/* email  */}
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
        </div>

        {/* phone  */}
        <div>
          <label className="text-[#666666] text-xs font-semibold mb-2">Phone</label>
          <input
            id="phone"
            type="phone"
            {...register("phone", { required: true })}
            placeholder="+880 0000-000000"
            className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none ${
              errors.phone ? "border-red-500" : "border-[#E5E5E5]"
            }`}
          />
        </div>

        {/* Team Size  */}
        <div>
          <label className="text-[#666666] text-xs font-semibold mb-2">Team Size</label>
          <select
            {...register("teamSize", { required: true })}
            defaultValue=""
            className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] px-3 py-3.5 bg-white outline-none ${
              errors.teamSize ? "border-red-500" : "border-[#E5E5E5]"
            }`}
          >
            <option value="" disabled>
              Select the number of developers
            </option>
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="11-15">11-15</option>
            <option value="16-20">16-20</option>
            <option value="20+">20+</option>
          </select>
        </div>

        {/* Project Duration  */}
        <div>
          <label className="text-[#666666] text-xs font-semibold mb-2">Project Duration</label>
          <select
            {...register("projectDuration", { required: true })}
            defaultValue=""
            className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] px-3 py-3.5 bg-white outline-none ${
              errors.projectDuration ? "border-red-500" : "border-[#E5E5E5]"
            }`}
          >
            <option value="" disabled>
              Select the project duration
            </option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="12+ months">12+ months</option>
          </select>
        </div>

        {/* Experience Level  */}
        <div>
          <label className="text-[#666666] text-xs font-semibold mb-2">Experience Level</label>
          <select
            {...register("experienceLevel", { required: true })}
            defaultValue=""
            className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] px-3 py-3.5 bg-white outline-none ${
              errors.experienceLevel ? "border-red-500" : "border-[#E5E5E5]"
            }`}
          >
            <option value="" disabled>
              Select the required years of expertise
            </option>
            <option value="entry-level">Entry-Level (1-3 years)</option>
            <option value="junior">Junior (1-3 years)</option>
            <option value="mid-level">Mid-Level (3-5 years)</option>
            <option value="senior">Senior (5-10 years)</option>
            <option value="expert">Expert (10+ years)</option>
          </select>
        </div>

        {/* Tentative Onboarding Time  */}
        <div>
          <label className="text-[#666666] text-xs font-semibold mb-2">Tentative Onboarding Time</label>
          <select
            {...register("onboardTime", { required: true })}
            defaultValue=""
            className={`w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] px-3 py-3.5 bg-white outline-none ${
              errors.onboardTime ? "border-red-500" : "border-[#E5E5E5]"
            }`}
          >
            <option value="" disabled>
              Select the project duration
            </option>
            <option value="15">15 days</option>
            <option value="30">30 days</option>
            <option value="45">45 days</option>
          </select>
        </div>

        {/* agree toggle */}
        <div className="col-span-2">
          <div className="flex items-center">
            {/* Hidden Checkbox */}
            <input
              type="checkbox"
              id="agree"
              {...register("agree", { required: true })}
              className="mr-2 hidden"
            />

            {/* Label with Custom Toggle Button */}
            <label
              htmlFor="agree"
              onClick={onToggle}
              className={`text-sm font-normal flex items-center gap-2 ${
                errors.agree && !agreeToggle ? "text-red-500" : "text-[#666666]"
              }`}
            >
              {/* Toggle Button */}
              <div
               
                className={`${
                  agreeToggle ? "bg-[#5856d6]" : "bg-white"
                } w-[49px] h-6 relative rounded-[32px] border border-[#cccccc] cursor-pointer`}
              >
                {/* Toggle Indicator */}
                <div
                  className={`${
                    agreeToggle ? "right-[3px] bg-white" : "left-[3px] bg-[#f4f4f4]"
                  } w-[18px] h-[18px] top-[2px] absolute  rounded-[32px] border border-[#cccccc]`}
                />
              </div>
              <span>
                I agree to the Non-Disclosure Agreement (NDA) and confirm that all shared information will
                remain confidential.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewStep;
