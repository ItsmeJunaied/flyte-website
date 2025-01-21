import React from 'react';
import CareerBanner from '@/component/Career/CareerBanner';
import UnlockPotential from '@/component/Career/UnlockPotential';
import WorkCulture from '@/component/Career/WorkCulture';

const page = () => {
    return (
        <div>
            <CareerBanner/>
            <WorkCulture/>
            <UnlockPotential/>
        </div>
    );
};

export default page;