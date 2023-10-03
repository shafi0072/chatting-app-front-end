import React from 'react';
import Sidebar from '../shared/Sidebar';

const index = ({children}:any) => {
  return (
    <div className='flex flex-wrap'>
      <div className='bg-gray-900 h-[100vh] fixed w-[5%]'><Sidebar/></div>
      <div className='w-[100%] pl-[6%] bg-gray-800 h-[100vh]'>{children}</div>
    </div>
  );
};

export default index;