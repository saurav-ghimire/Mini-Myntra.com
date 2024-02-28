import { createSlice } from "@reduxjs/toolkit";

const bagsSlice = createSlice({
  name : 'bags',
  initialState : [],
  reducers : {
    addToBag : (state, action) => {
      state.push(action.payload)
    },
    removeFromBag : (state, action) => {
      console.log(action.payload);
      console.log(state);
      // return state.filter()
    }
  }
})

export const bagsActions = bagsSlice.actions;
export default bagsSlice;