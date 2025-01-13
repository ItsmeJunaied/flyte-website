import React from "react";
import { FaArrowRight, FaQuoteRight } from "react-icons/fa";

type IndustriesCardsData = {
    industryImage: string;
    industryLogo: string;
    industryName: string;
    industryDescription: string;
    industryReview: string;
    reviewerName: string;
    reviewerImage: string;
    reviewerPosition: string;
    reviewerCompany: string;
    services: string[];
};

type IndustriesCardsDataProps = {
    IndustriesCardsData: IndustriesCardsData[];
};

const IdustrySectionCard: React.FC<IndustriesCardsDataProps> = ({ IndustriesCardsData }) => {
    return (
        <div className="px-2 lg:px-0 ">
            {IndustriesCardsData.map((data, index) => (
                <div
                    key={index}
                    className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} justify-between items-center gap-[40px] bg-white px-[40px] py-[24px] mb-[16px]`}
                >
                    {/* Image section */}
                    <div className="w-full lg:w-1/4">
                        <div className="lg:hidden flex flex-col gap-5 mb-3">
                            <div className="w-full flex justify-center items-center">
                                <p className="text-4xl text-[#5856d6]">
                                    <i className="fa-solid fa-chart-bar"></i>
                                </p>
                            </div>
                            <h1 className="text-center text-[#5856d6] text-xl font-bold">
                                {data.industryName}
                            </h1>
                        </div>
                        <img
                            className="w-full object-cover h-[260px] lg:h-[434px] rounded-lg"
                            src={data.industryImage}
                            alt={data.industryName}
                        />
                    </div>
                    {/* review */}
                    <div className="w-full lg:w-2/4 flex flex-col gap-6">
                        <div className="hidden lg:flex flex-col gap-5">
                            <div className="w-full flex justify-center items-center">
                                <p className="text-4xl text-[#5856d6]">
                                    <i className="fa-solid fa-chart-bar"></i>
                                </p>
                            </div>
                            <h1 className="text-center text-[#5856d6] text-xl font-bold">
                                {data.industryName}
                            </h1>
                        </div>
                        <p className="text-[#121212]/80 text-sm font-medium mb-2">
                            {data.industryDescription}
                        </p>

                        <div className="flex flex-col justify-start">
                            <div>
                                <FaQuoteRight className="text-[#E1E1E1] text-3xl -mb-3 -ml-5" />
                            </div>
                            <div className="border-[#E1E1E1] border-[2px] rounded-lg p-[24px] flex flex-col gap-5 mb-4">
                                <p className="text-[#121212] text-sm font-semibold">
                                    {data.industryReview}
                                </p>

                                <div className="flex flex-row justify-start items-center gap-3">
                                    <div className="w-[50px] h-[50px]">
                                        <img
                                            className="rounded-full"
                                            src={data.reviewerImage}
                                            alt={data.reviewerName}
                                        />
                                    </div>

                                    <div>
                                        <h1 className="text-[#121212] text-xs font-medium">
                                            {data.reviewerName}
                                        </h1>
                                        <p className="text-[#121212] text-[10px] font-normal font-['DM Sans']">
                                            {data.reviewerPosition} at {data.reviewerCompany}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-[#313131] text-xs font-semibold flex flex-row gap-4 justify-start items-center">
                            Explore {data.industryName} Solutions <FaArrowRight />
                        </p>
                    </div>
                    {/* Bullet points */}

                    <div className="w-full lg:w-1/4 flex flex-col gap-4 bg-[#1E232C] rounded-lg p-[24px]">
                        <h1 className="text-center text-[#dda380] text-base font-bold">
                            {data.industryName} Solutions We Deliver
                        </h1>

                        {data.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex flex-row gap-3 justify-start items-center">
                                <FaArrowRight className="text-white" />
                                <p className="text-[#f0f0f0]/80 text-sm font-medium">
                                    {service}
                                </p>
                            </div>
                        ))}

                        <div className="h-10 px-6 py-2.5 bg-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden">
                            <p className="text-[#191919] text-sm font-semibold font-['DM Sans']">
                                Book A Consultation
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IdustrySectionCard;
