import React from "react";
import Title from "../Common/Title";

const HireSuccessModal = () => {
  return (
    <div className="fixed top-0 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-10">
      <div className="bg-[#FAFAFA] w-[600px] h-[400px] shadow-lg rounded-md p-5">
        <div className="space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="mx-auto"
          >
            <path
              d="M24 3C29.5695 3 34.911 5.21249 38.8492 9.15076C42.7875 13.089 45 18.4305 45 24C45 29.5695 42.7875 34.911 38.8492 38.8492C34.911 42.7875 29.5695 45 24 45C18.4305 45 13.089 42.7875 9.15076 38.8492C5.21249 34.911 3 29.5695 3 24C3 18.4305 5.21249 13.089 9.15076 9.15076C13.089 5.21249 18.4305 3 24 3ZM21.384 28.143L16.719 23.475C16.5518 23.3078 16.3532 23.1751 16.1347 23.0846C15.9162 22.9941 15.682 22.9475 15.4455 22.9475C15.209 22.9475 14.9748 22.9941 14.7563 23.0846C14.5378 23.1751 14.3392 23.3078 14.172 23.475C13.8342 23.8128 13.6445 24.2708 13.6445 24.7485C13.6445 25.2262 13.8342 25.6842 14.172 26.022L20.112 31.962C20.2788 32.1301 20.4771 32.2635 20.6957 32.3545C20.9143 32.4456 21.1487 32.4925 21.3855 32.4925C21.6223 32.4925 21.8567 32.4456 22.0753 32.3545C22.2939 32.2635 22.4922 32.1301 22.659 31.962L34.959 19.659C35.1285 19.4925 35.2633 19.294 35.3557 19.0751C35.4481 18.8562 35.4962 18.6211 35.4973 18.3835C35.4984 18.1459 35.4525 17.9105 35.3621 17.6907C35.2718 17.4709 35.1388 17.2712 34.9709 17.1031C34.803 16.935 34.6034 16.8018 34.3838 16.7112C34.1641 16.6206 33.9287 16.5744 33.6911 16.5752C33.4535 16.576 33.2184 16.6239 32.9994 16.716C32.7804 16.8081 32.5817 16.9427 32.415 17.112L21.384 28.143Z"
              fill="#5856D6"
            />
          </svg>
          <span className="flex justify-center">
            <Title title="Success! Your Request Has Been Received" width="full" fontSize="text-2xl" />
          </span>
          <p className="text-[#5F5F5F] text-center">
            Thank you for reaching out. Our team will review your submission and get in touch with you shortly
            to discuss the next steps.
          </p>
        </div>

        <div className="space-y-2 py-8">
          <div className="self-stretch flex items-center gap-2.5">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                  d="M14 2.89648C11.8783 2.89648 9.84344 3.73934 8.34315 5.23963C6.84285 6.73992 6 8.77475 6 10.8965C6 13.0182 6.84285 15.053 8.34315 16.5533C9.84344 18.0536 11.8783 18.8965 14 18.8965C16.1217 18.8965 18.1566 18.0536 19.6569 16.5533C21.1571 15.053 22 13.0182 22 10.8965C22 8.77475 21.1571 6.73992 19.6569 5.23963C18.1566 3.73934 16.1217 2.89648 14 2.89648ZM4.93 6.71648C3.08 8.23648 2 10.5065 2 12.8965C2 15.0182 2.84285 17.053 4.34315 18.5533C5.84344 20.0536 7.87827 20.8965 10 20.8965C10.64 20.8965 11.27 20.8165 11.88 20.6665C10.12 20.2765 8.5 19.3965 7.17 18.1865C5.22 17.1465 4 15.1065 4 12.8965C4 12.5965 4.03 12.3065 4.07 12.0065C4.03 11.6365 4 11.2665 4 10.8965C4 9.45648 4.32 8.02648 4.93 6.71648ZM18.09 6.97648L19.5 8.39648L13 14.8965L9.21 11.1065L10.63 9.68648L13 12.0665"
                  fill="#161616"
                />
              </svg>
            </span>
            <div className="grow shrink basis-0 text-[#161616] text-xs font-medium font-['DM Sans'] leading-tight tracking-tight">
              <strong>What happens next:</strong> We’ll match you with the perfect developers and share
              project details.
            </div>
          </div>

          <div className="self-stretch flex items-center gap-2.5">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                  d="M14 2.89648C11.8783 2.89648 9.84344 3.73934 8.34315 5.23963C6.84285 6.73992 6 8.77475 6 10.8965C6 13.0182 6.84285 15.053 8.34315 16.5533C9.84344 18.0536 11.8783 18.8965 14 18.8965C16.1217 18.8965 18.1566 18.0536 19.6569 16.5533C21.1571 15.053 22 13.0182 22 10.8965C22 8.77475 21.1571 6.73992 19.6569 5.23963C18.1566 3.73934 16.1217 2.89648 14 2.89648ZM4.93 6.71648C3.08 8.23648 2 10.5065 2 12.8965C2 15.0182 2.84285 17.053 4.34315 18.5533C5.84344 20.0536 7.87827 20.8965 10 20.8965C10.64 20.8965 11.27 20.8165 11.88 20.6665C10.12 20.2765 8.5 19.3965 7.17 18.1865C5.22 17.1465 4 15.1065 4 12.8965C4 12.5965 4.03 12.3065 4.07 12.0065C4.03 11.6365 4 11.2665 4 10.8965C4 9.45648 4.32 8.02648 4.93 6.71648ZM18.09 6.97648L19.5 8.39648L13 14.8965L9.21 11.1065L10.63 9.68648L13 12.0665"
                  fill="#161616"
                />
              </svg>
            </span>
            <div className="grow shrink basis-0 text-[#161616] text-xs font-medium font-['DM Sans'] leading-tight tracking-tight">
              <strong>Estimated Response Time:</strong>Within 24 hours.
            </div>
          </div>

          <div className="self-stretch flex items-center gap-2.5">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                  d="M14 2.89648C11.8783 2.89648 9.84344 3.73934 8.34315 5.23963C6.84285 6.73992 6 8.77475 6 10.8965C6 13.0182 6.84285 15.053 8.34315 16.5533C9.84344 18.0536 11.8783 18.8965 14 18.8965C16.1217 18.8965 18.1566 18.0536 19.6569 16.5533C21.1571 15.053 22 13.0182 22 10.8965C22 8.77475 21.1571 6.73992 19.6569 5.23963C18.1566 3.73934 16.1217 2.89648 14 2.89648ZM4.93 6.71648C3.08 8.23648 2 10.5065 2 12.8965C2 15.0182 2.84285 17.053 4.34315 18.5533C5.84344 20.0536 7.87827 20.8965 10 20.8965C10.64 20.8965 11.27 20.8165 11.88 20.6665C10.12 20.2765 8.5 19.3965 7.17 18.1865C5.22 17.1465 4 15.1065 4 12.8965C4 12.5965 4.03 12.3065 4.07 12.0065C4.03 11.6365 4 11.2665 4 10.8965C4 9.45648 4.32 8.02648 4.93 6.71648ZM18.09 6.97648L19.5 8.39648L13 14.8965L9.21 11.1065L10.63 9.68648L13 12.0665"
                  fill="#161616"
                />
              </svg>
            </span>
            <div className="grow shrink basis-0 text-[#161616] text-xs font-medium font-['DM Sans'] leading-tight tracking-tight">
              <strong>Need help?</strong> Feel free to reach out to our support team at
              <a href="mailto:info@flytesolutions.com" className="text-blue-700 hover:underline ml-1">
                info@flytesolutions.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="px-5 h-10 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md text-white text-sm font-semibold">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireSuccessModal;
