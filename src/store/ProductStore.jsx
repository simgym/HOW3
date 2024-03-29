import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: 1 };

const prodcutSlice = createSlice({
  name: "productDetails",
  initialState: initialState,
  reducers: {
    productId(state, action) {
      state.id = action.payload;
    },
  },
});

export const productAction = prodcutSlice.actions;

const productReducer = prodcutSlice.reducer;

export default productReducer;
