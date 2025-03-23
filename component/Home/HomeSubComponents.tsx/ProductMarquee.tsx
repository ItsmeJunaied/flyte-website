"use client"
import { productsSections } from "@/api/Dummy";
import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  image: string;
  name: string;
};

const ProductMarquee: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size on the client
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  return (
    <Marquee
      pauseOnHover
      gradient={!isSmallScreen} 
      gradientWidth={150}
    >
      {productsSections.map((product: Product) => (
      <button
      key={product.id}
      className="flex flex-col justify-center items-center gap-3 mx-4 group"
      >
      <img
      className="w-[200px] h-[150px] lg:w-[260px] lg:h-[190px] rounded-[20px] object-cover group-hover:border-[3px] group-hover:border-btnColor"
      src={product.image}
      alt={product.name}
      />
      <p className="text-center text-black text-sm font-bold">
      {product.name}
      </p>
      </button>
      ))}
    </Marquee>
  );
};

export default ProductMarquee;
