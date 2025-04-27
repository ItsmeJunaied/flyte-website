import React from "react";
import FooterOverview from "../Footer/FooterOverview";

const Footer = () => {
  return (
    <footer id="page-footer">
      <FooterOverview />
      <div className="footer footer-center text-sm lg:text-base py-4 text-gray-400">
        <aside>
          <p>Copyright © 2012 - {new Date().getFullYear()} - All right reserved by Flyte Solutions Ltd.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
