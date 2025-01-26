import React from "react";

// Define the type for footer data
type FooterData = {
  footer: {
    contactUs: {
      location: string;
      companyLogo: string;
      successLogos: string[];
      phoneNumbers: string[];
      emails: string[];
      socialLinks: {
        platform: string;
        url: string;
        icon: string;
      }[];
      paymentMethods: {
        method: string;
        icon: string;
      }[];
    };
    services: {
      sectionName: string;
      subsections: {
        name: string;
        id: string;
        items: string[];
      }[];
    };
    expertise: {
      sectionName: string;
      subsections: {
        name: string;
        id: string;
        items: {
          name: string;
          path: string;
        }[];
      }[];
    };
  };
};

// Dummy footer data import

const Footer: React.FC<{ footerData: FooterData }> = ({ footerData }) => {
  const { contactUs, services, expertise } = footerData.footer;

  return (
    <div>
      <footer className="footer text-base-content py-10 bg-[#2A3342]">
        {/* Contact Section */}
        <aside className="flex flex-col gap-4">
          <img src={contactUs.companyLogo} alt="Company Logo" />
          <h6 className="footer-title text-[#F5F5F5] text-lg">Contact Us</h6>

          {/* Location */}
          <div className="max-w-[380px] flex flex-col gap-2">
            <h6 className="footer-title text-[#F5F5F5]">Location</h6>
            <p className="link link-hover text-[#e0e0e0] text-sm font-normal">
              {contactUs.location}
            </p>
          </div>

          {/* Success Logos */}
          <div className="grid grid-cols-3 gap-2">
            {contactUs.successLogos.map((logo, index) => (
              <img
                key={index}
                className="object-cover"
                src={logo}
                alt={`Success Logo ${index + 1}`}
              />
            ))}
          </div>

          {/* Phone Numbers */}
          <div className="max-w-[380px] flex flex-col gap-2">
            <h6 className="footer-title text-[#F5F5F5]">Phone</h6>
            {contactUs.phoneNumbers.map((phone, index) => (
              <p
                key={index}
                className="link link-hover text-[#e0e0e0] text-sm font-normal"
              >
                {phone}
              </p>
            ))}
          </div>

          {/* Emails */}
          <div className="max-w-[380px] flex flex-col gap-2">
            <h6 className="footer-title text-[#F5F5F5]">Email</h6>
            {contactUs.emails.map((email, index) => (
              <p
                key={index}
                className="link link-hover text-[#e0e0e0] text-sm font-normal"
              >
                {email}
              </p>
            ))}
          </div>

          {/* Social Links */}
          <div className="max-w-[380px] flex flex-col gap-2">
            <h6 className="footer-title text-[#F5F5F5]">Follow Us</h6>
            <div className="flex flex-row gap-2 items-center">
              {contactUs.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e0e0e0] text-lg"
                >
                  <i className={`fab ${social.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="max-w-[380px] flex flex-col gap-2 mt-10">
            <h6 className="footer-title text-[#F5F5F5]">Payment Methods</h6>
            <div className="flex flex-row gap-2 items-center">
              {contactUs.paymentMethods.map((method, index) => (
                <img key={index} src={method.icon} alt={method.method} />
              ))}
            </div>
          </div>
        </aside>

        <div className=" flex flex-row lg:flex-col justify-start items-start gap-5">
          {/* Services Section */}
          <section className="w-full flex flex-col">
            <h6 className="footer-title text-sm text-[#0FF] mb-8">
              {services.sectionName}
            </h6>
            <div className=" w-full flex  flex-col lg:flex-row gap-6">
              {services.subsections.map((subsection, index) => (
                <div key={index} className=" lg:w-1/4 flex flex-col gap-5">
                  <h6 className="text-[#F5F5F5] font-bold text-base">
                    {subsection.name}
                  </h6>
                  <ul className="list-none flex flex-col gap-5 max-w-[200px]">
                    {subsection.items.map((item, subIndex) => (
                      <li key={subIndex}>
                        <span className="text-[#EBEBEB] text-sm text-wrap">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Expertise Section */}
          <section className="w-full mt-0 lg:mt-8">
            <h6 className="footer-title text-[#0FF] mb-8 text-sm">
              {expertise.sectionName}
            </h6>
            <div className=" w-full  flex flex-col lg:flex-row  gap-6">
              {expertise.subsections.map((subsection, index) => (
                <div key={index} className=" lg:w-1/4 w-full  flex flex-col gap-5">
                  <h6 className="text-[#F5F5F5] font-bold text-base">
                    {subsection.name}
                  </h6>
                  <ul className="list-none flex flex-col gap-5">
                    {subsection.items.map((item, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={item.path}
                          className="text-[#EBEBEB] text-sm link link-hover"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </footer>
      <footer className="footer footer-center text-base-content py-4">
        <aside>
          <p>
            Copyright © 2012 - {new Date().getFullYear()} - All right reserved
            by Flyte Solutions Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
