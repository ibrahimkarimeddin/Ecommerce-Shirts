import { createSlice } from '@reduxjs/toolkit'
import {toast } from 'react-toastify';

const initialState = {
  // CartContainer:typeof window == "undefined"? [] :
  //  localStorage.getItem("CartContainer") ? 
  //  JSON.parse(localStorage.getItem("CartContainer") ) : [],
  CartContainer:[],
  showCart:false ,
  totale:0 
  
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state , action)=>{
      let find = state.CartContainer.findIndex(ele =>{
        return ele._id == action.payload._id
      })
      if(find ==undefined || find == -1  ){
        state.CartContainer.push(action.payload)
        state.totale +=(action.payload.qunt*action.payload.price) 
        toast.success("Add To Cart")
    }else{
     state.CartContainer[find].qunt += action.payload.qunt
     state.totale +=(action.payload.qunt*action.payload.price)  
     toast.info("Increse Quantity of Product")
    }
  },
  ShowCartComponents: (state )=>{
    state.showCart = !state.showCart
  },
  addqunt : (state , action) => {
    let find = state.CartContainer.findIndex(ele =>{
      return ele._id == action.payload
    })
    if(find >= 0 ){
      state.CartContainer[find].qunt++  
      state.totale +=state.CartContainer[find].price
    }
  },
  removequnt : (state , action) => {
    let find = state.CartContainer.findIndex(ele =>{
      return ele._id == action.payload
    })
    if(find >= 0 ){
      if(state.CartContainer[find].qunt > 1 ){
     state.CartContainer[find].qunt--
      state.totale -=state.CartContainer[find].price


      }
      else{
        state.totale -=state.CartContainer[find].price
        state.CartContainer = state.CartContainer.filter(id => id._id != action.payload)
        toast.error("Remove from Cart")
      }
    }
  },
  removeElement:(state , action)=>{
    let find = state.CartContainer.findIndex(ele =>{
      return ele._id == action.payload
    })
    state.totale -= ( state.CartContainer[find].qunt*state.CartContainer[find].price)
    state.CartContainer = state.CartContainer.filter(id => id._id != action.payload) 
     toast.error("Remove from Cart")

  },
  setcartzero :(state , action)=>{
    state.CartContainer =[]
  }
}
})

// Action creators are generated for each case reducer function
export const { addToCart ,ShowCartComponents ,addqunt , removequnt,removeElement ,setcartzero} = cartSlice.actions

export default cartSlice.reducer