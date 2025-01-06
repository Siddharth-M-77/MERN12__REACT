export { setProducts,deleteProducts } from "../Reducers/ProductSlice";

import { removeProduct } from "../Reducers/ProductSlice";

export const asyncRemoveProduct = (id) => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(removeProduct(id));
  }, 2000);
};
