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
    }[];
  }[];
};

const Nav: React.FC<{ navData: NavData }> = ({ navData }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const excludePages = ["/case-studies", "/career", "/company/about-us", "/contact-us"];
  const isExcluded =
    excludePages.includes(pathname) ||
    pathname === "/company" ||
    pathname.startsWith("/company/news&blogs/") ||
    pathname.startsWith("/products/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div
        className={`z-10 transition-all duration-500 ease-in-out   
          ${isExcluded ? "bg-white text-black" : "lg:hover:bg-white group"} 
          ${
            isScrolled
              ? "lg:fixed top-0 left-0 w-full bg-white shadow-md"
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
                        <div className="dropdown__container">
                          <div className="dropdown__content">
                            <div className="lg:container grid grid-cols-1 lg:grid-cols-3">
                              <div className="lg:col-span-1 hidden lg:flex flex-col gap-4 flex-shrink-0 ">
                                <h1 className="text-lg text-btnColor ">{item.name}</h1>
                                <p className="text-xs text-[#131313B2]">{item.description}</p>
                                <Link
                                  className="bg-btnColor w-fit h-fit text-white px-6 py-3 rounded-lg"
                                  href={item.path}
                                >
                                  <p className="">Learn more</p>
                                </Link>
                              </div>
                              <div className="lg:col-span-2 rounded-lg flex-shrink-0">
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
                                  {item.features?.map((feature, featureIndex) => (
                                    <Link href={feature.path} key={featureIndex}>
                                      <div className="bg-[#F7FAFF] lg:bg-white flex flex-row items-center gap-2 lg:gap-4 lg:border-2 lg:border-white hover:border-btnColor px-5 lg:px-4 py-1 lg:py-2 lg:rounded-lg lg:h-24 max-w-[406px]">
                                        <div className="w-7 h-7">
                                          <i
                                            className={`w-7 h-7 fa ${feature.icon} text-lg lg:text-3xl text-[#5856d6]`}
                                          ></i>
                                        </div>
                                        <div>
                                          <p className="text-btnColor text-xs lg:text-base">{feature.name}</p>
                                          <p className=" text-[#131313B2] text-xs hidden lg:block">
                                            {feature.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
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
                  <p className="bg-btnColor h-fit text-white px-6 py-3 rounded-lg">Contact Us</p>
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
