import CareerDetails from "@/component/Career/CareerDetails";
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
  console.log("slug", slug);

  return (
    <div>
      <CareerDetails params={slug}/>
    </div>
  );
};

export default page;
