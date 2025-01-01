import { footerData } from "@/api/Dummy";
import React from "react";

const Footer: React.FC = () => {
  const { contactUs, services, products, industry } = footerData.footer;
  return (
    <footer className="footer text-base-content py-10">
      {/* Contact Section */}
      <aside className="flex flex-col gap-4">
        <img src={contactUs.companyLogo} alt="Company Logo" />
        <h6 className="footer-title text-[#F5F5F5]">Contact</h6>
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
      </aside>

      {/* Services Section */}
      <section className="flex flex-col gap-4">
        <h6 className="footer-title text-[#F5F5F5]">Services</h6>
        <ul className="list-none flex flex-col gap-2">
          {services.map((service, index) => (
            <li key={index}>
              <a
                href={service.path}
                className="link link-hover text-[#eaeaea] text-sm font-normal font-['Open Sans'] "
              >
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Products Section */}
      <section className="flex flex-col gap-4">
        <h6 className="footer-title text-[#F5F5F5]">Products</h6>
        <ul className="list-none flex flex-col gap-200">
          {products.map((product, index) => (
            <li key={index} className="">
              <a
                href={product.demoLink}
                className="link link-hover text-[#EBEBEB] text-sm font-normal"
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Industries Section */}
      <section className="flex flex-col gap-4">
        <h6 className="footer-title text-[#F5F5F5]">Industries</h6>
        <ul className="list-none flex flex-col gap-4">
          {industry.map((ind, index) => (
            <li key={index}>
              <p className="text-[#e0e0e0] text-sm font-normal">{ind}</p>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
