import React from 'react';
import Link from 'next/link';
import { urlFor } from "../Lib/Client"
import {motion} from "framer-motion"
const Product = ({ product: { image, name, slug, price } }) => {
const anime ={
view:{
  opacity:[0,1],
  transition:{
   delay:0.5
  }
}
}
  return (
    <motion.div className='ml-3' 
     variants={anime}
     whileInView="view">
      <Link href={`/product/${slug?.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            
            className="product-image w-[250px] h-[250px]"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default Product