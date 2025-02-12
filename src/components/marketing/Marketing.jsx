import React from 'react';
import MarketingDetails from './MarketingDetails';
import MarketingDiv from './MarketingDiv';

const Marketing = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 md:mt-14">
      <MarketingDetails />
      <MarketingDiv />
    </div>
  );
};

export default Marketing;
