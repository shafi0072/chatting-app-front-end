import { baseUrl } from '@/src/config/baseUrl';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const index = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(`${baseUrl}/friend/users`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  },[])
  return (
    <div className=''>
      <div className='border-b border-gray-700 pb-2'>
        <h1 className='text-white text-3xl font-bold italic text-center mt-3'> Find Your Nearest Friend With us</h1>
        <p className='text-center'>Currently We Have {data?.length} Peoples to Know you</p>
      </div>



      <div className="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
        <div className="container mx-auto ">

          <div role="" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around" >
            {
              data?.map((items, index) => <React.Fragment key={index}><Cards items={items} /></React.Fragment>)
            }
          </div>


        </div>
      </div>




    </div>
  );
};

export default index;