import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer  text-base-content py-10">
      <aside className=" flex flex-col gap-4">
        <img src="/images/flyte-logo.png" alt="" />
        <h6 className="footer-title text-[#F5F5F5]">Contact</h6>
        <div className=" max-w-[380px] flex flex-col gap-2">
          <h6 className="footer-title text-[#F5F5F5]">Location</h6>
          <p className=" link link-hover text-[#e0e0e0] text-sm font-normal">
            Flyte Solutions Ltd, The Reeve, House 11, Road 33, Gulshan-1,
            Dhaka-1212, Bangladesh.
          </p>
        </div>

        <div className=" grid grid-cols-3 gap-2">
          <img className=" object-cover" src="/images/clip.png" alt="clip" />
          <img className=" object-cover" src="/images/goodfirms.png" alt="good firms" />
          <img className=" object-cover mt-2"  src="/images/Untitled-design.png" alt="" />
          <img className=" object-cover" src="/images/iso1.png" alt="" />
          <img className=" object-cover" src="/images/iso2.png" alt="" />
        </div>
        <div className=" max-w-[380px] flex flex-col gap-2">
          <h6 className="footer-title text-[#F5F5F5]">Phone</h6>
          <p className=" link link-hover text-[#e0e0e0] text-sm font-normal">
            880-171-320-3656
          </p>
          <p className=" link link-hover text-[#e0e0e0] text-sm font-normal">
            880-179-353-2035
          </p>
        </div>
        <div className=" max-w-[380px] flex flex-col gap-2">
          <h6 className="footer-title text-[#F5F5F5]">Email</h6>
          <p className=" link link-hover text-[#e0e0e0]0 txt-sm font-normal">
            info@flytesolutions.com
          </p>
          <p className=" link link-hover text-[#e0e0e0]0 txt-sm font-normal">
            sales@flytesolutions.com
          </p>
        </div>
        <div className=" max-w-[380px] flex flex-col gap-2">
          <h6 className="footer-title text-[#F5F5F5]">Follow Us</h6>
          <div className=" flex flex-row gap-2 items-center">
            {/* in */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19 3.40039C19.5304 3.40039 20.0391 3.6111 20.4142 3.98618C20.7893 4.36125 21 4.86996 21 5.40039V19.4004C21 19.9308 20.7893 20.4395 20.4142 20.8146C20.0391 21.1897 19.5304 21.4004 19 21.4004H5C4.46957 21.4004 3.96086 21.1897 3.58579 20.8146C3.21071 20.4395 3 19.9308 3 19.4004V5.40039C3 4.86996 3.21071 4.36125 3.58579 3.98618C3.96086 3.6111 4.46957 3.40039 5 3.40039H19ZM18.5 18.9004V13.6004C18.5 12.7358 18.1565 11.9066 17.5452 11.2952C16.9338 10.6839 16.1046 10.3404 15.24 10.3404C14.39 10.3404 13.4 10.8604 12.92 11.6404V10.5304H10.13V18.9004H12.92V13.9704C12.92 13.2004 13.54 12.5704 14.31 12.5704C14.6813 12.5704 15.0374 12.7179 15.2999 12.9804C15.5625 13.243 15.71 13.5991 15.71 13.9704V18.9004H18.5ZM6.88 8.96039C7.32556 8.96039 7.75288 8.78339 8.06794 8.46833C8.383 8.15327 8.56 7.72595 8.56 7.28039C8.56 6.35039 7.81 5.59039 6.88 5.59039C6.43178 5.59039 6.00193 5.76844 5.68499 6.08538C5.36805 6.40232 5.19 6.83217 5.19 7.28039C5.19 8.21039 5.95 8.96039 6.88 8.96039ZM8.27 18.9004V10.5304H5.5V18.9004H8.27Z"
                fill="white"
              />
            </svg>

            {/* fb */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 2.43945C6.5 2.43945 2 6.92945 2 12.4595C2 17.4595 5.66 21.6095 10.44 22.3595V15.3595H7.9V12.4595H10.44V10.2495C10.44 7.73945 11.93 6.35945 14.22 6.35945C15.31 6.35945 16.45 6.54945 16.45 6.54945V9.01945H15.19C13.95 9.01945 13.56 9.78945 13.56 10.5795V12.4595H16.34L15.89 15.3595H13.56V22.3595C15.9164 21.9873 18.0622 20.785 19.6099 18.9695C21.1576 17.1541 22.0054 14.8451 22 12.4595C22 6.92945 17.5 2.43945 12 2.43945Z"
                fill="white"
              />
            </svg>
            {/* twitter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M22.46 6.40039C21.69 6.75039 20.86 6.98039 20 7.09039C20.88 6.56039 21.56 5.72039 21.88 4.71039C21.05 5.21039 20.13 5.56039 19.16 5.76039C18.37 4.90039 17.26 4.40039 16 4.40039C13.65 4.40039 11.73 6.32039 11.73 8.69039C11.73 9.03039 11.77 9.36039 11.84 9.67039C8.28004 9.49039 5.11004 7.78039 3.00004 5.19039C2.63004 5.82039 2.42004 6.56039 2.42004 7.34039C2.42004 8.83039 3.17004 10.1504 4.33004 10.9004C3.62004 10.9004 2.96004 10.7004 2.38004 10.4004C2.38004 10.4004 2.38004 10.4004 2.38004 10.4304C2.38004 12.5104 3.86004 14.2504 5.82004 14.6404C5.46004 14.7404 5.08004 14.7904 4.69004 14.7904C4.42004 14.7904 4.15004 14.7604 3.89004 14.7104C4.43004 16.4004 6.00004 17.6604 7.89004 17.6904C6.43004 18.8504 4.58004 19.5304 2.56004 19.5304C2.22004 19.5304 1.88004 19.5104 1.54004 19.4704C3.44004 20.6904 5.70004 21.4004 8.12004 21.4004C16 21.4004 20.33 14.8604 20.33 9.19039C20.33 9.00039 20.33 8.82039 20.32 8.63039C21.16 8.03039 21.88 7.27039 22.46 6.40039Z"
                fill="white"
              />
            </svg>

            {/* insta */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M7.8 2.40039H16.2C19.4 2.40039 22 5.00039 22 8.20039V16.6004C22 18.1386 21.3889 19.6139 20.3012 20.7016C19.2135 21.7893 17.7383 22.4004 16.2 22.4004H7.8C4.6 22.4004 2 19.8004 2 16.6004V8.20039C2 6.66214 2.61107 5.18688 3.69878 4.09917C4.78649 3.01146 6.26174 2.40039 7.8 2.40039ZM7.6 4.40039C6.64522 4.40039 5.72955 4.77968 5.05442 5.45481C4.37928 6.12994 4 7.04561 4 8.00039V16.8004C4 18.7904 5.61 20.4004 7.6 20.4004H16.4C17.3548 20.4004 18.2705 20.0211 18.9456 19.346C19.6207 18.6708 20 17.7552 20 16.8004V8.00039C20 6.01039 18.39 4.40039 16.4 4.40039H7.6ZM17.25 5.90039C17.5815 5.90039 17.8995 6.03209 18.1339 6.26651C18.3683 6.50093 18.5 6.81887 18.5 7.15039C18.5 7.48191 18.3683 7.79985 18.1339 8.03427C17.8995 8.26869 17.5815 8.40039 17.25 8.40039C16.9185 8.40039 16.6005 8.26869 16.3661 8.03427C16.1317 7.79985 16 7.48191 16 7.15039C16 6.81887 16.1317 6.50093 16.3661 6.26651C16.6005 6.03209 16.9185 5.90039 17.25 5.90039ZM12 7.40039C13.3261 7.40039 14.5979 7.92717 15.5355 8.86486C16.4732 9.80254 17 11.0743 17 12.4004C17 13.7265 16.4732 14.9982 15.5355 15.9359C14.5979 16.8736 13.3261 17.4004 12 17.4004C10.6739 17.4004 9.40215 16.8736 8.46447 15.9359C7.52678 14.9982 7 13.7265 7 12.4004C7 11.0743 7.52678 9.80254 8.46447 8.86486C9.40215 7.92717 10.6739 7.40039 12 7.40039ZM12 9.40039C11.2044 9.40039 10.4413 9.71646 9.87868 10.2791C9.31607 10.8417 9 11.6047 9 12.4004C9 13.196 9.31607 13.9591 9.87868 14.5217C10.4413 15.0843 11.2044 15.4004 12 15.4004C12.7956 15.4004 13.5587 15.0843 14.1213 14.5217C14.6839 13.9591 15 13.196 15 12.4004C15 11.6047 14.6839 10.8417 14.1213 10.2791C13.5587 9.71646 12.7956 9.40039 12 9.40039Z"
                fill="white"
              />
            </svg>

            {/* utube */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
            >
              <mask
                id="mask0_1809_55431"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="17"
              >
                <path
                  d="M10 1.40039C19 1.40039 19 1.40039 19 8.40039C19 15.4004 19 15.4004 10 15.4004C1 15.4004 1 15.4004 1 8.40039C1 1.40039 1 1.40039 10 1.40039Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 4.90039L14 8.40039L8 11.9004V4.90039Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#mask0_1809_55431)">
                <path d="M22 -3.59961H-2V20.4004H22V-3.59961Z" fill="white" />
              </g>
            </svg>
          </div>
        </div>

        <div className=" max-w-[380px] flex flex-col gap-2">
          <h6 className="footer-title text-[#F5F5F5]">Payment Methods</h6>
          <div className=" flex flex-row items-center gap-2">
            <img src="/images/visa.png" alt="visa card" />
            <img src="/images/amex.png" alt="amex" />
            <img src="/images/mastercard.png" alt="master card" />
          </div>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title text-[#F5F5F5]">Services</h6>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Branding
        </a>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Design
        </a>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Marketing
        </a>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Advertisement
        </a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#F5F5F5]">Product</h6>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          About us
        </a>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Contact
        </a>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Jobs
        </a>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Press kit
        </a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#F5F5F5]">Industry</h6>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Terms of use
        </a>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Privacy policy
        </a>
        <a className=" text-[#eaeaea] text-sm font-normal font-['Open Sans']">
          Cookie policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
