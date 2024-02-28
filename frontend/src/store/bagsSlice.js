import { createSlice } from "@reduxjs/toolkit";

const bagsSlice = createSlice({
  name : 'bags',
  initialState : [],
  reducers : {
    
  }
})

export const bagsActions = bagsSlice.actions;
export default bagsSlice;