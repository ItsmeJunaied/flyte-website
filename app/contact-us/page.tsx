import React from 'react';
import Contact from '../../component/Contact/Contact';

export const metadata = {
    title: "Contact Us | Flyte Solutions Ltd.",
    description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
  };
const page = () => {
    return (
        <div className='lg:mt-24'>
            <Contact/>
        </div>
    );
};

export default page;