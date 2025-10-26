import React from 'react';
import { useNavigate } from 'react-router';
import notFoundPng from '../assets/404_page_not_found.png'

const PageNotFoundLayout = () => {
    const navigate = useNavigate()
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-gray-200 px-6 lg:px-8">
        <div className="text-center">
          {/* <p className="font-semibold text-primary text-3xl">404</p> */}
          <img src={notFoundPng} alt="404 png" className='w-96 mx-auto' />
          <h1 className=" text-5xl font-semibold tracking-tight text-balance text-neutral sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={()=> navigate(-1)}
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    </>
  )
}


export default PageNotFoundLayout;