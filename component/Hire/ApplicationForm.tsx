"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import OverviewStep from "./OverviewStep";
import ServicesStep from "./ServicesStep";
import TechStackStep from "./TechStackStep";
import FormStepHeader from "./FormStepHeader";
import HireSuccessModal from "./HireSuccessModal";

const ApplicationForm = () => {
  const methods = useForm({
    mode: "onChange",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [agreeToggle, setAgreeToggle] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAgreeToggle = () => {
    setAgreeToggle((prev) => !prev);
  };

  // const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const onSubmit = (data) => {
    setIsModalOpen(true);
    console.log("Form Data:", data);
  };
  return (
    <div>
      <div>
        <div className="text-center">
          <FormStepHeader currentStep={currentStep} />
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div>
              {currentStep === 1 && <OverviewStep agreeToggle={agreeToggle} onToggle={handleAgreeToggle} />}
              {currentStep === 2 && <ServicesStep />}
              {currentStep === 3 && <TechStackStep />}

              <div className="mt-5 md:mt-10 flex justify-center space-x-4">
                {currentStep > 1 && (
                  <button
                    className="w-20 h-10 border border-[#5856d6] hover:border-white hover:bg-black rounded-md text-[#5856d6] hover:text-white text-sm"
                    type="button"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                )}

                {currentStep < 3 && (
                  <button
                    className="w-20 h-10 bg-[#5856d6] hover:bg-[#3d3b98] rounded-md text-white text-sm"
                    type="button"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                )}

                {currentStep === 3 && (
                  <button
                    className="w-20 h-10 bg-[#5856d6] hover:bg-[#3d3b98] rounded-md text-white text-sm"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div>{isModalOpen && <HireSuccessModal />}</div>
    </div>
  );
};

export default ApplicationForm;
