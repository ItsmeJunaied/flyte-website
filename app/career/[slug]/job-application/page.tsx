import JobApplicationForm from "@/component/Career/JobApplicationForm";
import React from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static paths for all case studies
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/career`);
  if (!res.ok) return [];

  const career = await res.json();
  return career?.data?.map((carr: { slug: string }) => ({
    slug: carr.slug,
  }));
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  
  return (
    <div className="bg-white py-0 md:py-10 lg:mt-[100px] border-t">
      <div className="container py-5 bg-[#F9F9F9] lg:max-w-[1040px] rounded-[15px] shadow-md flex flex-col items-center">
        <div className="md:text-center">
          <h6 className="text-black text-xl font-bold mb-2 md:mb-4">Job Application Form</h6>
          <p className="text-neutral-500 text-sm font-normal mb-5 md:mb-10">
            Building the future with passion, code, and innovation
          </p>
        </div>
        <JobApplicationForm params={slug} />
      </div>
    </div>
  );
};

export default page;
