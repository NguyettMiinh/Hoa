import { createSlice,  type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";

export type UserState = {
  id: string | number;
  seenArray: Product[];
};

const initialState: UserState = {
  id: "",
  seenArray:[]
};
const userSlice = createSlice({
  name: "user", 
  initialState,
  reducers: {
    setArray: (state, action :  PayloadAction<Product>) => {
      const newProduct = action.payload;
      const alreadyExits = state.seenArray.some((existingProduct) => existingProduct.id === newProduct.id);
      if (!alreadyExits) {
        state.seenArray.push(action.payload);
      }
    },
    setId: (state, action:  PayloadAction<string | number>) => {
      state.id = action.payload;
    }

  },
});

export const { setArray, setId} = userSlice.actions;
export default userSlice.reducer;