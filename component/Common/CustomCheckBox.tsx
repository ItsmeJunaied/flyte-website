import React from "react";
import { useFormContext } from "react-hook-form";

type CustomCheckBoxProps = {
  id: string;
  registerName: string;
  label: string;
};

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ id, registerName, label }) => {
  const { register } = useFormContext();
  return (
    <div className="flex items-center space-x-4 justify-center">
      <input
        id={id}
        type="checkbox"
        {...register(registerName)}
        className={`w-6 h-6 appearance-none bg-white text-black rounded-lg border border-[#cccccc] 
        checked:bg-[#5856d6] checked:border-[#5856d6]  after:content-['✔'] after:text-white after:text-sm 
        after:hidden checked:after:block flex justify-center items-center cursor-pointer`}
      />
      <span className="text-[#666666] text-sm w-[200px]">{label}</span>
    </div>
  );
};

export default CustomCheckBox;
