import React,{useState} from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { ShowCartComponents } from '../Redux/redusers';
import {motion} from "framer-motion"


const Navbar = () => {

const show = useSelector(state => state.cart.showCart)
const length = useSelector(state => state.cart.CartContainer.length)

const dispatch = useDispatch()
const can =()=>{
  dispatch(ShowCartComponents())
}

if(show){
  return (
    <div className="navbar-container items-center cursor-pointe"
    >
      <div className="logo">
        <Link href="/" className="text-black"><div className='text-black font-bold '>Shirts Ecommerce</div></Link>
      </div>

      <button type="button" className="cart-icon text-black"  >
        <AiOutlineShopping  />
        <span className="cart-item-qty"></span>
      </button>
    
      <span className="">
      <Cart/>
      </span>
    </div>
  )
}
  return (
    <motion.div className="navbar-container items-center cursor-pointer "
    initial={{x:2500}}
    animate={{x:0}}
    transition={{duration:1 , type:"spring"}}>
      <div className="logo">
        <Link href="/" className="text-black"><div className='text-black font-bold '>Shirts Ecommerce</div></Link>
      </div>

      <button  className="cart-icon text-black"   onClick={can} >
        <AiOutlineShopping />
        <span className="cart-item-qty">{length}</span>
      </button>
    
    </motion.div>
  )
}

export default Navbar