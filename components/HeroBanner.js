import Link from 'next/link'
import React from 'react'
import { urlFor } from '../Lib/Client'
import { motion } from 'framer-motion';

function HeroBanner({heroBanner}) {
  const scroll =()=>{
    window.scroll({
      top:500,
      behavior: 'smooth'
    });
  }
  return (

   <>
    <div className='h-[65vh] bg-gray-100  w-full hidden md:flex mt-5 relative  shadow-xl rounded-xl  '
>   
        <div className="w-[40%] clip2  flex flex-col justify-around items-center ">
          <div>
          <p className='text-center text-[50px] text-black font-bold'>{heroBanner.midText}</p>
          <p className='text-center text-[20px] text-black font-semibold'>{heroBanner.smallText}</p>
          </div>
          <button className="bg-yellow-300 w-[20vw]   relative bottom-14 hover:scale-105 transition-all  text-black font-bold text-center rounded-md h-10" onClick={scroll}>{heroBanner.buttonText}</button>
        </div>
        <div className="w-[60%] clip flex  justify-center h-[60vh] ">
          <img  src={urlFor(heroBanner.image)} alt='' className='h-[40vh] rounded-3xl 
          relative md:top-4  lg:top-10' />
          <span className='absolute bottom-10  right-14'>
              <p className='font-bold '>Description</p>
              <p className='font-semibold break-words w-28'>{heroBanner.desc.length >30?heroBanner.desc.slice(0,30): heroBanner.desc}</p>
              <p className="text-xs"> {heroBanner._updatedAt}</p>

          </span>

        </div>
    </div>
   
    <div  className="flex w-full h-[60vh] bg-yellow-300 rounded-lg shadow-md md:hidden">
    <div className="w-[50%] flex flex-col items-center justify-around">
    <div>
          <p className='text-center text-[25px] text-black font-bold'>{heroBanner.midText}</p>
          <p className='text-center text-[15px] text-black font-semibold'>{heroBanner.smallText}</p>
       </div>
    <button className="text-yellow-300 w-[25vw]  bg-black 
        hover:scale-105 transition-all   font-bold relative bottom-8
         text-center rounded-md h-10" onClick={scroll}>{heroBanner.buttonText}</button>

    </div>
    <div className="w-[50%] flex flex-col items-center 
    justify-around ml-4 ">
    <img  src={urlFor(heroBanner.image)} 
    alt='' className='h-[30vh] ' />
      <span className=''>

              <p className='font-bold text-gray-500'>Description</p>
              <p className='font-semibold break-words w-28 text-lg ' >{heroBanner.desc.length >30?heroBanner.desc.slice(0,30): heroBanner.desc}</p>
              <p className="text-xs"> {heroBanner._updatedAt}</p>
          </span>
      

    </div>
   
   
    </div>
   </>
  )
}

export default HeroBanner