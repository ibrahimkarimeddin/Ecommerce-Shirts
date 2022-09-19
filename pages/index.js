import Head from 'next/head'
import Image from 'next/image'
import {HeroBanner , Footer ,Product, FooterBanner} from '../components/index'


import {client} from "../Lib/Client"



export default function Home({banner , product}) {
  return (
    <>
     <HeroBanner heroBanner={banner.length && banner[0]}/> 
      
      <div className='products-heading'>
        <h2>Best Selling Product </h2>
        <p> Speakers of many variations</p>
      </div>
      <div className='products-container shadow-xl p-10 border- rounded-lg' id="product">
        {product.map(
          (product)=><Product product={product} key={product._id}/>
        )}
      </div>
    <FooterBanner heroBanner={banner.length && banner[0]}/>
    </>
  )
}




export const getServerSideProps= async ()=>{
  const query = '*[_type == "product"]'
  const product = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const banner = await client.fetch(bannerQuery)
  return{
    props:{
      banner , product
    }
  }
}


