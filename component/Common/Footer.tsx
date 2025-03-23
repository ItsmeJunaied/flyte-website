import React from "react";
import FooterOverview from "../Footer/FooterOverview";

const Footer = () => {
  return (
    <footer>
      
      <FooterOverview />
      <div className="footer footer-center text-base-content py-4">
        <aside>
          <p>Copyright © 2012 - {new Date().getFullYear()} - All right reserved by Flyte Solutions Ltd.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
