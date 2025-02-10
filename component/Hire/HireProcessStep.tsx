import React from 'react';
import StepCard from '../Common/StepCard';
import { hireProcessData } from '@/api/Dummy';

const HireProcessStep = () => {
  return (
    <div>
       <StepCard data={hireProcessData} />
    </div>
  );
};

export default HireProcessStep;