import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../Store/Slice/ProductSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
  }
});
