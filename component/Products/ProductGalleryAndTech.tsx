import React from "react";
import ProductGallery from "./ProductGallery";
import ProductTechOverview from "./ProductTechOverview";
// import { ProductCardsData } from "@/api/Dummy";
import Link from "next/link";
import { productData } from "./ProductOverview";

const ProductGalleryAndTech: React.FC<{ product: productData }> = ({ product }) => {
  if (!product) {
    return <p className="text-center text-gray-600">Product details not found.</p>;
  }

  const {
    title,
    images,
    image_one,
    work_flow_image,
    video,
    demo_link,
    short_description,
    description,
    technology,
    integrations,
  } = product;

  const descriptionArray =
    description.match(/<li>(.*?)<\/li>/g)?.map((item) => item.replace(/<\/?li>/g, "").trim()) || [];

  return (
    <div className="container mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <ProductGallery galleryImages={images} />
        <ProductTechOverview overview={{ technology, integrations, video, image_one }} />
      </div>

      {/* details and features section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col justify-between gap-5">
          <p
            className="text-[#3b3c4a] text-base lg:text-xl"
            dangerouslySetInnerHTML={{ __html: short_description }}
          ></p>

          <div>
            <h4 className="text-[#181a2a] text-xl lg:text-2xl font-semibold">Key Features</h4>
            <ul className="text-gray-600 text-sm space-y-2 mt-3">
              {descriptionArray?.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  {/* SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 flex-shrink-0"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M12.3333 21.373C17.3038 21.373 21.3333 17.3436 21.3333 12.373C21.3333 7.40248 17.3038 3.37305 12.3333 3.37305C7.36269 3.37305 3.33325 7.40248 3.33325 12.373C3.33325 17.3436 7.36269 21.373 12.3333 21.373Z"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <path d="M8.33325 12.373L11.3333 15.373L16.3333 9.37305" stroke="black" strokeWidth="2" />
                  </svg>
                  {/* List Content */}
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            {/* {features?.map((feature, index) => (
              <p key={index} className="flex items-center gap-2 lg:gap-4 mt-4 text-sm lg:text-base">
                <i className="fa-regular fa-circle-check text-base lg:text-2xl"></i> {feature}
              </p>
            ))} */}
          </div>
          <Link
            href={demo_link}
            target="_blank"
            className="px-3 lg:px-6 py-2 lg:py-3 bg-black hover:bg-[#3c3bb8] transition duration-500 text-white text-base font-bold capitalize w-fit"
          >
            Try Demo <i className="fa-solid fa-angle-right text-sm lg:text-base pl-2"></i>
          </Link>
        </div>
        <div>
          <img
            className="w-full max-h-[400px] object-cover"
            src={work_flow_image}
            alt={`${title} Feature Image`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGalleryAndTech;
