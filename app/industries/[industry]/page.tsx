import React from "react";

type PageProps = {
  params: Promise<{ industry: string }>;
};

const Industry = async ({ params }: PageProps) => {
  const { industry } = await params;
  return (
    <div>
      <h1>{industry}</h1>
    </div>
  );
};

export default Industry;
