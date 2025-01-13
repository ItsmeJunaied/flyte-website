"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import OverviewStep from "./OverviewStep";
import ServicesStep from "./ServicesStep";
import TechStackStep from "./TechStackStep";
import FormStepHeader from "./FormStepHeader";
import HireSuccessModal from "./HireSuccessModal";
import { useRouter } from "next/navigation";

type FormData = {
  userName: string;
  company: string;
  email: string;
  phone: string;
  teamSize: string;
  projectDuration: string;
  experienceLevel: string;
  onboardTime: string;
  agree: boolean;

  frontend?: boolean;
  backend?: boolean;
  qualityAssurance?: boolean;
  projectManagement?: boolean;
  mobileApplication?: boolean;
  devOps?: boolean;
  AIAndML?: boolean;

  htmlCss?: boolean;
  react?: boolean;
  angular?: boolean;
  vuejs?: boolean;
  nextjs?: boolean;
  frontendOthers?: boolean;

  nodejs?: boolean;
  javaSpring?: boolean;
  phpLaravel?: boolean;
  dotNet?: boolean;
  python?: boolean;
  go?: boolean;
  backendOthers?: boolean;

  flutter?: boolean;
  reactNative?: boolean;
  mobileAppOthers?: boolean;
}

const ApplicationForm = () => {
  const router = useRouter();
  const methods = useForm<FormData>({
    mode: "onChange",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [agreeToggle, setAgreeToggle] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAgreeToggle = () => {
    setAgreeToggle((prev) => !prev);
  };

  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const onSubmit = (data: FormData) => {
    setIsModalOpen(true);
    console.log("Form Data:", data);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    router.push("/hire");
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
      <div>{isModalOpen && <HireSuccessModal onClose = {handleModalClose} />}</div>
    </div>
  );
};

export default ApplicationForm;
