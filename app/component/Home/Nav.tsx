import { navbarData } from "@/api/Dummy";
import Link from "next/link";
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

const Nav: React.FC<{ navData: NavData }> = ({ navData }) => {
  return (
    <div className="header">
      <nav className="nav container">
        <div className="nav__data">
          <Link href="/">
            <img src="/images/flyte-logo.png" alt="flyte solutions Ltd." />
          </Link>

          <div className="nav__toggle" id="nav-toggle">
            <i className="fa-solid fa-bars nav__toggle-menu"></i>
            <i className="fa-solid fa-x nav__toggle-close"></i>
          </div>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {navData.menu.map((item, index) => (
              <li
                key={index}
                className={item.type === "dropdown" ? "dropdown__item" : ""}
              >
                {item.type === "dropdown" ? (
                  <>
                    <div className="nav__link dropdown__button">
                      {item.name}{" "}
                      <i className="fa-solid fa-chevron-down fa-2xs"></i>
                    </div>
                    <div className="dropdown__container bg-[#F4F2F0]">
                      <div className="dropdown__content">
                        <div className="flex flex-col lg:flex-row gap-10 container mx-auto">
                          <div className=" w-full h-full lg:w-1/3 hidden lg:flex flex-col gap-4 flex-shrink-0 ">
                            {/* {navData.menu.map((item, index) => (
                              <div key={index}> */}

                            <h1 className="text-lg text-btnColor ">
                              {item.name}
                            </h1>

                            <p className="text-xs text-[#131313B2]">
                              {item.description}
                            </p>

                            <Link
                              className="bg-btnColor w-fit h-fit text-white px-6 py-3 rounded-lg"
                              href={item.path}
                            >
                              <p className="">Learn more</p>
                            </Link>
                            {/* </div> */}
                            {/* ))} */}
                          </div>
                          <div className=" w-full h-full lg:w-2/3 rounded-lg flex-shrink-0 ">
                            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                              {item.features?.map((feature, featureIndex) => (
                                <div
                                  className=" flex flex-row  items-center gap-4  bg-white p-4 rounded-lg"
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
                                    <p className=" text-btnColor">
                                      {feature.name}
                                    </p>
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
                  <Link className="h-full flex items-center" href={item.path}>
                    <p className="nav__link">{item.name}</p>
                  </Link>
                )}
              </li>
            ))}
            {/* Hardcoded Contact Us link */}
            <li>
              <Link href="/contact" className="h-full flex items-center">
                <p className="bg-btnColor h-fit text-white px-6 py-3 rounded-lg">
                  Contact Us
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
