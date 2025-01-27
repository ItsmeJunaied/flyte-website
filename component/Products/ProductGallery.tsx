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
    <div className="w-full">
      {/* Display the active image at the top */}
      {images.map((image) =>
        image.status === "active" ? (
          <img
            key={image.id}
            className="w-full h-auto lg:h-[462px] rounded-xl object-cover"
            src={image.url}
            alt={`Image-${image.id}`}
          />
        ) : null
      )}
      {/* Display the inactive or small images below, which are clickable */}
      <div className="grid grid-cols-3 gap-2.5 mt-2.5">
        {images.map((image) =>
          image.status === "inactive" ? (
            <div
              key={image?.id}
              className="h-[80px] md:h-[120px]"
              onClick={() => handleImageClick(image?.id)}
            >
              <img
                className="w-full h-16 sm:h-20 md:h-[110px] rounded-xl border border-[#979797] cursor-pointer"
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
