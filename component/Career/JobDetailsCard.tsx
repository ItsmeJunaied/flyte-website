import Link from "next/link";
import React from "react";

type DetailsProps = {
  title: string;
  experience: string;
  vacancy: number;
  salary: number;
  office_time: string;
  location: string;
  employment_status: string;
  deadline: string;
};

const JobDetailsCard: React.FC<{ data: DetailsProps }> = ({ data }) => {
  const { title, experience, vacancy, salary, office_time, location, employment_status, deadline } =
    data || {};
  return (
    <div className="w-full lg:w-[40%] px-5 lg:px-12 py-6 bg-[#fafafa]">
      <div className="mb-5 lg:mb-10 flex justify-center">
        <img src="/images/flyte-logo.png" alt="flyte logo" />
      </div>
      <div className="space-y-3">
        <p className="text-sm">
          <span className="font-semibold">Role :</span> {title}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Experience :</span> {experience}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Vacancy :</span> {vacancy}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Salary :</span> {salary}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Office Time :</span> {office_time}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Location :</span> {location}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Job Type :</span> {employment_status}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Deadline :</span> {deadline}
        </p>
      </div>
      <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-4">
        <Link href="job-application-form" className="px-8 py-3 text-white font-semibold bgGradientNevyBlue rounded-md">
          Apply Now
        </Link>
        <div className="flex flex-row gap-5 items-center">
          <span className="text-sm font-semibold">Share On:</span>
          <Link href="https://www.facebook.com/@flytesoft/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-facebook"></i>
          </Link>
          <Link href="https://x.com/flytesolutions" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-twitter"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/company/flytesolutions/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;
