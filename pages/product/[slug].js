import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from '../../Lib/Client';
import { addToCart } from '../../Redux/redusers';
import { useDispatch } from 'react-redux';
import ReplyIcon from '@mui/icons-material/Reply';
import Link from 'next/link';
const ProductDetails = ({ product}) => {
  const dispatch=  useDispatch()
  const { image, name, details, price } = product[0];
  const [qunt, setqunt] = useState(1);
 
  return (
    <div>
      <div className='ml-9 text-xl mt-3 cursor-pointer '>
        <Link href="/">
          <ReplyIcon/>
          </Link>
        </div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} className="product-detail-image  w-[170px] h-[270px] md:w-[350px] md:h-[350px]" />
          </div>
          <div className="small-images-container">
          </div>
        </div>

        <div className="product-detail-desc ">
          <h1 className='font-bold text-3xl text-black'>{name}</h1>
          <div className="reviews">
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex">
              <span className="minus flex items-center mr-4  justify-center " onClick={()=>{setqunt(qunt== 1 ? qunt : qunt--)}}><AiOutlineMinus className="ml-2 absolute" /></span>
              <span className="num">{qunt}</span>
              <span className="plus flex items-center" onClick={()=>{setqunt(++qunt)}}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button " className="add-to-cart bg-yellow-300" onClick={()=>{
              dispatch(addToCart({...product[0] , qunt}))
            }} >Add to Cart</button>
            {/* <button type="button" className="buy-now" >Buy Now</button> */}
          </div>
        </div>
      </div>

      {/* <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div> */}
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params}) => {
  const {slug} = params
  const query = `*[_type == "product" && slug.current == '${slug}']`;  
  const product = await client.fetch(query);
  return {
    props: { product}
  }
}

export default ProductDetails