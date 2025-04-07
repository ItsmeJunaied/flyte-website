"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
      btnText?: string;
    }[];
  }[];
};

const Nav: React.FC<{ navData: NavData }> = ({ navData }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const excludePages = [
    "/case-studies",
    "/career",
    "/company/about-us",
    "/contact-us",
    "/hire/application-form",
  ];
  const isExcluded =
    excludePages.includes(pathname) ||
    pathname === "/company" ||
    pathname.startsWith("/company/news&blogs/") ||
    pathname.startsWith("/products/") ||
    pathname.startsWith("/career/");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 500) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5;

      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div
        className={`z-[1000] transition-all duration-500 ease-in-out   
          ${isExcluded ? "bg-white text-black" : "lg:hover:bg-white group"} 
          ${
            isScrolled
              ? "fixed top-0 left-0 w-full bg-white shadow-md"
              : "fiexed lg:absolute top-0 left-0 w-full bg-transparent"
          }`}
      >
        <nav className="nav container">
          <div className="nav__data">
            <Link href="/">
              <img src="/images/flyte-logo.png" alt="flyte solutions Ltd." />
            </Link>

            <div className="nav__toggle" id="nav-toggle">
              <i className="fa-solid fa-bars nav__toggle-menu"></i>
              <i className="fa-solid fa-x nav__toggle-close mr-1"></i>
            </div>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              {navData.menu.map((item, index) => {
                const isActive = pathname.split("/")[1] === item.path.split("/")[1];
                return (
                  <li key={index} className={item.type === "dropdown" ? "dropdown__item" : ""}>
                    {item.type === "dropdown" ? (
                      <>
                        {/* parent list  */}
                        <div className={`nav__link dropdown__button  ${isActive ? "active" : ""}`}>
                          <p
                            className={` hover:text-[#2B6CB0] group-hover:text-black ${
                              isActive ? "text-blue-500 border-b-2 border-btnColor" : ""
                            } ${isScrolled ? "lg:text-black" : isExcluded ? "text-black" : "lg:text-white"}`}
                          >
                            {item.name}
                          </p>
                          <i
                            className={`fa-solid fa-chevron-down fa-2xs group-hover:text-black ${
                              isScrolled ? "lg:text-black" : isExcluded ? "text-black" : "lg:text-white"
                            }`}
                          ></i>
                        </div>

                        {/* child list  */}
                        <div className="dropdown__container">
                          <div className="dropdown__content">
                            <div className="lg:container grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                              <div className="lg:col-span-1 hidden lg:flex flex-col gap-4 flex-shrink-0 mt-5">
                                <h1 className="text-lg font-bold text-btnColor ">
                                  {item?.path === "/company" ? "Discover Flyte" : item.name}
                                </h1>
                                <p className=" text-sm text-[#131313B2]">{item.description}</p>
                                {item?.path === "/company" ? (
                                  ""
                                ) : (
                                  <Link
                                    className="bg-btnColor w-fit h-fit text-white px-6 py-3 rounded-lg"
                                    href={item?.path}
                                  >
                                    <p className="">Learn more</p>
                                  </Link>
                                )}
                              </div>
                              <div className="lg:col-span-2 rounded-lg flex-shrink-0">
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                                  {item.features?.map((feature, featureIndex) => (
                                    <Link href={feature.path} key={featureIndex}>
                                      {item.path === "/company" ? (
                                        <div className="px-4 py-1.5 lg:py-6 bg-[#f7f7f7] lg:border-2 lg:border-[#f1f1f1] hover:border-btnColor lg:rounded-lg max-w-[406px]">
                                          <div className="flex flex-row items-center gap-2 lg:gap-5">
                                            <div>
                                              <i
                                                className={` fa ${feature.icon} text-lg lg:text-5xl text-[#5856d6]`}
                                              ></i>
                                            </div>
                                            <div>
                                              <p className="text-btnColor text-xs lg:text-base font-semibold mb-1 lg:mb-2">
                                                {feature.name}
                                              </p>
                                              <p className=" text-[#131313B2] text-xs hidden lg:block">
                                                {feature.description}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="mt-6 hidden lg:block w-fit mx-auto">
                                            <button className="px-6 py-1.5 text-[10px] font-semibold hover:text-white bg-white hover:bg-black transition duration-300 rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] outline outline-1 outline-offset-[-1px] outline-[#dddddd]">
                                              {feature?.btnText}
                                            </button>
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="px-5 lg:px-4 py-1 lg:py-2 lg:h-24 bg-[#F7FAFF] lg:bg-white flex flex-row items-center gap-2 lg:gap-4 lg:border-2 lg:border-white hover:border-btnColor lg:rounded-lg max-w-[406px]">
                                          <div className="w-7 h-7">
                                            <i
                                              className={`w-7 h-7 fa ${feature.icon} text-lg lg:text-3xl text-[#5856d6]`}
                                            ></i>
                                          </div>
                                          <div>
                                            <p className="text-btnColor text-xs lg:text-base">
                                              {feature.name}
                                            </p>
                                            <p className=" text-[#131313B2] text-xs hidden lg:block">
                                              {feature.description}
                                            </p>
                                          </div>
                                        </div>
                                      )}
                                    </Link>
                                  ))}

                                  {/* only for small device  */}
                                  <div className="bg-[#F7FAFF]">
                                    <Link
                                      className="nav-close mx-5 bg-btnColor text-white px-3 w-fit rounded lg:hidden flex justify-center items-center"
                                      href={item.path}
                                    >
                                      Learn more
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link className="nav-close nav__link h-full flex items-center " href={item.path}>
                        <span
                          className={`group-hover:text-black ${
                            isActive ? "text-blue-500 border-b-2 border-btnColor" : ""
                          } ${isScrolled ? "lg:text-black" : isExcluded ? "text-black" : "lg:text-white"}`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </li>
                );
              })}
              {/* Hardcoded Contact Us link */}
              <li>
                <Link href="/contact-us" className="nav-close h-full flex items-center">
                  <p className="bgGradientNevyBlue h-fit text-white px-6 py-3 rounded-lg">Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
