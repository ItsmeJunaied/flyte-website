import React from "react";
import Title from "../Common/Title";

const Contact: React.FC = () => {
  const headertitle: string = "Get in Touch with Us";
  return (
    <div className=" flex flex-col lg:flex-row jus items-start gap-10">
      <div className=" w-full lg:w-2/3">
        <div className=" flex justify-center text-center  mb-5">
          <Title title={headertitle} />
        </div>

        <div className="h-[672px] flex-col justify-start items-start gap-4 inline-flex px-10 lg:px-0">
          <div className="self-stretch justify-start items-start gap-8 inline-flex flex-wrap">
            <div className="w-full sm:w-[368px] flex-col justify-start items-start gap-2 inline-flex">
              <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
                Name
              </label>
              <input
                type="text"
                className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal"
                placeholder="Type your name"
              />
            </div>
            <div className="w-full sm:w-[368px] flex-col justify-start items-start gap-2 inline-flex">
              <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
                Company
              </label>
              <input
                type="text"
                className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal"
                placeholder="Type your company name"
              />
            </div>
          </div>

          <div className="self-stretch justify-start items-start gap-8 inline-flex flex-wrap">
            <div className="w-full sm:w-[368px] flex-col justify-start items-start gap-2 inline-flex">
              <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
                Email
              </label>
              <input
                type="email"
                className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal"
                placeholder="Type your email"
              />
            </div>
            <div className="w-full sm:w-[368px] flex-col justify-start items-start gap-2 inline-flex">
              <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
                Phone
              </label>
              <input
                type="text"
                className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal"
                placeholder="+880 0000-000000"
              />
            </div>
          </div>

          <div className="self-stretch justify-start items-start gap-8 inline-flex flex-wrap">
            <div className="w-full sm:w-[368px] flex-col justify-start items-start gap-2 inline-flex">
              <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
                Service
              </label>
              <select className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal">
                <option>Choose from our range of services</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="w-full sm:w-[368px] flex-col justify-start items-start gap-2 inline-flex">
              <label className="self-stretch text-[#666666] text-xs font-semibold font-['DM Sans'] leading-[18px]">
                Product
              </label>
              <select className="self-stretch h-14 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['DM Sans'] leading-normal">
                <option>Choose from our range of products</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          <div className="self-stretch h-[329px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-[265px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch h-[159px] flex-col justify-start items-start gap-2 flex">
                <label className="self-stretch text-[#666666] text-xs font-semibold font-['Noto Sans'] leading-[18px]">
                  How can we help you?
                </label>
                <textarea
                  className="self-stretch grow shrink basis-0 p-4 bg-white rounded-lg border border-[#cccccc] text-[#666666] text-sm font-normal font-['Noto Sans'] leading-normal"
                  placeholder="Type here"
                />
              </div>

              <div className="justify-start items-center gap-2.5 inline-flex">
  <label className="flex items-center text-[#5856d6] cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path d="M5.60131 17.4163C4.86706 17.4127 4.14084 17.2632 3.46492 16.9763C2.78901 16.6895 2.1769 16.2711 1.66422 15.7454C1.15539 15.2632 0.746645 14.6853 0.461387 14.0449C0.176128 13.4045 0.0199499 12.7141 0.0017895 12.0133C-0.0163709 11.3125 0.103843 10.6149 0.355552 9.96063C0.607261 9.30631 0.985523 8.70805 1.4687 8.20008L8.00978 1.59678C8.35909 1.24811 8.77544 0.973849 9.23368 0.79055C9.69193 0.607251 10.1826 0.51872 10.676 0.530303C11.2045 0.532103 11.7274 0.639119 12.2142 0.84511C12.7009 1.0511 13.1418 1.35194 13.511 1.73009C14.246 2.43774 14.6722 3.4067 14.6972 4.42667C14.7222 5.44664 14.3438 6.43529 13.6444 7.17803L7.06772 13.7813C6.85708 13.9934 6.60641 14.1615 6.33027 14.2759C6.05413 14.3904 5.75802 14.4488 5.45911 14.4479C5.13621 14.4483 4.8165 14.384 4.51885 14.2589C4.22119 14.1337 3.95163 13.9502 3.72608 13.7191C3.27525 13.2826 3.01489 12.6858 3.00158 12.0585C2.98827 11.4311 3.22307 10.8238 3.65498 10.3686L9.72504 4.27187C9.89779 4.15714 10.1052 4.10644 10.3114 4.12854C10.5176 4.15063 10.7096 4.24415 10.8541 4.39288C10.9986 4.54162 11.0866 4.73621 11.1028 4.94296C11.1189 5.14972 11.0623 5.35561 10.9426 5.52499L4.87255 11.6217C4.77133 11.7437 4.72206 11.9005 4.73536 12.0584C4.74866 12.2163 4.82346 12.3627 4.94365 12.466C5.0687 12.5919 5.23729 12.6651 5.41468 12.6704C5.48038 12.6714 5.54563 12.6593 5.60664 12.6349C5.66766 12.6105 5.72324 12.5742 5.77017 12.5282L12.3379 5.92492C12.7066 5.51537 12.8993 4.9772 12.8743 4.42674C12.8494 3.87627 12.6088 3.35773 12.2046 2.98321C11.8292 2.59345 11.3187 2.36239 10.7781 2.3376C10.2375 2.3128 9.70796 2.49614 9.29844 2.8499L2.7307 9.41765C2.41133 9.76067 2.16294 10.1635 1.99983 10.6029C1.83671 11.0422 1.7621 11.5095 1.78027 11.9779C1.79844 12.4462 1.90904 12.9063 2.10571 13.3318C2.30238 13.7572 2.58123 14.1395 2.92622 14.4568C3.27218 14.8154 3.68615 15.1015 4.14393 15.2984C4.60171 15.4952 5.09413 15.5988 5.59242 15.6032C6.02205 15.6067 6.44814 15.5253 6.84621 15.3636C7.24428 15.202 7.60648 14.9632 7.91202 14.6612L14.4798 8.05788C14.562 7.97502 14.6598 7.90917 14.7676 7.8641C14.8753 7.81903 14.9908 7.79562 15.1076 7.79521C15.2244 7.7948 15.3401 7.81739 15.4482 7.8617C15.5562 7.906 15.6545 7.97116 15.7373 8.05344C15.8202 8.13572 15.886 8.23352 15.9311 8.34124C15.9762 8.44897 15.9996 8.56452 16 8.6813C16.0004 8.79807 15.9778 8.91379 15.9335 9.02183C15.8892 9.12987 15.824 9.22813 15.7418 9.311L9.17402 15.9143C8.70771 16.3888 8.15174 16.766 7.53841 17.0238C6.92508 17.2817 6.26663 17.4151 5.60131 17.4163Z" fill="#5856D6"/>
    </svg>
    <button className="text-[#5856d6] text-xs font-bold font-['DM Sans']">
      Attach file
    </button>
    <input
      type="file"
      className="hidden"
      accept=".jpg,.png,.pdf,.docx"
    />
  </label>
  <div className="text-[#5856d6] text-[10px] font-medium font-['DM Sans']">
    Max Size: 25MB
    <br />
    Supported Formats: .jpg, .png, .pdf, .docx
  </div>
</div>


              <div className="self-stretch py-3 justify-start items-center gap-2.5 inline-flex">
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    className="toggle border-[#cccccc] bg-[#cccccc] [--tglbg:white] hover:bg-blue-700"
                    defaultChecked
                  />{" "}
                  <div className="text-[#666666] text-xs font-normal font-['DM Sans'] leading-normal">
                    I agree to the Non-Disclosure Agreement (NDA) and confirm
                    that all shared information will remain confidential.
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch h-10 flex-col justify-start items-center gap-2 flex">
              <button className="w-[180px] h-10 px-8 py-3 bg-[#5856d6] rounded-md text-white text-sm font-semibold font-['Nunito']">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ceo */}
      <div className=" w-full lg:w-1/3 flex flex-col justify-center items-center gap-5 bg-[#4a2b35] py-[24px] px-20">
        <div>
          <img src="/images/Ceo_saiful_sumon.png" alt="CEO Saiful Sumon" />
        </div>

        <div className=" flex flex-col justify-center items-center w-full">
          <h1 className="w-[438px] text-center text-[#fffbfb] text-[26px] font-semibold font-['Open Sans'] leading-[34.19px]">
            Saiful Sumon
          </h1>
          <p className="w-[386px] text-center text-[#fffefe] text-base font-normal font-['Open Sans'] leading-7">
            Managing Director & CEO
          </p>
        </div>

        <div className=" w-full flex justify-center">
          <button className="h-10 px-6 py-2.5 bg-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden">
            <p className="text-[#191919] text-sm font-semibold font-['DM Sans']">
              Book A Consultation
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
