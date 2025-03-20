import React from "react";

const FooterContact = () => {
  return (
    <aside className="flex flex-col gap-4">
      {/* <img src={contactUs.companyLogo} alt="Company Logo" />
      <h6 className="footer-title text-[#F5F5F5] text-lg">Contact Us</h6> */}

      {/* Location */}
      {/* <div className="max-w-[380px] flex flex-col gap-2">
        <h6 className="footer-title text-[#F5F5F5]">Location</h6>
        <p className="link link-hover text-[#e0e0e0] text-sm font-normal">{contactUs.location}</p>
      </div> */}

      {/* Success Logos */}
      {/* <div className="grid grid-cols-3 gap-2">
        {contactUs?.successLogos?.map((logo, index) => (
          <img key={index} className="object-cover" src={logo} alt={`Success Logo ${index + 1}`} />
        ))}
      </div> */}

      {/* ISO Logos */}
      {/* <div className="flex gap-4">
        {contactUs?.ISOLogos?.map((logo, index) => (
          <img key={index} className="object-cover" src={logo} alt={`ISO Logo ${index + 1}`} />
        ))}
      </div> */}

      {/* Phone Numbers */}
      {/* <div className="max-w-[380px] flex flex-col gap-2">
        <h6 className="footer-title text-[#F5F5F5]">Phone</h6>
        {contactUs.phoneNumbers.map((phone, index) => (
          <a
            key={index}
            href={`tell:${phone}`}
            className="link link-hover text-[#e0e0e0] text-sm font-normal"
          >
            {phone}
          </a>
        ))}
      </div> */}

      {/* Emails */}
      {/* <div className="max-w-[380px] flex flex-col gap-2">
        <h6 className="footer-title text-[#F5F5F5]">Email</h6>
        {contactUs.emails.map((email, index) => (
          <p key={index} className="link link-hover text-[#e0e0e0] text-sm font-normal">
            {email}
          </p>
        ))}
      </div> */}

      {/* Social Links */}
      {/* <div className="max-w-[380px] flex flex-col gap-2">
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
      </div> */}

      {/* Payment Methods */}
      {/* <div className="max-w-[380px] flex flex-col gap-2 mt-10">
        <h6 className="footer-title text-[#F5F5F5]">Payment Methods</h6>
        <div className="flex flex-row gap-2 items-center">
          {contactUs.paymentMethods.map((method, index) => (
            <img key={index} src={method.icon} alt={method.method} />
          ))}
        </div>
      </div> */}
    </aside>
  );
};

export default FooterContact;
