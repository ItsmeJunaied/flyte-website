import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NotFoundImage from "../public/not-found.svg"

const NotFound = () => {
  return (
    <div className="px-4 py-8 lg:py-0 lg:h-screen w-full bg-slate-900 flex items-center justify-center">
      <div className="mt-0 lg:mt-10 max-w-xl text-center">
        <div className="mb-2 lg:mb-6">
          <Image
            src={NotFoundImage}
            alt="not-found-image"
            width={150}
            height={150}
           className="mx-auto w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]"
          />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl text-slate-300 mb-2">Page Not Found</h2>
        <p className="text-slate-400 mb-6">
          Oops! We couldn&apos;t find what you were looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-full transition duration-300"
        >
          <ArrowLeft size={18} />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
