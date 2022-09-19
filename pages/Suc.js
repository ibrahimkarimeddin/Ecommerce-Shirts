import React, { useEffect } from 'react'
import { runFireworks } from '../Lib/firework';
import Link  from 'next/link';

function Suc() {
    
    useEffect(() => {
        runFireworks();
      }, []);

  return (
    <div className="success-wrapper  bg-black overflow-x-hidden flex ">
    <div className="success">
      <p className="icon">
      </p>
      <h2>Thank you for your order!</h2>
      <p className="email-msg">Contact us if you have any problem </p>
      <p className="description">
         or If you have any questions, please email
        <a className="email" href="mailto:order@example.com">
          ibrahimkarimeddin@gmail.com
        </a>
      </p>
      <Link href="/">
        <button type="button" width="300px" className="btn">
          Back to  Shopping
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Suc