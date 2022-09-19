import React, { useRef ,useState} from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { urlFor } from '../Lib/Client';
import { useDispatch, useSelector } from 'react-redux';
import { addqunt, ShowCartComponents , removequnt, removeElement, setcartzero} from '../Redux/redusers';
import { useRouter } from 'next/router';

const Cart = () => {
  const router = useRouter()
  const buynow= ()=>{
    dispatch(ShowCartComponents())
    router.replace("/Suc")
    dispatch(setcartzero())

  }
  const cartRef = useRef();
const dispatch = useDispatch()
const cart = useSelector(state => state.cart.CartContainer)
const totale = useSelector(state => state.cart.totale)

    return(
      <div className="cart-wrapper flex sm:block" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading">
          <AiOutlineLeft className="" onClick={()=>{dispatch(ShowCartComponents())}} />
          <span className="heading ">Your Cart</span>
          <span className="cart-num-items">( items)</span>
        </button>

        {cart.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={60} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
                onClick={()=>{
                  dispatch(ShowCartComponents())
                }}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cart.length >=1&& cart.map((item) => (
            <div className="product flex" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc ">
                <div className="flex top">
                  <h5>{item.name}</h5>
                </div>
                <div className=" bottom ">
                  <div className=" flex items-center justify-center ">
                  <p className="quantity-desc  flex sm:w-10 mt-10 md:-mt-4">
                    <span className="minus mr-3 p-1">
                    <AiOutlineMinus  onClick={()=>{dispatch(removequnt(item._id))}}/>
                    </span>
                    <span className="num" onClick="">{item.qunt}</span>
                    <span className="plus ml-2"><AiOutlinePlus onClick={()=>{dispatch(addqunt(item._id))}}/></span>
                  </p>
                  </div>
               
                </div>
              </div>
              <div className=" w-[20%] flex flex-col items-end justify-between   ">
              <h4 className="mt-1"><span className="text-green-500" >$</span>{item.price * item.qunt}</h4>
              <button
                    type="button"
                    className="remove-item mb-2  "
                    onClick={()=> dispatch(removeElement(item._id))}
                    >
                    <TiDeleteOutline />
                  </button>
              </div>
            </div>
          ))}
        </div>
        {cart.length >= 1 && (
          <div className="cart-bottom">
            <div className="">
              <h3 className="flex w-[250px] font-bold text-xl relative top-4 ">Subtotal: <span className="text-md font-normal">${ totale}</span></h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn"  onClick={buynow}>
                Bay Now 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    )
  
  
}

export default Cart