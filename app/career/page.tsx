import React from 'react';
import CareerBanner from '@/component/Career/CareerBanner';
// import UnlockPotential from '@/component/Career/UnlockPotential';
import WorkCulture from '@/component/Career/WorkCulture';
import TopBrands from '@/component/Career/TopBrands';
import HiringProcess from '@/component/Career/HiringProcess';
import CareerOpportunities from '@/component/Career/CareerOpportunities';

const page = () => {
    return (
        <div>
            <CareerBanner/>
            <TopBrands/>
            <WorkCulture/>
            {/* <UnlockPotential/> */}
            <HiringProcess/>
            <CareerOpportunities/>
        </div>
    );
};

export default page;