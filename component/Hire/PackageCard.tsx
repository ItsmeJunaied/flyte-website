import Link from "next/link";
import React from "react";

type PackageItem = {
  title: string;
  features: string[];
};

type PackageCardProps = {
  items: PackageItem;
};

const PackageCard: React.FC<PackageCardProps> = ({ items }) => {
  const { title, features } = items;

  return (
    <div className="p-6 bg-blue-50 hover:bg-black rounded-lg transition duration-500 group flex flex-col justify-between">
      <div>
        <h4 className="pb-7 text-[#060b13] group-hover:text-white text-2xl font-bold transition duration-500">
          {title}
        </h4>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 pb-2.5">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path
                  d="M11.6667 2.43945C9.89864 2.43945 8.20294 3.14183 6.9527 4.39207C5.70246 5.64232 5.00008 7.33801 5.00008 9.10612C5.00008 10.8742 5.70246 12.5699 6.9527 13.8202C8.20294 15.0704 9.89864 15.7728 11.6667 15.7728C13.4349 15.7728 15.1306 15.0704 16.3808 13.8202C17.631 12.5699 18.3334 10.8742 18.3334 9.10612H16.6667C16.6667 11.8728 14.4334 14.1061 11.6667 14.1061C10.3407 14.1061 9.0689 13.5793 8.13121 12.6417C7.19353 11.704 6.66675 10.4322 6.66675 9.10612C6.66675 7.78004 7.19353 6.50827 8.13121 5.57059C9.0689 4.6329 10.3407 4.10612 11.6667 4.10612C12.0251 4.10612 12.3834 4.14779 12.7251 4.22279L14.0667 2.88945C13.5001 2.58945 12.5001 2.43945 11.6667 2.43945ZM17.1584 3.75612L11.6667 9.24779L9.68341 7.26445L8.50841 8.44779L11.6667 11.6061L18.3334 4.93945M4.10841 5.62279C2.56675 6.88945 1.66675 8.78112 1.66675 10.7728C1.66675 12.5409 2.36913 14.2366 3.61937 15.4868C4.86961 16.7371 6.5653 17.4395 8.33341 17.4395C8.86675 17.4395 9.39175 17.3728 9.90008 17.2478C8.43341 16.9228 7.08341 16.1895 5.97508 15.1811C4.35008 14.3145 3.33341 12.6145 3.33341 10.7728C3.33341 10.5228 3.35841 10.2811 3.39175 10.0311C3.35841 9.72279 3.33341 9.41445 3.33341 9.10612C3.33341 7.90612 3.60008 6.71445 4.10841 5.62279Z"
                  fill="#5856D6"
                />
              </svg>
            </span>
            <p className="text-[#060b13] text-sm group-hover:text-white transition duration-500 w-[285px]">{feature}</p>
          </div>
        ))}
      </div>
      {/* button */}
      <Link href="/hire/application-form" className="px-6 py-2.5 mt-6 bg-[#5856d6] hover:bg-white rounded-md text-center text-white hover:text-[#5856d6] text-sm font-semibold transition duration-500">
      Hire Us
      </Link>
    </div>
  );
};

export default PackageCard;
