// import React from 'react'
// import MarketingDetails from './MarketingDetails'
// import MarketingDiv from './MarketingDiv'
// const Marketing = () => {
//   return (
//     <div>
//         <MarketingDetails/>
//         <MarketingDiv/>
//     </div>
//   )
// }

// export default Marketing
import React from 'react';
import MarketingDetails from './MarketingDetails';
import MarketingDiv from './MarketingDiv';

const Marketing = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <MarketingDetails />
      <MarketingDiv />
    </div>
  );
};

export default Marketing;
