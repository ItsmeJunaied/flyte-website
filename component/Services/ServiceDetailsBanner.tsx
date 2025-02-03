import React from 'react';
import { serviceData } from "../../api/Dummy";
import HeroBanner from '../Common/HeroBanner';

type ServiceBannerProps = {
  params: string;
};

const ServiceDetailsBanner = ({ params }: ServiceBannerProps) => {
   const service = serviceData?.find((item) => item?.serviceLinkName === params);
  return (
    <div>
    {service ? (
      <HeroBanner bannerData={service} />
    ) : (
      <p>Data not found</p>
    )}
  </div>
  );
};

export default ServiceDetailsBanner;