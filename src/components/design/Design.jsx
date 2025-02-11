// import React from 'react'
// import DesignImage from './DesignImage'
// import DesignPara from './DesignPara'
// const Design = () => {
//   return (
//     <div className='mt-10 md:flex items-center gap-8 '>
//         <DesignImage/>
//         <DesignPara/>
//     </div>
//   )
// }

// export default Design
import React from 'react';
import DesignImage from './DesignImage';
import DesignPara from './DesignPara';

const Design = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center md:justify-evenly gap-2 px-4 md:px-12 lg:px-24">
      <DesignImage />
      <DesignPara />
    </div>
  );
};

export default Design;
