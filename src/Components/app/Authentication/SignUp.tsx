import { baseUrl } from '@/src/config/baseUrl';
import React, { useState } from 'react';

const SignUp = ({ handleRegistered }: any) => {


  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  const handleOnChange = (e: any) => {
    let newData: any = { ...signUpData }
    newData[e.target.name] = e.target.value
    setSignUpData(newData)
  }

  console.log({ signUpData })

  const handleOnSubmit = (e:any) => {
    e.preventDefault()
    fetch(`${baseUrl}/auth/signUp`, {
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signUpData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      debugger
    })
    .catch(err => {
      console.log(err)
      debugger
    })
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <p className="mb-4">Please sign up to your account</p>

        <div className="relative mb-4" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            name='email'
            placeholder="email"
            onChange={handleOnChange}
          />
          <label
            htmlFor="exampleFormControlInput1"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Email
          </label>
        </div>
        <div className="relative mb-4" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder="Full Name"
            name='fullName'
            onChange={handleOnChange}
          />
          <label
            htmlFor="exampleFormControlInput1"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Full Name
          </label>
        </div>
        <div className="relative mb-4" data-te-input-wrapper-init>
          <input
            type="password"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput11"
            placeholder="Password"
            name='password'
            onChange={handleOnChange}
          />
          <label
            htmlFor="exampleFormControlInput11"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Password
          </label>
        </div>


        <div className="mb-12 pb-1 pt-1 text-center">
          <button
            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            style={{
              background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
            }}>
            Sign Up
          </button>
        </div>


        <div className="flex items-center justify-between pb-6">
          <p className="mb-0 mr-2">Don't have an account?</p>
          <button
            onClick={() => handleRegistered()}
            type="button"
            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            data-te-ripple-color="light">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;