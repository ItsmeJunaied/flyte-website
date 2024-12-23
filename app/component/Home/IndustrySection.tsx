import React from "react";
import Title from "../Common/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faWallet } from "@fortawesome/duotone-regular-svg-icons";

const IndustrySection: React.FC = () => {
  const headertitle: string =
    "Driving innovation across industries, from start-ups to global leaders";
  return (
    <div
      className="bg-white "
      style={{
        backgroundImage: "url('/images/world-map.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "top right",
        backgroundPositionY: "-75px",
      }}
    >
      <div className=" container mx-auto py-[40px] my-[24px]">
        <div className=" mb-[64px]">
          <Title title={headertitle} />
        </div>

        <div className=" hidden lg:flex flex-col lg:flex-row justify-between items-center gap-5  ">
          <div className=" w-full lg:w-1/3  px-[34px] py-[24px] border-2 border-[#006FBA] rounded-2xl flex flex-col gap-3 ">
            <div className=" text-[#718096] hover:text-[#2B6CB0] flex flex-row gap-2 text-[16px] ">
              <FontAwesomeIcon
                icon={faWallet}
                className=" w-5 text-[#718096] hover:text-[#2B6CB0]"
              />
              <h1 className=" text-[16px]">Fintech</h1>
            </div>
            <div className=" text-[#718096] hover:text-[#2B6CB0] flex flex-row gap-2 text-[16px] ">
              <FontAwesomeIcon
                icon={faWallet}
                className=" w-5 text-[#718096] hover:text-[#2B6CB0]"
              />
              <h1 className=" text-[16px]">Fintech</h1>
            </div>
            <div className=" text-[#718096] hover:text-[#2B6CB0] flex flex-row gap-2 text-[16px] ">
              <FontAwesomeIcon
                icon={faWallet}
                className=" w-5 text-[#718096] hover:text-[#2B6CB0]"
              />
              <h1 className=" text-[16px]">Fintech</h1>
            </div>
            <div className=" text-[#718096] hover:text-[#2B6CB0] flex flex-row gap-2 text-[16px] ">
              <FontAwesomeIcon
                icon={faWallet}
                className=" w-5 text-[#718096] hover:text-[#2B6CB0]"
              />
              <h1 className=" text-[16px]">Fintech</h1>
            </div>
          </div>
          <div className=" w-full lg:w-2/3 grid grid-cols-2">
            <div className="h-[116.59px] px-6 py-8 bg-[#f6f8fa] rounded-[10px] border border-[#d0d8df] justify-start items-center gap-6 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <g clip-path="url(#clip0_1806_59894)">
                  <path
                    d="M35.625 6.13401C35.1952 5.85597 34.7037 5.68776 34.1937 5.64417C33.6837 5.60057 33.1707 5.68294 32.7 5.88401L17.275 11.959C16.9102 12.1089 16.5194 12.1853 16.125 12.184H6.25C5.4212 12.184 4.62634 12.5133 4.04029 13.0993C3.45424 13.6854 3.125 14.4802 3.125 15.309V15.559H0V23.059H3.125V23.384C3.14458 24.1997 3.48245 24.9755 4.06639 25.5454C4.65033 26.1153 5.43403 26.4342 6.25 26.434L10 34.384C10.2539 34.9194 10.6537 35.3723 11.1534 35.6907C11.6531 36.009 12.2325 36.18 12.825 36.184H14.4C15.2245 36.1774 16.0129 35.8453 16.5936 35.2599C17.1742 34.6746 17.5 33.8835 17.5 33.059V26.734L32.7 32.809C33.0744 32.9561 33.4728 33.0324 33.875 33.034C34.499 33.0225 35.1066 32.8316 35.625 32.484C36.0362 32.2064 36.3754 31.8348 36.6145 31.4001C36.8536 30.9654 36.9857 30.48 37 29.984V8.70901C36.9977 8.2003 36.8713 7.69984 36.6316 7.2511C36.392 6.80235 36.0465 6.41889 35.625 6.13401ZM14.375 15.309V23.384H6.25V15.309H14.375ZM14.375 33.059H12.8L9.725 26.434H14.375V33.059ZM18.425 23.759C18.1281 23.6074 17.8186 23.482 17.5 23.384V15.134C17.8155 15.0684 18.1249 14.9764 18.425 14.859L33.875 8.70901V29.909L18.425 23.759ZM37.075 16.184V22.434C37.9038 22.434 38.6987 22.1048 39.2847 21.5187C39.8708 20.9327 40.2 20.1378 40.2 19.309C40.2 18.4802 39.8708 17.6854 39.2847 17.0993C38.6987 16.5133 37.9038 16.184 37.075 16.184Z"
                    fill="#006FBA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1806_59894">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(0 0.884766)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch text-[#2f4f4f] text-[15px] font-bold ">
                  Disruptive FinTech Solutions
                </div>
                <div className="w-[270px] text-[#838383] text-xs font-normal ">
                  Lorem Ipsum is simply dummy text simply dummy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
