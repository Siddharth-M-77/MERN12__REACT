import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../Store/Reducers/ProductSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
  }
});
