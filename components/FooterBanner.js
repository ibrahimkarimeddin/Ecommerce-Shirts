import React from 'react';
import Link from 'next/link';

import { urlFor } from '../Lib/Client'

function FooterBanner({ heroBanner }) {
  return (
    <div className='h-[60vh] bg-yellow-300  w-full hidden md:flex mt-5 relative  shadow-xl rounded-xl  '>
      <div className="w-[60%]  flex  justify-center h-[60vh] ">
      <img  src={urlFor(heroBanner.image)} alt='' className='h-[40vh] rounded-3xl relative top-10' />
      <span className='absolute bottom-6  left-14'>
          <p className='font-bold '>Description</p>
          <p className='font-semibold break-words w-28 '>{heroBanner.desc.length >30?heroBanner.desc.slice(0,30): heroBanner.desc}</p>
      </span>

    </div>
    <div className="w-[40%] clip2  flex flex-col justify-around items-center ">
      <div>
      <p className='text-center text-[50px] text-black font-bold'>{heroBanner.midText}</p>
      <p className='text-center text-[20px] text-black font-semibold'>{heroBanner.smallText}</p>
      </div>
      <button className="text-yellow-300 w-[15vw]   relative bottom-14 hover:scale-105 transition-all  bg-black font-bold text-center rounded-md h-10">{heroBanner.buttonText}</button>
    </div>
    
</div>
  )
}

export default FooterBanner