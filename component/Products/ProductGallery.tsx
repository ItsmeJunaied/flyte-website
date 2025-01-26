"use client";
import React, { useState } from "react";
import { Images } from "./ProductCards";

const ProductGallery: React.FC<{ galleryImages: Images[] }> = ({ galleryImages }) => {
  const [images, setImages] = useState(galleryImages);

  const handleImageClick = (id: number) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, status: "active" } : { ...image, status: "inactive" }
    );
    setImages(updatedImages);
  };

  return (
    <div className="h-[592px] flex-col justify-start items-start gap-2.5 inline-flex">
      {/* Display the active image at the top */}
      {images.map((image) =>
        image.status === "active" ? (
          <img
            key={image.id}
            className="w-[700px] h-[462px] rounded-xl object-cover"
            src={image.url}
            alt={`Image-${image.id}`}
          />
        ) : null
      )}
      {/* Display the inactive images below, which are clickable */}
      <div className="w-[700px] justify-start items-start gap-2.5 inline-flex">
        {images.map((image) =>
          image.status === "inactive" ? (
            <div
              key={image?.id}
              className="h-[120px] justify-center items-center flex"
              onClick={() => handleImageClick(image?.id)}
            >
              <img
                className="w-[226.67px] h-[120px] rounded-xl border border-[#979797] cursor-pointer"
                src={image.url}
                alt={`Image-${image.id}`}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
