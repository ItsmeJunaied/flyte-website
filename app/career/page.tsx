import React from 'react';
import CareerBanner from '@/component/Career/CareerBanner';
import UnlockPotential from '@/component/Career/UnlockPotential';
import WorkCulture from '@/component/Career/WorkCulture';
import TopBrands from '@/component/Career/TopBrands';

const page = () => {
    return (
        <div>
            <CareerBanner/>
            <TopBrands/>
            <WorkCulture/>
            <UnlockPotential/>
        </div>
    );
};

export default page;