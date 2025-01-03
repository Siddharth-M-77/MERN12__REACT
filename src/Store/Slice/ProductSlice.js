import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Helloo",
      discription: "heyyyyyyy",
    },
    {
      id: 1,
      name: "Helloo",
      discription: "heyyyyyyy",
    },
    {
      id: 1,
      name: "Helloo",
      discription: "heyyyyyyy",
    },
    {
      id: 1,
      name: "Helloo",
      discription: "heyyyyyyy",
    },
  ],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;