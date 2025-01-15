"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavData = {
  menu: {
    name: string;
    type: string;
    path: string;
    description: string;
    features?: {
      name: string;
      icon: string;
      description: string;
      path: string;
    }[];
  }[];
};

const NavLinks: React.FC<{ navData: NavData }> = ({ navData }) => {
    const pathname = usePathname();
  return (
    <div className=" focus:lex">
      {navData.menu.map((item, index) => {
        const isActive = pathname.split("/")[1] === item.path.split("/")[1];
        return (
          <li
            key={index}
            className={item.type === "dropdown" ? "dropdown__item" : ""}
          >
            {item.type === "dropdown" ? (
              <>
                <div
                  className={`nav__link dropdown__button ${
                    isActive ? "active" : ""
                  }`}
                >
                  <p
                    className={`text-black hover:text-[#2B6CB0] ${
                      isActive ? "text-blue-500 border-b-2 border-btnColor" : ""
                    }`}
                  >
                    {item.name}
                  </p>
                  <i className="fa-solid fa-chevron-down fa-2xs"></i>
                </div>
                <div className="dropdown__container bg-[#F4F2F0]">
                  <div className="dropdown__content">
                    <div className="flex flex-col lg:flex-row gap-10 container px-5 lg:px-[80px]">
                      <div className=" w-full h-full lg:w-1/3 hidden lg:flex flex-col gap-4 flex-shrink-0 ">
                        <h1 className="text-lg text-btnColor ">{item.name}</h1>
                        <p className="text-xs text-[#131313B2]">
                          {item.description}
                        </p>
                        <Link
                          className="bg-btnColor w-fit h-fit text-white px-6 py-3 rounded-lg"
                          href={item.path}
                        >
                          <p className="">Learn more</p>
                        </Link>
                      </div>
                      <div className=" w-full h-full lg:w-2/3 rounded-lg flex-shrink-0 ">
                        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                          {item.features?.map((feature, featureIndex) => (
                            <div
                              className=" flex flex-row  items-center gap-4  bg-white border-2 border-white hover:border-btnColor p-4 rounded-lg"
                              key={featureIndex}
                            >
                              <div className=" w-fit  ">
                                <p className=" text-xl">
                                  <i
                                    className={`fa ${feature.icon} fa-2xl`}
                                    style={{ color: "#5856d6" }}
                                  ></i>
                                </p>
                              </div>
                              <div className=" w-fit ">
                                <p className=" text-btnColor">{feature.name}</p>
                                <p className=" text-[#131313B2] text-xs">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link
                className={`h-full flex items-center ${
                  isActive ? "text-blue-500 border-b-2 border-green-300" : ""
                }`}
                href={item.path}
              >
                <p className="nav__link">{item.name}</p>
              </Link>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default NavLinks;
