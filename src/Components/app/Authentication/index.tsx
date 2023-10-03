import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const index = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const handleRegistered = () => {
    setIsRegistered(!isRegistered)
  }
  return (
    <section className="gradient-form h-full ">
    <div className=" h-[100vh] p-10">
      <div
        className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div
            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
             
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
               
                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      Welcome to Deshi Chat
                    </h4>
                  </div>
  
                  {!isRegistered && <SignIn handleRegistered={handleRegistered}/>}
                  {isRegistered && <SignUp handleRegistered={handleRegistered}/>}
                </div>
              </div>
  
           
              <div
                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    We are more than just a company
                  </h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default index;