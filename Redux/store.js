import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './redusers';

export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})