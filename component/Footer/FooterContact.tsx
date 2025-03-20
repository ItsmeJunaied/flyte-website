import React from "react";

type FooterContact = {
  title: string;
  logo_small: string;
  address: string;
  mobile1: string;
  mobile2: string;
  contact_email: string;
  feedback_email: string;
  fb: string;
  tw: string;
  ln: string;
  yt: string;
};

const FooterContact: React.FC<{ footerContact: FooterContact }> = ({ footerContact }) => {
  const { title, logo_small, address, mobile1, mobile2, contact_email, feedback_email, fb, tw, ln, yt } =
    footerContact || {};
  return (
    <div className="flex flex-col gap-4">
      <img className="w-[100px] h-[84px]" src={logo_small} alt={title} />
      <h6 className="footer-title text-[#F5F5F5] text-lg">Contact Us</h6>

      {/* Location */}
      <div className="max-w-[380px] flex flex-col gap-2">
        <h6 className="footer-title text-[#F5F5F5]">Location</h6>
        <p className="w-[85%] text-wrap link link-hover text-[#e0e0e0] text-sm font-normal">{address}</p>
      </div>

      {/* Success Logos */}
      <div className="grid grid-cols-3 gap-2">
        <img className="object-cover" src="https://i.ibb.co.com/0p6zVS2H/Clip.png" alt="Success Logo-1" />
        <img className="object-cover" src="/images/goodfirms.png" alt="Success Logo-2" />
        <img className="object-cover" src="/images/Untitled-design.png" alt="Success Logo-3" />
      </div>

      {/* ISO Logos */}
      <div className="flex gap-4">
        <img className="object-cover" src="/images/iso1.png" alt="ISO Logo-1" />
        <img className="object-cover" src="/images/iso2.png" alt="ISO Logo-2" />
      </div>

      {/* Phone Numbers */}
      <div className="max-w-[380px] flex flex-col gap-2">
        <h6 className="footer-title text-[#F5F5F5]">Phone</h6>
        <a href={`tell:${mobile1}`} className="link link-hover text-[#e0e0e0] text-sm font-normal">
          {mobile1}
        </a>
        <a href={`tell:${mobile2}`} className="link link-hover text-[#e0e0e0] text-sm font-normal">
          {mobile2}
        </a>
      </div>

      {/* Emails */}
      <div className="max-w-[380px] flex flex-col gap-2">
        <h6 className="footer-title text-[#F5F5F5]">Email</h6>
        <a href={`mailto:${contact_email}`} className="link link-hover text-[#e0e0e0] text-sm font-normal">
          {contact_email}
        </a>
        <a href={`mailto:${feedback_email}`} className="link link-hover text-[#e0e0e0] text-sm font-normal">
          {feedback_email}
        </a>
      </div>

      {/* Social Links */}
      <div className="max-w-[380px] flex flex-col gap-2">
        <h6 className="footer-title text-[#F5F5F5]">Follow Us</h6>
        <div className="flex flex-row gap-2 items-center">
          <a href={fb} target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] text-lg">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={tw} target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] text-lg">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={ln} target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] text-lg">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={yt} target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] text-lg">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="max-w-[380px] flex flex-col gap-2 mt-10">
        <h6 className="footer-title text-[#F5F5F5]">Payment Methods</h6>
        <div className="flex flex-row gap-2 items-center">
          <img src="/images/visa.png" alt="visa-payment-method" />
          <img src="/images/mastercard.png" alt="mastercard-payment-method" />
          <img src="/images/amex.png" alt="amex-payment-method" />
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
