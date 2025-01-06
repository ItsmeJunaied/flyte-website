import React from 'react';
import Marquee from 'react-fast-marquee';
import { GoDotFill } from "react-icons/go";
const ServiceMarquee: React.FC = () => {
    const services = [
        "Web Development", "App Development", "Digital Marketing", "SEO", "Content Writing", "Graphic Designing", 
        "UI/UX Designing", "E-commerce Development", "CMS Development", "CRM Development", "ERP Development", 
        "Custom Software Development", "API Development", "Payment Gateway Integration", "Web Hosting", 
        "Domain Registration", "SSL Certificate", "Email Hosting", "Server Management", "Website Maintenance", 
        "Mobile App Maintenance", "Digital Marketing Maintenance", "SEO Maintenance", "Content Writing Maintenance", 
        "Graphic Designing Maintenance", "UI/UX Designing Maintenance", "E-commerce Development Maintenance", 
        "CMS Development Maintenance", "CRM Development Maintenance", "ERP Development Maintenance", 
        "Custom Software Development Maintenance", "API Development Maintenance", "Payment Gateway Integration Maintenance", 
        "Web Hosting Maintenance", "Domain Registration Maintenance", "SSL Certificate Maintenance", 
        "Email Hosting Maintenance", "Server Management Maintenance"
    ];

    return (
        <div className="bg-[#5D56F1] text-white py-2 h-[86px] flex items-center justify-center mt-5">
            <Marquee speed={30} gradient={false}>
                {services.map((service, index) => (
                    <span key={index} className="mr-5 text-3xl font-semibold flex items-center">
                        {service}
                        {index < services.length - 1 && (
                            <GoDotFill className="mx-2 text-white text-3xl" />
                        )}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default ServiceMarquee;
