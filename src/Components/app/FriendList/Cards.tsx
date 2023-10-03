import React from 'react';

const Cards = (props:any) => {
  console.log(props)
  return (


    <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
      <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
          </div>
        </div>
        <div className="px-6 mt-16">
          <h1 className="font-bold dark:text-white text-3xl text-center mb-1">{props?.items?.fullName}</h1>
          <p className="text-gray-800 dark:text-white text-sm text-center">{props?.items?.email}</p>
         <div className='flex justify-center my-2'>
          <button className='bg-red-500 px-5 py-2 rounded-lg'>Add Me</button>
         </div>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Github" role="img">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Twitter" role="img">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Instagram" role="img">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>







  );
};

export default Cards;